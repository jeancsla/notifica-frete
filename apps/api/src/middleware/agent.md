# AI Agent Guide - Middleware

## Context & Purpose

Request Interceptors for Elysia. Handles cross-cutting concerns like Authentication, CORS, and Logging.

## Architecture & Patterns

- **Middleware Chain**: Elysia uses a `.use()` pattern. Order matters.
- **Context Decoration**: Use middleware to add shared properties (like `user` or `db`) to the request context.

## Key Files

- `auth.middleware.ts`: Implements Bearer token validation or session checking.

## AI Guidance (Dos & Don'ts)

- **DO**: Return standard error responses (401, 403) for auth failures.
- **DON'T**: Perform heavy database queries inside middleware if they can be avoided.
