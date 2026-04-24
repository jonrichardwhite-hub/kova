# Kova

Autonomous pharmacy platform. This repo holds the **design handoff bundle** from claude.ai/design and a **Vite + React app** that mounts the design system for live preview.

---

## Layout

```
.
├── kova-design-system/     Design handoff bundle — source of truth
│   ├── README.md           Bundle overview, voice rules, visual foundations
│   ├── chats/              Transcripts from the design session
│   └── project/
│       ├── colors_and_type.css
│       ├── assets/         Brand marks (SVG)
│       ├── preview/        Small HTML cards per foundation (colors, type, etc.)
│       ├── reference/      kova_design_system.html (v0.1 authoritative doc)
│       └── ui_kits/
│           ├── marketing/  MarketingNav.jsx, Sections.jsx, site.css, index.html
│           └── kiosk/      Components.jsx, kiosk.css
└── app/                    Vite + React app that mounts the UI kits
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── pages/
    │   │   ├── MarketingHome.jsx
    │   │   ├── KioskDemo.jsx
    │   │   └── DesignSystem.jsx
    │   └── styles/app.css
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Run the app

```bash
cd app
npm install
npm run dev
```

Three tabs:

- **Marketing site** — renders `MarketingNav` + hero w/ device mock + stat grid + pillars + footer.
- **Kiosk** — mounts the kiosk components (`KioskHeader`, `ScriptCard`, `InfoPanel`, `ChatBubble`, `KioskCTA`, `ReplyChips`) inside a device bezel.
- **Design system** — grid of live iframes, one per preview card in `kova-design-system/project/preview/`.

The React app imports the JSX modules directly from the design-system bundle via the `@ds` Vite alias (configured in `vite.config.js`). The bundle is the source of truth; edits should land there and the app picks them up.

## Conventions from the bundle

Worth reading before editing anything visual:

- `kova-design-system/README.md` — voice rules, palette, type, shadows, radii, animation.
- `kova-design-system/project/README.md` — per-product breakdown (marketing site, kiosk, operator dashboard).
- `kova-design-system/project/reference/kova_design_system.html` — v0.1 authoritative doc.

The tl;dr:

- Playfair Display 200 on hero type. Montserrat body. JetBrains Mono kiosk-only.
- Snow White `#F5F5F0` page. Regatta `#4A79B8` primary accent. Doeskin `#C8B6A6` warm accent.
- Cards: white fill, 12px radius, hairline border, no shadow at rest.
- No emoji. Ever.
- Pharmacist AI is **QIRI** in chat.
