# AI Agent Guide - Notifica Frete (Root)

## Context & Purpose

This is a high-performance web scraper and notification system for freight loads (cargas). Built with **Bun** and **Elysia**, it targets the Tegma portal to extract, store, and notify about available loads.

## Architecture & Patterns

- **Backend Framework**: [ElysiaJS](https://elysiajs.com/)
- **Frontend Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **UI Components**: [shadcn-ui](https://ui.shadcn.com/) (Tailwind CSS)
- **DB/ORM**: PostgreSQL + [Prisma](https://www.prisma.io/)
- **Communication**: [Eden](https://elysiajs.com/eden/overview.html) (End-to-End Type Safety)
- **Validation**: [Zod](https://zod.dev/)
- **Pattern**: Monorepo-lite structure with `/web` (Frontend) and `/src` (Backend).

## Global Security Rules

- **Environment Variables**: Always use `.env`. Never commit secrets.
- **RLS**: Row Level Security is mandatory for all production tables in PostgreSQL.
- **Scraping Ethics**: Implement delays and avoid heavy load on target servers.

## Core Dependencies

- `elysia`: Web framework.
- `react`, `vite`, `react-router-dom`: Frontend stack.
- `shadcn-ui`, `tailwind-merge`: UI system.
- `eden`: Type-safe client.
- `prisma`: Database ORM.
- `zod`: Data validation.
- `cheerio`: HTML parsing for scraping.

## AI Guidance (Dos & Don'ts)

- **DO**: Use Bun-native APIs (e.g., `Bun.file`, `Bun.serve`) where applicable.
- **DO**: Maintain strict TypeScript types (use Eden for frontend-backend sync).
- **DO**: Keep components reusable in `/web/src/components`.
- **DON'T**: Re-implement backend logic in the frontend; use the API.
- **DON'T**: Use heavy external libraries if a Bun-native or lighter alternative exists.
- **DON'T**: Bypass validation layers (schemas).
