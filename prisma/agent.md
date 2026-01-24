# AI Agent Guide - Prisma

## Context & Purpose

Maintains the database schema and ORM client configuration for PostgreSQL.

## Architecture & Patterns

- **Schema First**: All database changes must happen in `schema.prisma`.
- **Relationship Integrity**: Use proper relations (e.g., `Carga` -> `CargaHistorico`) with cascading deletes where appropriate.
- **Indexes**: Always index fields used in frequent lookups (e.g., `viagem`, `createdAt`).

## Core Files

- `schema.prisma`: The source of truth for the database structure.
- `seed.ts`: Scripts to populate the database with initial/test data.

## AI Guidance (Dos & Don'ts)

- **DO**: Run `bunx prisma generate` after any schema change.
- **DO**: Use Prisma Migrations for production-ready changes.
- **DON'T**: Manually edit the database schema via SQL if using Prisma; always go through the `.prisma` file.
- **DON'T**: Use the `service-role` or administrative keys in the application; stick to the standard connection string.
- **DON'T**: Ignore Row Level Security (RLS) policies if the project moves to a shared DB environment.
