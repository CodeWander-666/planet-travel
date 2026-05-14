import { Metadata } from "next";

/**
 * Generates consistent, production‑grade metadata for every page.
 * - Canonical URLs always point to https://planet-travels.vercel.app
 * - OpenGraph and Twitter cards are automatically generated
 * - Robots follow / index by default
 */
export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  imageUrl?: string
): Metadata {
  const url = `https://planet-travels.vercel.app${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Planet&Travel",
      locale: "en_IN",
      type: "website",
      images: imageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}
