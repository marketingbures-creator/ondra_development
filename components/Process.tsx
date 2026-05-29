import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";

export default function Process() {
  const { process } = siteConfig;

  return (
    <section id="jak-to-funguje" className="scroll-mt-20 bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            {process.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-500">
            {process.subtitle}
          </p>
        </Reveal>
        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-indigo-200 md:left-1/2 md:block" />
          <div className="space-y-12">
            {process.items.map((item, i) => (
              <Reveal key={item.step}>
                <div
                  className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    {i % 2 === 0 && (
                      <div className="rounded-2xl bg-white p-6 shadow-sm md:ml-auto md:max-w-md">
                        <p className="text-sm font-bold uppercase tracking-wider text-indigo-500">
                          Krok {item.step}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="mt-2 leading-relaxed text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="relative z-10 hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-700 text-lg font-bold text-white shadow-lg md:flex">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    {i % 2 === 1 && (
                      <div className="rounded-2xl bg-white p-6 shadow-sm md:max-w-md">
                        <p className="text-sm font-bold uppercase tracking-wider text-indigo-500">
                          Krok {item.step}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="mt-2 leading-relaxed text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    )}
                    {i % 2 === 0 && <div className="hidden md:block" />}
                  </div>
                  <div className="flex items-center gap-4 md:hidden">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-700 text-sm font-bold text-white">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
