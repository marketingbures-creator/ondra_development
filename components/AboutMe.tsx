import Image from "next/image";
import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";

export default function AboutMe() {
  const { aboutMe } = siteConfig;

  return (
    <section id="o-mne" className="scroll-mt-20 bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            {aboutMe.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-100 to-purple-100" />
              <Image
                src={aboutMe.photo}
                alt={aboutMe.subtitle}
                width={400}
                height={500}
                className="relative rounded-2xl object-cover shadow-lg"
                priority
              />
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <p className="text-lg font-semibold text-indigo-600">
                {aboutMe.subtitle}
              </p>
            </Reveal>
            {aboutMe.story.map((paragraph, i) => (
              <Reveal key={i}>
                <p className="leading-relaxed text-gray-600">{paragraph}</p>
              </Reveal>
            ))}
            <Reveal>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {aboutMe.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-xl bg-gray-50 p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-indigo-700">
                      {h.value}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">{h.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
