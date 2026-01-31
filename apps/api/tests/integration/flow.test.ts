import { describe, expect, it, mock } from "bun:test";
import { ScraperService } from "../../src/services/scraper.service";
import { DatabaseService } from "../../src/services/database.service";
import { LoggerService } from "../../src/services/logger.service";

// This test checks the integration between Scraper -> Parser -> Database
// We mock only the external network (fetch)

import { createMockPrisma } from "../test-utils";

const mockPrisma = createMockPrisma();

mock.module("../../src/infra/prisma", () => ({
  prisma: mockPrisma,
}));

describe("Full Scrape Flow Integration", () => {
  const logger = new LoggerService();
  const db = new DatabaseService(logger);
  const mockAuthService = {
    authenticate: mock(() => Promise.resolve("flow_cookie")),
  } as any;

  it("should process a full cycle: fetch HTML -> validate -> save to DB", async () => {
    const mockHtml = `
      <table id="tblGridViagem">
        <tbody>
          <tr>
            <td>FLOW123</td>
            <td>Type</td>
            <td>Origin</td>
            <td>Dest</td>
            <td>Prod</td>
            <td>Equip</td>
            <td>Date</td>
            <td>1</td>
            <td>100,00</td>
            <td>End</td>
          </tr>
        </tbody>
      </table>
    `;

    global.fetch = mock(() => Promise.resolve(new Response(mockHtml))) as any;

    const scraper = new ScraperService(mockAuthService, logger);

    // 1. Scrape
    const cargas = await scraper.scrape();
    expect(cargas.length).toBe(1);
    expect(cargas[0].viagem).toBe("FLOW123");

    // 2. Database Process
    const result = await db.processCarga(cargas[0]);
    expect(result.status).toBe("created");
    expect(mockPrisma.carga.create).toHaveBeenCalled();
  });
});
