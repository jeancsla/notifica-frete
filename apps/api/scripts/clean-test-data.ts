#!/usr/bin/env bun
import { prisma } from "../src/infra/prisma";

/**
 * Script to clean test data from the database
 * Usage: bun run scripts/clean-test-data.ts
 */

const TEST_VIAGENS = [
  "TEST001",
  "EXISTING001",
  "FLOW123",
  "FAIL001",
  "INTEG001",
];

async function cleanTestData() {
  console.log("🧹 Cleaning test data from database...\n");

  try {
    // Delete cargas with test viagens (cascade will delete historico)
    const deletedCargas = await prisma.carga.deleteMany({
      where: {
        viagem: {
          in: TEST_VIAGENS,
        },
      },
    });

    console.log(`✅ Deleted ${deletedCargas.count} test cargas`);

    // Delete any orphaned historico records
    const deletedHistorico = await prisma.cargaHistorico.deleteMany({
      where: {
        viagem: {
          in: TEST_VIAGENS,
        },
      },
    });

    console.log(`✅ Deleted ${deletedHistorico.count} test historico records`);

    // Delete test logs
    const deletedLogs = await prisma.scraperLog.deleteMany({
      where: {
        message: {
          contains: "Test",
        },
      },
    });

    console.log(`✅ Deleted ${deletedLogs.count} test log records`);

    console.log("\n✨ Database cleaned successfully!");
  } catch (error) {
    console.error("❌ Error cleaning database:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

cleanTestData();
