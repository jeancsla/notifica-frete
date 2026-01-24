# AI Agent Guide - Public (Legacy/Static Assets)

> [!IMPORTANT]
> This directory is now for **static assets only** (favicon, public images).
> The main frontend has been moved to the `/web` directory.

## Context & Purpose

Contains legacy static assets. The original Vanilla JS/HTML dashboard is deprecated.

## Architecture & Patterns

- **Simplicity**: Minimalistic design using Vanilla technologies.
- **Real-time**: Leverages Fetch API (and potentially WebSockets) for dynamic updates.
- **Mobile First**: Responsive CSS for viewing loads on the go.

## AI Guidance (Dos & Don't)

- **DO**: Use modern CSS variables for theme management.
- **DO**: Sanitize any data rendered in the DOM to prevent XSS.
- **DON'T**: Use heavy frontend frameworks (React/Vue) unless explicitly requested.
- **DON'T**: Hardcode API endpoints; use relative paths or environment-aware config.
