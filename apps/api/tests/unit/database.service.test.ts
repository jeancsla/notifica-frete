import { describe, expect, it, mock, beforeEach } from "bun:test";
import { createMockPrisma, MOCK_CARGA_DATA } from "../test-utils";

// Define mockPrisma using utility
const mockPrisma = createMockPrisma();

// CRITICAL: mock.module MUST be called BEFORE importing DatabaseService
mock.module("../../src/infra/prisma", () => ({
  prisma: mockPrisma,
}));

// Now import the services
import { DatabaseService } from "../../src/services/database.service";
import { LoggerService } from "../../src/services/logger.service";

describe("DatabaseService", () => {
  const logger = new LoggerService();
  const db = new DatabaseService(logger);

  beforeEach(() => {
    // Reset mocks between tests
    mockPrisma.carga.findUnique.mockReset();
    mockPrisma.carga.create.mockClear();
    mockPrisma.carga.update.mockClear();
    mockPrisma.carga.updateMany.mockClear();
    mockPrisma.cargaHistorico.create.mockClear();
    mockPrisma.$transaction.mockClear();
    mockPrisma.$queryRaw.mockClear();
  });

  describe("processCarga", () => {
    it("should create a new carga and history record", async () => {
      mockPrisma.carga.findUnique.mockResolvedValue(null);

      const result = await db.processCarga(MOCK_CARGA_DATA);

      expect(result.status).toBe("created");
      expect(mockPrisma.carga.create).toHaveBeenCalled();
      expect(mockPrisma.cargaHistorico.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ changeType: "CREATED" }),
        }),
      );
    });

    it("should update an existing carga and create a history record", async () => {
      const existingId = "existing_uuid";
      mockPrisma.carga.findUnique.mockResolvedValue({
        id: existingId,
        ...MOCK_CARGA_DATA,
      });
      mockPrisma.carga.update.mockResolvedValue({
        id: existingId,
        ...MOCK_CARGA_DATA,
      });

      const result = await db.processCarga({
        ...MOCK_CARGA_DATA,
        tipoTransporte: "Updated",
      });

      expect(result.status).toBe("updated");
      expect(mockPrisma.carga.update).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { viagem: MOCK_CARGA_DATA.viagem },
          data: expect.objectContaining({
            tipoTransporte: "Updated",
            status: "ACTIVE",
          }),
        }),
      );
      expect(mockPrisma.cargaHistorico.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            cargaId: existingId,
            changeType: "UPDATED",
          }),
        }),
      );
    });

    it("should return error status on database failure", async () => {
      mockPrisma.carga.findUnique.mockImplementation(() => {
        throw new Error("DB Connection Failed");
      });

      const result = await db.processCarga(MOCK_CARGA_DATA);

      expect(result.status).toBe("error");
      expect(result.error).toBe("DB Connection Failed");
    });
  });

  describe("syncCargasStatus", () => {
    it("should mark all active as archived and then mark scraped as active", async () => {
      const scrapedViagens = ["V1", "V2"];

      await db.syncCargasStatus(scrapedViagens);

      expect(mockPrisma.carga.updateMany).toHaveBeenCalledTimes(2);

      // First call archives
      expect(mockPrisma.carga.updateMany).toHaveBeenNthCalledWith(1, {
        where: { status: "ACTIVE" },
        data: { status: "ARCHIVED" },
      });

      // Second call activates scraped
      expect(mockPrisma.carga.updateMany).toHaveBeenNthCalledWith(2, {
        where: { viagem: { in: scrapedViagens } },
        data: { status: "ACTIVE" },
      });
    });

    it("should only archive if scraped list is empty", async () => {
      await db.syncCargasStatus([]);

      expect(mockPrisma.carga.updateMany).toHaveBeenCalledTimes(1);
      expect(mockPrisma.carga.updateMany).toHaveBeenCalledWith({
        where: { status: "ACTIVE" },
        data: { status: "ARCHIVED" },
      });
    });
  });

  describe("isHealthy", () => {
    it("should return true if queryRaw succeeds", async () => {
      mockPrisma.$queryRaw.mockReturnValue(Promise.resolve([{ "1": 1 }]));
      const healthy = await db.isHealthy();
      expect(healthy).toBe(true);
    });

    it("should return false if queryRaw fails", async () => {
      mockPrisma.$queryRaw.mockImplementation(() => {
        throw new Error("fail");
      });
      const healthy = await db.isHealthy();
      expect(healthy).toBe(false);
    });
  });
});
