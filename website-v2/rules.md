# Rules & Guidelines for AI Assistants
## Biosensors & Devices Lab — Website

> Last updated: 2026-08-27
> This file tells AI coding agents (Freebuff, Cursor, Copilot, etc.) HOW to work on this project.

---

## 1. Golden Rules

1. **Always run `npm run build` after changes** to verify no errors.
2. **Never push without user permission.** This is a production website.
3. **Keep files small.** Prefer editing existing files over creating new ones.
4. **Match existing patterns.** Look at similar pages before adding new ones.
5. **No new dependencies without asking.** Every npm install adds weight.

---

## 2. What to USE

### Framework & Build
- **Astro** — The SSG framework. Use `.astro` files for pages/layouts.
- **Tailwind CSS v4** — All styling via utility classes. Use `@apply` sparingly in `global.css`.
- **TypeScript** — All `.ts`/`.tsx` files. Strict mode.
- **React 19** — Only for interactive components (currently Agentation only).

### Content
- **Markdown collections** — Content goes in `src/content/[collection]/`.
- **YAML frontmatter** — Content files use `---` delimited frontmatter.
- **Zod schemas** — Collection schemas defined in `src/content.config.ts`.

### Assets
- **`astro:assets`** — Use `<Image>` component for optimized images. NEVER use raw `<img>` for content images.
- **`src/assets/`** — Vite-imported assets (use `import x from '...'`).
- **`public/`** — Static assets served as-is (use string paths like `/funding-logos/`).

### Icons
- **Lucide React** — Use `<IconName className="w-5 h-5" />` pattern.
- Available icons: `ArrowRight`, `Calendar`, `Landmark`, `Mail`, `Users`, `Search`, `Menu`, `X`, `ChevronRight`, `Home`, `BookOpen`, `FileText`, `FlaskConical`, `Newspaper`, `UserPlus`, `User`, `GraduationCap`, `Camera`, `ExternalLink`, `Phone`, `BadgeCheck`, `Globe`, `Award`, `Microscope`, `Play`, `MonitorPlay`, `Video`, `Sparkles`, `Github`

### Links
- **Internal links** — Always use `basePath + '/route'` pattern.
  ```astro
  <a href={basePath + "/publications"}>...</a>
  ```
- **External links** — Always add `target="_blank" rel="noopener noreferrer"`.
- **`isActive()`** — Use the header's active detection for nav links.

### Animations
- **`[data-reveal]`** — Add to sections for scroll-reveal animation.
- **`.glow-card`** — Add to cards for cursor-following glow effect.
- **`.btn-press`** — Add to buttons for press micro-interaction.
- **`.hero-enter`** — Add to hero elements for entrance animation.
- **Always respect `prefers-reduced-motion`** — CSS guards handle this automatically.

---

## 3. What to AVOID

### Never Do These
- ❌ **Dark mode** — This is a light-only site by design choice.
- ❌ **`target="_blank"` without `rel="noopener noreferrer"`** — Security risk.
- ❌ **Google Fonts CDN** — Fonts are self-hosted in `src/assets/fonts/`.
- ❌ **Inline styles in Astro `<style>` tags with expressions** — Breaks Tailwind build.
- ❌ **Dynamic `import()` in `<style>`** — Astro style tags cannot take expressions.
- ❌ **Backtick template literals in JSX attributes** — Use `style={{'--i': i}}` not `` style={`--i:${i}`} ``.
- ❌ **`import` statements after variable declarations** — ESM requires imports at top of frontmatter.
- ❌ **Raw `<img>` for content images** — Always use `astro:assets` `<Image>`.
- ❌ **String paths for Vite-imported assets** — Use `import x from '...'` for `src/assets/`.
- ❌ **Hardcoded URLs** — Use `basePath` variable for all internal links.
- ❌ **Console.log in production code** — Remove before committing.
- ❌ **Any server-side code** — This is a fully static site.

### Dependencies to Avoid
- ❌ **jQuery** — Not needed. Use vanilla JS or Astro/React.
- ❌ **Moment.js** — Use native `Date` or `Intl.DateTimeFormat`.
- ❌ **CSS-in-JS libraries** — Use Tailwind CSS.
- ❌ **Heavy animation libraries (Framer Motion, GSAP)** — Use CSS animations + IntersectionObserver.
- ❌ **Firebase/Supabase** — No backend needed.
- ❌ **WordPress/CMS** — Static site only.

---

## 4. File Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Pages | `kebab-case.astro` | `important-links.astro` |
| Components | `PascalCase.astro` | `TeamCard.astro` |
| React components | `PascalCase.tsx` | `AgentationWrapper.tsx` |
| Content | `kebab-case.md` | `singh-high-affinity-one-step-aptamer.md` |
| Assets | `kebab-case.jpg` | `tecan-infinite-m-plex.jpg` |
| Config | `camelCase.ts` | `content.config.ts` |
| Styles | `kebab-case.css` | `global.css` |

---

## 5. Code Style

### Astro Components
```astro
---
// 1. Imports (all at top)
import Layout from '../layouts/Layout.astro';
import { Icon } from 'lucide-react';

// 2. Constants
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
---

<!-- 3. Template -->
<Layout title="Page Title">
  <section class="py-14 sm:py-20">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" data-reveal>
      <!-- content -->
    </div>
  </section>
</Layout>
```

### Tailwind Classes (order)
1. Layout: `flex`, `grid`, `gap-*`
2. Box model: `p-*`, `m-*`, `w-*`, `h-*`
3. Typography: `text-*`, `font-*`
4. Colors: `bg-*`, `text-*`, `border-*`
5. Effects: `shadow-*`, `rounded-*`
6. Responsive: `sm:`, `md:`, `lg:`
7. States: `hover:`, `focus:`
8. Transitions: `transition-*`

### Naming
- CSS classes: `kebab-case` (Tailwind utilities)
- Variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE` or `camelCase`
- Files: `kebab-case`

---

## 6. Error Handling

### Build Errors
- **"Unterminated string literal"** — Check for `import` statements after variable declarations in frontmatter. Imports MUST be at the top.
- **"Cannot find module"** — Check file path and case sensitivity.
- **Tailwind build failure** — Don't use expressions in `<style>` tags.
- **TypeScript errors** — Run `npm run lint` (astro check) to diagnose.

### Runtime Errors
- **Image not loading** — Check if using `astro:assets` `<Image>` and correct import path.
- **Link not working** — Verify `basePath` prefix is present.
- **OG image missing** — Check if page is in `supportedOgPages` list in Layout.

---

## 7. Git Workflow

1. **Never commit directly to `main`** — Create a branch for changes.
2. **Commit messages** — Use imperative mood: "Add team member" not "Added team member".
3. **File scope** — Keep commits focused. One logical change per commit.
4. **Pre-commit** — Run `npm run build` to verify.

---

## 8. Deployment

- **Current:** GitHub Pages (auto-deploy on push to `main`)
- **Build command:** `npm run build`
- **Output directory:** `dist/`
- **Base path:** `/biosensorslab/`
- **Site URL:** `https://cliffvale.github.io/biosensorslab/`

### When deploying to IITD domain:
1. Change `base: '/biosensorslab'` → `base: '/'` in `astro.config.mjs`
2. Update `SITE.website` in `src/config.ts`
3. Update `public/robots.txt` Sitemap URL
4. Deploy via `rsync dist/` to IITD server

---

## 9. Testing Checklist

Before any deployment:
- [ ] `npm run build` passes with 0 errors
- [ ] `npm run lint` (astro check) passes with 0 errors
- [ ] All 15 pages render correctly
- [ ] No console errors in browser
- [ ] Mobile menu works (hamburger at < 1024px)
- [ ] Images load correctly
- [ ] Internal links work with `/biosensorslab/` prefix
- [ ] External links open in new tab with `rel="noopener noreferrer"`
- [ ] OG images generate for all pages
- [ ] Search works (Pagefind)
- [ ] Reduced-motion animations disabled

---

## 10. Anti-Slop Rules (from Taste-Skill)

> These rules prevent AI from generating generic, boring UI.

### Design Read (Before Any UI Work)
Before touching code, state in one line:
"Reading this as: <page kind> for <audience>, with a <vibe> language."

**Our default reading:**
"Reading this as: academic lab website for researchers/students, with a clean professional language, leaning toward Tailwind utilities + Inter + restrained motion."

### Anti-Default Discipline
Do NOT default to:
- ❌ AI-purple gradients
- ❌ Centered hero over dark mesh
- ❌ Three equal feature cards
- ❌ Generic glassmorphism on everything
- ❌ Infinite-loop micro-animations
- ❌ Inter + slate-900 (we use Inter + gray-900, which is intentional)

### Design Dials (Our Settings)
```
DESIGN_VARIANCE: 5  (1=Perfect Symmetry, 10=Artsy Chaos)
MOTION_INTENSITY: 4 (1=Static, 10=Cinematic)
VISUAL_DENSITY: 3   (1=Art Gallery, 10=Cockpit)
```
These match an academic/research aesthetic: clean, measured, professional.

### Typography Discipline
- **Serif is VERY DISCOURAGED** as default — only if brand literally names a serif
- **Inter is ACCEPTABLE** for academic/public-sector/accessibility-first sites
- **Default sizes:** text-4xl md:text-6xl for headlines, text-base for body
- **Max width for body text:** max-w-[65ch] for readability

### Layout Rules
- **Grid over Flex-Math** — Never use `w-[calc(33%-1rem)]`, always use CSS Grid
- **Viewport stability** — Never use `h-screen` for hero, use `min-h-[100dvh]`
- **Contain layouts** — Use `max-w-7xl mx-auto` for page containers

---

## 11. Accessibility Rules (from Vercel web-design-guidelines)

### Focus Management
- All interactive elements must be keyboard accessible
- Focus visible outline on all focusable elements
- Focus trap in modals and mobile menu
- Skip-to-content link (already implemented)

### Forms
- All inputs must have associated labels
- Use `aria-describedby` for error messages
- Mark invalid fields with `aria-invalid="true"`
- Required fields marked with `aria-required="true"`

### Images
- All `<img>` must have `alt` text (empty alt for decorative)
- Use `loading="lazy"` for below-fold images
- Specify `width` and `height` to prevent layout shift

### Color & Contrast
- Text must meet WCAG AA contrast ratio (4.5:1 for normal, 3:1 for large)
- Don't convey information through color alone
- Use icons or text alongside color indicators

### Motion
- All animations must respect `prefers-reduced-motion`
- No flashing content (3 flashes per second max)
- Provide pause/stop controls for auto-playing content

### Semantic HTML
- Use `<nav>` for navigation, `<main>` for content, `<footer>` for footer
- Use headings in order (h1 → h2 → h3, never skip)
- Use `<article>` for standalone content (news, publications)

---

## 12. Animation Quality Rules (from Impeccable + Emil Skills)

### Animation Decision Framework
Before writing animation, answer:
1. **Should this animate?** — 100+ times/day = NEVER animate
2. **What's the purpose?** — Spatial consistency, state indication, feedback
3. **What easing?** — ease-out for entering, ease-in-out for movement
4. **How fast?** — UI animations under 300ms

### Duration Guide
| Element | Duration |
|---------|----------|
| Button press | 100-160ms |
| Tooltips | 125-200ms |
| Dropdowns | 150-250ms |
| Modals/drawers | 200-500ms |

### Easing Curves (Custom, Not Default)
```css
/* Strong ease-out for UI interactions */
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
/* Strong ease-in-out for movement */
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
```

### Rules
- **Never use ease-in** for UI animations (feels sluggish)
- **Never animate from scale(0)** — Start from scale(0.95) + opacity
- **Always use transform + opacity** — Never animate width/height/top/left
- **Button press:** Always add `transform: scale(0.97)` on `:active`
- **Use CSS transitions over keyframes** — Interruptions are smoother
- **Add blur for imperfect crossfades** — `filter: blur(2px)` during transition

### Detector Rules (Automated Checks)
```bash
# These patterns should NEVER appear in our code:
grep -r "transition: all" src/          # Specify exact properties
grep -r "ease-in" src/                  # Use ease-out instead
grep -r "scale(0)" src/                 # Use scale(0.95) minimum
grep -r "animation:" src/               # Prefer CSS transitions
grep -r "h-screen" src/                 # Use min-h-[100dvh]
grep -r "w-\[calc" src/                 # Use CSS Grid instead
grep -r "Google Fonts" src/             # Self-host fonts only
```
