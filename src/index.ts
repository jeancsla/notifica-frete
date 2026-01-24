import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";
import { authMiddleware } from "./middleware/auth.middleware";
import { authRoute } from "./routes/auth.route";
import { cronRoute } from "./routes/cron.route";
import { healthRoute } from "./routes/health.route";
import { scrapeRoute } from "./routes/scrape.route";
import { dataRoute } from "./routes/data.route";
import { AuthService } from "./services/auth.service";
import { DatabaseService } from "./services/database.service";
import { LoggerService } from "./services/logger.service";
import { ScraperService } from "./services/scraper.service";
import { NotificationService } from "./services/notification.service";

const logger = new LoggerService();
const dbService = new DatabaseService(logger);
const authService = new AuthService(logger);
const scraperService = new ScraperService(authService, logger);
const notificationService = new NotificationService(logger);

const app = new Elysia()
  .use(cors())
  .use(
    staticPlugin({
      assets: "web/dist",
      prefix: "",
    }),
  )
  .use(authRoute(logger))
  .get("/", () => Bun.file("web/dist/index.html"))
  .use(healthRoute(dbService))
  .use(authMiddleware)
  .use(dataRoute)
  .use(scrapeRoute(scraperService, dbService))
  .use(cronRoute(scraperService, dbService, notificationService))
  .listen(process.env.PORT || 3000);

console.log(
  `🦊 Scraper API is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;
