import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Kaan Özoğlu | Geleceğin Yetkinlikleri",
  description: "Kurumlara, topluluklara ve ekiplere geleceğin yetkinliklerini kazandırmaya odaklanan uygulamalı eğitimler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased text-slate-900 dark:text-slate-50`}
      >
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
