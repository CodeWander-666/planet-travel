import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Planet&Travel — Luxury Travel Curator | Madhya Pradesh", template: "%s | Planet&Travel" },
  description: "Bespoke luxury journeys across India. Private guides, palace stays, real‑time train tracking since 2000.",
  metadataBase: new URL("https://codewander-666.github.io/planet-travel"),
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="bg-navy-950 text-cream-100 antialiased">{children}</body></html>;
}
