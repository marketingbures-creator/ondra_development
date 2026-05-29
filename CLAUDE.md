# Bureš Marketing – Web + Admin

One-page web pro PPC agenturu + administrace poptávek. Doména: **buresmarketing.cz**

## Stack
Next.js 16 (App Router), TypeScript, Tailwind CSS v4, React 19

## Struktura
```
app/
  page.tsx                  ← skládá sekce hlavní stránky
  layout.tsx                ← <html lang="cs">, metadata, fonty
  globals.css               ← Tailwind + scroll-behavior: smooth
  opengraph-image.tsx       ← dynamický OG (1200×630)
  icon.tsx                  ← favicon "B"
  ochrana-osobnich-udaju/
    page.tsx                ← GDPR / privacy policy
  admin/
    page.tsx                ← administrace poptávek (login + dashboard)
  api/
    auth/
      route.ts              ← POST přihlášení, DELETE odhlášení
    inquiries/
      route.ts              ← GET/POST/PATCH/DELETE poptávky
components/
  Nav.tsx                   ← sticky, backdrop-blur po scrollu
  Hero.tsx
  Stats.tsx
  Audience.tsx              ← Pro koho
  Services.tsx              ← Co děláme (hover: scale + indigo bg)
  Process.tsx               ← Jak spolupracujeme
  WhyUs.tsx                 ← Proč my
  Contact.tsx               ← kontakt + poptávkový formulář
  ContactForm.tsx           ← "use client" formulář pro poptávky
  Footer.tsx
  Reveal.tsx                ← wrapper pro fade-in animaci
lib/
  config.ts                 ← typed SiteConfig, jediný zdroj copy
  useReveal.ts              ← IntersectionObserver hook
data/
  inquiries.json            ← lokální úložiště poptávek (v .gitignore)
```

## Příkazy
- `npm run dev` – dev server (http://localhost:3000)
- `npm run build` – production build
- `npm run lint` – ESLint check

## Admin přístupy

Administrace poptávek: `/admin`

| Klíč | Hodnota |
|------|---------|
| URL | `/admin` |
| Uživatel | `admin` |
| Heslo | `bures2026` |
| Env proměnné | `ADMIN_USERNAME`, `ADMIN_PASSWORD` |
| Soubor | `.env.local` |

Na produkci (Vercel) nastavit přes: Settings → Environment Variables.

## Poptávkový systém

- Formulář v kontaktní sekci (jméno, e-mail, telefon, zpráva)
- Data se ukládají do `data/inquiries.json` (lokálně)
- API endpointy:
  - `POST /api/inquiries` – odeslání poptávky (veřejné, bez autorizace)
  - `GET /api/inquiries` – seznam poptávek (vyžaduje login)
  - `PATCH /api/inquiries` – označit přečteno/nepřečteno (vyžaduje login)
  - `DELETE /api/inquiries` – smazat poptávku (vyžaduje login)
- Autorizace přes httpOnly cookie (`admin_token`), platnost 24h

**Omezení:** JSON soubor na Vercel serverless nepřežije redeploy. Pro produkci přejít na Supabase nebo Vercel Postgres.

## Doména a hosting

| | |
|---|---|
| Doména | buresmarketing.cz |
| Registrátor | Wedos |
| Hosting | Vercel (auto-deploy z GitHub) |
| GitHub repo | github.com/marketingbures-creator/ondra_development |
| DNS A záznam | `76.76.21.21` |
| DNS CNAME www | `cname.vercel-dns.com` |

## Konvence
- **Veškerý copy** v `lib/config.ts` (typed `SiteConfig`) – nikdy hardcoded v JSX
- Tón: **vykání**, B2B profesionální, krátké věty, akční slovesa
- Sekce mají `id` pro kotvy: `#pro-koho`, `#sluzby`, `#kontakt`
- Gradient přes Tailwind utility (`bg-gradient-to-br`), ne custom CSS
- Server components default; `"use client"` jen pro interaktivní komponenty (ContactForm, Reveal, Nav scroll)

## Gotchas
- `<html lang="cs">` – kvůli SEO a screen readerům
- Brand "Bureš Marketing" má diakritiku – ověř UTF-8 v meta a OG
- Mailto subject URL-encoded
- Kotvy fungují i bez JS (`<a href="#x">` + CSS smooth scroll)
- Sticky nav: `scroll-margin-top` na sekcích
- Services boxy mají hover efekt: scale 105 % + indigo pozadí + bílý text (duration-300)
