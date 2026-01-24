import { prisma } from "../src/prisma";

async function main() {
  console.log("🌱 Starting seeding...");

  try {
    // Example: Seed some initial ScraperLog entries
    await prisma.scraperLog.create({
      data: {
        level: "INFO",
        message: "Database initialized and seeded.",
        timestamp: new Date(),
      },
    });

    console.log("✅ Seeding finished successfully.");
  } catch (err) {
    console.error("❌ Seeding failed during data creation:", err);
    throw err;
  }
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
