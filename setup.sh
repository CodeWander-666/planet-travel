#!/usr/bin/env bash
###############################################################################
#  Planet&Travel – IMAGE FIX + 3D WHITE TRAIN + WHITE VIDEO CARD TEXT
###############################################################################
set -euo pipefail
cd "$(dirname "$0")" || exit 1

echo "🎨 Generating high‑quality placeholder images..."

# Install Pillow for image generation (if not already present)
pip install Pillow -q 2>/dev/null || true

# ── 1. Generate real placeholder images for key assets ──────────────────
python3 <<'PYEOF'
from PIL import Image, ImageDraw, ImageFont
import os, textwrap

# Ensure directories exist
os.makedirs('public/assets/homepage', exist_ok=True)
os.makedirs('public/assets/homepage/destinations', exist_ok=True)
os.makedirs('public/assets/services', exist_ok=True)
os.makedirs('public/assets/car-rental', exist_ok=True)

def create_placeholder(path, text, size=(800,600), bg_color=(10,22,40), text_color=(212,175,55)):
    img = Image.new('RGB', size, bg_color)
    draw = ImageDraw.Draw(img)
    try:
        # Use a truetype font if available, else default
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 36)
        small_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 24)
    except:
        font = ImageFont.load_default()
        small_font = font
    # Draw a subtle gold border
    draw.rectangle([10,10,size[0]-11,size[1]-11], outline=(212,175,55), width=3)
    # Draw the main text centered
    lines = textwrap.wrap(text, width=25)
    y_offset = size[1]//2 - (len(lines)*40)//2
    for line in lines:
        bbox = draw.textbbox((0,0), line, font=font)
        w = bbox[2]-bbox[0]
        h = bbox[3]-bbox[1]
        draw.text(((size[0]-w)//2, y_offset), line, fill=text_color, font=font)
        y_offset += h + 10
    # Add a small watermark
    draw.text((size[0]-120, size[1]-30), "Planet&Travel", fill=text_color, font=small_font)
    img.save(path)
    print(f"  Created: {path}")

# Homepage images
create_placeholder('public/assets/homepage/about-family.png', 'Family Travel', size=(800,600))
create_placeholder('public/assets/homepage/visit-us.png', 'Visit Us', size=(800,600))

# Destination city images (12 cities)
cities = ["gwalior","indore","bhopal","jabalpur","ujjain","khajuraho","orchha","kanha","pachmarhi","sanchi","maheshwar","bandhavgarh"]
for city in cities:
    create_placeholder(f'public/assets/homepage/destinations/{city}.png', city.capitalize(), size=(800,600))

# Services page images
create_placeholder('public/assets/services/train.png', 'Train Service', size=(800,600))
create_placeholder('public/assets/services/palace.png', 'Palace Hotel', size=(800,600))
create_placeholder('public/assets/services/hotel-room.png', 'Hotel Room', size=(800,600))
create_placeholder('public/assets/services/airplane-wing.png', 'Airplane Wing', size=(800,600))
create_placeholder('public/assets/services/visit-us.png', 'Visit Us', size=(800,600))

# Car rental images
car_images = ["sedan","suv","luxury-sedan","muv","innova-crysta","tempo-traveller","mini-bus","luxury-coach","local-city-ride","outstation-trip","airport-transfer","fleet-action-1","fleet-action-2"]
for car in car_images:
    create_placeholder(f'public/assets/car-rental/{car}.png', car.replace('-',' ').title(), size=(800,600))
    if car.startswith('fleet-action'):
        # also create webm placeholder (empty, but we already have)
        pass

# Hero section videos – we can't generate videos, but we'll leave the empty placeholders as they are.
print("✅ All placeholder images generated successfully (high quality, colored).")
PYEOF

# ── 2. Redesign HeroTrain to be white, 3D, smoking chimney, animated ──
cat > src/components/HeroTrain.tsx <<'HTRAIN'
'use client';
import { motion } from 'framer-motion';

export default function HeroTrain() {
  return (
    <div className="train-svg-container" style={{ opacity: 0.25 }}>
      <motion.svg
        viewBox="0 0 1600 300"
        className="train-svg"
        initial={{ x: -300 }}
        animate={{ x: [0, -200, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="trainWhite" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e0e0e0" />
          </linearGradient>
          <linearGradient id="trainDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#888888" />
            <stop offset="100%" stopColor="#333333" />
          </linearGradient>
        </defs>

        {/* Smoke from chimney */}
        <motion.circle
          cx="110" cy="70" r="20" fill="#ffffff" opacity="0.7"
          animate={{ y: [0, -50, -120], opacity: [0.7, 0.3, 0], scale: [1, 1.5, 2] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.2 }}
        />
        <motion.circle
          cx="90" cy="80" r="16" fill="#ffffff" opacity="0.6"
          animate={{ y: [0, -60, -130], opacity: [0.6, 0.2, 0], scale: [1, 1.3, 1.8] }}
          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.6 }}
        />
        <motion.circle
          cx="130" cy="60" r="14" fill="#ffffff" opacity="0.5"
          animate={{ y: [0, -45, -110], opacity: [0.5, 0.1, 0], scale: [1, 1.4, 2] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1 }}
        />

        {/* Track (golden railways) */}
        <line x1="0" y1="270" x2="1600" y2="270" stroke="#D4AF37" strokeWidth="3" fill="none" />
        <line x1="0" y1="278" x2="1600" y2="278" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.6" />

        {/* 3D Engine (white gradient) */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
        >
          {/* Main body */}
          <rect x="40" y="160" width="180" height="80" rx="10" fill="url(#trainWhite)" filter="url(#drop-shadow)" />
          {/* Cab roof */}
          <rect x="50" y="145" width="160" height="25" rx="6" fill="url(#trainWhite)" />
          {/* Chimney */}
          <rect x="120" y="115" width="30" height="40" rx="4" fill="url(#trainDark)" />
          <rect x="125" y="110" width="20" height="15" rx="3" fill="url(#trainWhite)" />
          {/* Wheels */}
          <circle cx="90" cy="245" r="24" fill="#444" stroke="#888" strokeWidth="3" />
          <circle cx="90" cy="245" r="12" fill="#666" />
          <circle cx="170" cy="245" r="24" fill="#444" stroke="#888" strokeWidth="3" />
          <circle cx="170" cy="245" r="12" fill="#666" />
          {/* Headlight */}
          <circle cx="40" cy="190" r="10" fill="#ffff88" />
          <circle cx="40" cy="190" r="6" fill="#ffffff" />
        </motion.g>

        {/* Coaches (white) */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
        >
          {/* Coach 1 */}
          <rect x="240" y="165" width="160" height="70" rx="8" fill="url(#trainWhite)" />
          <rect x="250" y="155" width="30" height="15" rx="3" fill="url(#trainWhite)" />
          <circle cx="280" cy="245" r="20" fill="#444" stroke="#888" strokeWidth="3" />
          <circle cx="360" cy="245" r="20" fill="#444" stroke="#888" strokeWidth="3" />
          {/* Windows */}
          <rect x="270" y="175" width="20" height="30" rx="3" fill="#a0d0ff" />
          <rect x="310" y="175" width="20" height="30" rx="3" fill="#a0d0ff" />
          <rect x="350" y="175" width="20" height="30" rx="3" fill="#a0d0ff" />
        </motion.g>

        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.3 }}
        >
          {/* Coach 2 */}
          <rect x="420" y="165" width="160" height="70" rx="8" fill="url(#trainWhite)" />
          <rect x="430" y="155" width="30" height="15" rx="3" fill="url(#trainWhite)" />
          <circle cx="460" cy="245" r="20" fill="#444" stroke="#888" strokeWidth="3" />
          <circle cx="540" cy="245" r="20" fill="#444" stroke="#888" strokeWidth="3" />
          <rect x="450" y="175" width="20" height="30" rx="3" fill="#a0d0ff" />
          <rect x="490" y="175" width="20" height="30" rx="3" fill="#a0d0ff" />
          <rect x="530" y="175" width="20" height="30" rx="3" fill="#a0d0ff" />
        </motion.g>
      </motion.svg>
    </div>
  );
}
HTRAIN

# Also adjust the train container opacity in globals.css (increase from 0.08 to 0.25)
sed -i 's|opacity: 0.08;|opacity: 0.25;|' src/app/globals.css

# ── 3. Update VideoCard3D to use white text ──────────────────────────────
cat > src/components/VideoCard3D.tsx <<'VC3D'
'use client';
import { motion } from 'framer-motion';

interface VideoCard3DProps {
  webmSrc: string;
  posterSrc: string;
  title: string;
  description: string;
  delay?: number;
}

export default function VideoCard3D({ webmSrc, posterSrc, title, description, delay = 0 }: VideoCard3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-2xl overflow-hidden border border-gold-400/10 video-card group relative"
    >
      <video autoPlay muted loop playsInline poster={posterSrc} className="w-full h-full object-cover">
        <source src={webmSrc} type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-navy-950/60 group-hover:bg-navy-950/30 transition-colors flex items-end p-4">
        <div>
          <h4 className="text-white font-heading text-lg mb-1">{title}</h4>
          <p className="text-white/80 text-xs">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
VC3D

# ── 4. Rebuild and push ──────────────────────────────────────────────────
echo "🏗️  Building..."
npm run build

git add -A
git commit -m "🖼️ High-quality placeholders, 3D white train, white video text" || echo "Nothing to commit"
git push origin main

echo ""
echo "✅ All images now show real placeholders (no broken icons)."
echo "   Train is white, 3D, animated smoke."
echo "   Video card text is white."
echo "   Vercel will deploy automatically."