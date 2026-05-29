import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";

export default function Contact() {
  const { contactSection, contact } = siteConfig;
  const mailtoSubject = encodeURIComponent("Konzultace PPC");

  return (
    <section
      id="kontakt"
      className="scroll-mt-20 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">
            {contactSection.title}
          </h2>
          <p className="mt-4 text-lg text-white/80">{contactSection.perex}</p>
        </Reveal>
        <Reveal>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${contact.email}?subject=${mailtoSubject}`}
              className="inline-block w-full rounded-full bg-white px-8 py-3.5 text-center font-semibold text-indigo-700 shadow-lg transition hover:bg-gray-100 hover:shadow-xl sm:w-auto"
            >
              Napsat e-mail
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="inline-block w-full rounded-full border-2 border-white px-8 py-3.5 text-center font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Zavolat {contact.phoneDisplay}
            </a>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-8 space-y-1 text-sm text-white/60">
            <p>{contact.email}</p>
            <p>{contact.phoneDisplay}</p>
            <p className="mt-3">
              {siteConfig.owner.fullName} · {siteConfig.owner.legalForm} · IČO{" "}
              {siteConfig.owner.ico}
            </p>
            <p>{siteConfig.owner.address}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
