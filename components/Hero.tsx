import { siteConfig } from "@/lib/config";

export default function Hero() {
  const { hero, contact } = siteConfig;
  const mailtoSubject = encodeURIComponent("Konzultace PPC");

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 px-6 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
          {hero.perex}
        </p>
        <a
          href={`mailto:${contact.email}?subject=${mailtoSubject}`}
          className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-base font-semibold text-indigo-700 shadow-lg transition hover:bg-gray-100 hover:shadow-xl"
        >
          {hero.cta}
        </a>
        <p className="mt-6 text-sm tracking-wide text-white/60">
          {hero.platforms.join(" · ")}
        </p>
      </div>
    </section>
  );
}
