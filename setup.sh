#!/usr/bin/env bash
###############################################################################
# Planet&Travel – COMPLETE SEO FOUNDATION FIX
# Fixes: canonical URLs, corrupted sitemap.xml, robots.txt, vercel.json
# Strategy: Python‑generated sitemap (guaranteed valid XML) + correct domain
###############################################################################
set -euo pipefail
cd "$(dirname "$0")" || exit 1

echo "⬇️  Pulling latest..."
git pull --rebase origin main 2>/dev/null || { git stash; git pull --rebase origin main; git stash pop 2>/dev/null || true; }

SITE="https://planet-travels.vercel.app"
TODAY=$(date +%Y-%m-%d)

###############################################################################
# 1.  FIX SEO.TS – CORRECT CANONICAL DOMAIN
###############################################################################
echo "🔧 Fixing canonical URLs in seo.ts..."

cat > src/lib/seo.ts <<'SEOEOF'
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
SEOEOF

###############################################################################
# 2.  FIX ROBOTS.TXT – CLEAN, PROPER STRUCTURE
###############################################################################
echo "📄 Fixing robots.txt..."

cat > public/robots.txt <<ROBOTSEOF
User-agent: *
Allow: /
Disallow:

Sitemap: ${SITE}/sitemap.xml
ROBOTSEOF

###############################################################################
# 3.  FIX SITEMAP.XML – PYTHON-GENERATED (GUARANTEED VALID XML)
###############################################################################
echo "📊 Generating valid sitemap.xml with Python..."

python3 <<PYEOF
import os
from datetime import date

SITE = "https://planet-travels.vercel.app"
TODAY = date.today().isoformat()

PAGES = [
    ("/", 1.0),
    ("/services/", 0.9),
    ("/services/confirm-ticket/", 0.95),
    ("/services/luxury-tours/", 0.9),
    ("/services/hotel-booking/", 0.8),
    ("/services/flight-booking/", 0.95),
    ("/services/visa-assistance/", 0.95),
    ("/services/corporate-travel/", 0.7),
    ("/services/car-booking/", 0.9),
    ("/train/", 0.8),
    ("/concierge/", 0.9),
    ("/reviews/", 0.7),
    ("/backlinks/", 0.5),
]

lines = ['<?xml version="1.0" encoding="UTF-8"?>']
lines.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

for path, priority in PAGES:
    lines.append("  <url>")
    lines.append(f"    <loc>{SITE}{path}</loc>")
    lines.append(f"    <lastmod>{TODAY}</lastmod>")
    lines.append(f"    <priority>{priority}</priority>")
    lines.append("  </url>")

lines.append("</urlset>")

xml_content = "\n".join(lines) + "\n"

# Write to public/sitemap.xml
with open("public/sitemap.xml", "w") as f:
    f.write(xml_content)

# Also copy to repo root sitemap.xml (if needed)
with open("sitemap.xml", "w") as f:
    f.write(xml_content)

print(f"✅ Valid sitemap written: {len(PAGES)} pages")
PYEOF

# Verify the sitemap is valid XML
echo "🔍 Validating sitemap..."
if command -v xmllint &>/dev/null; then
    xmllint --noout public/sitemap.xml && echo "   ✅ XML is valid" || echo "   ❌ XML validation failed"
else
    # Basic check: ensure the file starts with <?xml
    if head -1 public/sitemap.xml | grep -q '<?xml'; then
        echo "   ✅ Sitemap starts with XML declaration"
    else
        echo "   ❌ Sitemap missing XML declaration"
    fi
fi

###############################################################################
# 4.  FIX VERCEL.JSON – CORRECT CONTENT-TYPE HEADERS
###############################################################################
echo "📋 Ensuring vercel.json is correct..."

cat > vercel.json <<VERCELEOF
{
  "headers": [
    {
      "source": "/sitemap.xml",
      "headers": [
        { "key": "Content-Type", "value": "application/xml" },
        { "key": "Cache-Control", "value": "public, max-age=3600" }
      ]
    },
    {
      "source": "/robots.txt",
      "headers": [
        { "key": "Content-Type", "value": "text/plain" }
      ]
    }
  ]
}
VERCELEOF

###############################################################################
# 5.  FIX LAYOUT.TSX – ENSURE METADATABASE IS CORRECT
###############################################################################
echo "🔧 Fixing layout.tsx metadataBase..."

python3 <<PYEOF
import re

with open("src/app/layout.tsx", "r") as f:
    content = f.read()

# Update metadataBase to the correct domain
content = re.sub(
    r'metadataBase:\s*new\s+URL\("https://[^"]*"\)',
    'metadataBase: new URL("https://planet-travels.vercel.app")',
    content
)

with open("src/app/layout.tsx", "w") as f:
    f.write(content)

print("✅ layout.tsx metadataBase updated")
PYEOF

###############################################################################
# 6.  BUILD & PUSH
###############################################################################
echo "🏗️  Building..."
npm run build

git add -A
git commit -m "🔧 Fix canonical URLs + Python-generated valid sitemap + clean robots.txt" || echo "Nothing to commit"
git push origin main

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "✅ SEO FOUNDATION FIXED"
echo ""
echo "📋 WHAT WAS FIXED:"
echo ""
echo "   1. seo.ts → canonical domain:"
echo "      codewander-666.github.io/planet-travel → planet-travels.vercel.app"
echo ""
echo "   2. sitemap.xml → Python-generated valid XML (not corrupted heredoc):"
echo "      13 pages with proper <url>, <loc>, <lastmod>, <priority> tags"
echo ""
echo "   3. robots.txt → clean Disallow: directive"
echo ""
echo "   4. layout.tsx → metadataBase updated"
echo ""
echo "🚀 NEXT STEPS IN GSC:"
echo "   A. Go to Google Search Console → Sitemaps"
echo "   B. DELETE the old sitemap submission"
echo "   C. Re-submit: sitemap.xml"
echo "   D. Inspect homepage → REQUEST INDEXING"
echo "   E. Wait 24–48 hours for Google to re-crawl"
echo "═══════════════════════════════════════════════════════════"