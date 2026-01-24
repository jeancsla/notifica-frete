import { prisma } from "../prisma";
import { CargaData } from "../schemas/carga.schema";
import { ProcessResult } from "../types";
import { LoggerService } from "./logger.service";

export class DatabaseService {
  constructor(private logger: LoggerService) {}

  async processCarga(cargaData: CargaData): Promise<ProcessResult> {
    try {
      const existingCarga = await prisma.carga.findUnique({
        where: { viagem: cargaData.viagem },
      });

      if (existingCarga) {
        await prisma.$transaction(async (tx) => {
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
              changeType: "UPDATED",
            },
          });
        });

        return { viagem: cargaData.viagem, status: "updated" };
      } else {
        await prisma.$transaction(async (tx) => {
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
