# Design System Document
## Biosensors & Devices Lab — Website

> Last updated: 2026-08-27

---

## 1. Design Principles

1. **Clean & Professional** — Academic credibility, not flashy
2. **Light-Only** — No dark mode (intentional choice)
3. **Mobile-First** — Responsive from 320px to 2560px
4. **Accessible** — WCAG 2.1 AA compliance
5. **Fast** — Minimal animations, no heavy libraries

---

## 2. Color Palette

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Blue 600** | `#2563eb` | Primary actions, links, accents |
| **Blue 700** | `#1d4ed8` | Hover states, stronger emphasis |
| **Blue 50** | `#eff6ff` | Light backgrounds, subtle highlights |
| **Cyan 500** | `#06b6d4` | Secondary accent, gradients |
| **Cyan 400** | `#22d3ee` | Equipment strip accents |

### Neutral Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **White** | `#ffffff` | Page background, card backgrounds |
| **Gray 50** | `#f9fafb` | Section alternation, subtle backgrounds |
| **Gray 100** | `#f3f4f6` | Borders, dividers |
| **Gray 200** | `#e5e7eb` | Lighter borders |
| **Gray 300** | `#d1d5db` | Scrollbar, disabled states |
| **Gray 400** | `#9ca3af` | Placeholder text |
| **Gray 500** | `#6b7280` | Secondary text, labels |
| **Gray 600** | `#4b5563` | Body text |
| **Gray 700** | `#374151` | Emphasized text |
| **Gray 800** | `#1f2937` | Headings, strong text |
| **Gray 900** | `#111827` | Darkest text |
| **Gray 950** | `#030712` | Dark section backgrounds |

### Accent Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Amber 100** | `#fef3c7` | Landmark badge background |
| **Amber 200** | `#fde68a` | Landmark badge border |
| **Amber 300** | `#fcd34d` | Landmark card border |
| **Amber 700** | `#b45309` | Landmark badge text |
| **Yellow 50** | `#fefce8` | Landmark badge gradient |

---

## 3. Typography

### Font Family
```css
--font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 
             'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Font Loading
- **Self-hosted** in `src/assets/fonts/` (Inter-Regular.woff2, Inter-Bold.woff2)
- **Preloaded** in `<head>` via `<link rel="preload">`
- **NOT loaded from Google Fonts** (CSP compliance)

### Font Sizes (Tailwind Scale)
| Class | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 0.75rem (12px) | 1rem | Badges, labels |
| `text-sm` | 0.875rem (14px) | 1.25rem | Secondary text, captions |
| `text-base` | 1rem (16px) | 1.5rem | Body text |
| `text-lg` | 1.125rem (18px) | 1.75rem | Lead paragraphs |
| `text-xl` | 1.25rem (20px) | 1.75rem | Card titles |
| `text-2xl` | 1.5rem (24px) | 2rem | Section subtitles |
| `text-3xl` | 1.875rem (30px) | 2.25rem | Section headings |
| `text-4xl` | 2.25rem (36px) | 2.5rem | Page titles |
| `text-5xl` | 3rem (48px) | 1 | Hero title (sm+) |
| `text-6xl` | 3.75rem (60px) | 1 | Hero title (lg+) |

### Font Weights
| Class | Weight | Usage |
|-------|--------|-------|
| `font-light` | 300 | University name in header |
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Buttons, labels, nav links |
| `font-semibold` | 600 | Card titles, strong text |
| `font-bold` | 700 | Page headings, emphasis |
| `font-extrabold` | 800 | Hero title, stat counters |

---

## 4. Spacing & Layout

### Container Widths
| Class | Max Width | Usage |
|-------|-----------|-------|
| `max-w-5xl` | 64rem (1024px) | Content pages (PI, Funding) |
| `max-w-7xl` | 80rem (1280px) | Full-width pages (Home, Equipment) |

### Section Spacing
| Pattern | Classes | Usage |
|---------|---------|-------|
| Standard section | `py-14 sm:py-20` | Content pages |
| Large section | `py-16` | Home sections |
| Hero section | `py-20 sm:py-28 lg:py-32` | Home hero |
| Compact section | `py-14` | Funding strip |

### Grid Breakpoints
| Breakpoint | Width | Columns |
|------------|-------|---------|
| Default | 0px | 1 column |
| `sm` | 640px | 2 columns |
| `md` | 768px | 2-3 columns |
| `lg` | 1024px | 3-4 columns |

---

## 5. Components

### Cards
```css
/* Standard card */
bg-white rounded-xl border border-gray-100 shadow-sm
hover:shadow-md hover:-translate-y-1 transition-all

/* Featured card (Nature publications) */
border-amber-300 ring-1 ring-amber-200

/* Glow card (cursor tracking) */
glow-card relative bg-white rounded-xl
```

### Buttons
```css
/* Primary button */
px-7 py-3.5 rounded-full bg-blue-600 text-white 
font-medium hover:bg-blue-700 shadow-lg shadow-blue-600/20

/* Secondary button */
px-7 py-3.5 rounded-full border-2 border-gray-200 
text-gray-700 hover:border-blue-300 hover:text-blue-600

/* Press micro-interaction */
btn-press (custom class in global.css)
```

### Badges
```css
/* Standard badge */
px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 text-sm font-medium

/* Landmark badge */
px-2 py-0.5 text-xs font-semibold rounded-full 
bg-gradient-to-r from-amber-100 to-yellow-50 text-amber-700
```

### Icons
```astro
<!-- Standard icon size -->
<IconName className="w-5 h-5" />

<!-- Large icon (page headers) -->
<IconName className="w-8 h-8 text-blue-700" />

<!-- Small icon (inline) -->
<IconName className="w-4 h-4" />
```

---

## 6. Animations

### Scroll Reveal
```css
/* Applied via [data-reveal] attribute */
[data-reveal] {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Hero Entrance
```css
/* Staggered entrance for hero elements */
.hero-enter { animation: hero-enter 0.6s ease-out both; }
.hero-enter-d1 { animation-delay: 0.1s; }
.hero-enter-d2 { animation-delay: 0.2s; }
.hero-enter-d3 { animation-delay: 0.3s; }
```

### View Transitions
```css
/* Cross-document page transitions */
::view-transition-old(root) { animation: vt-fade-out 0.18s; }
::view-transition-new(root) { animation: vt-fade-in 0.26s; }
```

### Reduced Motion
All animations are disabled when `prefers-reduced-motion: reduce` is active.

---

## 7. Responsive Design

### Mobile (< 640px)
- Single column layout
- Hamburger menu (full-screen overlay)
- Smaller font sizes
- Stacked cards

### Tablet (640px - 1024px)
- 2-column grids
- Hamburger menu still visible
- Moderate font sizes

### Desktop (> 1024px)
- 3-4 column grids
- Full horizontal nav
- Hero section with illustration
- Side-by-side layouts

---

## 8. Dark Sections

The "Inside the Lab" equipment strip uses a dark theme:
```css
bg-gray-950  /* Background */
text-white   /* Headings */
text-cyan-400 /* Accent labels */
text-cyan-300 /* Links */
ring-white/10 /* Card borders */
```

---

## 9. Image Specifications

| Type | Dimensions | Format | Notes |
|------|-----------|--------|-------|
| Team avatars | 384px wide | JPG/PNG | Use `<Image width={384}>` |
| Equipment photos | Variable | JPG | Cover images |
| Hero illustration | Variable | SVG | Use `astro:assets` |
| Logo (IITD seal) | 200x200 | PNG | Used in header |
| Funding logos | 450x200 max | SVG/PNG | Grayscale → color hover |
| OG images | 1200x630 | PNG | Auto-generated via Satori |

---

## 10. Animation Quality (from Impeccable + Emil Skills)

### Custom Easing Curves
```css
:root {
  /* Strong ease-out for UI interactions (entering elements) */
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  /* Strong ease-in-out for on-screen movement */
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  /* iOS-like drawer curve */
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
}
```

### Duration Standards
| Element | Duration | Easing |
|---------|----------|--------|
| Button press (:active) | 100-160ms | ease-out |
| Tooltip/popover | 125-200ms | ease-out |
| Dropdown/select | 150-250ms | ease-out |
| Modal/drawer | 200-500ms | ease-out |
| Scroll reveal | 600ms | ease-out |
| Page transition | 180-260ms | cubic-bezier |

### Button Press Pattern
```css
.btn-press {
  transition: transform 160ms var(--ease-out);
}
.btn-press:active {
  transform: scale(0.97);
}
```

### Entry Animation Pattern
```css
/* Never animate from scale(0) — start from 0.95 */
.entering {
  transform: scale(0.95);
  opacity: 0;
  transition: transform 300ms var(--ease-out), opacity 300ms var(--ease-out);
}
.entering.visible {
  transform: scale(1);
  opacity: 1;
}
```

### Blur for Imperfect Crossfades
```css
/* When crossfade feels off, add subtle blur during transition */
.transitioning {
  filter: blur(2px);
  opacity: 0.7;
  transition: filter 200ms ease, opacity 200ms ease;
}
```

### CSS Transitions Over Keyframes
```css
/* Good — interruptible, smooth retargeting */
.toast {
  transition: transform 400ms var(--ease-out);
}
/* Bad — restarts from zero on interruption */
@keyframes slideIn { ... }
```

---

## 11. Design Dials (from Taste-Skill)

Our project uses these specific settings:

```
DESIGN_VARIANCE: 5   — Clean, measured, professional
MOTION_INTENSITY: 4  — Restrained, functional animations
VISUAL_DENSITY: 3    — Academic, airy, readable
```

### What These Mean
- **VARIANCE 5:** Symmetrical layouts, consistent card sizes, predictable patterns
- **MOTION 4:** Scroll-reveal, button press, page transitions — no cinematic effects
- **DENSITY 3:** Generous whitespace, large text, few elements per viewport

### Anti-Slop Checklist
Before shipping any UI, verify:
- [ ] No AI-purple gradients (#a855f7, #8b5cf6)
- [ ] No generic glassmorphism (backdrop-filter everywhere)
- [ ] No three identical feature cards
- [ ] No infinite-loop micro-animations
- [ ] No centered hero over dark mesh background
- [ ] Inter font is intentional (academic site, not lazy default)

---

## 12. Accessibility Quick Reference (from Vercel Guidelines)

### Contrast Ratios
| Element | Minimum | Our Target |
|---------|---------|------------|
| Normal text (< 18px) | 4.5:1 | 7:1 (gray-600 on white) |
| Large text (≥ 18px) | 3:1 | 4.5:1 (gray-800 on white) |
| Interactive elements | 3:1 | 4.5:1 (blue-600 on white) |

### Focus Styles
```css
/* Visible focus ring for keyboard navigation */
:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
```

### Semantic HTML Checklist
- [ ] `<nav>` for navigation
- [ ] `<main>` for primary content
- [ ] `<footer>` for site footer
- [ ] `<article>` for news/publications
- [ ] `<section>` with heading for content blocks
- [ ] Headings in order: h1 → h2 → h3 (never skip)
