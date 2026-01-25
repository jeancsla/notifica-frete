-- AlterTable
ALTER TABLE "Carga" ADD COLUMN "status" TEXT NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "CargaHistorico" ADD COLUMN "status" TEXT NOT NULL DEFAULT 'ACTIVE';

-- CreateTable
CREATE TABLE "PageView" (
    "id" TEXT NOT NULL,
    "page" TEXT NOT NULL,
    "sessionId" TEXT,
    "userAgent" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PageView_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Carga_status_idx" ON "Carga"("status");

-- CreateIndex
CREATE INDEX "PageView_page_timestamp_idx" ON "PageView"("page", "timestamp");

-- CreateIndex
CREATE INDEX "PageView_timestamp_idx" ON "PageView"("timestamp");
