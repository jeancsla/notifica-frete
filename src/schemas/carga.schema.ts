import { z } from "zod";

export const CargaSchema = z.object({
  viagem: z.string().min(1),
  tipoTransporte: z.string(),
  origem: z.string(),
  destino: z.string(),
  produto: z.string(),
  equipamento: z.string(),
  prevColeta: z.string(),
  qtdeEntregas: z.string(),
  vrFrete: z.string().optional().default(""),
  termino: z.string(),
});

export const ScraperResponseSchema = z.array(CargaSchema);

export type CargaData = z.infer<typeof CargaSchema>;
