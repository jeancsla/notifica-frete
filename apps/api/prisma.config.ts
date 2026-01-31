import { defineConfig } from "@prisma/config";

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
    directUrl: process.env.DIRECT_URL,
  },

  migrations: {
    schemaPath: "./prisma/schema.prisma",
  },
});
