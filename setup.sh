#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")" || exit 1

echo "🔐 Creating Google verification HTML file..."

# The verification code (same as in your TXT record)
VERIFY_CODE="nNkeuTduhlnNCTAw3NAKgA0Yf4uRmhXUCIzjg5aEUXo"

# Create the HTML file with the verification string as the filename
# (Google’s HTML‑file method requires the exact filename they provide)
cat > "public/google-site-verification=${VERIFY_CODE}.html" <<EOF
google-site-verification: ${VERIFY_CODE}
EOF

echo "✅ File created: public/google-site-verification=${VERIFY_CODE}.html"

# ── Also re‑confirm the meta tag is in layout.tsx (already done, just a safety check) ──
python3 <<PYEOF
import re
with open('src/app/layout.tsx', 'r') as f:
    content = f.read()
if 'nNkeuTduhlnNCTAw3NAKgA0Yf4uRmhXUCIzjg5aEUXo' not in content:
    print('⚠️  Meta tag missing – adding it now.')
    # add verification to metadata
    content = content.replace(
        "verification: {",
        "  verification: {\n    google: 'nNkeuTduhlnNCTAw3NAKgA0Yf4uRmhXUCIzjg5aEUXo',"
    )
    with open('src/app/layout.tsx','w') as f:
        f.write(content)
else:
    print('✅ Meta tag already present in layout.tsx')
PYEOF

# ── Build & push ──
echo "🏗️  Building..."
npm run build

git add -A
git commit -m "🔐 Add Google verification HTML file + ensure meta tag" || echo "Nothing to commit"
git push origin main

echo ""
echo "✅ Verification file is now live at:"
echo "   https://planet-travel.vercel.app/google-site-verification=${VERIFY_CODE}.html"
echo ""
echo "🔄 Return to Google Search Console and:"
echo "   1. Choose 'URL prefix' property for https://planet-travel.vercel.app"
echo "   2. Select 'HTML file upload' as the verification method"
echo "   3. Google will automatically check the file; click VERIFY"
echo ""
echo "   The meta tag is also already in the page head, so you could also use"
echo "   the 'HTML tag' method – either works."