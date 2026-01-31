import { describe, expect, it, mock } from "bun:test";
import { Elysia } from "elysia";
import { dataRoute } from "../../src/routes/data.route";
import { createMockPrisma } from "../test-utils";

const mockPrisma = createMockPrisma();

// Mock Prisma for dataRoute
mock.module("../../src/infra/prisma", () => ({
  prisma: mockPrisma,
}));

describe("API Integration", () => {
  const app = new Elysia().use(dataRoute);

  it("should return cargas list with default ACTIVE status", async () => {
    mockPrisma.carga.findMany.mockResolvedValue([
      { id: "1", viagem: "INTEG001", status: "ACTIVE" },
    ]);

    const response = await app.handle(
      new Request("http://localhost/api/cargas"),
    );
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data[0].viagem).toBe("INTEG001");
    expect(mockPrisma.carga.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { status: "ACTIVE" },
      }),
    );
  });

  it("should return cargas list with ARCHIVED status from query param", async () => {
    mockPrisma.carga.findMany.mockResolvedValue([
      { id: "2", viagem: "INTEG002", status: "ARCHIVED" },
    ]);

    const response = await app.handle(
      new Request("http://localhost/api/cargas?status=ARCHIVED"),
    );
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data[0].viagem).toBe("INTEG002");
    expect(mockPrisma.carga.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { status: "ARCHIVED" },
      }),
    );
  });

  it("should return active cargas list from explicit route", async () => {
    const response = await app.handle(
      new Request("http://localhost/api/cargas/active"),
    );
    expect(response.status).toBe(200);
    expect(mockPrisma.carga.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { status: "ACTIVE" },
      }),
    );
  });

  it("should return archived cargas list from explicit route", async () => {
    const response = await app.handle(
      new Request("http://localhost/api/cargas/archived"),
    );
    expect(response.status).toBe(200);
    expect(mockPrisma.carga.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { status: "ARCHIVED" },
      }),
    );
  });

  it("should return logs list", async () => {
    mockPrisma.scraperLog.findMany.mockResolvedValue([
      { id: "L1", message: "Log Test" },
    ]);

    const response = await app.handle(new Request("http://localhost/api/logs"));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data[0].message).toBe("Log Test");
  });
});
