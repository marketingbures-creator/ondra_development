import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";

export default function Services() {
  const { services } = siteConfig;

  return (
    <section id="sluzby" className="scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            {services.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {services.items.map((item) => (
            <Reveal key={item.title}>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
