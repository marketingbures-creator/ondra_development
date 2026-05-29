# Doména a mailhosting – zápis nastavení

**Datum:** 29. 5. 2026
**Poslední aktualizace:** 29. 5. 2026

## Doména

- **Doména:** buresmarketing.cz
- **Registrátor:** Wedos (objednávka č. 3126248629)
- **Cena:** 193,60 Kč/rok s DPH
- **DNS:** spravované u Wedosu (NSSET WEDOS + DNSSEC)
- **Stav:** aktivní, DNS záznamy nakonfigurované, čeká se na propagaci

## Mailhosting

- **Poskytovatel:** Wedos – Mailhosting Individual (5 GB)
- **Cena:** 50 Kč/měsíc bez DPH (~726 Kč/rok s DPH)
- **E-mailová schránka:** info@buresmarketing.cz (nutno založit v administraci Wedosu)
- **DNS záznamy:** MX, SPF, DKIM nastaveny automaticky Wedosem

## Web hosting

- **Hosting:** Vercel (projekt `ondra-development`)
- **Aktuální URL:** https://ondra-development.vercel.app
- **Produkční URL:** https://buresmarketing.cz (po propagaci DNS)
- **Tým:** ondrej-projects
- **Deploy:** automaticky při push do `master` na GitHubu

## Údaje o subjektu (ARES)

- **Jméno:** Ondřej Bureš
- **Právní forma:** OSVČ
- **IČO:** 09371320
- **Sídlo:** Příčná 959, 539 73 Skuteč
- **Datum vzniku:** 29. 7. 2020
- **Kontaktní e-mail (Wedos):** marketing.bures@gmail.com
- **Kontaktní e-mail (web + Google žádost):** info@buresmarketing.cz

## DNS záznamy (Wedos administrace)

| Typ   | Název              | TTL | Hodnota                  | Účel              |
|-------|--------------------|-----|--------------------------|-------------------|
| A     | buresmarketing.cz  | 300 | 76.76.21.21              | Web → Vercel      |
| CNAME | www                | 300 | cname.vercel-dns.com     | www → Vercel      |
| MX    | buresmarketing.cz  | 300 | 10 mx1.wedos.email       | Mail              |
| MX    | buresmarketing.cz  | 300 | 10 mx1.wedos.global      | Mail              |
| MX    | buresmarketing.cz  | 300 | 10 mx1.wedos.com         | Mail              |
| MX    | buresmarketing.cz  | 300 | 10 mx1.wedos.cz          | Mail              |
| MX    | buresmarketing.cz  | 300 | 20 mx1.wedos.online      | Mail              |

## Co bylo provedeno (29. 5. 2026)

### Infrastruktura
1. Doména `buresmarketing.cz` přidána do Vercelu a přiřazena k projektu `ondra-development`
2. Výchozí Wedos A záznamy (185.8.237.22) a AAAA záznamy smazány
3. Přidán A záznam směřující na Vercel (76.76.21.21)
4. Přidán CNAME záznam pro www subdoménu (cname.vercel-dns.com)
5. MX záznamy pro mailhosting ponechány beze změny
6. Změny aplikovány v DNS administraci Wedosu

### Web – aktualizace obsahu
7. Brand změněn z "Bureš.cz" na "Bureš Marketing", doména na buresmarketing.cz
8. E-mail na webu změněn z marketing.bures@gmail.com na info@buresmarketing.cz
9. Přidány údaje z ARES do footeru i kontaktní sekce (jméno, OSVČ, IČO, sídlo)
10. Web rozšířen o nové sekce pro profesionálnější dojem a Google Ads API audit:
    - **Stats bar** – 4 trust signály (transparentní reporting, konzultace zdarma, bez závazků, 24h odezva)
    - **Jak spolupracujeme** – 4-krokový proces (konzultace → audit → spuštění → optimalizace)
    - **Proč my** – 4 odlišovače (osobní přístup, transparentnost, bez smluv, datový přístup)
11. Vylepšeny stávající sekce:
    - Hero: nový headline, subtitle, sekundární CTA, platformy jako badges
    - Audience + Services: přidány SVG ikony, bohatší texty
    - Nav: hamburger menu na mobilu, odkazy na nové sekce
12. Veškerý copy přepracován – konkrétnější, přesvědčivější, B2B profesionální tón

## Struktura webu (aktuální)

```
Nav (sticky, hamburger na mobilu)
├── Hero          – hlavní CTA + platformy
├── Stats         – trust signály (4 metriky)
├── Pro koho      – 3 karty s ikonami (e-shopy, lead-gen, lokální)
├── Co děláme     – 4 karty s ikonami (PPC, srovnávače, audit, reporting)
├── Jak to funguje – timeline 4 kroky
├── Proč my       – 4 karty s ikonami
├── Kontakt       – e-mail + telefon + ARES údaje
└── Footer        – ARES údaje, copyright, ochrana os. údajů
```

## Jak to funguje

```
Uživatel zadá buresmarketing.cz
        ↓
DNS (Wedos) → A záznam → 76.76.21.21
        ↓
Vercel Edge Network → projekt ondra-development
        ↓
Web se zobrazí na https://buresmarketing.cz
```

```
Uživatel pošle e-mail na info@buresmarketing.cz
        ↓
DNS (Wedos) → MX záznamy → Wedos mail servery
        ↓
Wedos Mailhosting → schránka info@buresmarketing.cz
```

## Kde se co spravuje

| Co                 | Kde                                    | Přihlášení                   |
|--------------------|----------------------------------------|------------------------------|
| DNS záznamy        | client.wedos.com → DNS                 | Wedos účet (Ondřej Bureš)    |
| E-mailové schránky | client.wedos.com → Mailhosting         | Wedos účet                   |
| Webmail            | WEDOS Webmail (záložka v prohlížeči)   | info@buresmarketing.cz       |
| Web hosting        | vercel.com → ondrej-projects           | Vercel účet                  |
| Zdrojový kód       | GitHub → ondra-development             | GitHub účet                  |

## Celkové náklady (první rok)

| Položka                | Cena/rok    |
|------------------------|-------------|
| Doména buresmarketing.cz | ~194 Kč  |
| Mailhosting Individual   | ~726 Kč  |
| Vercel (Hobby)           | zdarma   |
| GitHub (Free)            | zdarma   |
| **Celkem**               | **~920 Kč** |

## Zbývá dokončit

- [ ] Založit e-mailovou schránku info@buresmarketing.cz v administraci Wedosu
- [ ] Ověřit, že web na buresmarketing.cz funguje (po DNS propagaci)
- [ ] Ověřit HTTPS certifikát (Vercel nastaví automaticky)
- [x] ~~Doplnit obsah webu pro Google Ads API audit (IČO, sídlo, popis služeb dle ARES)~~
- [ ] Založit nový Google účet na @buresmarketing.cz
- [ ] Podat novou žádost o Google Ads API (z nového Google účtu, s údaji dle ARES)

## Důležité poznámky

- Při změnách DNS záznamů **NESMAZAT** MX, SPF, DKIM záznamy – jinak přestane fungovat e-mail
- Google při auditu reálně klikne na web – nesmí být prázdný nebo "under construction"
- Pro Google Ads API žádost je nutné použít e-mail na @buresmarketing.cz, ne Gmail
- Wedos má 180denní garanci vrácení peněz na Mailhosting
- Údaje na webu (jméno, IČO, sídlo) musí přesně odpovídat ARES
