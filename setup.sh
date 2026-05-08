#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")" || exit 1

echo "🚀 Planet&Travel — Full Sync & Push"

# 1. Fix next.config.ts for Vercel (no basePath)
cat > next.config.ts <<'NXT'
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
NXT

# 2. Stage everything
git add -A

# 3. Commit all pending work
git commit -m "🚀 Production deploy: removed basePath, all luxury sections" || echo "⚠️ Nothing to commit"

# 4. Stash any remaining dirty files (if any), then pull
git stash --include-untracked 2>/dev/null || true
git pull --rebase origin main || {
  echo "⚠️ Rebase conflict — accepting local version for known files"
  # For any conflict, keep our local version
  git diff --name-only --diff-filter=U | while read f; do
    git checkout --ours "$f" 2>/dev/null || true
    git add "$f" 2>/dev/null || true
  done
  git rebase --continue 2>/dev/null || true
}

# 5. Restore stash on top
git stash pop 2>/dev/null || true

# 6. Final commit if anything remains
git add -A
git commit -m "✅ Merge & deploy" || echo "⚠️ Nothing extra to commit"

# 7. Push
git push origin main

echo ""
echo "✅ Success! Vercel will auto‑deploy in a few seconds."
echo "🌐 Visit your Vercel dashboard to see the live URL."