# Notifica Frete - Web Scraper API

Production-ready web scraping API for cargo data extraction.

## Features

- ✅ Automated authentication with retry logic
- ✅ HTML parsing using Cheerio
- ✅ Deduplication and historical tracking in PostgreSQL
- ✅ Structured logging to database
- ✅ Secure API endpoint with Bearer authentication

## Setup Instructions

This project uses **Prisma 7**, which introduces a new configuration system.

1. **Install Dependencies**:

   ```bash
   bun install
   ```

2. **Database Setup**:
   Ensure you have a PostgreSQL instance running and update the `DATABASE_URL` in `.env`.

   > [!NOTE]
   > In Prisma 7, the database connection URL is managed in `prisma.config.ts`. The `prisma/schema.prisma` file no longer contains the `url` property.

   Run the Prisma migrations:

   ```bash
   bunx prisma migrate dev --name init
   ```

3. **Running the App**:
   ```bash
   bun run dev
   ```

## API Endpoints

### `GET /health`

Check if the API and database connection are healthy.

### `POST /api/scrape` (Secure)

Headers: `Authorization: Bearer <API_SECRET_KEY>`

Triggers a new scraping execution.

**Conditional Authentication**:
By default, authentication is **disabled in development** (`NODE_ENV=development`) unless `ENABLE_AUTH=true` is set. In production, authentication is always required unless `ENABLE_AUTH=false` is explicitly set.

Configurable in `.env`:

```bash
ENABLE_AUTH="false" # Disable auth (default in dev)
ENABLE_AUTH="true"  # Enable auth
```

## Project Structure

- `src/services`: Core business logic (Auth, Scraper, Database, Logger)
- `src/routes`: API endpoint definitions
- `src/middleware`: Authentication middleware
- `src/schemas`: Zod validation schemas
- `src/types`: TypeScript interfaces
- `src/utils`: Helper utilities (Retry logic)
