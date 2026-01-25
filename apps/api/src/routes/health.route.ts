import { Elysia } from "elysia";
import { DatabaseService } from "../services/database.service";
import { LoggerService } from "../services/logger.service";

export const healthRoute = (db: DatabaseService) =>
  new Elysia().get("/health", async () => {
    const isDbHealthy = await db.isHealthy();
    return {
      status: "ok",
      database: isDbHealthy ? "connected" : "disconnected",
      timestamp: new Date().toISOString(),
    };
  });
