# Biosensors & Devices Lab — Website Project Context

> **Handoff reference.** Anyone (human or agent) can read this file to understand
> the project state, decisions, and where everything lives. Last updated: 2026-08-19.

## 1. Project Purpose
Official website for **Biosensors & Devices Lab, IIT Delhi** — PI **Dr. Naveen Kumar
Singh**, Centre for Biomedical Engineering (CBME). Replaces the old Google Sites site:
`https://sites.google.com/view/biosensorslab/home?authuser=1`.
**Rules: verified data only, no fabrication. Get PI approval before any deploy.**

## 2. Directory Layout
```
/home/cliff/Documents/Biosensors_and_devices_lab/
├── CONTEXT.md                  <- this file (handoff reference)
├── PROJECT_LOG.md              <- chronological work log
├── source-assets/              <- ALL raw source images/logos/scrapes (records)
│   ├── equipment-photos-original/  100 original phone photos (20260806_*.jpg)
│   ├── funding-logos-original/     raw downloaded funding logos
│   └── oldsite-images/             raw scrapes from old Google Sites (imgs.txt URL lists,
│                                   url-XX.img = original CDN downloads by size)
└── website/                    <- Astro 5.16.2 project (source of truth for build)
    └── src/assets/
        ├── equipment/  (21 optimized jpg covers, ~3MB total from ~71MB)
        ├── team/       (11 member avatar jpgs from old site)
        ├── branding/   (iitd-seal.png 300x300, iitd-official-logo.png 200x200,
        │                lab-logo-banner.png 1094x527 "Biosensors IIT-Delhi & Devices",
        │                links-banner.jpg, funding-banner.jpg)
        ├── gallery/    (6 old-site photos: newyear2025, birthday2025, labview, team1-3)
        └── funding/    (icmr-logo.svg, dbt-logo.png, dhr-logo.jpg, bc-logo.svg,
                         anrf-logo.png 71x36 LOW-RES — ANRF logo needs replacement)
```

## 3. Tech Stack & Build
- **Astro 5.16.2** (as-shipped, DO NOT upgrade), Tailwind 4 via `@tailwindcss/vite`, React.
- i18n English-only (`SITE.i18n.enabled = false`).
- Build: `npm run build` = `node scripts/import-bibtex.js && astro build && pagefind --site dist` → **32 pages**.
- Type check: `npx astro check` (keep clean).
- Local preview: `python3 -m http.server 8088 --directory dist` (restart after rebuilds).
- Playwright is NOT a project dep — use `/home/cliff/.config/opencode/skills/playwright-skill/node_modules/playwright/index.mjs`.
- Test scripts: `/tmp/opencode/site-test/` (check.mjs, find404.mjs, functional.mjs, shots.mjs, ogverify.mjs). **Note: /tmp gets cleaned periodically — scripts may need re-creating.**

## 4. Content Inventory (verified)
- **Publications:** 19 verified via Crossref; `note={selected}` on UroSmart
  (10.1016/j.biosx.2026.100807), Nature Biotech HAS (10.1038/s41587-023-01973-8),
  cortisol patch (10.1016/j.bios.2023.115097).
- **Equipment:** 21 items / 21 markdown files, all with `cover:` → `../../assets/equipment/<slug>.jpg`.
- **Team:** 12 md files (11 with old-site avatar jpgs; PI keeps avatar-nks.png).
  ⚠ **Bhrigu Ranjan not yet added** (no bio/photo). ⚠ Roster-count discrepancy
  (user expects 9–10 current; site shows 7 current + PI) — confirm with user.
- **PI bio (verified from Wix):** B.Tech 2007–11 Allahabad Agric. Univ.; M.Tech 2011–13
  BITS Pilani; PhD 2013–19 IIT Guwahati; UCSD ECE postdoc 2019–22 (Drew Hall); Bath
  visiting scholar 2017 (Pedro Estrela); XPRIZE PanDemiX 2020; NIH RADx 2020;
  Newton-Bhabha 2017; GATE 2011 90.8 %ile. **No fabricated patents** ("5+ patents" text only).
- **Courses (old site):** BML 800, BML 830, BMV 703, BML 890, BMP 743.
- **Gallery (old site):** New Year 2025, Naveen sir birthday 2025, lab view.
- **Important links (old site):** aptamer database banner (url-05 = "One stop for all Aptamer data").
- **Contact (old site):** nks@iitd.ac.in, +011 2659 1152, old addr GPF 34 (use carefully;
  lab now at GPL-9, "lab relocating").
- **Funding bodies requested:** ICMR, DBT, ANRF, ICMR-DHR (DHR), British Council, IIT Delhi.

## 5. Funding Logos — STATUS (2026-08-19)
| Agency | File | Source | Status |
|---|---|---|---|
| ICMR | icmr-logo.svg | icmr.gov.in static (new identity) | ✅ |
| DBT | dbt-logo.png 450x200 | anrfonline.in imlinks (official) | ✅ |
| ICMR-DHR | dhr-logo.jpg 542x166 | schemes.dhr.gov.in | ✅ |
| British Council | bc-logo.svg | Wikimedia Commons (official) | ✅ |
| IIT Delhi | iitd-official-logo.png 200x200 | home.iitd.ac.in | ✅ |
| ANRF | anrf-logo.png 71x36 | anrfonline.in | ⚠ LOW-RES; official logo unveiled ESTC 2025 — **replace from FB/LinkedIn post or anrfonline.in header** |

## 6. Site Structure — CURRENT vs REQUIRED
Current nav: Home, Research, Publications, Equipment, Team, News, Join Us, Search.
**Required (old-site sections + new):** Home, Research, **PI**, Publications, Equipment,
Team, News, **Courses**, **Gallery**, **Important Links**, **Contact**, **Funding**, Join Us, Search.
- `SITE.nav` in `src/config.ts`; `iconMap` in `src/components/Header.astro`
  (lucide-react icons; desktop nav `hidden md:flex gap-6` — may switch to `lg:flex` for ~13 items).
- **PI page, Courses, Gallery, Important Links, Contact, Funding pages NOT YET BUILT.**
- Header/footer/favicon still show template branding (`/assets/logo-lab.jpg`, `favicon.svg`, `/n.svg`).

## 7. Open Items / Blockers
1. ANRF high-res logo (above).
2. Build PI, Courses, Gallery, Important Links, Contact, Funding pages + nav wiring.
3. Wire IITD seal + lab banner into Header/footer/favicon.
4. Add Bhrigu Ranjan team entry.
5. Rebuild → astro check → Playwright verify (check.mjs, find404.mjs, functional.mjs, shots.mjs)
   → screenshots → present to user for PI approval.
6. **No deploy until Dr. Naveen approves.** Deploy target planned: `biosensorslab.iitd.ac.in`.
7. /tmp cleanup risk: keep all needed images inside project `src/assets/` (done).

## 8. How to Resume
1. `cd /home/cliff/Documents/Biosensors_and_devices_lab/website`
2. Make edits, run `npm run build` (32 pages), `npx astro check`.
3. Preview on :8088, Playwright-verify, screenshot.
4. Log every step in PROJECT_LOG.md.
