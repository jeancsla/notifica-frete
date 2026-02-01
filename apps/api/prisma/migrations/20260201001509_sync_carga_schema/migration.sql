/*
  Warnings:

  - You are about to drop the column `equipamento` on the `Carga` table. All the data in the column will be lost.
  - You are about to drop the column `prevColeta` on the `Carga` table. All the data in the column will be lost.
  - You are about to drop the column `produto` on the `Carga` table. All the data in the column will be lost.
  - You are about to drop the column `qtdeEntregas` on the `Carga` table. All the data in the column will be lost.
  - You are about to drop the column `termino` on the `Carga` table. All the data in the column will be lost.
  - You are about to drop the column `tipoTransporte` on the `Carga` table. All the data in the column will be lost.
  - You are about to drop the column `vrFrete` on the `Carga` table. All the data in the column will be lost.
  - You are about to drop the `CargaHistorico` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `data` to the `Carga` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empresa` to the `Carga` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Carga` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tonelagem` to the `Carga` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CargaHistorico" DROP CONSTRAINT "CargaHistorico_cargaId_fkey";

-- DropIndex
DROP INDEX "Carga_createdAt_idx";

-- DropIndex
DROP INDEX "ScraperLog_executionId_idx";

-- DropIndex
DROP INDEX "ScraperLog_level_idx";

-- DropIndex
DROP INDEX "ScraperLog_timestamp_idx";

-- AlterTable
ALTER TABLE "Carga" DROP COLUMN "equipamento",
DROP COLUMN "prevColeta",
DROP COLUMN "produto",
DROP COLUMN "qtdeEntregas",
DROP COLUMN "termino",
DROP COLUMN "tipoTransporte",
DROP COLUMN "vrFrete",
ADD COLUMN     "data" TEXT NOT NULL,
ADD COLUMN     "empresa" TEXT NOT NULL,
ADD COLUMN     "lastScrapedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "notificationSent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tipo" TEXT NOT NULL,
ADD COLUMN     "tonelagem" TEXT NOT NULL;

-- DropTable
DROP TABLE "CargaHistorico";
