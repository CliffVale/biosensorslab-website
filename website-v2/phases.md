# Development Phases & Execution Plan
## Biosensors & Devices Lab — Website

> Last updated: 2026-08-27

---

## Phase Overview

```
Phase 0: Foundation          ✅ COMPLETE
Phase 1: Core Content        ✅ COMPLETE
Phase 2: Visual Polish       ✅ COMPLETE
Phase 3: Advanced Features   🔄 IN PROGRESS
Phase 4: Deployment          ⏳ PENDING
Phase 5: Maintenance         ⏳ PENDING
```

---

## Phase 0: Foundation ✅
**Duration:** 1 day | **Status:** Complete

### Goals
- Set up Astro project with Tailwind CSS
- Establish routing, layout, and component patterns
- Configure build pipeline

### Completed Tasks
- [x] Initialize Astro project from Scholar-Lite template
- [x] Configure Tailwind CSS v4 via Vite plugin
- [x] Set up React integration for interactive components
- [x] Create Layout.astro with header, footer, SEO meta
- [x] Create Header.astro with desktop nav + mobile menu
- [x] Set up content collection schemas (`content.config.ts`)
- [x] Configure `astro.config.mjs` with base path `/biosensorslab`
- [x] Set up GitHub Actions deployment workflow
- [x] Self-host Inter font (woff2) with `@font-face`
- [x] Add canonical tags, robots.txt, sitemap

---

## Phase 1: Core Content ✅
**Duration:** 2 days | **Status:** Complete

### Goals
- Build all 15 pages with real lab content
- Import publications from BibTeX
- Add team members, equipment, research areas

### Completed Tasks
- [x] Home page with hero, research teaser, publications, news
- [x] Research page with 4 areas + detail pages
- [x] PI page (Dr. Naveen Kumar Singh bio, timeline)
- [x] Publications page (19 papers from BibTeX import)
- [x] Patents page (8 filings)
- [x] Equipment page (21 instruments with photos)
- [x] Team page with member cards + detail pages
- [x] Funding page (6 agency logos)
- [x] Courses page (BML 8860 + others)
- [x] Gallery page (lab photos)
- [x] News page with detail pages
- [x] Important Links page
- [x] Contact page
- [x] Join Us page
- [x] Search page (Pagefind integration)
- [x] 404 error page

---

## Phase 2: Visual Polish ✅
**Duration:** 1 day | **Status:** Complete

### Goals
- Add animations, micro-interactions, and visual polish
- Ensure responsive design and accessibility
- OG image generation

### Completed Tasks
- [x] Scroll-reveal animations (`[data-reveal]`)
- [x] Hero entrance animation (kinetic words, staggered fade)
- [x] Native View Transitions (cross-document)
- [x] Stat counter animation (count-up on scroll)
- [x] Glow-card cursor tracking effect
- [x] Button press micro-interaction (`.btn-press`)
- [x] Active nav state (underline + aria-current)
- [x] Mobile menu with full-screen overlay + focus trap
- [x] Mobile menu close at 1024px (matches `lg:` breakpoint)
- [x] Responsive grid layouts (1→2→3→4 columns)
- [x] Skip-to-content accessibility link
- [x] OG image generation for all pages
- [x] Schema.org structured data (ResearchOrganization, Person)
- [x] Custom scrollbar styling
- [x] Night-mode equipment strip (dark section)
- [x] Funding logos grayscale → color hover
- [x] Landmark badge on Nature publications

---

## Phase 3: Advanced Features 🔄
**Duration:** Ongoing | **Status:** In Progress

### Goals
- AI-assisted development workflow
- Code quality automation
- Performance optimization

### Completed Tasks
- [x] Agentation installed (visual feedback tool)
- [x] CodeRabbit configured (AI code review)
- [x] GitHub Actions auto-deploy workflow
- [x] SETUP_GUIDE.md created
- [x] PRD.md created
- [x] architecture.md created
- [x] rules.md created
- [x] phases.md created
- [x] design.md created
- [x] memory.md created

### In Progress
- [ ] Verify Agentation works in dev mode
- [ ] Install CodeRabbit GitHub App on repo

### Planned
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit (axe-core)
- [ ] Image optimization pass (WebP conversion)
- [ ] Add Google Analytics / Plausible

---

## Phase 4: Deployment ⏳
**Duration:** 1-2 days | **Status:** Pending

### Goals
- Deploy to IITD domain
- Configure custom domain

### Tasks
- [ ] Request `biosensorslab.iitd.ac.in` from CSC
- [ ] Update `astro.config.mjs` base path to `/`
- [ ] Update `SITE.website` in config
- [ ] Update robots.txt sitemap URL
- [ ] Set up DNS/HTTPS on IITD server
- [ ] Deploy via rsync/SSH
- [ ] Verify all pages on production domain
- [ ] Update Google Scholar with new URL

### Deployment Commands
```bash
# Build
npm run build

# Deploy to IITD server
rsync -avz dist/ user@biosensorslab.iitd.ac.in:/var/www/biosensorslab/https/html/

# Fix permissions on server
ssh user@biosensorslab.iitd.ac.in "chgrp -R _biosensorslab /var/www/biosensorslab/"
```

---

## Phase 5: Maintenance ⏳
**Duration:** Ongoing | **Status:** Pending

### Goals
- Regular content updates
- Performance monitoring
- Security updates

### Recurring Tasks
- **Weekly:** Review CodeRabbit PR feedback
- **Monthly:** Update publications (add new BibTeX entries)
- **Quarterly:** Update team members, equipment, news
- **Annually:** Update copyright year, funding acknowledgements

### Content Update Workflow
```bash
# Add new publication
echo "@article{...}" >> citations.bib
npm run build  # Auto-imports to Markdown
git add citations.bib src/content/publications/
git commit -m "Add new publication: [Title]"
git push  # Auto-deploys
```

### Team Member Update
```bash
# Create new team member file
cat > src/content/team/new-member.md << EOF
---
name: "New Member"
role: "PhD Student"
avatar: "../../assets/team/new-member.jpg"
bio: "Research focus..."
email: "newmember@iitd.ac.in"
EOF
```

---

## Phase Timeline

```
Week 1:  Phase 0 + Phase 1 (Foundation + Core Content)
Week 2:  Phase 2 (Visual Polish)
Week 3:  Phase 3 (Advanced Features) + Phase 4 (Deployment)
Week 4+: Phase 5 (Maintenance)
```

---

## Risk Register

| Risk | Impact | Mitigation |
|------|--------|------------|
| IITD domain delay | Cannot deploy to production | Continue on GitHub Pages |
| Image quality issues | Unprofessional appearance | Use original high-res files |
| Build performance | Slow iteration | Use `astro dev` for development |
| Breaking changes in Astro | Build failures | Pin Astro version, test upgrades |
| Content staleness | Outdated information | Set up monthly review calendar |
