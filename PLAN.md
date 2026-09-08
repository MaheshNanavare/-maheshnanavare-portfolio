# Mahesh Nanavare Portfolio — Project Plan

Next.js 14 App Router · TypeScript · Tailwind · Vercel · `maheshnanavare.co.uk`

---

## 1. Folder structure

```
mahesh-portfolio/
├── app/
│   ├── layout.tsx           # <html>, fonts, metadata, Nav + Footer
│   ├── page.tsx             # Home (hero + featured projects)
│   ├── globals.css          # Tailwind directives only
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── contact/page.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectGrid.tsx
│   └── SkillList.tsx
├── data/
│   ├── projects.ts          # PROJECTS: Project[] = []
│   └── site.ts              # name, tagline, links, skills, bio
├── types/
│   └── project.ts
├── public/
│   ├── projects/            # screenshots go here
│   └── og.png
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

No `src/`, no state library, no CMS, no MDX. Content lives in `data/` as typed
TS — editing a file and pushing is the publish flow.

---

## 2. Component list (6 total)

| Component | Used by | Job |
|---|---|---|
| `Nav` | layout | 4 links + active state. Mobile: plain wrapped row, no hamburger/JS. |
| `Footer` | layout | Year, name, GitHub/LinkedIn icons. |
| `Hero` | Home | H1 tagline, one-line subhead, two CTAs (Projects, Contact). |
| `ProjectCard` | grid | Screenshot, title, description, tech pills, Live + GitHub links. |
| `ProjectGrid` | Home, Projects | Maps an array to cards; renders empty state when length is 0. |
| `SkillList` | About | Grouped skill pills from `data/site.ts`. |

All are **server components** — nothing needs client JS. No animation library,
no icon package (inline SVG for the two social icons).

---

## 3. Page breakdown

**Home** `/`
- `Hero`
- "Featured Work" → `ProjectGrid` fed `PROJECTS.filter(p => p.featured)`
- Short CTA line to `/projects`

**About** `/about`
- Bio paragraph: MSc Computer Science, University of Bristol
- Roles list: Graduate Teacher, University of Bristol (supporting Java students);
  Volunteer Web Developer, Chetacare (Nigeria); Volunteer Web Developer,
  Obuyisi (Uganda)
- `SkillList` — Frontend (React, Next.js, TypeScript, Tailwind) ·
  Backend (Java, Spring Boot, PostgreSQL) · Infra (Docker, Kubernetes)

**Projects** `/projects`
- H1 + one-line intro
- `ProjectGrid` fed all of `PROJECTS`
- Empty state: "Projects launching soon — only live, deployed work gets listed
  here." (honest, on-brand with the brief's rule; not an apology)

**Contact** `/contact`
- Three links: `mailto:`, GitHub, LinkedIn. No form → no backend, no spam, no
  serverless function.

---

## 4. Project data structure

`types/project.ts`
```ts
export type Project = {
  slug: string;          // unique key
  title: string;
  description: string;   // 1–2 sentences
  tech: string[];
  liveUrl: string;       // required — the brief's core rule
  repoUrl?: string;      // optional (private repos)
  screenshot: string;    // /projects/<slug>.png
  featured?: boolean;    // surfaces on Home
};
```

`data/projects.ts`
```ts
import type { Project } from "@/types/project";

export const PROJECTS: Project[] = [];
```

`liveUrl` and `screenshot` being **required** is the enforcement mechanism: a
project with no deployment literally cannot be added without a type error.

---

## 5. Implementation steps

1. **Scaffold** — `npx create-next-app@latest . --ts --tailwind --app --eslint`
   (no `src/`, alias `@/*`). Commit.
2. **Theme** — set `slate-900` background / `slate-100` text on `<body>`, pick
   one accent (suggest `sky-400`) in `tailwind.config.ts`. Add `next/font` for
   one font.
3. **Layout shell** — `Nav`, `Footer`, root `metadata` (title template,
   description, OG). Verify on mobile width.
4. **Types + data** — `types/project.ts`, `data/projects.ts` (empty),
   `data/site.ts`. Contact links confirmed real before anything else uses them.
5. **Home** — `Hero`, then `ProjectGrid` + `ProjectCard` + empty state.
6. **About / Projects / Contact** — thin pages over existing components.
7. **Polish** — `sitemap.ts`, `robots.ts`, `not-found.tsx`, `og.png`;
   `next/image` sizes on cards; run Lighthouse, target 100 on all four.
8. **Deploy** — push to GitHub, import to Vercel, add `maheshnanavare.co.uk`
   + `www` redirect, DNS at registrar. Confirm HTTPS.
9. **Adding a project later** — screenshot to `public/projects/`, one object
   into `PROJECTS`, push. Vercel redeploys. That's the whole workflow.

---

## Open items (need your input)

- **Contact email** — which address goes public? Your git email is
  `maheshnanavare2212@gmail.com`; confirm or supply a domain address.
- **LinkedIn URL** — needed verbatim; I won't guess a slug.
- **GitHub** — assuming `github.com/MaheshNanavare` from your git config.

---

## Build notes — deltas from the plan above

Recorded after implementation; the plan was written against Next 14 assumptions.

- **Next 16.3.1 / React 19.2 / Tailwind v4**, not Next 14 + Tailwind v3.
  `create-next-app@latest` now installs 16.
- **No `tailwind.config.ts`.** Tailwind v4 is configured in CSS — the theme
  tokens (`--color-background`, `--color-accent`, …) live in an `@theme inline`
  block in `app/globals.css`.
- **`Nav` is a client component.** Active-link state needs `usePathname`, which
  requires `"use client"`. It is the only client component; the other five are
  server components.
- **No `next.config.mjs`** — v16 scaffolds `next.config.ts`.
- **`lib/` is empty** and kept only because it was in the setup instructions.
  Delete it if nothing lands there.
- `LayoutProps<"/">` (a v16 global route-props helper) is used in the root
  layout instead of a hand-written `{ children }` type.
