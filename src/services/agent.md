# AI Agent Guide - Services

## Context & Purpose

This folder contains the core business logic of the application. Services are responsible for orchestration, data processing, and integration with external systems (database, scraper).

## Architecture & Patterns

- **Dependency Injection**: Services should be injected via constructors to facilitate testing.
- **Single Responsibility**: Each service handles a specific domain (e.g., `AuthService` for auth, `ScraperService` for extraction).
- **Statelessness**: Services should ideally be stateless, relying on the database or cache for persistence.

## Core Files

- `auth.service.ts`: Handles session management and cookie persistence.
- `database.service.ts`: Abstracts Prisma operations for `Carga` and `Logs`.
- `scraper.service.ts`: Main logic for fetching and parsing HTML/JSON from target sites.
- `logger.service.ts`: Unified logging system.

## AI Guidance (Dos & Don'ts)

- **DO**: Wrap database operations in transactions when creating multiple related records.
- **DO**: Use the `LoggerService` instead of `console.log`.
- **DON'T**: Expose raw database objects directly to the routes if they need transformation.
- **DON'T**: Hardcode URLs; use constants or environment variables.
