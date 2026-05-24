# Úkol: Bureš.cz – One-page web PPC agentury

## Cíl
One-page web pro PPC agenturu **Bureš.cz** – 4 sekce + sticky nav + footer, moderní barevný gradient, result-oriented copy.

## Stack
Next.js 14+ (App Router) + TypeScript + Tailwind CSS + React 18+. Vytvořit přes `create-next-app`.

## Tón komunikace
**Vykání**, B2B profesionální ale ne korporátně suchý. Krátké věty, akční slovesa. Příklady: "Hledáte...", "Spravujeme vám...", "Domluvme si...". Žádný "marketing speak" – přímo a věcně.

## Požadavky – obsah sekcí

### Sticky Nav (v Hero, pak fixed na top při scrollu)
- Vlevo: brand "Bureš.cz" (text logo)
- Vpravo: kotvy `#pro-koho`, `#sluzby`, `#kontakt`
- Po scrollu: blur background (`backdrop-blur`), jemný border-bottom
- Mobile: hamburger NE – jen menší font, kotvy zůstávají vedle sebe

### 1. Hero
- Velký result-oriented headline (návrh: "Zvyšujeme obrat. Snižujeme PNO.")
- Perex 1–2 věty (návrh: "Spravujeme PPC kampaně pro weby a e-shopy. Žádné plané sliby – jen měřitelné výsledky.")
- Primary CTA "Domluvit konzultaci →" (scroll na #kontakt)
- Pod CTA: `Google Ads · Sklik · Heureka · Zboží.cz`

### 2. Pro koho je služba (#pro-koho)
3 karty:
- **E-shopy** – Google Ads, Sklik, Heureka, Zboží.cz, optimalizace PNO
- **Weby s lead-gen** – B2B, služby, formuláře, telefonáty
- **Lokální podnikatelé** – Google Ads lokálně, mapy, telefon

### 3. Co děláme (#sluzby)
4 položky (krátký název + 1–2 věty):
- **Správa PPC kampaní** – Google Ads, Sklik (search, performance max, display)
- **Zbožové vyhledávače** – Heureka, Zboží.cz (feedy, biddování, recenze)
- **Audit & konzultace** – jednorázový průchod účtu s konkrétními doporučeními
- **Reporting & atribuce** – měsíční reporty, GA4, nastavení měření

### 4. Kontakt (#kontakt)
- Nadpis + krátký zvací text
- 2 velká tlačítka (mobile pod sebou):
  - `mailto:` s prefilled subjectem `Konzultace PPC`
  - `tel:` (klikací telefon)
- Pod tím jemně email + telefon textově (copy/paste)
- **Žádný formulář**

### Footer
- Centrovaný, malý font, decentní
- Copyright `© {rok} Bureš.cz` (rok dynamicky)
- IČO placeholder (z configu, lze nechat prázdné = neukázat)
- Odkaz "Ochrana osobních údajů" (zatím `href="#"` placeholder)

## Požadavky – technické

### `lib/config.ts` – typovaný interface
Single source of truth pro celý web. Skeleton (rozšiř podle potřeby):
```ts
export type SiteConfig = {
  brand: { name: string; domain: string }
  contact: { email: string; phone: string; phoneDisplay: string }
  hero: { headline: string; perex: string; cta: string; platforms: string[] }
  audience: { title: string; items: { title: string; description: string }[] }
  services: { title: string; items: { title: string; description: string }[] }
  contactSection: { title: string; perex: string }
  footer: { ico?: string; privacyHref: string }
}
```

### Animace při scrollu
- Subtle fade-in + jemné `translate-y` (~12px) při scrollu sekce do view
- **Bez Framer Motion** – custom hook `lib/useReveal.ts` přes `IntersectionObserver` + Tailwind utility třídy
- Aplikovat na: Audience, Services, Contact (Hero už je viděn při loadu)

### Další
- [ ] `<html lang="cs">` v `app/layout.tsx`
- [ ] Smooth scroll na kotvy (`scroll-behavior: smooth` v `globals.css`)
- [ ] OG image – Next.js dynamic přes `app/opengraph-image.tsx` (1200×630, gradient + brand + headline)
- [ ] SEO metadata (title, description, canonical, OG, twitter card)
- [ ] `next/font` (Inter), bez externích CDN
- [ ] Favicon: SVG "B" na gradientu (`app/icon.tsx` nebo `public/favicon.svg`)
- [ ] Fully responsive (375 / 768 / 1440 px)
- [ ] Kontrast nad gradientem ≥ WCAG AA (4.5:1)

## Acceptance criteria
- [ ] `npm run dev` a `npm run build` bez chyb / warnings
- [ ] `npm run lint` bez warnings
- [ ] Lighthouse mobile: Perf ≥ 90, A11y ≥ 95, SEO ≥ 95, Best Practices ≥ 95
- [ ] Sticky nav viditelný a funkční při scrollu (kotvy skáčou na sekce)
- [ ] Animace sekcí při scrollu fungují (test: F12 → throttle → scroll)
- [ ] `mailto:` a `tel:` otevírají správné aplikace (mobile + desktop)
- [ ] OG image se zobrazí v náhledu (test: `/opengraph-image`)
- [ ] Změna `lib/config.ts` se okamžitě projeví v UI

## Omezení
- **Email** placeholder `info@bures.cz`, **telefon** `+420 777 000 000`, **IČO** prázdné – doplním v configu
- **Žádné UI knihovny** (MUI, Chakra, shadcn) – Tailwind stačí
- **Žádné animační knihovny** (Framer Motion) – jen IntersectionObserver + Tailwind
- Bez analytics, bez cookie banneru (přidám později)
