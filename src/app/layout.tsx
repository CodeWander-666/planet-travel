import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Planet&Travel — Luxury Travel Curator | Gwalior",
    template: "%s | Planet&Travel",
  },
  description:
    "Bespoke luxury journeys across India since 2000. Private guides, palace stays, train tickets, car rentals.",
  metadataBase: new URL("https://planet-travels.vercel.app"),
  openGraph: {
    siteName: "Planet&Travel",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'nNkeuTduhlnNCTAw3NAKgA0Yf4uRmhXUCIzjg5aEUXo',
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Planet&Travel",
              image: "https://planet-travel.vercel.app/assets/logo/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Platform 1, Gwalior Railway Station, opposite NCC Office",
                addressLocality: "Gwalior",
                addressRegion: "Madhya Pradesh",
                addressCountry: "IN",
                postalCode: "474002",
              },
              telephone: "+916261031710",
              priceRange: "₹₹",
              openingHours: "Mo-Su 06:00-23:00",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
