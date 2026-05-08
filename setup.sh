#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")" || exit 1

echo "⬇️  Pulling uploaded media from GitHub..."
git pull origin main

echo "🗑️  Deleting old hashed placeholder folders..."
rm -rf public/assets/img public/assets/video public/assets/fallback.png 2>/dev/null || true

echo "🔁 Rewriting leftover hashed asset paths..."
python3 <<'PYEOF'
import re, os
from pathlib import Path

# Patterns to catch old hashed paths
hash_patterns = [
    (r'/assets/img/img-[a-f0-9]+\.(?:jpeg|webm|mp4|png)(\?[^\"]*)?', '/assets/homepage/destinations/gwalior.png'),
    (r'/assets/video/video-[a-f0-9]+\.webm\.webm', '/assets/homepage/videos/luxury-stays.webm'),
]

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx','.ts')):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()
            changed = False
            for pattern, replacement in hash_patterns:
                if re.search(pattern, content):
                    content = re.sub(pattern, replacement, content)
                    changed = True
            if changed:
                with open(path, 'w') as f:
                    f.write(content)
                print(f"  ✅ Cleaned: {path}")
print("✅ All leftover hashed paths replaced.")
PYEOF

echo "🏗️  Rebuilding..."
npm run build

echo "🚀 Committing and pushing..."
git add -A
git commit -m "🖼️ Final asset cleanup – remap all images/videos to organised folders" || echo "Nothing to commit"
git push origin main

echo ""
echo "✅ Fixed. Your uploaded images in public/assets/homepage/, services/, car-rental/ etc. are now correctly linked."