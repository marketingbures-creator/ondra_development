import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Ochrana osobních údajů – ${siteConfig.brand.name}`,
  description: "Podmínky ochrany osobních údajů.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
        >
          ← Zpět na hlavní stránku
        </Link>

        <h1 className="mt-8 text-3xl font-bold text-gray-900">
          Podmínky ochrany osobních údajů
        </h1>

        <div className="mt-8 space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              I. Základní ustanovení
            </h2>
            <ol className="mt-3 list-inside list-decimal space-y-2">
              <li>
                Správcem osobních údajů ve smyslu nařízení Evropského parlamentu
                a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se
                zpracováním osobních údajů (dále jen{" "}
                <strong>&bdquo;GDPR&ldquo;</strong>) je:
                <p className="mt-2 ml-6">
                  <strong>Ondřej Bureš</strong>
                  <br />
                  Příčná 959, 539 73 Skuteč
                  <br />
                  IČO: 09371320
                  <br />
                  E-mail:{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-indigo-600 hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <br />
                  Telefon:{" "}
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-indigo-600 hover:underline"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </p>
              </li>
              <li>
                Osobními údaji se rozumí veškeré informace o identifikované nebo
                identifikovatelné fyzické osobě; identifikovatelnou fyzickou
                osobou je osoba, kterou lze přímo či nepřímo identifikovat,
                zejména odkazem na určitý identifikátor (jméno, číslo, síťový
                identifikátor apod.).
              </li>
              <li>Správce nejmenoval pověřence pro ochranu osobních údajů.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              II. Zdroje a rozsah zpracovávaných údajů
            </h2>
            <ol className="mt-3 list-inside list-decimal space-y-2">
              <li>
                Tento web nepoužívá cookies, analytické nástroje ani kontaktní
                formuláře. Osobní údaje nejsou shromažďovány automaticky.
              </li>
              <li>
                Správce zpracovává údaje, které mu poskytnete dobrovolně
                prostřednictvím e-mailu nebo telefonu:
                <ul className="mt-2 ml-6 list-inside list-disc space-y-1">
                  <li>jméno a příjmení,</li>
                  <li>e-mailová adresa,</li>
                  <li>telefonní číslo,</li>
                  <li>obsah vaší zprávy či poptávky.</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              III. Zákonný důvod a účel zpracování
            </h2>
            <ol className="mt-3 list-inside list-decimal space-y-2">
              <li>
                Zákonným důvodem zpracování osobních údajů je:
                <ul className="mt-2 ml-6 list-inside list-disc space-y-1">
                  <li>
                    <strong>oprávněný zájem správce</strong> dle čl. 6 odst. 1
                    písm. f) GDPR – odpověď na vaši poptávku či dotaz,
                  </li>
                  <li>
                    <strong>plnění smlouvy</strong> dle čl. 6 odst. 1 písm. b)
                    GDPR – poskytování sjednaných služeb,
                  </li>
                  <li>
                    <strong>plnění právní povinnosti</strong> dle čl. 6 odst. 1
                    písm. c) GDPR – vedení účetnictví a daňové evidence.
                  </li>
                </ul>
              </li>
              <li>
                Účelem zpracování je vyřízení vaší poptávky, komunikace ohledně
                poskytování služeb a plnění zákonných povinností.
              </li>
              <li>
                Při zpracování osobních údajů nedochází k automatizovanému
                rozhodování ani profilování.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              IV. Doba uchovávání údajů
            </h2>
            <ol className="mt-3 list-inside list-decimal space-y-2">
              <li>
                <strong>Poptávky bez navázání spolupráce</strong> – údaje jsou
                uchovávány nejdéle 12 měsíců od posledního kontaktu a poté
                vymazány.
              </li>
              <li>
                <strong>Údaje související s plněním smlouvy</strong> – po dobu
                trvání obchodního vztahu a dále po dobu stanovenou příslušnými
                právními předpisy (zejména daňovými a účetními).
              </li>
              <li>
                Po uplynutí doby uchovávání správce osobní údaje vymaže.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              V. Příjemci osobních údajů (třetí strany)
            </h2>
            <ol className="mt-3 list-inside list-decimal space-y-2">
              <li>
                Správce nepředává osobní údaje třetím stranám s výjimkou
                případů, kdy mu to ukládá zákon, nebo pokud je to nezbytné pro
                poskytnutí služby.
              </li>
              <li>
                Příjemci údajů mohou být:
                <ul className="mt-2 ml-6 list-inside list-disc space-y-1">
                  <li>poskytovatel účetních služeb,</li>
                  <li>
                    orgány státní správy v zákonem stanovených případech.
                  </li>
                </ul>
              </li>
              <li>
                Správce nemá v úmyslu předávat osobní údaje do třetích zemí mimo
                EU.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              VI. Vaše práva
            </h2>
            <ol className="mt-3 list-inside list-decimal space-y-2">
              <li>
                Za podmínek stanovených v GDPR máte právo:
                <ul className="mt-2 ml-6 list-inside list-disc space-y-1">
                  <li>na přístup ke svým osobním údajům (čl. 15 GDPR),</li>
                  <li>na opravu nepřesných údajů (čl. 16 GDPR),</li>
                  <li>na výmaz údajů (čl. 17 GDPR),</li>
                  <li>na omezení zpracování (čl. 18 GDPR),</li>
                  <li>na přenositelnost údajů (čl. 20 GDPR),</li>
                  <li>vznést námitku proti zpracování (čl. 21 GDPR).</li>
                </ul>
              </li>
              <li>
                Dále máte právo podat stížnost u dozorového úřadu – Úřadu pro
                ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7,{" "}
                <a
                  href="https://www.uoou.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  www.uoou.cz
                </a>
                .
              </li>
              <li>
                Svá práva můžete uplatnit e-mailem na{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-indigo-600 hover:underline"
                >
                  {siteConfig.contact.email}
                </a>{" "}
                nebo písemně na adrese správce.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              VII. Zabezpečení osobních údajů
            </h2>
            <ol className="mt-3 list-inside list-decimal space-y-2">
              <li>
                Správce prohlašuje, že přijal veškerá vhodná technická a
                organizační opatření k zabezpečení osobních údajů.
              </li>
              <li>
                Správce přijal opatření k zabezpečení datových úložišť,
                zejména zabezpečení přístupu heslem, používání šifrované
                komunikace a pravidelné zálohování.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              VIII. Závěrečná ustanovení
            </h2>
            <ol className="mt-3 list-inside list-decimal space-y-2">
              <li>
                Správce je oprávněn tyto podmínky změnit. Novou verzi podmínek
                zveřejní na těchto stránkách.
              </li>
              <li>
                Tyto podmínky nabývají účinnosti dnem jejich zveřejnění.
              </li>
            </ol>
          </section>

          <p className="pt-4 text-sm text-gray-500">
            Poslední aktualizace: 24. 5. 2026
          </p>
        </div>
      </div>
    </div>
  );
}
