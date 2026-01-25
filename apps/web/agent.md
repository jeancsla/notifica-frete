# AI Agent Guide - Web (Frontend)

## Context & Purpose

This directory contains the modern React SPA for the `notifica-frete` dashboard. It replaces the legacy vanilla HTML/JS implementation.

## Architecture & Patterns

- **Framework**: React 19 + Vite.
- **Styling**: Tailwind CSS + **shadcn-ui** components.
- **State Management**: React Hooks (useState/useEffect) and potentially React Query.
- **Type Safety**: **Eden Treaty** for end-to-end type safety with the Elysia backend.
- **Directory Structure**:
  - `src/components/ui`: shadcn-ui base components.
  - `src/components`: Custom business components.
  - `src/lib/eden.ts`: API client configuration.
  - `src/lib/utils.ts`: Utility functions (cn).

## AI Guidance (Dos & Don'ts)

- **DO**: Use **shadcn-ui** components for all UI elements.
- **DO**: Leverage `api` from `@/lib/eden` for all backend communication to ensure type safety.
- **DO**: Use **Lucide React** for icons.
- **DO**: Implement loading states (Skeletons) for all async data.
- **DON'T**: Write custom CSS if it can be achieved with Tailwind.
- **DON'T**: Use `fetch` directly; always use the Eden client.
- **DON'T**: Put business logic in components; separate it into hooks or services if complex.
