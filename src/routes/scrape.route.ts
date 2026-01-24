import { Elysia } from "elysia";
import { ScraperService } from "../services/scraper.service";
import { DatabaseService } from "../services/database.service";
import { LoggerService } from "../services/logger.service";
import { ScrapeResponse, ScrapeSummary } from "../types";

export const scrapeRoute = (scraper: ScraperService, db: DatabaseService) =>
  new Elysia().post("/api/scrape", async () => {
    const startTime = performance.now();
    const executionId = `exec_${Math.random().toString(36).substring(2, 9)}`;
    const logger = new LoggerService(executionId);

    try {
      const cargas = await scraper.scrape();
      const results = [];
      const summary: ScrapeSummary = {
        totalFound: cargas.length,
        created: 0,
        updated: 0,
        errors: 0,
      };

      for (const carga of cargas) {
        const result = await db.processCarga(carga);
        if (result.status === "created") summary.created++;
        else if (result.status === "updated") summary.updated++;
        else if (result.status === "error") summary.errors++;

        results.push({
          viagem: carga.viagem,
          tipoTransporte: carga.tipoTransporte,
          status: result.status,
        });
      }

      const duration =
        ((performance.now() - startTime) / 1000).toFixed(1) + "s";

      const response: ScrapeResponse = {
        success: true,
        executionId,
        summary,
        cargas: results,
        duration,
      };

      return response;
    } catch (error) {
      logger.error("Scraping execution failed", undefined, error as Error);

      const response: ScrapeResponse = {
        success: false,
        error: "Scraping failed",
        details: (error as Error).message,
        executionId,
      };

      return response;
    }
  });
