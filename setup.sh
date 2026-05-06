#!/usr/bin/env bash
set -euo pipefail

# 1. Give workflows permission to push
for wf in .github/workflows/deploy-pages.yml .github/workflows/update-trains.yml; do
  # Insert 'permissions: contents: write' right after the 'jobs:' line (or after 'on:')
  sed -i '/^jobs:/i permissions:\n  contents: write' "$wf"
done

# 2. Replace all /planetandtravel/ paths and domain
find . -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" \
                -o -name "*.py" -o -name "*.xml" -o -name "*.json" \
                -o -name "*.yml" -o -name "*.md" \) \
  -not -path "./.git/*" \
  -exec sed -i 's|/planetandtravel/|/planet-travel/|g' {} \;

find . -type f \( -name "*.html" -o -name "*.xml" -o -name "*.py" -o -name "*.js" \) \
  -not -path "./.git/*" \
  -exec sed -i 's|planetandtravel\.github\.io|CodeWander-666.github.io|g' {} \;

# 3. Fix canonical base URL in the generator
sed -i 's|site_url=.*|site_url="CodeWander-666.github.io/planet-travel"|' automation/generate_pages.py

# 4. Ensure .nojekyll exists
touch .nojekyll

# 5. Remove any stray nested .git (if still present)
rm -rf planetandtravel/.git 2>/dev/null || true

# 6. Commit everything and push using YOUR own identity
git add -A
git config user.name "CodeWander-666"        # use your own
git config user.email "your-email@example.com"
git commit -m "🔧 Fix paths, grant workflow write permissions, add .nojekyll"
git push origin main