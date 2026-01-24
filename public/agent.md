# AI Agent Guide - Public (Frontend)

## Context & Purpose

Contains the static assets for the scraper dashboard. This is a Vanilla JS/HTML/CSS implementation served by Elysia.

## Architecture & Patterns

- **Simplicity**: Minimalistic design using Vanilla technologies.
- **Real-time**: Leverages Fetch API (and potentially WebSockets) for dynamic updates.
- **Mobile First**: Responsive CSS for viewing loads on the go.

## AI Guidance (Dos & Don't)

- **DO**: Use modern CSS variables for theme management.
- **DO**: Sanitize any data rendered in the DOM to prevent XSS.
- **DON'T**: Use heavy frontend frameworks (React/Vue) unless explicitly requested.
- **DON'T**: Hardcode API endpoints; use relative paths or environment-aware config.
