#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")" || exit 1

echo "🗑️  Removing all fallbacks and placeholder generators..."

# 1. Remove onerror attributes from all img tags
find src -type f -name '*.tsx' -exec sed -i 's/ onerror="[^"]*"//g' {} \;

# 2. Remove any poster fallback attributes that point to generic placeholders
find src -type f -name '*.tsx' -exec sed -i 's| poster="/assets/homepage/destinations/[^"]*"||g' {} \;

# 3. Delete placeholder generation scripts
rm -f automation/generate_station_coords.py 2>/dev/null || true
rm -f public/assets/fallback.png 2>/dev/null || true
rm -f public/assets/url-mapping.json 2>/dev/null || true

# 4. Remove any last-resort fallback images we created
find public/assets -name '*.png' -size 0 -delete 2>/dev/null || true

echo "🏗️  Building..."
npm run build

git add -A
git commit -m "🚫 Remove all fallbacks – only real uploaded images" || echo "Nothing to commit"
git push origin main

echo ""
echo "✅ All fallbacks removed. Site now uses only your actual uploaded images."