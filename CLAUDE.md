# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # dev server at localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview the production build locally
npm run astro check  # type-check .astro files
```

## Architecture

This is an **Astro** project using strict TypeScript (`astro/tsconfigs/strict`).

Astro's file-based routing maps `src/pages/*.astro` directly to URL routes. Each page composes layouts and components:

- `src/pages/` — routes; each file is a URL endpoint
- `src/layouts/` — page shells that expose a `<slot />` for page content
- `src/components/` — reusable UI fragments
- `src/assets/` — images/SVGs processed by Astro's asset pipeline (import and use `.src`)
- `public/` — static files served as-is (no processing)

The frontmatter block (`---`) in `.astro` files is server-side TypeScript that runs at build time. Client-side JS requires explicit `<script>` tags or a framework integration (none added yet).

## Brand: headspace Danmark

This site is for **headspace Danmark** — a Danish youth mental health organization. Slogan: *"Nogen at tale med"* (Someone to talk to). Tone: warm, direct, personal. Write like an older wise friend — not slang, not academic. Use personal pronouns (du, dig, vi). Emojis are fine, sparingly.

### Colors (CSS variables to use)

```css
--color-green: #78BA53;        /* Hovedfarve — use most */
--color-green-highlight: #38B555;
--color-purple: #8064AB;       /* Sekundær farve */
--color-text: #353635;         /* Body text */
--color-bg-cream: #FFF9F0;     /* Default page background */
--color-bg-blue: #C7E5F6;
--color-bg-purple: #D4BFFF;    /* RGB digital purple bg */
--color-dark: #353635;
```

### Typography

Fonts are loaded from Google Fonts or self-hosted. Use these roles strictly:

| Role | Font | Weight |
|------|------|--------|
| H1 display | Gasoek One | Regular (inherently bold) |
| H1 / H2 | Agrandir Black | 900 |
| H3 | Agrandir Bold | 700 |
| Body / p | Agrandir Tight | Regular, 12–16pt |
| Logo | VAG Rounded Bold | — |

Agrandir is available via [Pangram Pangram](https://pangrampangram.com) or use `@font-face`. For Google Fonts fallback, **Nunito** is the closest rounded-sans available.

### Buttons

Pill-shaped (`border-radius: 999px`), bold white text, no underline. Brand variants:
- Green: `background: #78BA53` — primary CTA ("Læs mere om kampagnen her")
- Purple: `background: #8064AB` — secondary CTA
- Dark maroon: `background: #7B1A3A` — "headspace Family" style

Arrow prefix `›` or `>` before button text is a headspace pattern.

### Visual language

- Warm cream (`#FFF9F0`) as the default page background
- Illustrated human figures in flat bold colors (orange, blue, pink, green, yellow)
- Sticker/icon library in green + purple palette
- Collage/mosaic image layouts — not single hero images
- Sections alternate between cream, light blue (`#C7E5F6`), and lavender (`#D4BFFF`) backgrounds
- Green footer bar
- Bold, chunky display type — often outlined/stroke style for large headings
- Pop-art and editorial imagery mixed with illustration
