"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20">
          <svg className="h-7 w-7 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white">Odesláno!</h3>
        <p className="mt-2 text-white/70">Ozveme se vám co nejdříve.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-white/60 underline hover:text-white/80"
        >
          Odeslat další poptávku
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-white/80">
            Jméno *
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none transition focus:border-white/50 focus:ring-2 focus:ring-white/20"
            placeholder="Jan Novák"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-white/80">
            E-mail *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none transition focus:border-white/50 focus:ring-2 focus:ring-white/20"
            placeholder="jan@firma.cz"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-white/80">
          Telefon
        </label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none transition focus:border-white/50 focus:ring-2 focus:ring-white/20"
          placeholder="+420 123 456 789"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-white/80">
          Zpráva *
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none transition focus:border-white/50 focus:ring-2 focus:ring-white/20"
          placeholder="Popište váš projekt, rozpočet a cíle..."
        />
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-300">
          Něco se nepovedlo. Zkuste to znovu nebo nám napište e-mailem.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-full bg-white px-8 py-3.5 font-semibold text-indigo-700 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-indigo-600 hover:text-white hover:shadow-xl disabled:opacity-60"
      >
        {status === "sending" ? "Odesílání..." : "Odeslat poptávku"}
      </button>
    </form>
  );
}
