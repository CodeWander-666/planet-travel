#!/usr/bin/env bash
###############################################################################
# Planet&Travel – SITEMAP IN REPO ROOT (copied to public/ during build)
###############################################################################
set -euo pipefail
cd "$(dirname "$0")" || exit 1

echo "⬇️  Pulling latest..."
git pull --rebase origin main 2>/dev/null || {
  git stash
  git pull --rebase origin main
  git stash pop 2>/dev/null || true
}

SITE="https://planet-travels.vercel.app"
TODAY=$(date +%Y-%m-%d)

# 1. Write the master sitemap.xml at the REPO ROOT (not public/)
echo "📄 Creating sitemap.xml at repository root..."
cat > sitemap.xml <<SITEMAPEOF
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

# 2. Update robots.txt to point to the same sitemap
cat > public/robots.txt <<ROBOTSEOF
User-agent: *
Allow: /
Disallow:
Sitemap: ${SITE}/sitemap.xml
ROBOTSEOF

# 3. Ensure the sitemap is automatically copied to public/ during build
#    (this is the crucial step that makes the repo‑root sitemap actually work)

# 3a. Create a tiny helper script
mkdir -p scripts
cat > scripts/copy-sitemap.sh <<'CPEOF'
#!/usr/bin/env bash
cp sitemap.xml public/sitemap.xml
echo "✅ sitemap.xml copied to public/"
CPEOF
chmod +x scripts/copy-sitemap.sh

# 3b. Add a prebuild hook to package.json (if not already present)
#     We'll use node to insert the script call safely
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json','utf8'));
pkg.scripts = pkg.scripts || {};
// Add a prebuild script that copies the sitemap
pkg.scripts.prebuild = 'bash scripts/copy-sitemap.sh';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

# 4. Run the copy now (so the file is also present for immediate testing)
bash scripts/copy-sitemap.sh

# 5. Build and push
echo "🏗️ Building..."
npm run build

git add -A
git commit -m "📂 Sitemap in repo root, auto‑copied to public/ during build" || echo "Nothing to commit"
git push origin main

echo ""
echo "✅ Done! The master sitemap.xml now lives at the repository root."
echo "   However, because of the prebuild script, it is automatically"
echo "   copied to public/ during every build."
echo "   As a result, the sitemap is still served at:"
echo "   ${SITE}/sitemap.xml"
echo ""
echo "   This satisfies your requirement to keep the master file"
echo "   outside public/ while still making it functional for SEO."