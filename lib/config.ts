export type SiteConfig = {
  brand: { name: string; domain: string };
  contact: { email: string; phone: string; phoneDisplay: string };
  owner: { fullName: string; legalForm: string; ico: string; address: string };
  hero: {
    headline: string;
    subheadline: string;
    perex: string;
    cta: string;
    ctaSecondary: string;
    platforms: string[];
  };
  stats: { value: string; label: string }[];
  audience: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; description: string }[];
  };
  services: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; description: string }[];
  };
  process: {
    title: string;
    subtitle: string;
    items: { step: string; title: string; description: string }[];
  };
  whyUs: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; description: string }[];
  };
  contactSection: { title: string; perex: string };
  footer: { privacyHref: string };
};

export const siteConfig: SiteConfig = {
  brand: {
    name: "Bureš Marketing",
    domain: "buresmarketing.cz",
  },
  contact: {
    email: "info@buresmarketing.cz",
    phone: "+420604324767",
    phoneDisplay: "+420 604 324 767",
  },
  owner: {
    fullName: "Ondřej Bureš",
    legalForm: "OSVČ",
    ico: "09371320",
    address: "Příčná 959, 539 73 Skuteč",
  },
  hero: {
    headline: "Váš rozpočet si zaslouží víc než jen kliky.",
    subheadline: "Zvyšujeme obrat. Snižujeme PNO.",
    perex: "Spravujeme PPC kampaně pro e-shopy a weby. Každou korunu měříme, vyhodnocujeme a optimalizujeme – abyste věděli, co vám reklama skutečně vydělává.",
    cta: "Nezávazná konzultace zdarma →",
    ctaSecondary: "Jak spolupracujeme ↓",
    platforms: ["Google Ads", "Sklik", "Heureka", "Zboží.cz"],
  },
  stats: [
    { value: "100 %", label: "Transparentní reporting" },
    { value: "0 Kč", label: "Za úvodní konzultaci" },
    { value: "Bez", label: "Dlouhodobých závazků" },
    { value: "24h", label: "Maximální doba odezvy" },
  ],
  audience: {
    title: "Pro koho pracujeme",
    subtitle:
      "Pomáháme firmám, které chtějí růst online – a vědět přesně, za co platí.",
    items: [
      {
        icon: "cart",
        title: "E-shopy",
        description:
          "Google Ads, Sklik, Heureka, Zboží.cz. Optimalizujeme PNO a maximalizujeme obrat z kampaní. Pracujeme s feedy, remarketingem i Performance Max.",
      },
      {
        icon: "target",
        title: "Weby s lead-gen",
        description:
          "B2B služby, formuláře, telefonáty. Přivádíme vám poptávky, které se dají změřit. Sledujeme konverze až po uzavřený obchod.",
      },
      {
        icon: "pin",
        title: "Lokální podnikatelé",
        description:
          "Google Ads lokálně, Mapy, telefon. Zviditelníme vás tam, kde vaši zákazníci hledají. Ideální pro řemeslníky, lékaře a restaurace.",
      },
    ],
  },
  services: {
    title: "Co pro vás uděláme",
    subtitle:
      "Kompletní správa online reklamy od auditu přes nastavení až po měsíční optimalizaci.",
    items: [
      {
        icon: "search",
        title: "Správa PPC kampaní",
        description:
          "Google Ads, Sklik – search, Performance Max, display, remarketing. Průběžná optimalizace s jasným cílem: víc konverzí za méně peněz.",
      },
      {
        icon: "shopping",
        title: "Zbožové srovnávače",
        description:
          "Heureka, Zboží.cz – feedy, biddování, recenze. Vaše produkty viditelné tam, kde se zákazníci rozhodují o nákupu.",
      },
      {
        icon: "audit",
        title: "Audit & konzultace",
        description:
          "Jednorázový průchod účtu s konkrétními doporučeními. Zjistíte, kde unikají peníze a kde je prostor pro růst.",
      },
      {
        icon: "chart",
        title: "Reporting & měření",
        description:
          "Měsíční reporty srozumitelné i pro nespecialisty. GA4, nastavení konverzí, atribuční modely. Víte přesně, co funguje.",
      },
    ],
  },
  process: {
    title: "Jak spolupracujeme",
    subtitle:
      "Jasný proces od prvního hovoru po měsíční optimalizaci. Žádné překvapení.",
    items: [
      {
        step: "01",
        title: "Úvodní konzultace",
        description:
          "Zdarma probereme vaše cíle, rozpočet a aktuální stav. Řekneme vám, jestli a jak vám PPC pomůže.",
      },
      {
        step: "02",
        title: "Audit & strategie",
        description:
          "Analyzujeme trh, konkurenci a vaše stávající kampaně. Navrhneme strategii šitou na míru.",
      },
      {
        step: "03",
        title: "Spuštění kampaní",
        description:
          "Nastavíme kampaně, měření konverzí a reporty. Vše odsouhlasíte předem, nic nespustíme bez vašeho OK.",
      },
      {
        step: "04",
        title: "Optimalizace & reporting",
        description:
          "Každý měsíc vyhodnocujeme data, optimalizujeme a posíláme srozumitelný report. Vždy víte, na čem jste.",
      },
    ],
  },
  whyUs: {
    title: "Proč spolupracovat s námi",
    subtitle: "Nejsme velká agentura s desítkami klientů. A to je naše výhoda.",
    items: [
      {
        icon: "person",
        title: "Osobní přístup",
        description:
          "Komunikujete přímo se specialistou, ne s account managerem. Znám vaše kampaně do detailu.",
      },
      {
        icon: "eye",
        title: "Plná transparentnost",
        description:
          "Máte přístup ke všem účtům a datům. Žádné skryté poplatky, žádné vendor lock-in.",
      },
      {
        icon: "handshake",
        title: "Bez dlouhodobých smluv",
        description:
          "Spolupráce měsíc od měsíce. Zůstáváte, protože vidíte výsledky – ne protože musíte.",
      },
      {
        icon: "rocket",
        title: "Data místo dojmů",
        description:
          "Každé rozhodnutí podkládám čísly. Měřím, co funguje, a řežu, co ne. Váš rozpočet pracuje naplno.",
      },
    ],
  },
  contactSection: {
    title: "Pojďme to probrat",
    perex:
      "Napište nebo zavolejte. Úvodní konzultace je zdarma a nezávazná – zjistíme, jestli vám PPC dává smysl.",
  },
  footer: {
    privacyHref: "/ochrana-osobnich-udaju",
  },
};
