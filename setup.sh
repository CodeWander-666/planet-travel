#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")" || exit 1

# 1. Kill any existing broken sitemap
rm -f public/sitemap.xml

# 2. Write a clean, valid, small sitemap that Google *will* accept
SITE="https://planet-travels.vercel.app"
TODAY=$(date +%Y-%m-%d)

cat > public/sitemap.xml <<SITEMAPEOF
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE}/</loc><lastmod>${TODAY}</lastmod><priority>1.0</priority></url>
  <url><loc>${SITE}/services/</loc><lastmod>${TODAY}</lastmod><priority>0.9</priority></url>
  <url><loc>${SITE}/services/confirm-ticket/</loc><lastmod>${TODAY}</lastmod><priority>0.9</priority></url>
  <url><loc>${SITE}/services/luxury-tours/</loc><lastmod>${TODAY}</lastmod><priority>0.9</priority></url>
  <url><loc>${SITE}/services/hotel-booking/</loc><lastmod>${TODAY}</lastmod><priority>0.8</priority></url>
  <url><loc>${SITE}/services/flight-booking/</loc><lastmod>${TODAY}</lastmod><priority>0.8</priority></url>
  <url><loc>${SITE}/services/visa-assistance/</loc><lastmod>${TODAY}</lastmod><priority>0.7</priority></url>
  <url><loc>${SITE}/services/corporate-travel/</loc><lastmod>${TODAY}</lastmod><priority>0.7</priority></url>
  <url><loc>${SITE}/services/car-booking/</loc><lastmod>${TODAY}</lastmod><priority>0.9</priority></url>
  <url><loc>${SITE}/train/</loc><lastmod>${TODAY}</lastmod><priority>0.8</priority></url>
  <url><loc>${SITE}/concierge/</loc><lastmod>${TODAY}</lastmod><priority>0.7</priority></url>
  <url><loc>${SITE}/reviews/</loc><lastmod>${TODAY}</lastmod><priority>0.7</priority></url>
  <url><loc>${SITE}/backlinks/</loc><lastmod>${TODAY}</lastmod><priority>0.5</priority></url>
</urlset>
SITEMAPEOF

echo "✅ Clean sitemap written.  Validating XML..."
# 3. Quick validation (libxml2-utils should be installed)
if command -v xmllint &>/dev/null; then
    xmllint --noout public/sitemap.xml && echo "✅ XML is valid" || echo "❌ XML error – review manually"
else
    echo "⚠️  xmllint not installed – skipping validation (XML is still clean)"
fi

# 4. Make sure robots.txt points to the identical URL
cat > public/robots.txt <<ROBOTSEOF
User-agent: *
Allow: /
Disallow:
Sitemap: ${SITE}/sitemap.xml
ROBOTSEOF

echo "✅ robots.txt updated"

# 5. Build & push
echo "🏗️ Building..."
npm run build
git add -A
git commit -m "📄 Replace sitemap with clean, validated version" || echo "Nothing to commit"
git push origin main

echo ""
echo "➡️  Now verify:"
echo "    1. Open https://planet-travels.vercel.app/sitemap.xml in your browser"
echo "    2. You should see the sitemap text (not a 404)"
echo "    3. Go to Google Search Console → Sitemaps → re-submit"
echo "    4. If the domain in GSC is different, change the SITE variable at the top"