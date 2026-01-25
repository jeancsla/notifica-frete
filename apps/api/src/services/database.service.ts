import { prisma } from "../infra/prisma";
import { Prisma } from "@prisma/client";
import { CargaData } from "../schemas/carga.schema";
import { ProcessResult } from "../types";
import { LoggerService } from "./logger.service";

export class DatabaseService {
  constructor(private logger: LoggerService) {}

  /**
   * Sync carga status based on scraped viagens.
   * Marks all ACTIVE cargas as ARCHIVED, then marks scraped cargas as ACTIVE.
   */
  async syncCargasStatus(scrapedViagems: string[]): Promise<void> {
    try {
      // Mark all currently ACTIVE cargas as ARCHIVED
      await prisma.carga.updateMany({
        where: { status: "ACTIVE" },
        data: { status: "ARCHIVED" },
      });

      // Mark scraped cargas as ACTIVE
      if (scrapedViagems.length > 0) {
        await prisma.carga.updateMany({
          where: { viagem: { in: scrapedViagems } },
          data: { status: "ACTIVE" },
        });
      }

      this.logger.info(
        `Synced status for ${scrapedViagems.length} active cargas`,
      );
    } catch (error) {
      this.logger.error("Error syncing carga status", {}, error as Error);
      throw error;
    }
  }

  async processCarga(cargaData: CargaData): Promise<ProcessResult> {
    try {
      const existingCarga = await prisma.carga.findUnique({
        where: { viagem: cargaData.viagem },
      });

      if (existingCarga) {
        await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
          const updated = await tx.carga.update({
            where: { viagem: cargaData.viagem },
            data: {
              tipoTransporte: cargaData.tipoTransporte,
              origem: cargaData.origem,
              destino: cargaData.destino,
              produto: cargaData.produto,
              equipamento: cargaData.equipamento,
              prevColeta: cargaData.prevColeta,
              qtdeEntregas: cargaData.qtdeEntregas,
              vrFrete: cargaData.vrFrete,
              termino: cargaData.termino,
              status: "ACTIVE",
            },
          });

          await tx.cargaHistorico.create({
            data: {
              cargaId: updated.id,
              viagem: cargaData.viagem,
              tipoTransporte: cargaData.tipoTransporte,
              origem: cargaData.origem,
              destino: cargaData.destino,
              produto: cargaData.produto,
              equipamento: cargaData.equipamento,
              prevColeta: cargaData.prevColeta,
              qtdeEntregas: cargaData.qtdeEntregas,
              vrFrete: cargaData.vrFrete,
              termino: cargaData.termino,
              status: "ACTIVE",
              changeType: "UPDATED",
            },
          });
        });

        return { viagem: cargaData.viagem, status: "updated" };
      } else {
        await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
          const newCarga = await tx.carga.create({
            data: {
              viagem: cargaData.viagem,
              tipoTransporte: cargaData.tipoTransporte,
              origem: cargaData.origem,
              destino: cargaData.destino,
              produto: cargaData.produto,
              equipamento: cargaData.equipamento,
              prevColeta: cargaData.prevColeta,
              qtdeEntregas: cargaData.qtdeEntregas,
              vrFrete: cargaData.vrFrete,
              termino: cargaData.termino,
              status: "ACTIVE",
            },
          });

          await tx.cargaHistorico.create({
            data: {
              cargaId: newCarga.id,
              viagem: cargaData.viagem,
              tipoTransporte: cargaData.tipoTransporte,
              origem: cargaData.origem,
              destino: cargaData.destino,
              produto: cargaData.produto,
              equipamento: cargaData.equipamento,
              prevColeta: cargaData.prevColeta,
              qtdeEntregas: cargaData.qtdeEntregas,
              vrFrete: cargaData.vrFrete,
              termino: cargaData.termino,
              status: "ACTIVE",
              changeType: "CREATED",
            },
          });
        });

        return { viagem: cargaData.viagem, status: "created" };
      }
    } catch (error) {
      this.logger.error(
        `Error processing carga ${cargaData.viagem}`,
        { viagem: cargaData.viagem },
        error as Error,
      );
      return {
        viagem: cargaData.viagem,
        status: "error",
        error: (error as Error).message,
      };
    }
  }

  async isHealthy(): Promise<boolean> {
    try {
      await prisma.$queryRaw`SELECT 1`;
      return true;
    } catch (e) {
      return false;
    }
  }
}
