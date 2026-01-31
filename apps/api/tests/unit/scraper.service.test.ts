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
import { ScraperService } from "../../src/services/scraper.service";
import { AuthService } from "../../src/services/auth.service";
import { LoggerService } from "../../src/services/logger.service";

describe("ScraperService", () => {
  const logger = new LoggerService();

  // Create a mock AuthService instance
  const mockAuthService = {
    authenticate: mock(() => Promise.resolve("test_cookie")),
  } as any;

  it("should parse cargo table correctly", async () => {
    // Mock HTML Response
    const mockHtml = `
      <table id="tblGridViagem">
        <tbody>
          <tr>
            <td>117766</td>
            <td>Filial Mills/Cliente</td>
            <td>CONTAGEM - MG</td>
            <td>MANAUS - AM</td>
            <td>EQUIPAMENTOS</td>
            <td>PRANCHA 04 EIXOS</td>
            <td>19/01/2026</td>
            <td>1</td>
            <td>5000,00</td>
            <td>25/01/2026 18:00</td>
          </tr>
        </tbody>
      </table>
    `;

    global.fetch = mock(() => Promise.resolve(new Response(mockHtml))) as any;

    const scraper = new ScraperService(mockAuthService, logger);
    const cargas = await scraper.scrape();

    expect(cargas.length).toBe(1);
    expect(cargas[0].viagem).toBe("117766");
    expect(cargas[0].origem).toBe("CONTAGEM - MG");
    expect(cargas[0].vrFrete).toBe("5000,00");
  });

  it("should parse JSON response format correctly", async () => {
    // Mock JSON Response as provided by user
    const mockJson = JSON.stringify([
      {
        cargasExtraidas: [
          {
            viagem: "889900",
            tipoTransporte: "JSON Test",
            origem: "SAO PAULO - SP",
            destino: "RIO DE JANEIRO - RJ",
            produto: "TEST PROD",
            equipamento: "TRUCK",
            prevColeta: "20/01/2026",
            qtdeEntregas: "2",
            vrFrete: "1500,00",
            termino: "21/01/2026 10:00",
          },
        ],
      },
    ]);

    global.fetch = mock(() => Promise.resolve(new Response(mockJson))) as any;

    const scraper = new ScraperService(mockAuthService, logger);
    const cargas = await scraper.scrape();

    expect(cargas.length).toBe(1);
    expect(cargas[0].viagem).toBe("889900");
    expect(cargas[0].origem).toBe("SAO PAULO - SP");
    expect(cargas[0].vrFrete).toBe("1500,00");
  });

  it("should return empty array if no cargas are found in HTML", async () => {
    const mockEmptyHtml =
      "<html><body><table id='tblGridViagem'><tbody></tbody></table></body></html>";
    global.fetch = mock(() =>
      Promise.resolve(new Response(mockEmptyHtml)),
    ) as any;

    const scraper = new ScraperService(mockAuthService, logger);
    const cargas = await scraper.scrape();

    expect(cargas.length).toBe(0);
  });

  it("should skip malformed rows in HTML", async () => {
    const mockMixedHtml = `
      <table id="tblGridViagem">
        <tbody>
          <tr><td>Incomplete</td><td>Row</td></tr>
          <tr>
            <td>117766</td>
            <td>Valid</td>
            <td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td>
          </tr>
        </tbody>
      </table>
    `;
    global.fetch = mock(() =>
      Promise.resolve(new Response(mockMixedHtml)),
    ) as any;

    const scraper = new ScraperService(mockAuthService, logger);
    const cargas = await scraper.scrape();

    expect(cargas.length).toBe(1);
  });

  it("should throw error if fetch fails", async () => {
    global.fetch = mock(() =>
      Promise.reject(new Error("Network Error")),
    ) as any;

    const scraper = new ScraperService(mockAuthService, logger);
    await expect(scraper.scrape()).rejects.toThrow("Network Error");
  });
});
