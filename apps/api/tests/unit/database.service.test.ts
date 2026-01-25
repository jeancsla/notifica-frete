import { describe, expect, it, mock, beforeEach } from "bun:test";

// Define mockPrisma first to avoid reference errors
const mockPrisma = {
  carga: {
    findUnique: mock(() => null),
    create: mock((data: any) => ({ id: "new_id", ...data })),
    update: mock((data: any) => ({ id: "existing_id", ...data })),
  },
  cargaHistorico: {
    create: mock(() => ({})),
  },
  scraperLog: {
    create: mock(() => Promise.resolve({})),
  },
  $transaction: mock(async (cb: any) => await cb(mockPrisma)),
};

// CRITICAL: mock.module MUST be called BEFORE importing DatabaseService
// which imports the real prisma instance from ../../src/infra/prisma
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
    mockPrisma.cargaHistorico.create.mockClear();
  });

  it("should create a new carga and history record", async () => {
    const mockData = {
      viagem: "TEST001",
      tipoTransporte: "A",
      origem: "B",
      destino: "C",
      produto: "D",
      equipamento: "E",
      prevColeta: "F",
      qtdeEntregas: "G",
      vrFrete: "H",
      termino: "I",
    };

    mockPrisma.carga.findUnique.mockReturnValue(null);

    const result = await db.processCarga(mockData);

    expect(result.status).toBe("created");
    expect(mockPrisma.carga.create).toHaveBeenCalled();
    expect(mockPrisma.cargaHistorico.create).toHaveBeenCalled();
  });

  it("should update an existing carga and create a history record", async () => {
    const mockData = {
      viagem: "EXISTING001",
      tipoTransporte: "Updated Type",
      origem: "A",
      destino: "B",
      produto: "C",
      equipamento: "D",
      prevColeta: "E",
      qtdeEntregas: "F",
      vrFrete: "G",
      termino: "H",
    };

    const existingId = "existing_uuid";
    mockPrisma.carga.findUnique.mockReturnValue({
      id: existingId,
      ...mockData,
    });

    const result = await db.processCarga(mockData);

    expect(result.status).toBe("updated");
    expect(mockPrisma.carga.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { viagem: mockData.viagem },
        data: expect.objectContaining({ tipoTransporte: "Updated Type" }),
      }),
    );
    expect(mockPrisma.cargaHistorico.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          cargaId: expect.any(String),
          changeType: "UPDATED",
        }),
      }),
    );
  });

  it("should return error status on database failure", async () => {
    const mockData = { viagem: "FAIL001" } as any;
    mockPrisma.carga.findUnique.mockImplementation(() => {
      throw new Error("DB Connection Failed");
    });

    const result = await db.processCarga(mockData);

    expect(result.status).toBe("error");
    expect(result.error).toBe("DB Connection Failed");
  });
});
