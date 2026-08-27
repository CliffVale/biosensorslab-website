# Project Memory
## Biosensors & Devices Lab — Website

> Last updated: 2026-08-27
> This file tracks what has been completed, what's in progress, and current state.

---

## Current Status

| Item | Status |
|------|--------|
| **Build** | ✅ Passing (`npm run build` succeeds) |
| **Version** | v2.2 — Premium motion system |
| **Deploy** | ✅ GitHub Pages (auto-deploy on push) |
| **Current URL** | https://cliffvale.github.io/biosensorslab/ |
| **Target URL** | biosensorslab.iitd.ac.in (pending) |
| **Pages** | 15 pages + 404 = 16 total |
| **Publications** | 19 papers (from BibTeX) |
| **Team Members** | 10+ (check src/content/team/) |
| **Equipment** | 21 instruments |
| **Patents** | 8 filings |

---

## What's Been Completed

### Core Infrastructure
- [x] Astro project initialized from Scholar-Lite template
- [x] Tailwind CSS v4 configured via Vite plugin
- [x] React integration for interactive components
- [x] Content collection schemas defined
- [x] Base path set to `/biosensorslab`
- [x] GitHub Actions auto-deploy workflow
- [x] BibTeX import pipeline (`scripts/import-bibtex.js`)
- [x] Pagefind search integration
- [x] OG image generation (Satori + Sharp)

### Pages Built
- [x] Home page (hero, stats, research, publications, news, equipment, funding)
- [x] Research page + 4 detail pages
- [x] PI page (Dr. Naveen Kumar Singh)
- [x] Publications page (19 papers)
- [x] Patents page (8 filings)
- [x] Equipment page (21 instruments)
- [x] Team page + detail pages
- [x] Funding page (6 agencies)
- [x] Courses page
- [x] Gallery page
- [x] News page + detail pages
- [x] Important Links page
- [x] Contact page
- [x] Join Us page
- [x] Search page
- [x] 404 error page

### v2.2 Enhancements (2026-08-27)
- [x] Hero: Animated gradient mesh background
- [x] Hero: Floating particle animation (hidden on mobile)
- [x] Hero: Gradient text effect on title
- [x] Hero: Floating badge animation
- [x] Hero: Full-viewport height with flex centering
- [x] Cards: Premium hover with gradient border reveal
- [x] Cards: Deep shadow on hover (translateY -8px)
- [x] Section headers: Animated underline on hover
- [x] Buttons: Premium hover with glow shadow
- [x] Buttons: Shine overlay on hover
- [x] Stats: Glow effect on hover
- [x] Publications: Premium card treatment
- [x] News: Premium card treatment
- [x] Equipment: Animated underline header
- [x] Funding: Uppercase tracking label
- [x] Mobile: Particles hidden, mesh static, faster transitions
- [x] Added 15+ new CSS utility classes
- [x] Added section-wave divider CSS
- [x] Added reveal-up/left/scale animation variants

### v2.1 Enhancements (2026-08-27)
- [x] Custom CSS easing curves (--ease-out, --ease-in-out, --ease-drawer, --ease-page)
- [x] Button press: scale(0.97) with 160ms ease-out
- [x] Scroll-reveal: enhanced easing + staggered grid children
- [x] Focus-visible styles for keyboard navigation
- [x] Mobile menu: fade + slide + staggered link entrance
- [x] Glow-card cursor tracking with radial gradient
- [x] Night-photo hover transitions
- [x] Signal trace SVG animation
- [x] Comprehensive reduced-motion overrides
- [x] Anti-slop rules merged into rules.md
- [x] Accessibility rules merged into rules.md
- [x] Animation quality rules merged into rules.md
- [x] AI_SKILLS_ANALYSIS.md created

### Visual Polish
- [x] Scroll-reveal animations (`[data-reveal]`)
- [x] Hero entrance animation
- [x] Native View Transitions
- [x] Stat counter animation (count-up)
- [x] Glow-card cursor tracking
- [x] Button press micro-interaction
- [x] Active nav state
- [x] Mobile menu with focus trap
- [x] Skip-to-content accessibility link
- [x] Custom scrollbar styling
- [x] Night-mode equipment strip
- [x] Funding logos grayscale → color
- [x] Landmark badge on Nature papers

### SEO & Meta
- [x] Canonical tags
- [x] robots.txt
- [x] Sitemap
- [x] Schema.org structured data
- [x] OG images for all pages
- [x] Self-hosted Inter font (no Google Fonts)

### AI Workflow Tools
- [x] Agentation installed (visual feedback)
- [x] CodeRabbit configured (AI code review)
- [x] Freebuff session (current)
- [x] SETUP_GUIDE.md created
- [x] PRD.md created
- [x] architecture.md created
- [x] rules.md created
- [x] phases.md created
- [x] design.md created
- [x] memory.md created (this file)

---

## What's In Progress

### Currently Working On
- **This session:** Setting up AI workflow tools + documentation
- **Next:** Verify Agentation works in dev mode
- **Next:** Install CodeRabbit GitHub App

### Blocked / Waiting
- [ ] IITD domain provisioning (waiting for faculty request)
- [ ] Bhrigu Ranjan photo (unreadable image file)
- [ ] ANRF high-res logo (only low-res available)

---

## What's Next (Priority Order)

### High Priority
1. **Verify build passes** — Run `npm run build` and confirm
2. **Install CodeRabbit GitHub App** — Go to coderabbit.ai
3. **Test Agentation** — Run `npm run dev`, click elements, paste to Freebuff
4. **Performance audit** — Run Lighthouse, fix any issues

### Medium Priority
5. **Image optimization** — Convert to WebP, add lazy loading
6. **Accessibility audit** — Run axe-core, fix issues
7. **Add analytics** — Google Analytics or Plausible

### Low Priority
8. **Dark mode toggle** (if PI requests)
9. **Publications filter** (by year/topic)
10. **Google Scholar integration**

---

## Key Files Reference

### Configuration
| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro config (base path, integrations) |
| `src/config.ts` | Site metadata, nav, hero, lab info |
| `src/content.config.ts` | Content collection schemas |
| `.coderabbit.yaml` | AI code review config |
| `.github/workflows/deploy.yml` | CI/CD pipeline |

### Layout & Components
| File | Purpose |
|------|---------|
| `src/layouts/Layout.astro` | Main layout (head, header, footer, SEO) |
| `src/components/Header.astro` | Sticky header + mobile menu |
| `src/components/PublicationItem.astro` | Publication card |
| `src/components/TeamCard.astro` | Team member card |
| `src/components/AgentationWrapper.tsx` | React wrapper (dev only) |

### Styles
| File | Purpose |
|------|---------|
| `src/styles/global.css` | Tailwind + custom animations |

### Content
| Directory | Content |
|-----------|---------|
| `src/content/publications/` | Auto-generated from BibTeX |
| `src/content/research/` | 4 research areas |
| `src/content/team/` | Team member profiles |
| `src/content/news/` | Lab news items |
| `src/content/patents/` | Patent filings |
| `src/content/equipment/` | Lab instruments |

### Assets
| Directory | Content |
|-----------|---------|
| `src/assets/fonts/` | Self-hosted Inter (woff2) |
| `src/assets/branding/` | IITD seal, lab banner |
| `src/assets/equipment/` | Equipment photos (21) |
| `src/assets/team/` | Team member photos |
| `src/assets/funding/` | Funding agency logos |
| `public/funding-logos/` | Funding logos (string paths) |

---

## Common Issues & Fixes

### Build Error: "Unterminated string literal"
**Cause:** `import` statements placed after variable declarations in frontmatter.
**Fix:** Move all `import` statements to the TOP of the `---` frontmatter block.

### Build Error: Tailwind CSS not processing
**Cause:** Using expressions in `<style>` tags.
**Fix:** Move styles to `global.css` or use Tailwind utility classes.

### Image not loading
**Cause:** Using raw `<img>` instead of `astro:assets` `<Image>`.
**Fix:** Use `<Image src={importedAsset} ... />` pattern.

### Link not working
**Cause:** Missing `basePath` prefix.
**Fix:** Use `basePath + '/route'` for all internal links.

### Mobile menu not closing
**Cause:** Resize threshold mismatch.
**Fix:** Ensure resize handler checks `window.innerWidth >= 1024` (matches `lg:` breakpoint).

---

## Git History (Recent)

| Commit | Description |
|--------|-------------|
| `2c865a0` | Polish & content refresh: view-transitions, scroll-reveal, hero entrance, Patents page |
| `617ac49` | Base-path fix: funding logos, research/news/team breadcrumbs |
| `c1b7722` | Add GitHub Pages Actions deploy; base-path fixes |
| `e68b11f` | Add PI/Funding/Courses/Gallery/Links/Contact pages; wire nav |
| `9ce0bf5` | Baseline: Astro template + verified content |

---

## Notes for AI Assistants

1. **Read this file FIRST** before making changes
2. **Check build status** — Run `npm run build` before and after changes
3. **Follow rules.md** — Strict guidelines for this project
4. **Update this file** — After completing any significant work
5. **No dark mode** — This is light-only by design
6. **Self-hosted fonts** — Never add Google Fonts CDN
7. **basePath required** — All internal links need `/biosensorslab/` prefix
