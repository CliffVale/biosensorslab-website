# Biosensors & Devices Lab — Website Repository

> **For AI Assistants:** Start here. This file tells you everything about this project.
> Read `website-v2/memory.md` next to understand current state.

---

## Quick Start (For AI Assistants)

```bash
# 1. Clone and setup
git clone https://github.com/CliffVale/biosensorslab-website.git
cd biosensorslab-website/website-v2
npm install

# 2. Run dev server
npm run dev
# Opens at http://localhost:4321/biosensorslab

# 3. Build for production
npm run build

# 4. Check for errors
npm run lint  # (astro check)
```

---

## Project Structure

```
biosensorslab-website/
├── website-v2/              # ⭐ ACTIVE — v2.2 Premium (work here)
│   ├── src/
│   │   ├── pages/           # All 15 pages
│   │   ├── components/      # Header, TeamCard, PublicationItem
│   │   ├── content/         # Markdown collections (pubs, team, news, etc.)
│   │   ├── assets/          # Images (equipment, team, gallery, branding)
│   │   ├── styles/          # global.css (Tailwind + animations)
│   │   ├── layouts/         # Layout.astro (main layout)
│   │   └── config.ts        # Site configuration
│   ├── public/              # Static assets (logos, fonts, favicon)
│   ├── scripts/             # BibTeX import script
│   ├── PRD.md               # What to build
│   ├── architecture.md      # How it's built
│   ├── rules.md             # AI assistant rules
│   ├── design.md            # Colors, fonts, typography
│   ├── phases.md            # Development phases
│   ├── memory.md            # Current state & progress
│   └── package.json
├── website/                 # v1 — Original Astro (reference only)
├── google-sites-kit/        # Google Sites assembly kit
├── source-assets/           # Original equipment photos
├── preview-screenshots/     # Desktop/mobile screenshots
├── PROJECT_LOG.md           # Historical work log
└── README.md                # ← You are here
```

---

## Documentation Files (Read in Order)

| File | Purpose | When to Read |
|------|---------|--------------|
| `website-v2/memory.md` | Current state, what's done, what's next | **FIRST** — Always |
| `website-v2/PRD.md` | What to build, target users, features | When adding new features |
| `website-v2/architecture.md` | Tech stack, folder structure, data flow | When understanding structure |
| `website-v2/rules.md` | What to use/avoid, code style, errors | **BEFORE** making any changes |
| `website-v2/design.md` | Colors, typography, animations, components | When modifying visual design |
| `website-v2/phases.md` | Development phases, execution plan | When planning work |
| `website-v2/AI_SKILLS_ANALYSIS.md` | AI tools comparison | When evaluating new tools |
| `website-v2/SETUP_GUIDE.md` | Tool setup instructions | When adding new tools |

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Astro | 5.16.x |
| Styling | Tailwind CSS | 4.x |
| UI | React | 19.x (Agentation only) |
| Icons | Lucide React | 0.555.x |
| Search | Pagefind | 1.4.x |
| Language | TypeScript | 5.9.x |
| Node.js | ≥ 22.12.0 | — |

---

## Key Rules (Summary)

### DO
- ✅ Run `npm run build` after changes
- ✅ Use `<Image>` from `astro:assets` for images
- ✅ Use `basePath + '/route'` for internal links
- ✅ Add `rel="noopener noreferrer"` to external links
- ✅ Respect `prefers-reduced-motion`
- ✅ Use custom easing curves (`--ease-out`, `--ease-page`)

### DON'T
- ❌ Add dark mode (light-only by design)
- ❌ Use Google Fonts CDN (self-hosted)
- ❌ Place `import` after variable declarations
- ❌ Use `ease-in` for UI animations
- ❌ Animate from `scale(0)` (use 0.95 minimum)
- ❌ Use `transition: all` (specify properties)

---

## Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Check for errors (astro check)
npm run import-bibtex    # Import publications from citations.bib

# Content Updates
# Edit markdown files in src/content/[collection]/
# Then run: npm run build

# Add New Publication
echo "@article{...}" >> citations.bib
npm run build  # Auto-imports to Markdown

# Add New Team Member
# Create: src/content/team/[name].md
# Add photo: src/assets/team/[name].jpg
```

---

## Deployment

### Current: GitHub Pages
- Auto-deploys on push to `main`
- URL: `https://cliffvale.github.io/biosensorslab/`

### Future: IITD Domain
1. Update `base: '/'` in `astro.config.mjs`
2. Update `SITE.website` in `src/config.ts`
3. Update `public/robots.txt` sitemap URL
4. Deploy via `rsync dist/` to IITD server

---

## AI Workflow Tools

| Tool | Purpose | Status |
|------|---------|--------|
| Freebuff | AI coding agent | ✅ Active |
| Agentation | Visual feedback | ✅ Installed |
| CodeRabbit | AI code review | ✅ Configured |
| GitHub Actions | Auto-deploy | ✅ Active |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v2.2 | 2026-08-27 | Premium motion system, gradient mesh, particles, card effects |
| v2.1 | 2026-08-27 | Enhanced easing curves, accessibility, animation rules |
| v2.0 | 2026-08-26 | Complete rewrite with Astro, Tailwind, 15 pages |
| v1.0 | 2026-08-19 | Original Astro template |

---

## Getting Help

1. Read `website-v2/memory.md` for current state
2. Read `website-v2/rules.md` for guidelines
3. Read `website-v2/architecture.md` for structure
4. Check `website-v2/src/styles/global.css` for animation classes

---

**Last updated:** 2026-08-27
**Maintained by:** CliffVale (GitHub) + AI assistants
