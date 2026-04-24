# Kova Design System

Design system, brand guidelines, and UI kit for **Kova** — an autonomous pharmacy platform. This folder is the source of truth for designers and AI agents building Kova-branded surfaces.

---

## What is Kova?

Kova is a clinical reasoning platform and an **autonomous dispensing kiosk** for retail pharmacy. The product pairs a fleet of 24/7 kiosks (medication collection, counseling, refill processing) with an AI layer of specialist "Pharma Intelligences" (generalist pharmacy, clinical, oncology, legal, regulatory, patient advocacy). A registered pharmacist is always in the loop via an escalation path — the product tagline on the marketing site is "**autonomous pharmacy, with a pharmacist still in the loop.**"

Positioning for retail pharmacy chain operators is P&L-first: staff leverage, 24/7 trading without 24/7 rosters, and documented override reduction. Positioning for patients is privacy-first, calm, and clinically trustworthy.

### Products represented

1. **Marketing site** (Webflow) — home, product, specialists dropdown, book-a-demo. Playfair Display hero, KOVA wordmark in the nav, 1200px wrap, heavy use of the Regatta accent and Snow White background.
2. **Kiosk product UI** — the in-store touchscreen: script verification, consult/chat with the "QIRI" pharmacist AI, pharmacist escalation, collection confirmation. Denser, 12–13px body type, mono tags for steps + IDs, gradient CTA pill.
3. **Operator dashboard** (implied by the kiosk-node + script-card components) — fleet health, per-kiosk queue + uptime, daily throughput.

---

## Sources

- **Uploaded design system (authoritative):** `reference/kova_design_system.html` — the canonical v0.1 doc sourced from the Webflow SHARED HEAD. Colors, type, buttons, tags, icons all align to this file.
- **Logos:** `uploads/Kova Icon.svg`, `uploads/Kova Full Icon White.svg` (copied into `assets/`).
- **GitHub repo:** `jonrichardwhite-hub/kova` was listed on the install, but the tree endpoint returned **409** (repo is empty or the app lacks content access). No code was imported; flagged below as a caveat.

---

## Index (what lives where)

```
kova-design-system/
├── README.md                      ← you are here
├── SKILL.md                       ← Agent-Skills-compatible entry point
├── colors_and_type.css            ← all CSS vars + semantic type recipes
├── assets/                        ← logos, brand marks (SVG)
│   ├── kova-mark.svg              ← brand-colored mark (Regatta/Alaskan/Doeskin)
│   ├── kova-mark-mono.svg         ← currentColor variant
│   ├── kova-icon.svg              ← original 52×48 icon
│   └── kova-full-icon-white.svg   ← white horizontal lockup on dark
├── reference/
│   └── kova_design_system.html    ← source v0.1 doc (read-only reference)
├── preview/                       ← small HTML cards for the Design System tab
└── ui_kits/
    ├── marketing/                 ← webflow-style marketing site components
    └── kiosk/                     ← in-store touchscreen components
```

---

## Content fundamentals

Kova's voice is **calm, plain, and human**. The product handles high-stakes medication moments — dosing, interactions, collection — and the copy never treats these with drama. It also never patronizes.

**Voice rules**

- **Clear, not clinical.** "Tap below to begin a private consult." Not "Initiate consultation interaction now."
- **Reassuring, not preachy.** "All consultations are encrypted end to end." Not "Don't worry, your information is totally safe with us!"
- **Honest about handoffs.** "A pharmacist will be with you in under 60 seconds." Not "Please wait while we process your request."
- **Action-first CTAs.** "Begin consult." "Confirm pickup." "Talk to a pharmacist." Not "Submit" or "Continue."

**Grammar & casing**

- Sentence case for UI labels, headings, and buttons. Never Title Case.
- Clinical names alongside generics: "Sertraline 50mg" with "Zoloft (generic)" underneath.
- Oxford comma used. Em dashes fine. Periods at end of UI sentences.
- Use "you" addressing the patient. Use "your pharmacists / your P&L" addressing the operator.
- **No emoji** on Kova surfaces. Ever.
- **Avoid stigma language.** Never "patient compliance" — say "medication use" or "how you take this." Never "suffering from." Never "mentally ill."
- Marketing copy uses sharp, numerate hooks — "Three numbers that move the P&L" — then a Playfair serif line, then a plain Montserrat sub. The reveal is always a number or a stark fact, never a teaser.
- **Forbidden words:** synergy, leverage (as a verb), seamless, empower, delight, journey, unlock, revolutionary.

**Pharmacist AI is "QIRI"** in chat — shown as a mono eyebrow `QIRI · PHARMACIST AI` above each AI bubble. QIRI's voice is a degree warmer than the rest of the system but still plain. Never exclamation marks in QIRI's voice. Never "Great question!". Never "I'm happy to help."

---

## Visual foundations

### Palette vibe

Warm, calm, **pharmacy-clean**. The background is **Snow White #F5F5F0** — an off-white with warmth, never pure #FFF at page level. White is reserved for elevated surfaces (cards, inputs). The primary accent **Regatta #4A79B8** is a deep, dusty blue — trustworthy and slightly cool. The warm brand accent **Doeskin #C8B6A6** is a soft taupe. Together they read as "considered medical, not sterile."

**Forbidden:** Qiri magenta gradients, bluish-purple tech gradients, neon greens, "medical white" #FFFFFF as page background.

### Type

- **Display: Playfair Display weight 200** at `-0.025em` letter-spacing. Used on every hero, feature title, and section title. The 200 weight is the character of the brand — airy, literary, unexpected in a clinical product.
- **Body: Montserrat.** Weight 300 for wordmark/greeting, 400 for body, 500 for nav, 600 for small section titles and CTAs.
- **Mono: JetBrains Mono** — kiosk UI only. Tags (`STEP 02 · VERIFY`), kiosk IDs (`K-MELB-014`), meta labels. Never in body copy.
- The **KOVA wordmark** is Montserrat Light at wide `16–18px` letter-spacing — so wide it reads as a logotype, not a word.

### Backgrounds

- **Solid Snow White at page level.** No full-bleed photos, no repeating patterns, no textures.
- Cards sit on Snow White in white with a hairline `border-subtle`. Elevated dialogs get `shadow-md` or `shadow-lg`.
- The only gradient in the system is the **Kiosk CTA button** (`linear-gradient(135deg, #4A79B8, #3A68A0)`) — a subtle 15° darken on the same hue. Never rainbow, never purple.
- Hero visual slots use a *very soft* Regatta → Alaskan blue tint at 8–18% over Snow White, as a placeholder surface.

### Borders

- Hairline by default (`rgba(43,47,54,0.06)` border-subtle on cards, `0.10` on inputs).
- Never colored borders on cards. Status color lives in the fill or in a 3px left border on `info-panel` blocks only.
- Dashed dividers (`1px dashed var(--border-subtle)`) used between list rows in marketing feature cards.

### Corner radii

- **6px** chips/inputs-xs → **8px** inputs/bubbles → **12px** default cards → **16px** hero surfaces → **999px** pills and primary buttons.
- Never sharp corners. Never 4px.

### Shadow system

Five-tier elevation, all *vertical-only* drop shadows in black at low opacity (5–12%). No horizontal offset, no colored shadows, except:

- `shadow-cta` = `0 2px 12px rgba(74,121,184,0.25)` — the Regatta-tinted glow under the kiosk primary button.

### Animation

- **Standard: 200ms `cubic-bezier(.4,0,.2,1)`** on hovers, fills, and position changes.
- **Out-easing: 320ms `cubic-bezier(.16,1,.3,1)`** for panel reveals and chat bubble entries.
- **No bounces.** No spring overshoot. No elastic.
- **Fades not slides** for primary content appearing. Slides only for drawers.
- Respect `prefers-reduced-motion` — kill all non-essential transition.

### Hover / press / focus

- **Primary button hover:** fill darkens from `#2B333D` → `#1a1f26`.
- **Secondary button hover:** inverts — transparent bg → ink fill, ink text → Snow White text.
- **CTA (Regatta) hover:** `#4A79B8` → `#3A68A0`.
- **Card hover (when interactive):** `surface-hover` 4% ink tint over the card.
- **Press state:** no scale transform. No shrink. Just a 50ms darken.
- **Focus:** 2px Regatta outline with 2px offset. Never default browser blue.

### Transparency & blur

- Used sparingly. Text-soft is `rgba(43,51,61,0.7)` and text-muted is solid `#6B7280`.
- Backdrop blur *not used* on Kova surfaces (no glassmorphism).
- CTA tints use alpha over Snow White: `cta-soft 8%`, `cta-mid 18%`, `cta-bg-subtle 6%` — these feel like a ghost of the accent.

### Imagery

- **Warm, documentary, desaturated.** When imagery is eventually added (brief says placeholders are fine), expect natural light, real pharmacists, real patients — not stock. No grain filter. No duotone.
- **Not hand-drawn.** No illustrations. No emoji. No 3D renders.
- Kiosk product screens are always shown as the literal device (dark bezel, portrait orientation).

### Card pattern

A Kova card is: white fill, 12px radius, 1px `border-subtle` hairline, **no shadow at rest**, padding 16–24px based on density. The shadow only appears on truly elevated surfaces (popovers, modals). Avoid drop-shadowing every card — it dilutes the hierarchy.

### Layout rules

- 1200px max-width wrap, `clamp(20px, 5vw, 56px)` horizontal padding.
- Marketing: 48px vertical rhythm between sections, 80px at major breaks.
- Kiosk: portrait 1080×1920, center column capped at 720px, 32px safe margins.
- **No fixed headers** on the kiosk (it confuses touchscreen affordance). Marketing nav is sticky-top on scroll.

### Iconography (approach summary; see below for detail)

24px artboard, 2px stroke, rounded caps and joins, currentColor inheritance. **Lucide-style** — the reference doc uses the Lucide vocabulary.

---

## Iconography

- **System:** the in-house icon set mirrors **Lucide** (24×24, 2px stroke, round cap/join, currentColor). The reference HTML ships 28 hand-picked SVGs across four groups: **Platform**, **Kiosk & care**, **Status & feedback**, **Navigation & system**.
- **Emoji: never.** Not in product, not in marketing, not in docs.
- **Unicode glyphs:** the only sanctioned one is the **middle dot `·`** used as a separator in meta rows (e.g. `Rathdowne St · Carlton VIC`). Not bullets, not arrows.
- **Brand mark as icon:** the Kova mark itself is used as a branded icon — colored variant in nav/hero, mono `currentColor` variant anywhere else an icon appears. Stored at `assets/kova-mark.svg` and `assets/kova-mark-mono.svg`.
- **Delivery:** inline SVG preferred (2–3KB each, inherits color). Load **Lucide via CDN** on any page needing the wider set: `<script src="https://unpkg.com/lucide@latest"></script>` + `lucide.createIcons()`. The reference doc hand-copies the specific Lucide glyphs it needs so they don't require a runtime.
- **Never** use Font Awesome, Material Icons, or hand-drawn SVGs.
- **Stroke weight:** 2px is canonical. Exception: the marketing nav uses 1.6px on its Platform icons to feel lighter at small scale.

### Icons shipped in the reference

`clipboard-rx`, `file-check`, `heart-pulse`, `lightbulb`, `lock`, `scan`, `qr-code`, `chat`, `shield`, `pill`, `video`, `wave`, `check`, `alert-triangle`, `info`, `bell`, `spark`, `trend-up`, `clock`, `search`, `menu`, `x`, `chevron-right`, `chevron-down`, `user`, `phone`, `credit-card`, `calendar`, `map-pin`, `settings`, plus the two brand marks.

---

## ⚠ Caveats

- **GitHub repo `jonrichardwhite-hub/kova` returned 409** on the tree endpoint — likely empty or the App install lacks content access. If the codebase exists elsewhere, reattach it and ping me; I'll pull tokens from code over the Webflow doc if they conflict.
- **Fonts** — Playfair Display, Montserrat, JetBrains Mono all load from Google Fonts CDN in `colors_and_type.css`. No local `.ttf` / `.woff2` was provided. If you have licensed copies, drop them in `fonts/` and I'll swap the `@import` for `@font-face`.
- **No photography** was provided. Marketing hero visuals use a soft blue gradient placeholder.
- **Operator dashboard** is inferred from the kiosk-node + script-card components — no standalone layout was in the reference.

