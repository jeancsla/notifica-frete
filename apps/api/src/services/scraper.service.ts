import * as cheerio from "cheerio";
import { CargaData, CargaSchema } from "../schemas/carga.schema";
import { AuthService } from "./auth.service";
import { LoggerService } from "./logger.service";

export class ScraperService {
  private baseUrl = "https://gestaotegmatransporte.ventunolog.com.br";

  constructor(
    private authService: AuthService,
    private logger: LoggerService,
  ) {}

  async scrape(): Promise<CargaData[]> {
    this.logger.info("Starting scrape execution");

    const cookie = await this.authService.authenticate();

    const response = await fetch(
      `${this.baseUrl}/Monitoramento/CargasDisponiveis?tpoeqp=0`,
      {
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
          "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
          "cache-control": "max-age=0",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          cookie: cookie,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch cargo page: ${response.statusText}`);
    }

    const text = await response.text();
    const cargas: CargaData[] = [];

    // Check if the response is JSON (new format)
    try {
      const data = JSON.parse(text);

      // If it's the structure provided by the user: [{ cargasExtraidas: [...] }]
      if (Array.isArray(data)) {
        for (const item of data) {
          if (item.cargasExtraidas && Array.isArray(item.cargasExtraidas)) {
            for (const rawCarga of item.cargasExtraidas) {
              try {
                const validated = CargaSchema.parse(rawCarga);
                cargas.push(validated);
              } catch (err) {
                this.logger.warn("Failed to validate JSON cargo row", {
                  rawCarga,
                  error: err,
                });
              }
            }
          }
        }

        if (cargas.length > 0) {
          this.logger.info(
            `Extracted ${cargas.length} cargas from JSON format`,
          );
          return cargas;
        }
      }
    } catch (e) {
      // Not JSON, continue to HTML parsing
      this.logger.debug("Response is not JSON, falling back to HTML parsing");
    }

    // Fallback to existing HTML parsing
    const $ = cheerio.load(text);
    $("#tblGridViagem tbody tr").each((i, el) => {
      const cols = $(el).find("td");
      if (cols.length < 10) return;

      const rawData = {
        viagem: $(cols[0]).text().trim(),
        tipoTransporte: $(cols[1]).text().trim(),
        origem: $(cols[2]).text().trim(),
        destino: $(cols[3]).text().trim(),
        produto: $(cols[4]).text().trim(),
        equipamento: $(cols[5]).text().trim(),
        prevColeta: $(cols[6]).text().trim(),
        qtdeEntregas: $(cols[7]).text().trim(),
        vrFrete: $(cols[8]).text().trim(),
        termino: $(cols[9]).text().trim(),
      };

      try {
        const validated = CargaSchema.parse(rawData);
        cargas.push(validated);
      } catch (err) {
        this.logger.warn(`Failed to validate cargo row ${i}`, {
          rawData,
          error: err,
        });
      }
    });

    this.logger.info(
      `Extraction complete. Found ${cargas.length} valid cargas.`,
    );
    return cargas;
  }
}
