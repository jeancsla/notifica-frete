#!/bin/sh
set -e

echo "Running database migrations..."
cd /app/apps/api

# Run Prisma migrations with retry logic
MAX_RETRIES=3
RETRY_COUNT=0

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
  echo "Migration attempt $((RETRY_COUNT + 1))/$MAX_RETRIES..."

  if bun prisma migrate deploy; then
    echo "Migrations completed successfully"
    break
  else
    RETRY_COUNT=$((RETRY_COUNT + 1))
    if [ $RETRY_COUNT -lt $MAX_RETRIES ]; then
      echo "Migration failed, retrying in 5 seconds..."
      sleep 5
    else
      echo "Migration failed after $MAX_RETRIES attempts"
      echo "Continuing anyway - migrations may already be applied"
    fi
  fi
done

echo "Starting application..."
exec bun src/index.ts
