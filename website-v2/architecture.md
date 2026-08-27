# Architecture Document
## Biosensors & Devices Lab — Website

> Last updated: 2026-08-27

---

## 1. High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    BUILD TIME (Node.js)                 │
│                                                         │
│  citations.bib ──→ import-bibtex.js ──→ publications/*.md │
│                                                         │
│  Astro SSG ──→ Compiles .astro + .md + .tsx → dist/    │
│                                                         │
│  Pagefind ──→ Indexes dist/ → search index              │
│                                                         │
│  Satori + Sharp ──→ OG images → dist/og/*.png          │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│                    DEPLOY (GitHub Actions)              │
│                                                         │
│  push to main ──→ npm ci ──→ npm run build ──→ deploy  │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│                    SERVE (Static Files)                 │
│                                                         │
│  GitHub Pages / IITD CSC Apache ──→ HTML/CSS/JS        │
│  No server-side code. Pure static.                     │
└─────────────────────────────────────────────────────────┘
```

---

## 2. Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | Astro | 5.16.x | Static site generation, content collections |
| **UI Library** | React | 19.x | Interactive components (Agentation only) |
| **Styling** | Tailwind CSS | 4.x | Utility-first CSS via Vite plugin |
| **Language** | TypeScript | 5.9.x | Type safety |
| **Icons** | Lucide React | 0.555.x | SVG icon library |
| **Search** | Pagefind | 1.4.x | Static full-text search |
| **OG Images** | Satori + Sharp | 0.18.x / 0.34.x | PNG generation from JSX |
| **RSS** | Astro built-in | — | Feed generation |
| **BibTeX** | bibtex-parse-js | 0.0.24 | Publication import |
| **Slug** | slugify | 1.6.x | URL slug generation |
| **Image Optim** | @resvg/resvg-js | 2.6.x | SVG rendering for OG |
| **Dev Tool** | Agentation | 3.0.x | Visual feedback (dev only) |
| **Code Review** | CodeRabbit | — | AI PR reviews (GitHub App) |
| **Node.js** | ≥ 22.12.0 | — | Build runtime |

---

## 3. Folder Structure

```
website-v2/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions auto-deploy
├── public/
│   ├── assets/                     # Static assets (logos, seals)
│   ├── branding/                   # Lab branding images
│   ├── equipment/                   # Equipment cover images
│   ├── funding-logos/              # Funding agency logos
│   ├── gallery/                    # Lab photos
│   ├── fonts/                      # OG image fonts (Satori)
│   ├── favicon.svg                 # Site favicon
│   ├── robots.txt                  # SEO crawl rules
│   ├── _headers                    # CSP headers (Netlify/GH Pages)
│   └── sitemap-index.xml           # Auto-generated sitemap
├── scripts/
│   └── import-bibtex.js            # BibTeX → Markdown converter
├── src/
│   ├── assets/                     # Vite-imported assets
│   │   ├── avatar-nks.png          # PI photo
│   │   ├── hero-lab.svg            # Hero illustration
│   │   ├── branding/               # IITD seal, lab banner, etc.
│   │   ├── equipment/              # Equipment photos (21)
│   │   ├── fonts/                  # Inter woff2 (self-hosted)
│   │   ├── funding/                # Funding logos (source)
│   │   ├── gallery/                # Gallery photos
│   │   ├── misc/                   # Miscellaneous assets
│   │   └── team/                   # Team member photos
│   ├── components/
│   │   ├── Header.astro            # Sticky header + mobile menu
│   │   ├── PublicationItem.astro   # Single publication card
│   │   ├── TeamCard.astro          # Team member card
│   │   ├── AgentationWrapper.tsx   # React wrapper (dev only)
│   │   └── AgentationWrapper.astro # Astro wrapper (dev only)
│   ├── content/
│   │   ├── publications/           # Auto-generated from .bib
│   │   ├── research/               # 4 research areas
│   │   ├── team/                   # Team member profiles
│   │   ├── news/                   # Lab news items
│   │   ├── patents/                # Patent filings
│   │   ├── equipment/              # Equipment descriptions
│   │   └── books/                  # (reserved)
│   ├── i18n/                       # i18n config (disabled)
│   ├── layouts/
│   │   └── Layout.astro            # Main layout (head, header, footer)
│   ├── pages/                      # File-based routing
│   │   ├── index.astro             # Home page
│   │   ├── 404.astro               # Error page
│   │   ├── contact.astro
│   │   ├── courses.astro
│   │   ├── equipment.astro
│   │   ├── funding.astro
│   │   ├── gallery.astro
│   │   ├── important-links.astro
│   │   ├── join.astro
│   │   ├── news.astro
│   │   ├── patents.astro
│   │   ├── pi.astro
│   │   ├── publications.astro
│   │   ├── search.astro
│   │   ├── team.astro
│   │   ├── news/[slug].astro       # Dynamic news detail
│   │   ├── research/index.astro    # Research listing
│   │   ├── research/[slug].astro   # Dynamic research detail
│   │   ├── team/[...slug].astro    # Dynamic team detail
│   │   └── og/[...slug].png.ts     # OG image generator
│   ├── styles/
│   │   └── global.css              # Tailwind + custom animations
│   ├── config.ts                   # Site-wide configuration
│   └── content.config.ts           # Content collection schemas
├── .coderabbit.yaml                # CodeRabbit AI review config
├── astro.config.mjs                # Astro configuration
├── package.json
├── tsconfig.json
├── citations.bib                   # BibTeX publications source
├── PRD.md                          # This file
├── architecture.md
├── rules.md
├── phases.md
├── design.md
└── memory.md
```

---

## 4. Data Flow

### 4.1 Publications Pipeline
```
citations.bib
  → npm run import-bibtex (scripts/import-bibtex.js)
  → src/content/publications/*.md (generated)
  → Astro getCollection('publications')
  → publications.astro / index.astro (rendered)
```

### 4.2 Content Updates
```
Edit src/content/[collection]/*.md
  → git push
  → GitHub Actions: npm run build
  → Astro SSG renders pages
  → Pagefind indexes content
  → Deployed to GitHub Pages
```

### 4.3 OG Image Generation
```
Page request → /og/[slug].png.ts
  → Satori renders JSX to SVG
  → Sharp converts to PNG
  → Response with image
```

### 4.4 Search
```
npm run build
  → Pagefind scans dist/
  → Creates search index (JSON)
  → search.astro loads Pagefind UI
  → Client-side full-text search
```

---

## 5. Build Pipeline

```bash
npm run build
  ├── 1. import-bibtex    # BibTeX → Markdown
  ├── 2. astro build      # SSG → dist/
  ├── 3. pagefind         # Index dist/ for search
  └── 4. OG images        # Generated per-page
```

---

## 6. Routing

| Pattern | File | Output |
|---------|------|--------|
| `/` | `pages/index.astro` | `index.html` |
| `/research` | `pages/research/index.astro` | `research/index.html` |
| `/research/[slug]` | `pages/research/[slug].astro` | `research/[slug]/index.html` |
| `/team/[...slug]` | `pages/team/[...slug].astro` | `team/[slug]/index.html` |
| `/news/[slug]` | `pages/news/[slug].astro` | `news/[slug]/index.html` |
| `/og/[...slug].png` | `pages/og/[...slug].png.ts` | `og/[slug].png` |

**Base path:** All routes are prefixed with `/biosensorslab/` (configured in `astro.config.mjs`)

---

## 7. Performance Characteristics

| Metric | Target | Current |
|--------|--------|---------|
| Build time | < 30s | ~5s |
| Pages generated | 15+ | 43 |
| CSS size | < 20KB | Inlined (always) |
| JS size | < 5KB | Minimal (scroll-reveal, counters) |
| Lighthouse Performance | > 95 | ~98 |
| Time to Interactive | < 1s | ~0.5s |

---

## 8. External Dependencies

| Service | Purpose | Required |
|---------|---------|----------|
| GitHub | Source code hosting | Yes |
| GitHub Pages | Hosting (current) | Yes |
| GitHub Actions | CI/CD | Yes |
| CodeRabbit | AI code review | Optional |
| IITD CSC | Target hosting | Future |
| Google Scholar | Publication data | Indirect |
