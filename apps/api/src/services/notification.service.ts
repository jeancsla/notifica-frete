import { LoggerService } from "./logger.service";

export class NotificationService {
  private webhookUrl: string | undefined;

  constructor(private logger: LoggerService) {
    this.webhookUrl = process.env.NOTIFICATION_WEBHOOK_URL;
  }

  async sendCargaNotification(carga: any, status: "created" | "updated") {
    if (!this.webhookUrl) {
      await this.logger.debug(
        "Notification skipped: NOTIFICATION_WEBHOOK_URL not set",
      );
      return;
    }

    // Validate URL
    try {
      new URL(this.webhookUrl);
    } catch {
      await this.logger.warn("Notification skipped: NOTIFICATION_WEBHOOK_URL is invalid");
      return;
    }

    const payload = {
      event: `carga.${status}`,
      timestamp: new Date().toISOString(),
      data: carga,
    };

    try {
      const response = await fetch(this.webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed with status ${response.status}`);
      }

      await this.logger.info(`Notification sent for carga ${carga.viagem}`, {
        status,
      });
    } catch (error) {
      await this.logger.error(
        `Failed to send notification for carga ${carga.viagem}`,
        { status },
        error as Error,
      );
    }
  }

  async sendSummaryNotification(summary: any) {
    if (!this.webhookUrl) {
      await this.logger.debug("Notification skipped: NOTIFICATION_WEBHOOK_URL not set");
      return;
    }

    // Validate URL
    try {
      new URL(this.webhookUrl);
    } catch {
      await this.logger.warn("Notification skipped: NOTIFICATION_WEBHOOK_URL is invalid");
      return;
    }

    const payload = {
      event: "scrape.complete",
      timestamp: new Date().toISOString(),
      data: summary,
    };

    try {
      await fetch(this.webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      await this.logger.info("Summary notification sent");
    } catch (error) {
      await this.logger.error(
        "Failed to send summary notification",
        undefined,
        error as Error,
      );
    }
  }
}
