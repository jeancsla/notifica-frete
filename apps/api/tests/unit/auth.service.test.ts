import { describe, expect, it, mock } from "bun:test";

// CRITICAL: Define mocks BEFORE imports
mock.module("../../src/prisma", () => ({
  prisma: {
    scraperLog: {
      create: mock(() => Promise.resolve({})),
    },
  },
}));

// Now import services
import { AuthService } from "../../src/services/auth.service";
import { LoggerService } from "../../src/services/logger.service";

describe("AuthService", () => {
  const logger = new LoggerService();

  it("should authenticate successfully", async () => {
    // Mock fetch for Step 1: Login Page
    const mockFetch = mock((url, init) => {
      if (
        typeof url === "string" &&
        url.endsWith("/Login") &&
        init?.method !== "POST"
      ) {
        return Promise.resolve(
          new Response(null, {
            headers: {
              "set-cookie": "ASP.NET_SessionId=test123; path=/; HttpOnly",
            },
          }),
        );
      }

      if (
        typeof url === "string" &&
        url.endsWith("/Login") &&
        init?.method === "POST"
      ) {
        return Promise.resolve(
          new Response(null, {
            headers: { "set-cookie": "AuthCookie=val456; path=/; HttpOnly" },
          }),
        );
      }

      return Promise.reject(new Error("Unexpected fetch"));
    });

    // Replace global fetch with mock
    global.fetch = mockFetch as any;
    process.env.SCRAPER_USERNAME = "test_user";
    process.env.SCRAPER_PASSWORD = "test_password";

    const authService = new AuthService(logger);
    const cookie = await authService.authenticate();

    expect(cookie).toContain("ASP.NET_SessionId=test123");
    expect(cookie).toContain("AuthCookie=val456");
  });

  it("should reuse a valid cached cookie", async () => {
    let fetchCount = 0;
    const mockFetch = mock((url, init) => {
      fetchCount++;
      if (
        typeof url === "string" &&
        url.endsWith("/Monitoramento/CargasDisponiveis")
      ) {
        return Promise.resolve(new Response(null, { status: 200 }));
      }
      return Promise.resolve(
        new Response(null, {
          headers: { "set-cookie": "InitialCookie=val123" },
        }),
      );
    });

    global.fetch = mockFetch as any;
    const authService = new AuthService(logger);

    // First call: full login
    await authService.authenticate();
    const firstCallCount = fetchCount;

    // Second call: should reuse cookie
    const cookie = await authService.authenticate();

    expect(cookie).toContain("InitialCookie=val123");
    expect(fetchCount).toBe(firstCallCount + 1); // Only 1 more call (HEAD validation)
  });

  it("should retry on failure", async () => {
    let attempts = 0;
    const mockFetch = mock((url, init) => {
      attempts++;
      if (attempts < 2) {
        return Promise.reject(new Error("Network Failure"));
      }
      return Promise.resolve(
        new Response(null, {
          headers: { "set-cookie": "sessionId=retry_success" },
        }),
      );
    });

    global.fetch = mockFetch as any;
    const authService = new AuthService(logger);
    const cookie = await authService.authenticate();

    expect(attempts).toBe(3); // 1 failed Step 1, then 1 successful Step 1, then 1 successful Step 2
    expect(cookie).toContain("sessionId=retry_success");
  });

  it("should throw error if authentication fails after retries", async () => {
    global.fetch = mock(() =>
      Promise.reject(new Error("Persistent Network Failure")),
    ) as any;

    const authService = new AuthService(logger);
    await expect(authService.authenticate()).rejects.toThrow();
  });

  it("should perform full login if HEAD validation returns non-200", async () => {
    let requests: string[] = [];
    const mockFetch = mock((url) => {
      requests.push(url.toString());
      if (url.toString().endsWith("/Monitoramento/CargasDisponiveis")) {
        return Promise.resolve(new Response(null, { status: 401 })); // Expired
      }
      return Promise.resolve(
        new Response(null, {
          headers: { "set-cookie": "NewSession=active" },
        }),
      );
    });

    global.fetch = mockFetch as any;
    const authService = new AuthService(logger);

    // Initial login to set cache
    await authService.authenticate();
    requests = []; // Clear for second run

    // Second call: 401 triggers full login
    const cookie = await authService.authenticate();

    expect(requests).toEqual(
      expect.arrayContaining([
        expect.stringMatching(/\/Monitoramento\/CargasDisponiveis/),
      ]),
    );
    expect(requests).toEqual(
      expect.arrayContaining([expect.stringMatching(/\/Login/)]),
    );
    expect(cookie).toContain("NewSession=active");
  });
});
