# AI Agent Guide - Notifica Frete (Root)

## Context & Purpose

This is a high-performance web scraper and notification system for freight loads (cargas). Built with **Bun** and **Elysia**, it targets the Tegma portal to extract, store, and notify about available loads.

## Architecture & Patterns

- **Runtime**: [Bun](https://bun.sh/)
- **API Framework**: [ElysiaJS](https://elysiajs.com/)
- **DB/ORM**: PostgreSQL + [Prisma](https://www.prisma.io/)
- **Validation**: [Zod](https://zod.dev/)
- **Pattern**: Service-based architecture with separated routes, middleware, and schemas.

## Global Security Rules

- **Environment Variables**: Always use `.env`. Never commit secrets.
- **RLS**: Row Level Security is mandatory for all production tables in PostgreSQL.
- **Scraping Ethics**: Implement delays and avoid heavy load on target servers.

## Core Dependencies

- `elysia`: Web framework.
- `prisma`: Database ORM.
- `zod`: Data validation.
- `cheerio`: HTML parsing for scraping.

## AI Guidance (Dos & Don'ts)

- **DO**: Use Bun-native APIs (e.g., `Bun.file`, `Bun.serve`) where applicable.
- **DO**: Maintain strict TypeScript types.
- **DON'T**: Use heavy external libraries if a Bun-native or lighter alternative exists.
- **DON'T**: Bypass validation layers (schemas).
