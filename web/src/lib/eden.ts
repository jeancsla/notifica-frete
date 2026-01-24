import { edenTreaty } from "@elysiajs/eden";
import type { App } from "../../../src/index";

// The URL should point to your Elysia backend
const baseUrl = import.meta.env.DEV
  ? "http://localhost:3000"
  : window.location.origin;

export const api = edenTreaty<App>(baseUrl);
