import { withRetry } from "../utils/retry";
import { LoggerService } from "./logger.service";

export class AuthService {
  private baseUrl = "https://gestaotegmatransporte.ventunolog.com.br";
  private cachedCookie: string | null = null;

  constructor(private logger: LoggerService) {}

  async validateCookie(cookie: string): Promise<boolean> {
    try {
      this.logger.debug("Validating existing session cookie");
      // Attempt to access a light protected page or the main dashboard
      // We use redirect: 'manual' to see if we get a 302 to login, which means invalid.
      const res = await fetch(
        `${this.baseUrl}/Monitoramento/CargasDisponiveis`,
        {
          method: "HEAD",
          headers: {
            cookie: cookie,
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          },
          redirect: "manual",
        },
      );

      // If status is 200, cookie is valid. If 302/Login, it's invalid.
      if (res.status === 200) {
        this.logger.debug("Session cookie is still valid");
        return true;
      }

      this.logger.debug("Session cookie is invalid or expired", {
        status: res.status,
      });
      return false;
    } catch (error) {
      this.logger.warn("Failed to validate cookie", { error });
      return false;
    }
  }

  async authenticate(): Promise<string> {
    // 1. Try to reuse cached cookie
    if (this.cachedCookie) {
      const isValid = await this.validateCookie(this.cachedCookie);
      if (isValid) {
        return this.cachedCookie;
      }
      this.cachedCookie = null;
    }

    return await withRetry(
      async () => {
        this.logger.debug("Starting full authentication flow");

        // Step 1: Get Initial Cookie
        const initialRes = await fetch(`${this.baseUrl}/Login`, {
          redirect: "manual",
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          },
        });

        const setCookieHeader = initialRes.headers.get("set-cookie");
        if (!setCookieHeader) {
          throw new Error("No set-cookie header found in initial response");
        }

        const initialCookie = setCookieHeader.split(";")[0];
        this.logger.debug("Initial cookie obtained", { initialCookie });

        // Step 2: Login
        const username = process.env.SCRAPER_USERNAME;
        const password = process.env.SCRAPER_PASSWORD;

        if (!username || !password) {
          throw new Error(
            "SCRAPER_USERNAME or SCRAPER_PASSWORD not set in environment",
          );
        }

        const body = new URLSearchParams();
        body.append("Usuario", username);
        body.append("Senha", password);
        body.append("Lembrar", "true");

        // Use only the initial cookie for the login request.
        // Credentials will be sent in the POST body.
        const cookieString = initialCookie;

        const loginRes = await fetch(`${this.baseUrl}/Login`, {
          method: "POST",
          headers: {
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "max-age=0",
            origin: this.baseUrl,
            referer: `${this.baseUrl}/Login`,
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            cookie: cookieString,
            "content-type": "application/x-www-form-urlencoded",
          },
          body: body.toString(),
          redirect: "manual",
        });

        const loginCookies = loginRes.headers.get("set-cookie");

        let finalCookie = cookieString;
        if (loginCookies) {
          // Some systems return multiple cookies; we take the first part of each relevant one
          const newCookies = loginCookies
            .split(",")
            .map((c) => c.trim().split(";")[0])
            .join("; ");
          finalCookie = `${cookieString}; ${newCookies}`;
        }

        this.logger.info("Authentication successful with new session");
        this.cachedCookie = finalCookie;
        return finalCookie;
      },
      3,
      1000,
      (attempt, error) => {
        this.logger.warn(
          `Authentication attempt ${attempt} failed: ${error.message}`,
        );
      },
    );
  }
}
