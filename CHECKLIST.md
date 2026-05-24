# Checklist – Bureš.cz One-page

## Setup
- [ ] Next.js projekt vytvořen (`create-next-app` s TS + Tailwind + App Router)
- [ ] `<html lang="cs">` v `app/layout.tsx`
- [ ] Dev server běží na :3000

## Konfigurace
- [ ] `lib/config.ts` s typovaným `SiteConfig` (brand, contact, hero, audience, services, contactSection, footer)
- [ ] Placeholdery: `info@bures.cz`, `+420 777 000 000`, IČO prázdné

## Sekce
- [ ] **Sticky Nav** – brand vlevo, kotvy vpravo, `backdrop-blur` po scrollu
- [ ] **Hero** – headline, perex, CTA, platforms strip
- [ ] **Pro koho** (#pro-koho) – 3 karty
- [ ] **Co děláme** (#sluzby) – 4 služby
- [ ] **Kontakt** (#kontakt) – mailto + tel tlačítka
- [ ] **Footer** – copyright (dynamický rok), IČO (volitelně), odkaz GDPR

## Vizuál & UX
- [ ] Moderní gradient konzistentně napříč webem
- [ ] Smooth scroll + `scroll-margin-top` (kotvy neskáčou za sticky nav)
- [ ] Fade-in animace sekcí při scrollu (`Reveal` + `useReveal`)
- [ ] Tón: vykání, B2B, krátké věty
- [ ] Responsive: 375 / 768 / 1440 px
- [ ] Kontrast textu ≥ 4.5:1 (WCAG AA)

## SEO & meta
- [ ] Title, description, canonical, twitter card
- [ ] Dynamický OG image (`/opengraph-image`) – 1200×630 s brandem
- [ ] Favicon SVG "B"

## Kvalita
- [ ] `npm run build` bez chyb
- [ ] `npm run lint` bez warnings
- [ ] Lighthouse mobile: Perf ≥ 90, A11y ≥ 95, SEO ≥ 95, Best Practices ≥ 95
- [ ] Změna v `lib/config.ts` se hned projeví v UI

## Finalizace
- [ ] DONE.md vytvořen
- [ ] Git commit (`feat: initial one-page website`)
