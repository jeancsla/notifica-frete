import { Elysia, t } from "elysia";
import { AnalyticsService } from "../services/analytics.service";

export const analyticsRoute = (analyticsService: AnalyticsService) =>
  new Elysia({ prefix: "/api/analytics" })
    // Track a page view
    .post(
      "/track",
      async ({ body }) => {
        const { page, sessionId, userAgent } = body;
        await analyticsService.trackPageView(page, sessionId, userAgent);
        return { success: true };
      },
      {
        body: t.Object({
          page: t.String(),
          sessionId: t.Optional(t.String()),
          userAgent: t.Optional(t.String()),
        }),
      },
    )
    // Get views today
    .get("/views-today", async () => {
      const count = await analyticsService.getViewsToday();
      return { viewsToday: count };
    })
    // Get dashboard stats
    .get("/stats", async () => {
      const stats = await analyticsService.getDashboardStats();
      return stats;
    });
