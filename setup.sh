#!/usr/bin/env bash
###############################################################################
# Planet&Travel – DARK LOOPING TEXT EVERYWHERE
###############################################################################
set -euo pipefail
cd "$(dirname "$0")" || exit 1

echo "🌙 Switching to dark looping text..."

# ── 1. Overwrite key CSS classes with dark colors ─────────────────────
# Update the .text-gradient and .text-gradient-sub definitions
sed -i 's|background: linear-gradient(135deg, #ffffff 0%, #87CEEB 50%, #ffffff 100%);|background: linear-gradient(135deg, #0f172a 0%, #1e1e2f 50%, #0f172a 100%);|g' src/app/globals.css
sed -i 's|background: linear-gradient(135deg, #ffffff 0%, #87CEEB 50%, #ffffff 100%);|background: linear-gradient(135deg, #0f172a 0%, #1e1e2f 50%, #0f172a 100%);|g' src/app/globals.css  # second occurrence for .text-gradient-sub

# Also change the body text color to a dark base (for fallback)
sed -i 's|color: #FFF8F0;|color: #0f172a;|' src/app/globals.css

# ── 2. Ensure all headings use the dark gradient ──────────────────────
# Add a rule for h1-h4 to automatically use the gradient (no extra class)
cat >> src/app/globals.css <<'CSSEOF'

/* ── Dark gradient on all headings by default ── */
h1, h2, h3, h4 {
  background: linear-gradient(135deg, #0f172a 0%, #1e1e2f 50%, #0f172a 100%);
  background-size: 300% 300%;
  animation: gradientShift 8s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
}

/* ── Paragraphs also use a subtle dark gradient ── */
p, a, span, li, button {
  background: linear-gradient(135deg, #0f172a 0%, #1e1e2f 50%, #0f172a 100%);
  background-size: 300% 300%;
  animation: gradientShift 8s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
CSSEOF

# Note: Applying to every element may affect icons/SVGs. We'll exclude SVGs.
cat >> src/app/globals.css <<'CSSEOF'
/* ── Exclude SVGs and images from gradient text ── */
svg, img, video, button.bg-gold-400, .nav-btn-dark {
  background: none !important;
  -webkit-text-fill-color: initial !important;
}
CSSEOF

# ── 3. Update specific components where needed ────────────────────────
# Navbar already uses text-navy-900 – we'll let the global gradient take over.
# Footer uses text-cream-100 – now it will get dark gradient automatically.

# ── 4. Build & push ──────────────────────────────────────────────────
echo "🏗️ Building..."
npm run build

git add -A
git commit -m "🌙 All text now uses dark looping gradient" || echo "Nothing to commit"
git push origin main

echo ""
echo "✅ All text on the site now elegantly loops through dark navy/purple/charcoal tones."