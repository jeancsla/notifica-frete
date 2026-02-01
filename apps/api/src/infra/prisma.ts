import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import path from "path";

// Ensure environment variables are loaded
dotenv.config({ path: path.resolve(process.cwd(), ".env") });
if (!process.env.DATABASE_URL) {
  dotenv.config({ path: path.resolve(process.cwd(), "../../.env") });
}

if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL is not defined in environment variables");
  throw new Error("Missing DATABASE_URL");
}

console.log("🔌 Database connection initializing native client (v6.x)...");

export const prisma = new PrismaClient();
