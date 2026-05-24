# Bureš.cz – One-page web

One-page web pro PPC agenturu. 4 sekce + sticky nav + footer. Sekce: Hero → Pro koho → Co děláme → Kontakt.

## Stack
Next.js 14+ (App Router), TypeScript, Tailwind CSS, React 18+

## Struktura
```
app/
  page.tsx              ← skládá sekce
  layout.tsx            ← <html lang="cs">, metadata, fonty
  globals.css           ← Tailwind + scroll-behavior: smooth
  opengraph-image.tsx   ← dynamický OG (1200×630)
  icon.tsx              ← favicon "B"
components/
  Nav.tsx               ← sticky, backdrop-blur po scrollu
  Hero.tsx
  Audience.tsx          ← Pro koho
  Services.tsx          ← Co děláme
  Contact.tsx
  Footer.tsx
  Reveal.tsx            ← wrapper pro fade-in animaci
lib/
  config.ts             ← typed SiteConfig, jediný zdroj copy
  useReveal.ts          ← IntersectionObserver hook
```

## Příkazy
- `npm run dev` – dev server (http://localhost:3000)
- `npm run build` – production build
- `npm run lint` – ESLint check

## Konvence (projekt-specific)
- **Veškerý copy** v `lib/config.ts` (typed `SiteConfig`) – nikdy hardcoded v JSX
- Tón: **vykání**, B2B profesionální, krátké věty, akční slovesa
- Sekce mají `id` pro kotvy: `#pro-koho`, `#sluzby`, `#kontakt`
- Gradient přes Tailwind utility (`bg-gradient-to-br`), ne custom CSS
- Server components default; `"use client"` jen pro `Reveal.tsx` a sticky nav scroll handler

## Gotchas
- `<html lang="cs">` – kvůli SEO a screen readerům
- Brand "Bureš.cz" má diakritiku – ověř UTF-8 v meta a OG
- Mailto subject URL-encoded (`%20` mezera, `%C3%A1` = "á")
- Kotvy fungují i bez JS (`<a href="#x">` + CSS smooth scroll)
- Sticky nav potřebuje řešit padding pod Hero, aby kotvy nepřeskakovaly za nav (`scroll-margin-top` na sekcích)
