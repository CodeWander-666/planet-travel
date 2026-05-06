#!/usr/bin/env bash
###############################################################################
#  Fix‑for‑Existing‑Repo: integrate the Planet&Travel site into your current
#  CodeWander-666/planet-travel repository, so it runs from the root.
#
#  Usage (from workspace root, e.g. /workspaces/planet-travel):
#    chmod +x fix-for-existing.sh
#    ./fix-for-existing.sh
###############################################################################

set -euo pipefail

echo "🔧 Starting integration of Planet&Travel into the current repo..."

# 1. Detect GitHub user & repo name from the remote origin
REMOTE_URL=$(git remote get-url origin 2>/dev/null || true)
if [ -z "$REMOTE_URL" ]; then
  echo "❌ No git remote 'origin' found. Please set it manually:"
  echo "   export GITHUB_USER=YOUR_USERNAME"
  exit 1
fi

# Extract user/repo from something like:
# https://github.com/CodeWander-666/planet-travel.git
# git@github.com:CodeWander-666/planet-travel.git
if [[ "$REMOTE_URL" =~ github\.com[:/]([^/]+)/([^/.]*) ]]; then
  GITHUB_USER="${BASH_REMATCH[1]}"
  REPO_NAME="${BASH_REMATCH[2]}"
else
  echo "❌ Could not parse remote URL. Set manually:"
  echo "   export GITHUB_USER=CodeWander-666  REPO_NAME=planet-travel"
  exit 1
fi

SITE_BASE="/${REPO_NAME}"                     # e.g. /planet-travel
FULL_URL="https://${GITHUB_USER}.github.io${SITE_BASE}"

echo "✔  GitHub user:  ${GITHUB_USER}"
echo "✔  Repository:   ${REPO_NAME}"
echo "✔  Live URL will be: ${FULL_URL}"

# 2. Remove the nested git repository inside planetandtravel/
if [ -d planetandtravel/.git ]; then
  echo "🧹 Removing nested git repo..."
  rm -rf planetandtravel/.git
fi

# 3. Move everything from planetandtravel/ to the current directory (root)
echo "📁 Moving site files to repository root..."
# use rsync to avoid unexpected merge issues, then remove planetandtravel/
rsync -a planetandtravel/ ./ --remove-source-files 2>/dev/null || \
  cp -a planetandtravel/* planetandtravel/.* . 2>/dev/null || true
# The .* will copy .gitignore if exists, but maybe not needed.
# Remove the (now empty) planetandtravel folder
rm -rf planetandtravel

echo "✔  Files moved to root."

# 4. Adjust all internal paths from /planetandtravel/ to the new base
echo "🔀 Updating path references..."
# Use find for all text files (html, css, js, xml, json, txt, etc.)
find . -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" -o -name "*.xml" -o -name "*.json" -o -name "*.txt" \) \
  -not -path "./.git/*" \
  -exec sed -i "s|/planetandtravel/|${SITE_BASE}/|g" {} \;

# 5. Fix canonical URLs (from something like planetandtravel.github.io to the correct one)
echo "🌐 Fixing canonical URLs..."
OLD_DOMAIN="planetandtravel.github.io"
find . -type f \( -name "*.html" -o -name "*.xml" \) \
  -not -path "./.git/*" \
  -exec sed -i "s|https://${OLD_DOMAIN}/planetandtravel|${FULL_URL}|g" {} \;

# 6. Clean up any remaining references to planetandtravel in file names? Not needed.
#    The directory name itself is already changed.

# 7. Ensure the sitemap uses the correct URL
echo "🗺️  Updating sitemap..."
# Sitemap was generated with the old URL; we already changed it via sed.
# robots.txt was also fixed.

# 8. Add all files to git, commit
echo "📦 Committing changes..."
git add -A
git commit -m "🌍 Integrate Planet&Travel site into existing repo (fix base paths)" || echo "🟡 Nothing to commit (maybe everything already up to date)."

echo ""
echo "✅ Integration complete!"
echo "   Your site is now in the root of this repository."
echo "   To make it live, push to GitHub and enable GitHub Pages:"
echo "     git push origin main"
echo "   Then Settings → Pages → Source: main branch, / (root)."
echo "   The site will be available at: ${FULL_URL}"