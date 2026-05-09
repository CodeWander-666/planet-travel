#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")" || exit 1

echo "🔐 Adding new Google verification meta tag..."

# Update the verification field in layout.tsx to use the new code
python3 <<'PYEOF'
import re

with open('src/app/layout.tsx', 'r') as f:
    content = f.read()

new_code = 'YwZkzdq_A7rNEOkYKDQ1XE7pZNrcMFCcV0NEsmerrM0'

# If the verification block already exists, replace the google string
if 'verification:' in content and 'google:' in content:
    content = re.sub(
        r"google:\s*'[^']*'",
        f"google: '{new_code}'",
        content
    )
else:
    # Otherwise, add the verification block after the metadataBase line
    verification_block = f'''  verification: {{
    google: '{new_code}',
  }},
'''
    content = content.replace(
        'metadataBase:',
        f'{verification_block}  metadataBase:',
        1
    )

with open('src/app/layout.tsx', 'w') as f:
    f.write(content)

print(f'✅ Google verification field updated to: {new_code}')
PYEOF

# Build & push
echo "🏗️  Building..."
npm run build
git add -A
git commit -m "🔐 Update Google verification meta tag" || echo "Nothing to commit"
git push origin main

echo ""
echo "✅ The meta tag will now be auto‑generated:"
echo "   <meta name='google-site-verification' content='YwZkzdq_A7rNEOkYKDQ1XE7pZNrcMFCcV0NEsmerrM0' />"
echo ""
echo "   Verify using the 'HTML tag' method in Google Search Console."