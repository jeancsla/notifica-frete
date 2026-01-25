# Migration Guide - View Tracking & Test Fixes

## Quick Start

### Step 1: Run Database Migration

The new `PageView` table needs to be created in your database:

```bash
cd apps/api

# Make sure you have a .env file with DATABASE_URL
# If not, copy from your old setup or create one:
# DATABASE_URL="postgresql://user:password@localhost:5432/notifica_frete"

# Run migration
bun run prisma:migrate

# Or for development (no migration files):
bun run prisma:push
```

### Step 2: Clean Test Data (Optional)

Remove any test data that leaked into your database:

```bash
cd apps/api
bun run clean:test-data
```

This will remove records with these viagens: TEST001, EXISTING001, FLOW123, FAIL001, INTEG001

### Step 3: Verify Everything Works

```bash
# Terminal 1 - Run API
cd apps/api
bun run dev

# Terminal 2 - Run Frontend
cd apps/web
bun run dev

# Or from root - Run both concurrently
bun run dev
```

### Step 4: Test the View Counter

1. Open http://localhost:5173 (or your dev URL)
2. Look at "Vistos Hoje" in the dashboard
3. Refresh the page a few times
4. The counter should increment!

---

## Troubleshooting

### "Cannot find module PageView"

Run Prisma generate:
```bash
cd apps/api
bun run prisma:generate
```

### Tests are still creating database records

Make sure tests are using the updated mock paths. Check:
- `apps/api/tests/unit/database.service.test.ts`
- `apps/api/tests/integration/flow.test.ts`
- `apps/api/tests/integration/api.test.ts`

All should use `mock.module("../../src/infra/prisma", ...)` not `"../../src/prisma"`

### View counter shows 0

Check:
1. Database migration ran successfully
2. PageView table exists in database
3. API is running on correct port
4. No CORS errors in browser console
5. Frontend is calling the analytics endpoints

Debug by checking:
```bash
# Open Prisma Studio to see PageView records
cd apps/api
bun run prisma:studio
```

---

## What's New

### API Endpoints

**Track a page view:**
```bash
POST /api/analytics/track
{
  "page": "overview",
  "sessionId": "optional-session-id",
  "userAgent": "optional-user-agent"
}
```

**Get today's view count:**
```bash
GET /api/analytics/views-today
# Response: { "viewsToday": 42 }
```

**Get all dashboard stats:**
```bash
GET /api/analytics/stats
# Response: {
#   "viewsToday": 42,
#   "activeCargas": 15,
#   "archivedCargas": 230
# }
```

### Scripts

**Clean test data:**
```bash
cd apps/api
bun run clean:test-data
```

---

## Verification Checklist

- [ ] Database migration completed successfully
- [ ] PageView table exists in database
- [ ] API starts without errors
- [ ] Frontend builds successfully
- [ ] All 16 tests pass (`cd apps/api && bun test`)
- [ ] "Vistos Hoje" shows a number (not 142 hardcoded)
- [ ] Counter increments when refreshing the page
- [ ] No test data (TEST001, etc.) in database

---

## Need Help?

1. Check the logs when starting the API
2. Check browser console for errors
3. Verify `.env` file has correct `DATABASE_URL`
4. Make sure PostgreSQL is running
5. Check `CHANGES.md` for detailed technical changes
