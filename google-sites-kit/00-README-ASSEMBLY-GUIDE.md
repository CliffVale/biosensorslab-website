# Google Sites Assembly Kit — Biosensors & Devices Lab, IIT Delhi

Use this kit to rebuild the lab website **inside Google Sites** (the required platform).
The Astro prototype in `../website/` and the screenshots in `../preview-screenshots/` are the
visual reference — this kit contains the exact verified text + images to paste.

> **Why manual?** Google Sites (new) has no public API and no way to upload a static site.
> Assembly is done in the Sites editor. Time: ~2–3 hours for one careful pass.

---

## 1. Create the site

1. Go to https://sites.google.com → **+ Create** (Blank site).
2. Name: **Biosensors & Devices Lab** · Web address: use the lab's preferred slug
   (e.g. `biosensorslab` → https://sites.google.com/view/biosensorslab).
3. In **Settings → General**, set the site layout to one of the "**Simple**" themes
   (cleanest for a lab), accent color = IITD blue (#2C5CA8 or the provided palette).

## 2. Page structure (14 pages, bottom-up order)

Create pages under the horizontal nav (Add → **New page**):

| # | Page name (nav label) | Slug (recommended) |
|---|---|---|
| 1 | Home | `/` |
| 2 | Research | `/research` |
| 3 | PI | `/pi` |
| 4 | Publications | `/publications` |
| 5 | Equipment | `/equipment` |
| 6 | Team | `/team` |
| 7 | Funding | `/funding` |
| 8 | Courses | `/courses` |
| 9 | Gallery | `/gallery` |
| 10 | News | `/news` |
| 11 | Important Links | `/important-links` |
| 12 | Contact | `/contact` |
| 13 | Join Us | `/join` |
| 14 | Search | skip (not available in Google Sites) |

## 3. Build each page

For every page: open `page-content/<page>.md`, copy the text into the page,
insert the matching images from `images/` (mapping below).

### Image placement map

| Page | Images (from `images/`) | Where |
|---|---|---|
| Home | `banners/lab-logo-banner.png` | Hero banner at top |
| Home | `banners/funding-banner.jpg` | Below hero (optional) |
| PI | `team/dr-naveen-kumar-singh*` (avatar) | Right column, photo card |
| PI | `logos/iitd-seal.png` | Small, beside photo |
| Funding | `logos/icmr-logo.svg`, `dbt-logo.png`, `dhr-logo.jpg`, `bc-logo.svg`, `anrf-logo.png`, `iitd-official-logo.png` | One row of 6 logo cards |
| Courses | — | Text only |
| Gallery | `gallery/gallery-newyear2025.jpg`, `gallery-birthday2025.jpg`, `gallery-labview.jpg`, `gallery-team1.jpg`, `gallery-team2.jpg`, `gallery-team3.jpg` | Photo grid |
| News | use `news/` text only | — |
| Important Links | `banners/links-banner.jpg` | Banner at top (aptamer database) |
| Contact | — | Text only |
| Equipment | `equipment/*.jpg` (21 files, one per item) | Card per item, image + name + short desc |
| Team | `team/*` (11 avatars) | Card per member |

> **Google Sites image note:** SVG logos (ICMR, British Council) may not upload.
> Use the PNG/JPG where available, or screenshot the SVG → save as PNG first.
> For crisp logos, upload the largest file you have.

## 4. Verified-content rules (do not deviate)

- **Publications**: `page-content/publications.md` — 19 verified papers (Crossref-checked).
  Only 3 are marked **Selected** (UroSmart, Nature Biotechnology HAS, cortisol patch) —
  keep that distinction.
- **PI bio**: `page-content/pi.md` — every date/fact verified (B.Tech 2007–11 Allahabad
  Agricultural Univ.; M.Tech 2011–13 BITS Pilani; PhD 2013–19 IIT Guwahati; UCSD postdoc
  2019–22; Bath visiting scholar 2017; XPRIZE PanDemiX 2020; NIH RADx 2020; Newton-Bhabha
  2017; GATE 2011, 90.8 %ile). The "5+ patents" line is a *claim from the old site* —
  keep only if the PI confirms.
- **Contact**: `nks@iitd.ac.in`, +91 11 2659 1152, GPL-9 room (lab relocating — verify
  before publishing). Old GPF-34 address is outdated.
- **Team**: 7 current + PI (11 avatars). Open item: Bhrigu Ranjan (Master Student) needs
  a bio/photo; Sutapa Ghosh listed as past-member vs current — confirm roster with PI.
- **Important Links**: the aptamer-database URL was a banner with NO recoverable link —
  use `https://aptamer.icmb.utexas.edu/` (public aptamer database) only with PI approval,
  or link the CBME/IITD homepages.

## 5. Finishing touches

- Header: set site logo to `logos/iitd-seal.png` (IIT Delhi seal).
- Footer: paste the contact block from `page-content/contact.md`
  (email, phone, address, "Room GPL-9 — lab relocating" note).
- **Preview on mobile**: use the Google Sites preview toggle — check nothing overflows.
- Publish: Settings → Publish. Keep domain as `sites.google.com/view/biosensorslab`
  (or whatever PI approves). `biosensorslab.iitd.ac.in` requires IITD CSC — separate task.

## 6. After publishing

- Paste the live URL into `PROJECT_LOG.md` so the prototype ↔ live mapping stays documented.
- The Astro prototype stays in `../website/` — it can be regenerated (new screenshots,
  design tweaks) and re-exported to this kit whenever content changes.
