import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${siteConfig.brand.name} – PPC správa pro e-shopy a weby`,
  description: siteConfig.hero.perex,
  metadataBase: new URL(`https://${siteConfig.brand.domain}`),
  openGraph: {
    title: `${siteConfig.brand.name} – PPC správa pro e-shopy a weby`,
    description: siteConfig.hero.perex,
    siteName: siteConfig.brand.name,
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.name} – PPC správa pro e-shopy a weby`,
    description: siteConfig.hero.perex,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
