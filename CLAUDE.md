# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Notifica Frete is a production-ready web scraping application for cargo data extraction. It's a monorepo with two main applications:
- **API** (`apps/api`): Bun + Elysia backend that scrapes cargo data, stores it in PostgreSQL, and serves it via REST API
- **Web** (`apps/web`): React + Vite frontend with a premium dashboard UI for viewing and filtering cargo data

## Development Commands

### Root level (runs both apps concurrently)
```bash
bun install              # Install all dependencies
bun dev                  # Run both API and web in dev mode
bun build                # Build both applications
bun test                 # Run tests for both applications
```

### API (apps/api)
```bash
cd apps/api
bun dev                  # Run API in hot-reload mode
bun test                 # Run API tests
bun run build            # Build API for production
bun run start            # Start production API

# Prisma commands
bun run prisma:generate  # Generate Prisma client
bun run prisma:migrate   # Run database migrations
bun run prisma:studio    # Open Prisma Studio
bun run prisma:push      # Push schema changes to database
```

### Web (apps/web)
```bash
cd apps/web
bun dev                  # Run dev server (Vite)
bun test                 # Run tests (Vitest + React Testing Library)
bun run build            # Build for production
bun run preview          # Preview production build
bun run lint             # Lint code
```

## Architecture

### API Layer (Elysia + Bun)

**Entry Point**: `apps/api/src/index.ts` - Initializes Elysia app with middleware, routes, and services.

**Service Layer Pattern**:
- `AuthService` - Handles authentication to external scraping target
- `ScraperService` - Scrapes cargo data (supports both JSON and HTML parsing)
- `DatabaseService` - Manages Prisma transactions and cargo persistence
- `LoggerService` - Structured logging to database
- `NotificationService` - Handles notifications for new/updated cargas
- `AnalyticsService` - Tracks page views and dashboard statistics

Services are instantiated in `index.ts` and injected into routes. This dependency injection pattern makes testing easier.

**Routes** (`apps/api/src/routes/`):
- `health.route.ts` - Health check endpoint
- `auth.route.ts` - User login endpoint
- `scrape.route.ts` - Trigger scraping (protected)
- `cron.route.ts` - Scheduled scraping endpoint (protected)
- `data.route.ts` - Get cargas data (protected)
- `analytics.route.ts` - Analytics tracking and stats (public)

**Middleware** (`apps/api/src/middleware/auth.middleware.ts`):
- Bearer token authentication using `@elysiajs/bearer`
- Supports both `CRON_SECRET` and `ADMIN_PASSWORD` tokens
- Can be disabled with `ENABLE_AUTH=false` (default in development)

**Database**:
- Uses Prisma 7 with PostgreSQL adapter
- Schema: `apps/api/prisma/schema.prisma`
- Configuration: `apps/api/prisma.config.ts` (Prisma 7 uses config files instead of `datasource.url` in schema)
- Prisma client generated to `apps/api/src/generated/client`
- Main models: `Carga`, `CargaHistorico`, `ScraperLog`, `PageView`

**Key Data Flow**:
1. `ScraperService.scrape()` authenticates and fetches cargo data
2. `DatabaseService.processCarga()` handles upserts in transactions
3. Each update creates a `CargaHistorico` entry (audit trail)
4. `DatabaseService.syncCargasStatus()` marks old cargas as ARCHIVED

### Frontend Layer (React + Vite)

**Entry Point**: `apps/web/src/main.tsx` → `App.tsx`

**Components**:
- `DashboardLayout.tsx` - Main layout with sidebar navigation and logout
- `Overview.tsx` - Dashboard with live cargo table, filters, and scrape button
- `PastCargas.tsx` - Historical cargo data with advanced filtering
- `AdvancedFilter.tsx` - Complex multi-field filter component
- `LoginPage.tsx` - Authentication page
- `ScrapeButton.tsx` - Button to trigger scraping
- `ui/*` - Shadcn UI components (Radix-based)

**State Management**:
- Uses React hooks (`useState`, `useEffect`)
- Authentication token stored in `localStorage` as `nf_token`
- No global state library - components fetch data directly from API

**API Communication**:
- Uses `@elysiajs/eden` for type-safe API calls
- Type safety derived from backend `App` type export

**Styling**:
- Tailwind CSS with dark theme
- Custom animations via `framer-motion`
- Radix UI primitives for accessibility

## Database Schema Notes

### Carga Model
- `viagem` is the business key (unique identifier from source)
- `status` field: "ACTIVE" (currently scraped) or "ARCHIVED" (no longer available)
- Status sync ensures frontend shows only active cargas by default

### CargaHistorico Model
- Immutable audit log of all changes
- `changeType`: "CREATED" or "UPDATED"
- Cascades delete when parent `Carga` is deleted

## Authentication Flow

1. **Frontend**: User enters password in `LoginPage`
2. **API**: `POST /api/auth/login` validates against `ADMIN_PASSWORD`
3. **Response**: Returns base64-encoded token
4. **Frontend**: Stores token in localStorage, includes in Bearer header for protected routes

## Testing

**API Tests** (`apps/api/tests/`):
- Unit tests for services (`auth.service.test.ts`, `scraper.service.test.ts`)
- Run with `bun test`

**Web Tests** (`apps/web/src/test/`):
- Component tests using Vitest + React Testing Library
- Example: `Overview.test.tsx`
- Run with `bun test`

## Environment Variables

Required in `apps/api/.env`:
```
DATABASE_URL=postgresql://...
ADMIN_PASSWORD=your_password
CRON_SECRET=your_cron_secret
ENABLE_AUTH=true|false    # Optional, defaults to true in production
NODE_ENV=production|development
```

## Deployment

### Vercel Deployment

The project is configured for Vercel deployment with Bun runtime.

**Important**:
- Prisma client is automatically generated during `postinstall` and `build` phases
- `prisma` package is in dependencies (not devDependencies) to ensure it's available during build
- Both API and web apps are built together via root `build` script
- API serves the static web files from `apps/web/dist`

**Environment Variables** (set in Vercel dashboard):
- `DATABASE_URL` - PostgreSQL connection string
- `ADMIN_PASSWORD` - Admin authentication password
- `CRON_SECRET` - Secret for cron endpoint authentication
- `ENABLE_AUTH` - Optional, set to "false" to disable auth (not recommended for production)
- `NODE_ENV` - Set to "production"

## Special Considerations

### Prisma 7 Migration
This project uses Prisma 7, which has a new configuration system:
- Database URL is in `prisma.config.ts`, not in `schema.prisma`
- Migrations are managed through the config file's `migrations.schemaPath`

### Scraper Resilience
- `ScraperService` supports both JSON and HTML parsing (graceful fallback)
- Authentication has retry logic (see `AuthService` and `apps/api/src/utils/retry.ts`)

### Static File Serving
- API serves the built frontend (`apps/web/dist`) via `@elysiajs/static`
- In production, both frontend and backend run from single Elysia server

### Type Safety
- Backend defines `App` type exported from `index.ts`
- Frontend uses this type with Eden client for end-to-end type safety
