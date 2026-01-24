-- CreateTable
CREATE TABLE "Carga" (
    "id" TEXT NOT NULL,
    "viagem" TEXT NOT NULL,
    "tipoTransporte" TEXT NOT NULL,
    "origem" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "produto" TEXT NOT NULL,
    "equipamento" TEXT NOT NULL,
    "prevColeta" TEXT NOT NULL,
    "qtdeEntregas" TEXT NOT NULL,
    "vrFrete" TEXT NOT NULL,
    "termino" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Carga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CargaHistorico" (
    "id" TEXT NOT NULL,
    "cargaId" TEXT NOT NULL,
    "viagem" TEXT NOT NULL,
    "tipoTransporte" TEXT NOT NULL,
    "origem" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "produto" TEXT NOT NULL,
    "equipamento" TEXT NOT NULL,
    "prevColeta" TEXT NOT NULL,
    "qtdeEntregas" TEXT NOT NULL,
    "vrFrete" TEXT NOT NULL,
    "termino" TEXT NOT NULL,
    "changeType" TEXT NOT NULL,
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CargaHistorico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScraperLog" (
    "id" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "context" TEXT,
    "error" TEXT,
    "executionId" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScraperLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Carga_viagem_key" ON "Carga"("viagem");

-- CreateIndex
CREATE INDEX "Carga_viagem_idx" ON "Carga"("viagem");

-- CreateIndex
CREATE INDEX "Carga_createdAt_idx" ON "Carga"("createdAt");

-- CreateIndex
CREATE INDEX "CargaHistorico_cargaId_idx" ON "CargaHistorico"("cargaId");

-- CreateIndex
CREATE INDEX "CargaHistorico_viagem_idx" ON "CargaHistorico"("viagem");

-- CreateIndex
CREATE INDEX "CargaHistorico_changedAt_idx" ON "CargaHistorico"("changedAt");

-- CreateIndex
CREATE INDEX "ScraperLog_level_idx" ON "ScraperLog"("level");

-- CreateIndex
CREATE INDEX "ScraperLog_executionId_idx" ON "ScraperLog"("executionId");

-- CreateIndex
CREATE INDEX "ScraperLog_timestamp_idx" ON "ScraperLog"("timestamp");

-- AddForeignKey
ALTER TABLE "CargaHistorico" ADD CONSTRAINT "CargaHistorico_cargaId_fkey" FOREIGN KEY ("cargaId") REFERENCES "Carga"("id") ON DELETE CASCADE ON UPDATE CASCADE;
