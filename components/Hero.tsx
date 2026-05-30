import { siteConfig } from "@/lib/config";

export default function Hero() {
  const { hero, contact } = siteConfig;
  const mailtoSubject = encodeURIComponent("Konzultace PPC");

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 px-6 pt-20 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-200">
          PPC specialista pro e-shopy a weby
        </p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-xl font-semibold text-white/90 sm:text-2xl">
          {hero.subheadline}
        </p>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/75">
          {hero.perex}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${contact.email}?subject=${mailtoSubject}`}
            className="inline-block rounded-full bg-white px-8 py-3.5 text-base font-semibold text-indigo-700 shadow-lg transition hover:bg-gray-100 hover:shadow-xl"
          >
            {hero.cta}
          </a>
          <a
            href="#jak-to-funguje"
            className="inline-block rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
          >
            {hero.ctaSecondary}
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {hero.platforms.map((platform) => (
            <span
              key={platform}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
