import * as cron from "node-cron";
import { LoggerService } from "./logger.service";
import { ScraperService } from "./scraper.service";
import { DatabaseService } from "./database.service";
import { NotificationService } from "./notification.service";

export class SchedulerService {
  private task: cron.ScheduledTask | null = null;

  constructor(
    private scraperService: ScraperService,
    private dbService: DatabaseService,
    private notificationService: NotificationService,
    private logger: LoggerService,
  ) {}

  /**
   * Start the scheduler to run scraper every 15 minutes
   */
  start(): void {
    // Cron expression: */15 * * * * means "every 15 minutes"
    this.task = cron.schedule(
      "*/15 * * * *",
      async () => {
        const executionId = crypto.randomUUID() as string;
        this.logger.info("Scheduled scraping started", { executionId });

        try {
          // Run the scraper
          const results = await this.scraperService.scrape(executionId);

          // Process each carga
          for (const cargaData of results) {
            await this.dbService.processCarga(cargaData);
          }

          // Sync status (mark old cargas as archived)
          const scrapedViagems = results.map((c) => c.viagem);
          await this.dbService.syncCargasStatus(scrapedViagems);

          // Send summary notification
          await this.notificationService.sendSummaryNotification({
            total: results.length,
            executionId,
            timestamp: new Date().toISOString(),
          });

          this.logger.info("Scheduled scraping completed successfully", {
            executionId,
            count: results.length,
          });
        } catch (error) {
          this.logger.error(
            "Scheduled scraping failed",
            { executionId },
            error as Error,
          );
        }
      },
      {
        timezone: "America/Sao_Paulo", // Adjust to your timezone
      },
    );

    this.task.start();
    this.logger.info("Scheduler started - will run every 15 minutes");
  }

  /**
   * Stop the scheduler
   */
  stop(): void {
    if (this.task) {
      this.task.stop();
      this.logger.info("Scheduler stopped");
    }
  }

  /**
   * Get scheduler status
   */
  getStatus(): { running: boolean } {
    return {
      running: this.task !== null,
    };
  }
}
