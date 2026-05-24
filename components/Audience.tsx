import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";

export default function Audience() {
  const { audience } = siteConfig;

  return (
    <section id="pro-koho" className="scroll-mt-20 bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            {audience.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {audience.items.map((item) => (
            <Reveal key={item.title}>
              <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md">
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
