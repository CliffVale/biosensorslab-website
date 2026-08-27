# AI Design Skills & Tools — Deep Analysis
## Biosensors & Devices Lab — Website

> Last updated: 2026-08-27

---

## Tools Analyzed

| Tool | GitHub | Stars | Type | Cost |
|------|--------|-------|------|------|
| Screenshot-to-Code | abi/screenshot-to-code | 72K+ | Image→Code converter | Needs API keys |
| Awesome Design.md | VoltAgent/awesome-design-md | 15K+ | DESIGN.md collection | Free |
| Vercel web-design-guidelines | vercel-labs/agent-skills | 10K+ | Design rules skill | Free |
| Taste-Skill | leonxlnx/taste-skill | 80K+ | Anti-slop frontend skill | Free |
| Emil Kowalski Skills | emilkowalski/skills | 5K+ | Design engineering philosophy | Free |
| Impeccable | pbakaus/impeccable | 50K+ | Design language + 23 commands | Free |

---

## 1. Screenshot-to-Code (abi/screenshot-to-code)

### What It Does
Converts screenshots, mockups, Figma designs, and screen recordings into clean HTML/Tailwind/React code using AI.

### Relevance to Our Project
**LOW** — We already have:
- Agentation for visual feedback (click → annotate → tell Freebuff)
- Freebuff for code generation from natural language
- A well-established Astro/Tailwind codebase

### Why Not Useful
- Requires API keys (OpenAI/Anthropic/Gemini) — **not free**
- Generates standalone HTML, not Astro components
- Our site is already built; we need maintenance, not prototyping
- Agentation + Freebuff covers the same workflow for free

### Verdict: SKIP

---

## 2. Awesome Design.md (VoltAgent/awesome-design-md)

### What It Does
Collection of DESIGN.md files extracted from real brand design systems (Stripe, Linear, Vercel, Notion, etc.). Drop one into your project and AI agents generate matching UI.

### Relevance to Our Project
**MEDIUM** — Our `design.md` already exists and is comprehensive. However:
- Could reference Stripe/Linear patterns for academic credibility
- Some token patterns could enhance our design system

### What We Already Have
- `design.md` — Colors, typography, spacing, components, animations
- `rules.md` — What to use/avoid
- Tailwind CSS v4 utility classes

### What This Adds
- Brand-specific design token patterns
- Inspiration for academic/research lab aesthetic

### Verdict: REFERENCE ONLY — No installation needed. Our design.md is already better for our specific use case.

---

## 3. Vercel web-design-guidelines

### What It Does
100+ rules covering accessibility, focus handling, forms, animation, typography, images, performance, navigation, and UX theming. Installed as an AI skill.

### Relevance to Our Project
**HIGH** — This directly enhances our accessibility and performance:

| Rule Area | Our Current State | Gap |
|-----------|------------------|-----|
| Accessibility | Basic (skip-to-content, ARIA) | Need focus management, form labels |
| Performance | Good (static, inlined CSS) | Need image optimization rules |
| Typography | Good (Inter, scale) | Need line-height rules |
| Animation | Good (reduced-motion safe) | Need spring physics rules |
| Forms | Basic (Join Us page) | Need validation patterns |

### Key Rules We Should Adopt
1. **Focus management** — Tab order, focus trap in modals
2. **Image optimization** — Alt text, lazy loading, aspect ratios
3. **Form validation** — Error messages, aria-invalid
4. **Color contrast** — WCAG AA compliance checks
5. **Reduced motion** — Already handled, but can strengthen

### Verdict: INSTALL — Add key rules to our rules.md

---

## 4. Taste-Skill (leonxlnx/taste-skill)

### What It Does
Anti-slop frontend skill. Stops AI from generating boring, generic UI. Covers layout, typography, motion, spacing, and design-system fit.

### Relevance to Our Project
**HIGH** — This directly addresses the "AI slop" problem:

| Anti-Slop Rule | Our Application |
|----------------|-----------------|
| No AI-purple gradients | ✅ We use blue-600/cyan-500 |
| No centered hero over dark mesh | ✅ We use light gradient |
| No three equal feature cards | ✅ We use varied layouts |
| No generic glassmorphism | ✅ We use solid backgrounds |
| No Inter + slate-900 default | ✅ We use Inter + gray-900 |

### Key Principles to Adopt
1. **Brief inference** — Read the room before designing
2. **Design dials** — Variance/Motion/Density configuration
3. **Anti-default discipline** — Don't fall into LLM defaults
4. **Typography discipline** — Inter is acceptable for academic sites

### Verdict: INSTALL — Add anti-slop rules to our rules.md

---

## 5. Emil Kowalski Skills (emilkowalski/skills)

### What It Does
Design engineering philosophy on UI polish, component design, animation decisions, and invisible details.

### Relevance to Our Project
**MEDIUM** — We already have animations, but this adds depth:

| Emil's Rule | Our Current State |
|-------------|-------------------|
| Never animate keyboard-initiated actions | ✅ Not applicable |
| Ease-out for entering elements | ✅ We use ease-out |
| Spring animations for drag | ❌ No drag interactions |
| scale(0.97) on button press | ✅ We have .btn-press |
| Tooltips: skip delay on subsequent | ❌ No tooltips |
| @starting-style for entry | ❌ Not used |

### Key Principles to Adopt
1. **Animation frequency rule** — 100+ times/day = no animation
2. **Custom easing curves** — Replace default CSS easings
3. **Button press feedback** — scale(0.97) on :active
4. **Blur for imperfect transitions** — filter: blur(2px)

### Verdict: PARTIAL — Add animation rules to our design.md

---

## 6. Impeccable (pbakaus/impeccable)

### What It Does
The most comprehensive design skill: 23 commands, 59 detector rules, live browser iteration. Covers design, critique, audit, polish, animate, colorize, typeset, layout, delight.

### Relevance to Our Project
**HIGH** — This is the most complete design quality tool:

| Command | Our Use Case |
|---------|-------------|
| `critique` | Review our current pages |
| `audit` | Accessibility + performance check |
| `polish` | Final quality pass |
| `animate` | Enhance our animations |
| `typeset` | Improve typography hierarchy |
| `layout` | Fix spacing rhythm |

### Key Features
- **59 deterministic detector rules** — Automated design quality checks
- **Live browser iteration** — Pick elements, generate alternatives
- **PRODUCT.md + DESIGN.md** — Structured design documentation

### Verdict: INSTALL — Add detector rules to our rules.md

---

## Comparison Matrix

| Feature | Our Setup | Taste-Skill | Impeccable | Vercel Guidelines | Emil Skills |
|---------|-----------|-------------|------------|-------------------|-------------|
| Anti-slop rules | ❌ | ✅ | ✅ | ❌ | ❌ |
| Accessibility | Basic | ❌ | ✅ | ✅ | ❌ |
| Animation philosophy | Basic | ❌ | ✅ | ✅ | ✅ |
| Typography rules | Basic | ✅ | ✅ | ✅ | ❌ |
| Design tokens | Basic | ❌ | ✅ | ❌ | ❌ |
| Live iteration | ❌ | ❌ | ✅ | ❌ | ❌ |
| Audit/detection | ❌ | ❌ | ✅ | ✅ | ❌ |
| Free | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## Recommendation

### Install These Skills (in order of priority)

1. **Taste-Skill** — Anti-slop rules (most relevant for our academic site)
2. **Vercel web-design-guidelines** — Accessibility + performance rules
3. **Impeccable** — Design audit + detector rules

### Skip These

1. **Screenshot-to-Code** — Requires paid API keys, not needed
2. **Awesome Design.md** — Reference only, our design.md is better
3. **Emil Skills** — Overlap with what we already have

---

## Implementation Plan

1. Create `.agents/skills/` directory
2. Install Taste-Skill anti-slop rules
3. Install Vercel web-design-guidelines rules
4. Install Impeccable detector rules
5. Merge relevant rules into our `rules.md` and `design.md`
