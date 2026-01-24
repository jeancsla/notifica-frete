import { describe, expect, it, mock } from "bun:test";
import { Elysia } from "elysia";
import { dataRoute } from "../../src/routes/data.route";

// Mock Prisma for dataRoute
mock.module("../../src/prisma", () => ({
  prisma: {
    carga: {
      findMany: mock(() => Promise.resolve([{ id: "1", viagem: "INTEG001" }])),
    },
    scraperLog: {
      findMany: mock(() =>
        Promise.resolve([{ id: "L1", message: "Log Test" }]),
      ),
    },
  },
}));

describe("API Integration", () => {
  const app = new Elysia().use(dataRoute);

  it("should return cargas list", async () => {
    const response = await app.handle(
      new Request("http://localhost/api/cargas"),
    );
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(Array.isArray(data)).toBe(true);
    expect(data[0].viagem).toBe("INTEG001");
  });

  it("should return logs list", async () => {
    const response = await app.handle(new Request("http://localhost/api/logs"));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data[0].message).toBe("Log Test");
  });
});
