# Adora Lashes and Brows

Marketing website for **Adora Lashes and Brows**, a Dallas-based emerging
luxury lash and brow artist. Built with Next.js 16 (App Router), React 19,
Tailwind v4, shadcn/ui (New York), and Supabase (for the admin dashboard,
Phase 5).

## Phased build plan

- **Phase 1** — Foundation + branded homepage (current)
- **Phase 2** — Services catalog + booking handshake (Vagaro → Zelle → DM)
- **Phase 3** — About, gallery, policies, aftercare, contact
- **Phase 4** — Bilingual EN/ES routing
- **Phase 5** — Admin dashboard (Supabase)
- **Phase 6** — Motion, SEO, structured data, performance polish

## Local development

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Build

```bash
pnpm build
```

## Brand tokens

Dark mode is the default theme. Palette and fonts live in
`app/globals.css`. Brand source-of-truth values (contact info, address,
booking URLs, pricing offers) live in `lib/brand.ts`.

## Asset folders

- `public/brand/` — logo, headshot, branded assets
- `public/portfolio/` — gallery photos by style tag
- `public/uploads/` — admin-uploaded images (Phase 5)

## Subagents

Project-scoped Claude agents live in `.claude/agents/` (UI design,
frontend, content marketing, SEO).
