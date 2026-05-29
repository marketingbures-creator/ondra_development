import { siteConfig } from "@/lib/config";

export default function Footer() {
  const { brand, owner, contact, footer } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 px-6 py-10 text-sm text-gray-400">
      <div className="mx-auto max-w-6xl space-y-4 text-center">
        <p className="font-medium text-gray-300">
          {owner.fullName} · {owner.legalForm}
        </p>
        <div className="space-y-1">
          <p>IČO {owner.ico}</p>
          <p>{owner.address}</p>
          <p>{contact.email}</p>
        </div>
        <div className="border-t border-gray-800 pt-4">
          <p>
            &copy; {year} {brand.name}
          </p>
          <a
            href={footer.privacyHref}
            className="text-gray-500 transition hover:text-gray-300"
          >
            Ochrana osobních údajů
          </a>
        </div>
      </div>
    </footer>
  );
}
