import { Elysia } from "elysia";
import { prisma } from "../prisma";

export const dataRoute = new Elysia()
  .get("/api/cargas", async () => {
    return await prisma.carga.findMany({
      orderBy: { createdAt: "desc" },
      take: 50, // Limit for performance
    });
  })
  .get("/api/logs", async () => {
    return await prisma.scraperLog.findMany({
      orderBy: { timestamp: "desc" },
      take: 50,
    });
  });
