import { mock } from "bun:test";

export const createMockPrisma = () => {
  const mockPrisma = {
    carga: {
      findUnique: mock(() => null),
      findMany: mock(() => Promise.resolve([])),
      create: mock((data: any) =>
        Promise.resolve({ id: "mock_id", ...data.data }),
      ),
      update: mock((data: any) =>
        Promise.resolve({ id: "mock_id", ...data.data }),
      ),
      updateMany: mock(() => Promise.resolve({ count: 1 })),
    },
    cargaHistorico: {
      create: mock((data: any) =>
        Promise.resolve({ id: "mock_hist_id", ...data.data }),
      ),
    },
    scraperLog: {
      create: mock(() => Promise.resolve({ id: "mock_log_id" })),
      findMany: mock(() => Promise.resolve([])),
    },
    $transaction: mock(async (cb: any) => await cb(mockPrisma)),
    $queryRaw: mock(() => Promise.resolve([{ "1": 1 }])),
  };
  return mockPrisma;
};

export const MOCK_CARGA_DATA = {
  viagem: "TEST123",
  tipoTransporte: "NORMAL",
  origem: "SAO PAULO - SP",
  destino: "RIO DE JANEIRO - RJ",
  produto: "ELETRONICOS",
  equipamento: "TRUCK",
  prevColeta: "31/01/2026",
  qtdeEntregas: "1",
  vrFrete: "1000,00",
  termino: "31/01/2026 18:00",
};
