#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")" || exit 1

echo "⬇️  Pulling latest..."
git pull --rebase origin main 2>/dev/null || { git stash; git pull --rebase origin main; git stash pop 2>/dev/null || true; }

# 1. Remove the placeholder line completely
sed -i '/Replace YOUR_PLACE_ID/d' src/components/Footer.tsx

# 2. Make sure the review link is exactly your GMB review link
sed -i 's|https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID|https://g.page/r/CVuIiNhTCqs-EBM/review|g' src/components/Footer.tsx

# 3. Build, commit, push
echo "🏗️ Building..."
npm run build
git add -A
git commit -m "📌 Embed exact GMB map frame + remove placeholder" || echo "Nothing to commit"
git push origin main

echo ""
echo "✅ Footer now has your exact Google review link and no placeholder text."