#!/bin/sh
set -e

echo "Running database migrations..."
cd /app/apps/api

# Run Prisma migrations
bun prisma migrate deploy

echo "Starting application..."
exec bun dist/index.js
