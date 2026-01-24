import { Elysia } from "elysia";
import { ScraperService } from "../services/scraper.service";
import { DatabaseService } from "../services/database.service";
import { NotificationService } from "../services/notification.service";
import { LoggerService } from "../services/logger.service";
import { ScrapeSummary } from "../types";

export const cronRoute = (
  scraper: ScraperService,
  db: DatabaseService,
  notifier: NotificationService,
) =>
  new Elysia().get("/api/cron", async ({ set }) => {
    const startTime = performance.now();
    const executionId = `cron_${Date.now()}`;
    const logger = new LoggerService(executionId);

    try {
      await logger.info("Starting scheduled cron execution");
      const cargas = await scraper.scrape();

      const summary: ScrapeSummary = {
        totalFound: cargas.length,
        created: 0,
        updated: 0,
        errors: 0,
      };

      for (const carga of cargas) {
        const result = await db.processCarga(carga);

        if (result.status === "created") {
          summary.created++;
          await notifier.sendCargaNotification(carga, "created");
        } else if (result.status === "updated") {
          summary.updated++;
          // Notifications for updates can be enabled here if necessary
        } else if (result.status === "error") {
          summary.errors++;
        }
      }

      const duration =
        ((performance.now() - startTime) / 1000).toFixed(1) + "s";

      await notifier.sendSummaryNotification({
        ...summary,
        duration,
        executionId,
      });

      await logger.info("Cron execution completed successfully", {
        summary,
        duration,
      });

      return {
        success: true,
        executionId,
        summary,
        duration,
      };
    } catch (error) {
      await logger.error("Cron execution failed", undefined, error as Error);

      set.status = 500;
      return {
        success: false,
        error: "Cron execution failed",
        details: (error as Error).message,
        executionId,
      };
    }
  });
