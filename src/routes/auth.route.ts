import { Elysia, t } from "elysia";
import { LoggerService } from "../services/logger.service";

export const authRoute = (logger: LoggerService) =>
  new Elysia({ prefix: "/api/auth" }).post(
    "/login",
    async ({ body, set }) => {
      const adminPassword = process.env.ADMIN_PASSWORD;

      if (!adminPassword) {
        logger.error("ADMIN_PASSWORD not set in environment");
        set.status = 500;
        return { error: "Server configuration error" };
      }

      if (body.password === adminPassword) {
        // In a real app we'd use JWT, but for this "simple but work" request,
        // we'll return a token that we can check in middleware.
        // Since it's Vercel and we want it simple, we'll just use the pass as token for now
        // or a simple hash of it.
        const token = Buffer.from(adminPassword).toString("base64");
        return { success: true, token };
      }

      set.status = 401;
      return { error: "Senha inválida" };
    },
    {
      body: t.Object({
        password: t.String(),
      }),
    },
  );
