-- AlterTable
ALTER TABLE "Carga" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "CargaHistorico" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'ACTIVE';

-- CreateIndex
CREATE INDEX "Carga_status_idx" ON "Carga"("status");
