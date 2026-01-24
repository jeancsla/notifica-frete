# AI Agent Guide - Routes

## Context & Purpose

Handles HTTP request routing using ElysiaJS. This layer is responsible for defining endpoints, applying middleware, and calling the appropriate services.

## Architecture & Patterns

- **Modular Routes**: Each route file exports a function that takes required services as arguments.
- **RESTful Design**: Use proper HTTP methods (GET for data, POST for actions like scrape).
- **Consistent Responses**: All routes should return a standard response structure (defined in `src/types`).

## Key Files

- `scrape.route.ts`: Endpoint to trigger the scraping process.
- `data.route.ts`: Endpoints to fetch stored load data.
- `health.route.ts`: System health check.

## AI Guidance (Dos & Don'ts)

- **DO**: Use the `authMiddleware` for sensitive endpoints.
- **DO**: Keep route handlers thin; delegate logic to services.
- **DON'T**: Re-implement validation logic here; use the schemas and Elysia's `body`/`query` validation.
- **DON'T**: Block the main thread with long-running sync operations; use `async/await`.
