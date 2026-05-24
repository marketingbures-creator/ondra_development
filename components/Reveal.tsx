"use client";

import { useReveal } from "@/lib/useReveal";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useReveal(0.15);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
