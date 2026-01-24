# AI Agent Guide - Schemas

## Context & Purpose

Centralized data validation using Zod. Ensures that data flowing into the system (from the scraper or API requests) is valid and conforms to expected types.

## Architecture & Patterns

- **Schema Selection**: Currently using **Zod**. If migrating to TypeBox, update all schemas here.
- **Type Inference**: Use `z.infer` to export TypeScript types derived from schemas.

## Key Files

- `carga.schema.ts`: Defines the structure of a `Carga` object, including transformation logic for numeric strings.

## AI Guidance (Dos & Don'ts)

- **DO**: Use `.trim()` and `.default()` to sanitize input.
- **DO**: Implement custom `.refine()` logic for complex business rules.
- **DON'T**: Create duplicate types manually; always derive them from the schema using `export type ... = z.infer<typeof schema>`.
