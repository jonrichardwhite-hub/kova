# Kova

Autonomous pharmacy platform. This repo holds the **design handoff bundle** from claude.ai/design and a **Next.js app** that mounts the design system and the kiosk prototype.

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
│           └── kiosk/      Components.jsx, kiosk.css, demo.html (full prototype)
└── app/                    Next.js App Router
    ├── app/
    │   ├── layout.jsx      Global shell + NavTabs
    │   ├── globals.css     Reset + app-chrome + imports bundle CSS
    │   ├── page.jsx        /          Marketing home
    │   ├── kiosk/page.jsx  /kiosk     Iframes the bundle's kiosk demo
    │   ├── system/page.jsx /system    Grid of preview-card iframes
    │   └── _components/NavTabs.jsx
    ├── public/ds/          Synced copy of bundle static assets (gitignored)
    ├── scripts/sync-ds.mjs Copies preview/, kiosk demo, CSS into public/ds/
    ├── jsconfig.json       @ds/* -> ../kova-design-system/project/*
    ├── next.config.mjs     Webpack alias for @ds in JSX imports
    └── package.json
```

## Run the app

```bash
cd app
npm install
npm run dev
```

`npm run dev` first runs `predev` which syncs the static portions of the bundle into `app/public/ds/` — preview cards, kiosk demo HTML, CSS, assets. `@ds/*` JSX imports resolve directly to the bundle via the webpack alias, so the bundle stays authoritative for code too.

### Routes

- `/` — Marketing home: `MarketingNav` + hero with device mock + `StatGrid` + `Pillars` + `Footer`.
- `/kiosk` — full kiosk prototype from `kova-design-system/project/ui_kits/kiosk/demo.html` iframed in. 19 step screens covering welcome, verify, clinical check-in, escalate, dispense, out-of-stock/nearby, prep, multi-script, payment, expired-script.
- `/system` — grid of 18 live iframes, one per preview card in `kova-design-system/project/preview/`.

## Conventions from the bundle

Worth reading before editing anything visual:

- [kova-design-system/README.md](kova-design-system/README.md) — voice rules, palette, type, shadows, radii, animation.
- [kova-design-system/project/README.md](kova-design-system/project/README.md) — per-product breakdown (marketing site, kiosk, operator dashboard).
- [kova-design-system/project/reference/kova_design_system.html](kova-design-system/project/reference/kova_design_system.html) — v0.1 authoritative doc.

The tl;dr:

- Playfair Display 200 on hero type. Montserrat body. JetBrains Mono kiosk-only.
- Snow White `#F5F5F0` page. Regatta `#4A79B8` primary accent. Doeskin `#C8B6A6` warm accent.
- Cards: white fill, 12px radius, hairline border, no shadow at rest.
- No emoji. Ever.
- Pharmacist AI is **QIRI** in chat.
