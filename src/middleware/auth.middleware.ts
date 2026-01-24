import { bearer } from "@elysiajs/bearer";
import { Elysia } from "elysia";

export const authMiddleware = new Elysia()
  .use(bearer())
  .onBeforeHandle(({ bearer, set }) => {
    const isDev = process.env.NODE_ENV === "development";
    const authEnabled = process.env.ENABLE_AUTH !== "false";

    // Skip auth if disabled (safety for dev/testing)
    if (process.env.ENABLE_AUTH === "false") return;

    const cronSecret = process.env.CRON_SECRET;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminToken = adminPassword
      ? Buffer.from(adminPassword).toString("base64")
      : null;

    const isValid =
      (bearer === cronSecret && cronSecret) ||
      (bearer === adminToken && adminToken);

    if (!isValid) {
      set.status = 401;
      return { success: false, error: "Unauthorized" };
    }
  });
