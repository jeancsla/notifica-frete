# syntax=docker/dockerfile:1

# Base stage - Install dependencies
FROM oven/bun:1 AS base
WORKDIR /app

# Copy package files
COPY package.json bun.lock ./
COPY apps/api/package.json ./apps/api/
COPY apps/web/package.json ./apps/web/

# Copy Prisma files (needed for postinstall hook)
COPY apps/api/prisma ./apps/api/prisma
COPY apps/api/prisma.config.ts ./apps/api/

# Install dependencies (includes prisma postinstall hook)
RUN bun install --frozen-lockfile

# Copy rest of source code
COPY . .

# Build stage - Build applications
FROM base AS builder
WORKDIR /app

# Generate Prisma client and build both apps
RUN cd apps/api && bun run prisma:generate
RUN bun run build

# Production stage - Runtime
FROM oven/bun:1-slim AS production
WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/apps/api/src ./apps/api/src
COPY --from=builder /app/apps/api/package.json ./apps/api/
COPY --from=builder /app/apps/api/prisma ./apps/api/prisma
COPY --from=builder /app/apps/api/prisma.config.ts ./apps/api/
COPY --from=builder /app/apps/web/dist ./apps/web/dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/api/node_modules ./apps/api/node_modules

# Copy entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Set environment
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD bun -e "fetch('http://localhost:3000/api/health').then(r => r.ok ? process.exit(0) : process.exit(1))"

# Start the application
WORKDIR /app
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
