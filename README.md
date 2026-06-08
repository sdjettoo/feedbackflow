# FeedbackFlow

> AI-powered customer feedback platform for small and medium-sized businesses.

FeedbackFlow helps SMBs collect, analyze, and act on customer feedback — without the complexity or cost of enterprise tools. Built with a modern Next.js stack, it ships a fast, accessible landing page and is designed to scale into a full SaaS product.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16+](https://nextjs.org) (App Router) |
| UI | [React 19](https://react.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first, `@theme {}` tokens) |
| Language | [TypeScript 5.8+](https://www.typescriptlang.org) (strict mode) |
| Package Manager | [npm](https://www.npmjs.com) |

---

## Prerequisites

- **Node.js** v22 or later
- **npm** v10 or later

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit files.

---

## Key Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:3000` |
| `npm run build` | Create an optimised production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npx tsc --noEmit` | Strict TypeScript type-check (no output files) |

---

## Project Structure

```
code/feedbackflow/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Tailwind v4 @import + @theme {} design tokens
│   │   ├── layout.tsx          # Root layout (metadata, fonts)
│   │   └── page.tsx            # Landing page — composes all sections
│   │
│   ├── components/
│   │   ├── ui/                 # Zero-dependency UI primitives
│   │   │   ├── badge.tsx       # Variant-based Badge
│   │   │   ├── button.tsx      # Button (variant + size + loading prop)
│   │   │   ├── card.tsx        # Card with sub-components (Header, Body, Footer)
│   │   │   ├── container.tsx   # Max-width Container (sm / md / lg / xl / full)
│   │   │   ├── section.tsx     # Section wrapper (spacing + background variants)
│   │   │   └── index.ts        # Barrel export
│   │   │
│   │   ├── layout/             # Shared page-level layout
│   │   │   ├── nav-header.tsx  # Responsive sticky nav with anchor links
│   │   │   └── footer.tsx      # Footer with copyright and social links
│   │   │
│   │   └── sections/           # Landing page content sections
│   │       ├── hero.tsx        # Hero — headline, sub-head, CTA
│   │       ├── features.tsx    # Three-column icon feature grid
│   │       ├── pricing.tsx     # Pricing tiers (Free / Pro / Business)
│   │       └── Contact.tsx     # Email-validated contact form (Server Action)
│   │
│   └── lib/                    # Utilities and constants
│       ├── cn.ts               # className merging helper (no external deps)
│       └── brand.ts            # Design token mirrors as CSS var() strings
│
├── public/                     # Static assets served at /
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS — @tailwindcss/postcss plugin
├── tsconfig.json               # TypeScript config (strict: true, @/* alias)
└── package.json
```

---

## Design System

All design tokens are defined in `src/app/globals.css` inside a `@theme {}` block — the Tailwind v4 CSS-first approach. A typed mirror is exported from `src/lib/brand.ts` as `var(--token-name)` strings for programmatic use.

```css
/* src/app/globals.css */
@import 'tailwindcss';

@theme {
  --color-primary: #4f46e5;
  --color-background: #ffffff;
  --color-foreground: #0a0a0a;
  /* ... */
}
```

**Rules:**
- Never hardcode hex values in components — always use `var(--color-*)`.
- Use `cn()` from `@/lib/cn` for conditional class merging.
- Import primitives from `@/components/ui` (barrel export).

---

## Architecture Decisions

See [`.trace/DECISIONS.md`](.trace/DECISIONS.md) for the full log of architectural choices made during development (design token strategy, UI primitives library, rendering strategy, etc.).

---

## License

Private — all rights reserved. &copy; 2026 FeedbackFlow.
