# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Terminology

- **Coachee** — The person receiving coaching
- **Coach** — The individual doing the coaching. May be employed by a corporation (internal coach) or an independent practitioner with their own business
- **Client** — The entity that pays for Sage (the product). Could be a corporation, a solo coach/small business owner, etc.

Always use these terms consistently when discussing the product.

## Project Overview

Sage is an AI-powered coaching intelligence platform designed to support executive coaches and their coachees. The current codebase is an **interactive wireframe/prototype** built to demonstrate the product vision before full implementation.

**Key concept:** Sage is designed to be "invisible" — embedded in tools coaches already use (email, calendar, video) rather than requiring a new standalone app. The prototype shows the coach-facing dashboard interface.

## Development Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Tech Stack

- **React 19** with Vite 7
- **Tailwind CSS 3** for styling
- **ESLint** for linting
- No routing library currently — navigation is state-based within the main component

## Architecture

### Current Structure (Wireframe Phase)

The app is a single-page wireframe where most UI lives in one large component:

- [src/JTCoachingAppShellWireframe.jsx](src/JTCoachingAppShellWireframe.jsx) — Main wireframe component (~1800 lines). Contains all pages: Dashboard, Clients, Schedule, Resources, Business Management, Settings, and AI companion views
- [src/data/mockClients.js](src/data/mockClients.js) — Mock client data for prototype demonstration
- [src/components/ui.jsx](src/components/ui.jsx) — Reusable UI components
- [src/pages/](src/pages/) — Some extracted page components (Dashboard, Schedule)

### Navigation System

Navigation is handled via React state in the main wireframe component:
- `activePage` state controls which page renders
- Top horizontal nav bar with page buttons
- Client-specific views accessed via sidebar when on Clients page

### Design System

- **Color palette:** Teal-blue-purple gradient (from jessetorrence.com branding)
- **Values displayed:** "Courage · Truth · Integrity"
- **AI assistant branding:** "Sage" with wizard emoji (🧙‍♂️)

## Three-Tier Data Model

The product architecture uses three user types with distinct data access:
1. **Corporate Admin** — Sees aggregate metrics only, cannot access session content
2. **Coach** — Sees session insights with coachee consent
3. **Coachee** — Owns all personal data (sovereign data model)

## Key Product Features (In Wireframe)

- **T-15 Prep** — AI-generated pre-session briefs for coaches
- **Session Notes** — AI-generated summaries in coach's voice
- **Client Profiles** — Comprehensive client information management
- **Goals & Progress** — Funnel-based goal tracking across 6 life areas
- **Sage AI** — Always-available AI assistant with coaching specialization

## Development Roadmap Context

The project follows a phased approach documented in [docs/sage-development-roadmap-v1_01.15.26.md](docs/sage-development-roadmap-v1_01.15.26.md):
- **Phase 0 (Current):** Functional wireframe/prototype
- **Phase 1:** Core session capture and summarization
- **Phase 2:** Coachee consent and privacy layer
- **Phase 3:** Production-ready MVP
- **Phase 4:** Enterprise features

Planned tech stack for production: Next.js, Supabase, Clerk auth, OpenAI API.
