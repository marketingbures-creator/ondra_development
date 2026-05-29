"use client";

import { useEffect, useState, useCallback } from "react";

type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  read: boolean;
};

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      onLogin();
    } else {
      setError("Nesprávné přihlašovací údaje.");
    }
    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
              <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Administrace</h1>
            <p className="mt-1 text-sm text-gray-500">Přihlaste se pro správu poptávek</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="mb-1 block text-sm font-medium text-gray-700">
                Uživatelské jméno
              </label>
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                placeholder="admin"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                Heslo
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60"
            >
              {loading ? "Přihlašování..." : "Přihlásit se"}
            </button>
          </form>
        </div>

        <p className="mt-4 text-center text-xs text-gray-400">
          <a href="/" className="hover:text-gray-600">← Zpět na web</a>
        </p>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  const fetchInquiries = useCallback(async () => {
    const res = await fetch("/api/inquiries");
    if (res.status === 401) {
      setAuthenticated(false);
      setLoading(false);
      return;
    }
    const data = await res.json();
    setInquiries(data);
    setAuthenticated(true);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchInquiries();
  }, [fetchInquiries]);

  async function handleLogout() {
    await fetch("/api/auth", { method: "DELETE" });
    setAuthenticated(false);
    setInquiries([]);
  }

  async function toggleRead(id: string, read: boolean) {
    await fetch("/api/inquiries", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, read }),
    });
    setInquiries((prev) =>
      prev.map((i) => (i.id === id ? { ...i, read } : i))
    );
  }

  async function deleteInquiry(id: string) {
    if (!confirm("Opravdu smazat tuto poptávku?")) return;
    await fetch("/api/inquiries", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setInquiries((prev) => prev.filter((i) => i.id !== id));
  }

  const filtered = inquiries.filter((i) => {
    if (filter === "unread") return !i.read;
    if (filter === "read") return i.read;
    return true;
  });

  const unreadCount = inquiries.filter((i) => !i.read).length;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">Načítání...</p>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <LoginForm
        onLogin={() => {
          setLoading(true);
          fetchInquiries();
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Administrace poptávek
            </h1>
            <p className="text-sm text-gray-500">
              {inquiries.length} celkem · {unreadCount} nepřečtených
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
            >
              ← Zpět na web
            </a>
            <button
              onClick={handleLogout}
              className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Odhlásit se
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="mb-6 flex gap-2">
          {(["all", "unread", "read"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                filter === f
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {f === "all" ? "Vše" : f === "unread" ? "Nepřečtené" : "Přečtené"}
              {f === "unread" && unreadCount > 0 && (
                <span className="ml-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-gray-100 bg-white p-12 text-center">
            <p className="text-lg text-gray-400">Žádné poptávky</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((inquiry) => (
              <div
                key={inquiry.id}
                className={`rounded-2xl border bg-white p-6 shadow-sm transition ${
                  inquiry.read
                    ? "border-gray-100"
                    : "border-indigo-200 bg-indigo-50/30"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-semibold text-gray-900">
                        {inquiry.name}
                      </h3>
                      {!inquiry.read && (
                        <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
                          Nová
                        </span>
                      )}
                    </div>
                    <div className="mt-1 flex flex-wrap gap-4 text-sm text-gray-500">
                      <a
                        href={`mailto:${inquiry.email}`}
                        className="hover:text-indigo-600"
                      >
                        {inquiry.email}
                      </a>
                      {inquiry.phone && (
                        <a
                          href={`tel:${inquiry.phone}`}
                          className="hover:text-indigo-600"
                        >
                          {inquiry.phone}
                        </a>
                      )}
                      <span>
                        {new Date(inquiry.createdAt).toLocaleString("cs-CZ")}
                      </span>
                    </div>
                    <p className="mt-3 whitespace-pre-wrap leading-relaxed text-gray-700">
                      {inquiry.message}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      onClick={() => toggleRead(inquiry.id, !inquiry.read)}
                      className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
                    >
                      {inquiry.read ? "Nepřečtené" : "Přečteno"}
                    </button>
                    <button
                      onClick={() => deleteInquiry(inquiry.id)}
                      className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-50"
                    >
                      Smazat
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
