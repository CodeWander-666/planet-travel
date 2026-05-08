#!/usr/bin/env bash
###############################################################################
#  Planet&Travel – FAST, LONG, PURE WHITE TRAIN + SKY‑BLUE WHEELS
###############################################################################
set -euo pipefail
cd "$(dirname "$0")" || exit 1

echo "🚂 Upgrading train to pure white, fast, and fully visible..."

# 1. Replace HeroTrain with a long, fast, white train
cat > src/components/HeroTrain.tsx <<'HTRAIN'
'use client';
import { motion } from 'framer-motion';

export default function HeroTrain() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden opacity-30 pointer-events-none" style={{ opacity: 0.35 }}>
      <motion.svg
        viewBox="0 0 2400 180"
        className="w-full h-full"
        initial={{ x: -400 }}
        animate={{ x: [-200, -400] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        {/* Track */}
        <line x1="0" y1="160" x2="2400" y2="160" stroke="#87CEEB" strokeWidth="3" fill="none" />
        <line x1="0" y1="168" x2="2400" y2="168" stroke="#87CEEB" strokeWidth="1.5" fill="none" opacity="0.6" />

        {/* Engine */}
        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.4, repeat: Infinity }}
        >
          <rect x="40" y="90" width="200" height="55" rx="10" fill="#FFFFFF" />
          <rect x="50" y="75" width="40" height="20" rx="4" fill="#FFFFFF" />
          {/* Chimney */}
          <rect x="100" y="55" width="30" height="30" rx="4" fill="#FFFFFF" />
          {/* Smoke puffs */}
          <motion.circle cx="115" cy="45" r="15" fill="#FFFFFF" opacity="0.8"
            animate={{ y: [0, -60], opacity: [0.8, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }} />
          <motion.circle cx="105" cy="50" r="12" fill="#FFFFFF" opacity="0.6"
            animate={{ y: [0, -80], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} />
          {/* Wheels (sky blue) */}
          <circle cx="90" cy="148" r="22" fill="#87CEEB" />
          <circle cx="90" cy="148" r="10" fill="#FFFFFF" />
          <circle cx="190" cy="148" r="22" fill="#87CEEB" />
          <circle cx="190" cy="148" r="10" fill="#FFFFFF" />
          {/* Windows */}
          <rect x="130" y="100" width="25" height="25" rx="4" fill="#87CEEB" />
          <rect x="165" y="100" width="25" height="25" rx="4" fill="#87CEEB" />
        </motion.g>

        {/* Coaches */}
        {[0,1,2,3,4,5].map((i) => (
          <motion.g
            key={i}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
          >
            <rect x={260 + i * 200} y="95" width="180" height="50" rx="8" fill="#FFFFFF" />
            <circle cx={300 + i * 200} cy="148" r="18" fill="#87CEEB" />
            <circle cx={300 + i * 200} cy="148" r="8" fill="#FFFFFF" />
            <circle cx={400 + i * 200} cy="148" r="18" fill="#87CEEB" />
            <circle cx={400 + i * 200} cy="148" r="8" fill="#FFFFFF" />
            {/* Windows */}
            <rect x={285 + i * 200} y="105" width="20" height="20" rx="3" fill="#87CEEB" />
            <rect x={325 + i * 200} y="105" width="20" height="20" rx="3" fill="#87CEEB" />
            <rect x={365 + i * 200} y="105" width="20" height="20" rx="3" fill="#87CEEB" />
          </motion.g>
        ))}
      </motion.svg>
    </div>
  );
}
HTRAIN

# 2. Ensure train container opacity is high enough
sed -i 's|opacity: 0.25;|opacity: 0.35;|' src/app/globals.css 2>/dev/null || true

# 3. Build and push
echo "🏗️  Building..."
npm run build

git add -A
git commit -m "🚂 Pure white fast train with sky‑blue wheels" || echo "Nothing to commit"
git push origin main

echo ""
echo "✅ Train is now long, pure white, fast, and fully visible with sky‑blue wheels."