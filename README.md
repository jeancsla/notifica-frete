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

## Docker Deployment

The project includes Docker configuration for easy deployment.

### Quick Start with Docker Compose

1. **Copy environment file**:
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` file** with your configuration:
   ```bash
   # Required variables
   ADMIN_PASSWORD=your-secure-password
   CRON_SECRET=your-cron-secret
   SCRAPER_USERNAME=your-username
   SCRAPER_PASSWORD=your-password
   ```

3. **Start services** (app + PostgreSQL):
   ```bash
   docker compose up -d
   ```

4. **View logs**:
   ```bash
   docker compose logs -f app
   ```

5. **Access the application**:
   - Open http://localhost:3000
   - Login with the `ADMIN_PASSWORD` you set

6. **Stop services**:
   ```bash
   docker compose down
   ```

### Manual Docker Build

If you want to use an external PostgreSQL database:

```bash
# Build the image
docker build -t notifica-frete .

# Run the container
docker run -d \
  -p 3000:3000 \
  -e DATABASE_URL="postgresql://user:pass@host:5432/db" \
  -e ADMIN_PASSWORD="your-password" \
  -e CRON_SECRET="your-secret" \
  -e SCRAPER_USERNAME="username" \
  -e SCRAPER_PASSWORD="password" \
  notifica-frete
```

### Docker Features

- Multi-stage build for optimal image size
- Automatic database migrations on container start
- Health checks for both app and database
- PostgreSQL data persists in Docker volume
- Ready for production deployment

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
