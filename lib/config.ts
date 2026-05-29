export type SiteConfig = {
  brand: { name: string; domain: string };
  contact: { email: string; phone: string; phoneDisplay: string };
  owner: { fullName: string; legalForm: string; ico: string; address: string };
  hero: { headline: string; perex: string; cta: string; platforms: string[] };
  audience: {
    title: string;
    items: { title: string; description: string }[];
  };
  services: {
    title: string;
    items: { title: string; description: string }[];
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
    headline: "Zvyšujeme obrat. Snižujeme PNO.",
    perex: "Spravujeme PPC kampaně pro weby a e-shopy. Žádné plané sliby – jen měřitelné výsledky.",
    cta: "Domluvit konzultaci →",
    platforms: ["Google Ads", "Sklik", "Heureka", "Zboží.cz"],
  },
  audience: {
    title: "Pro koho pracujeme",
    items: [
      {
        title: "E-shopy",
        description:
          "Google Ads, Sklik, Heureka, Zboží.cz. Optimalizujeme PNO a maximalizujeme obrat z kampaní.",
      },
      {
        title: "Weby s lead-gen",
        description:
          "B2B služby, formuláře, telefonáty. Přivádíme vám poptávky, které se dají změřit.",
      },
      {
        title: "Lokální podnikatelé",
        description:
          "Google Ads lokálně, Mapy, telefon. Zviditelníme vás tam, kde vaši zákazníci hledají.",
      },
    ],
  },
  services: {
    title: "Co děláme",
    items: [
      {
        title: "Správa PPC kampaní",
        description:
          "Google Ads, Sklik – search, performance max, display. Průběžná optimalizace s jasným cílem.",
      },
      {
        title: "Zbožové vyhledávače",
        description:
          "Heureka, Zboží.cz – feedy, biddování, recenze. Vaše produkty tam, kde je lidé hledají.",
      },
      {
        title: "Audit & konzultace",
        description:
          "Jednorázový průchod účtu s konkrétními doporučeními. Zjistíte, kde unikají peníze.",
      },
      {
        title: "Reporting & atribuce",
        description:
          "Měsíční reporty, GA4, nastavení měření. Víte přesně, co vám kampaně vydělávají.",
      },
    ],
  },
  contactSection: {
    title: "Domluvme si konzultaci",
    perex: "Napište nám nebo zavolejte. Ozveme se do jednoho pracovního dne.",
  },
  footer: {
    privacyHref: "/ochrana-osobnich-udaju",
  },
};
