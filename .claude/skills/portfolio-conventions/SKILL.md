---
name: portfolio-conventions
description: Tech stack, coding conventions and folder structure for the Mahesh Nanavare portfolio site. Load before adding pages, components, data access or mutations to this repo.
---

# Portfolio Conventions

Conventions for this repo. Follow them unless the user asks for something different.

## Tech stack

| Layer           | Choice                 | Notes                                                       |
| --------------- | ---------------------- | ----------------------------------------------------------- |
| Framework       | Next.js 14, App Router | `src/app`, no `pages/` router                               |
| Language        | TypeScript, strict     | `@/*` maps to `src/*`                                       |
| Styling         | Tailwind CSS           | Utility classes in JSX; no CSS modules or styled-components |
| ORM             | Prisma                 | Single client singleton in `src/lib/db.ts`                  |
| Database / auth | Supabase (Postgres)    | Prisma talks to Postgres; Supabase provides the DB and auth |
| Hosting         | Vercel                 |                                                             |

> Status: Prisma and Supabase are the intended stack but are **not installed yet** — the data
> modules under `src/lib` currently return placeholder arrays. Replace them as those land.

## Folder structure

```
src/
  app/                 # App Router: one folder per route
    layout.tsx         # Root layout — Nav, <main>, Footer
    page.tsx           # Home
    projects/page.tsx
    calendar/page.tsx
  components/          # Reusable UI (PascalCase files, default export)
  lib/                 # Data access, server actions, config, helpers
    site.ts            # Site name, metadata, nav items
    projects.ts        # Project data source
  types/               # Shared types (index.ts)
prisma/                # schema.prisma and migrations (when added)
public/                # Static assets
```

Rules:

- Route folders are lowercase and kebab-case; the URL is the folder path.
- Anything imported by two or more routes belongs in `components/`, `lib/` or `types/` — not
  alongside one route.
- Import across folders with the `@/` alias, never with `../../`.

## Coding conventions

**Components**

- Functional components only. No class components.
- Default export per component file; the file name matches the component (`Nav.tsx` → `Nav`).
- Type props inline or with a local `type`; avoid `React.FC`.

**Server by default**

- Every component is a Server Component unless it needs browser-only behaviour.
- Add `"use client"` only for state, effects, event handlers or client hooks
  (e.g. `usePathname` in `Nav.tsx`), and push it to the smallest leaf component that needs it.
- Never import server-only code (Prisma, secrets) into a client component.

**Data fetching**

- Fetch in Server Components with `await`. No `useEffect` fetching, no client data libraries.
- All database access goes through `src/lib/*` modules — never call Prisma from a component.

**Mutations**

- Use Server Actions, not API route handlers, for form and mutation work.
- Define them in `src/lib` (or a colocated `actions.ts`) with `"use server"` at the top of the file.
- Validate input inside the action; never trust the client.
- Call `revalidatePath` / `revalidateTag` after a write so the affected route refreshes.
- Reserve `app/api/*` route handlers for webhooks and third-party callbacks.

**Styling**

- Tailwind utilities in `className`. Keep dark mode working: pair each `border-black/10`-style
  token with its `dark:` counterpart, as the existing components do.
- Shared visual constants (nav items, site copy) live in `src/lib/site.ts`, not hardcoded in JSX.

**Metadata**

- Every route exports a `Metadata` object with at least `title` and `description`.

## Verification

Before calling work done, run:

```bash
npx next build
```

It type-checks and lints as part of the build. Keep it clean.
