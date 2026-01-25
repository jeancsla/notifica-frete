import { prisma } from "../infra/prisma";
import { LoggerService } from "./logger.service";

export class AnalyticsService {
  constructor(private logger: LoggerService) {}

  /**
   * Track a page view
   */
  async trackPageView(
    page: string,
    sessionId?: string,
    userAgent?: string,
  ): Promise<void> {
    try {
      await prisma.pageView.create({
        data: {
          page,
          sessionId,
          userAgent,
        },
      });

      this.logger.debug(`Page view tracked: ${page}`, { page, sessionId });
    } catch (error) {
      this.logger.error("Error tracking page view", { page }, error as Error);
      // Don't throw - analytics failures shouldn't break the app
    }
  }

  /**
   * Get total page views for today
   */
  async getViewsToday(): Promise<number> {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const count = await prisma.pageView.count({
        where: {
          timestamp: {
            gte: today,
          },
        },
      });

      return count;
    } catch (error) {
      this.logger.error("Error getting views today", {}, error as Error);
      return 0;
    }
  }

  /**
   * Get page views for a specific page today
   */
  async getPageViewsToday(page: string): Promise<number> {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const count = await prisma.pageView.count({
        where: {
          page,
          timestamp: {
            gte: today,
          },
        },
      });

      return count;
    } catch (error) {
      this.logger.error(
        "Error getting page views today",
        { page },
        error as Error,
      );
      return 0;
    }
  }

  /**
   * Get analytics stats for the dashboard
   */
  async getDashboardStats(): Promise<{
    viewsToday: number;
    activeCargas: number;
    archivedCargas: number;
  }> {
    try {
      const [viewsToday, activeCargas, archivedCargas] = await Promise.all([
        this.getViewsToday(),
        prisma.carga.count({ where: { status: "ACTIVE" } }),
        prisma.carga.count({ where: { status: "ARCHIVED" } }),
      ]);

      return {
        viewsToday,
        activeCargas,
        archivedCargas,
      };
    } catch (error) {
      this.logger.error("Error getting dashboard stats", {}, error as Error);
      return {
        viewsToday: 0,
        activeCargas: 0,
        archivedCargas: 0,
      };
    }
  }
}
