import { siteConfig } from "@/lib/config";

export default function Stats() {
  const { stats } = siteConfig;

  return (
    <section className="border-b border-gray-100 bg-white px-6 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-extrabold text-indigo-700 sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
