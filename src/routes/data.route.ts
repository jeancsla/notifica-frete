import { Elysia } from "elysia";
import { prisma } from "../prisma";

export const dataRoute = new Elysia()
  .get("/api/cargas", async ({ query }) => {
    const status = (query as any).status || "ACTIVE";
    return await prisma.carga.findMany({
      where: { status },
      orderBy: { createdAt: "desc" },
      take: 50,
    });
  })
  .get("/api/cargas/active", async () => {
    return await prisma.carga.findMany({
      where: { status: "ACTIVE" },
      orderBy: { createdAt: "desc" },
      take: 50,
    });
  })
  .get("/api/cargas/archived", async () => {
    return await prisma.carga.findMany({
      where: { status: "ARCHIVED" },
      orderBy: { updatedAt: "desc" },
      take: 100,
    });
  })
  .get("/api/logs", async () => {
    return await prisma.scraperLog.findMany({
      orderBy: { timestamp: "desc" },
      take: 50,
    });
  });
