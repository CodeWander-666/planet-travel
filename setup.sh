#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")" || exit 1

# Update the metadataBase URL in layout.tsx to the correct domain
sed -i 's|metadataBase: new URL("https://[^"]*")|metadataBase: new URL("https://planet-travels.vercel.app")|' src/app/layout.tsx

# Already created the verification file, sitemap, robots.txt earlier – confirm they exist
ls -l public/google82bcb9b1faafa2cd.html public/sitemap.xml public/robots.txt

echo "🏗️ Building..."
npm run build
git add -A
git commit -m "🔧 Fix metadataBase to planet-travels.vercel.app" || echo "Nothing to commit"
git push origin main