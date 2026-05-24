import { siteConfig } from "@/lib/config";

export default function Footer() {
  const { brand, footer } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 px-6 py-8 text-center text-sm text-gray-400">
      <div className="mx-auto max-w-6xl space-y-2">
        <p>
          &copy; {year} {brand.name}
          {footer.ico ? ` · IČO ${footer.ico}` : ""}
        </p>
        <a
          href={footer.privacyHref}
          className="text-gray-500 transition hover:text-gray-300"
        >
          Ochrana osobních údajů
        </a>
      </div>
    </footer>
  );
}
