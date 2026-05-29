# Doména a mailhosting – zápis nastavení

**Datum:** 29. 5. 2026

## Doména

- **Doména:** buresmarketing.cz
- **Registrátor:** Wedos (objednávka č. 3126248629)
- **Cena:** 193,60 Kč/rok s DPH
- **DNS:** spravované u Wedosu (NSSET WEDOS + DNSSEC)

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

1. Doména `buresmarketing.cz` přidána do Vercelu a přiřazena k projektu `ondra-development`
2. Výchozí Wedos A záznamy (185.8.237.22) a AAAA záznamy smazány
3. Přidán A záznam směřující na Vercel (76.76.21.21)
4. Přidán CNAME záznam pro www subdoménu (cname.vercel-dns.com)
5. MX záznamy pro mailhosting ponechány beze změny
6. Změny aplikovány v DNS administraci Wedosu

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

| Co                | Kde                                    | Přihlášení                   |
|-------------------|----------------------------------------|------------------------------|
| DNS záznamy       | client.wedos.com → DNS                 | Wedos účet (Ondřej Bureš)    |
| E-mailové schránky| client.wedos.com → Mailhosting         | Wedos účet                   |
| Webmail           | WEDOS Webmail (záložka v prohlížeči)   | info@buresmarketing.cz       |
| Web hosting       | vercel.com → ondrej-projects           | Vercel účet                  |
| Zdrojový kód      | GitHub → ondra-development             | GitHub účet                  |

## Zbývá dokončit

- [ ] Založit e-mailovou schránku info@buresmarketing.cz v administraci Wedosu
- [ ] Ověřit, že web na buresmarketing.cz funguje (po DNS propagaci)
- [ ] Ověřit HTTPS certifikát (Vercel nastaví automaticky)
- [ ] Doplnit obsah webu pro Google Ads API audit (IČO, sídlo, popis služeb dle ARES)
- [ ] Založit nový Google účet na @buresmarketing.cz a podat novou žádost o Google Ads API
