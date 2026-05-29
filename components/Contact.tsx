import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { contactSection, contact } = siteConfig;

  return (
    <section
      id="kontakt"
      className="scroll-mt-20 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            {contactSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/80">
            {contactSection.perex}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Nebo nás kontaktujte přímo</h3>
                <div className="mt-4 space-y-3">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 text-white/80 transition hover:text-white"
                  >
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-3 text-white/80 transition hover:text-white"
                  >
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="space-y-1 text-sm text-white/60">
                  <p>
                    {siteConfig.owner.fullName} · {siteConfig.owner.legalForm} · IČO{" "}
                    {siteConfig.owner.ico}
                  </p>
                  <p>{siteConfig.owner.address}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
