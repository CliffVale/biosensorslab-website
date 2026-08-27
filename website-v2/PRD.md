# Product Requirements Document (PRD)
## Biosensors & Devices Lab — Website

> Last updated: 2026-08-27

---

## 1. Vision

A **professional, fast, static academic lab website** for the Biosensors & Devices Lab at the Centre for Biomedical Engineering (CBME), Indian Institute of Technology Delhi. The site serves as the lab's primary online presence for researchers, students, collaborators, and funding agencies.

---

## 2. Target Users

| Persona | Needs |
|---------|-------|
| **Prospective PhD/MTech students** | Learn about lab research, publications, team culture; find "Join Us" info |
| **Postdoc applicants** | Review PI profile, ongoing projects, funding, lab equipment |
| **Research collaborators** | Explore research areas, publications, patents, contact PI |
| **Funding agencies (ICMR, DBT, ANRF, etc.)** | Verify lab credibility, view funded work, equipment |
| **Current lab members** | Update own profiles, view team, find internal links |
| **General academic audience** | Discover the lab through search engines (SEO) |

---

## 3. Features (Current + Planned)

### 3.1 Pages (15 total — all implemented)

| Page | Route | Content |
|------|-------|---------|
| Home | `/` | Hero, stat counters, research areas teaser, selected publications, latest news, equipment strip, funding logos |
| Research | `/research` | 4 research areas with detail pages (`/research/[slug]`) |
| PI | `/pi` | Dr. Naveen Kumar Singh — bio, education timeline, honors |
| Publications | `/publications` | 19 papers from BibTeX, filterable by year/type |
| Patents | `/patents` | 8 patent filings |
| Equipment | `/equipment` | 21 instruments with photos and descriptions |
| Team | `/team` | Current members with detail pages (`/team/[slug]`) |
| Funding | `/funding` | 6 funding agency logos + grant acknowledgements |
| Courses | `/courses` | Academic courses offered |
| Gallery | `/gallery` | Lab photos |
| News | `/news` | Lab updates with detail pages (`/news/[slug]`) |
| Important Links | `/important-links` | External resources |
| Contact | `/contact` | Lab address, email, map |
| Join Us | `/join` | Application instructions for prospective members |
| Search | `/search` | Full-text search (Pagefind) |
| 404 | `/404` | Branded error page with CTAs |

### 3.2 Core Functionality

- **Static site generation** — All pages pre-rendered at build time
- **BibTeX import** — `citations.bib` auto-imported to `src/content/publications/`
- **Full-text search** — Pagefind indexes all pages at build time
- **OG images** — Auto-generated per page via Satori + Sharp
- **SEO** — Canonical tags, structured data (Schema.org), sitemap, robots.txt
- **Responsive** — Mobile-first design, hamburger menu at `<1024px`
- **Accessibility** — Skip-to-content link, ARIA labels, `prefers-reduced-motion` support
- **Performance** — Inlined CSS, optimized images via `astro:assets`, font preloading

### 3.3 Planned (Not Yet Implemented)

- [ ] Custom domain: `biosensorslab.iitd.ac.in` (pending IITD CSC provisioning)
- [ ] Google Analytics / Plausible integration
- [ ] Dark mode toggle (currently light-only by design choice)
- [ ] Publications filter by year/topic on the publications page
- [ ] Bhrigu Ranjan team photo (needs readable photo file)
- [ ] ANRF logo replacement with high-res version

---

## 4. Content Structure

All content lives in `src/content/` as Markdown collections:

```
src/content/
├── publications/    # Auto-generated from citations.bib
├── research/        # 4 research areas (markdown frontmatter + body)
├── team/            # Team member profiles
├── news/            # Lab news items
├── patents/         # Patent filings
├── equipment/       # Lab instruments
└── books/           # (empty, reserved)
```

### Content Schema (`src/content.config.ts`)
Each collection has typed frontmatter fields defined via `defineCollection()` with Zod schemas.

---

## 5. Deployment

| Item | Details |
|------|---------|
| **Current** | GitHub Pages at `cliffvale.github.io/biosensorslab/` |
| **Target** | `biosensorslab.iitd.ac.in` (CSC virtual web hosting) |
| **CI/CD** | GitHub Actions — auto-deploy on push to `main` |
| **Build output** | `dist/` directory (static HTML/CSS/JS) |

### Deployment Checklist (when switching to IITD domain)
1. Set `base: '/'` in `astro.config.mjs`
2. Update `SITE.website` in `src/config.ts`
3. Update Sitemap URL in `public/robots.txt`
4. Run `rsync dist/` to IITD server via SSH
5. Run `chgrp -R _biosensorslab` on server files

---

## 6. Success Metrics

- [ ] All pages load in < 2 seconds on 3G
- [ ] Lighthouse score > 90 across all categories
- [ ] Zero console errors in production
- [ ] All 15 pages indexed by Google
- [ ] PI approval on visual design
- [ ] Team members can update their own profiles via PR

---

## 7. Non-Goals

- No dynamic features (no user login, no comments, no CMS)
- No backend/database
- No dark mode (intentional design choice for light-only)
- No e-commerce or booking functionality
- No multi-language support (English only)
