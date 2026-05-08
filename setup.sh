#!/usr/bin/env bash
###############################################################################
# Planet&Travel – PRODUCTION-GRADE LUXURY UPGRADE
# Features:
#   • Pulls latest remote changes first (no push conflicts)
#   • Dark pearl 3D header buttons
#   • Custom logo.png in public/assets/logo
#   • Animated skyblue/purple/yellow global background
#   • All image/video overlays lightened (HDR‑clear visuals)
#   • JSON‑LD schema for SEO
#   • Robust error handling & logging
###############################################################################
set -euo pipefail

# ── Colors for logging ──────────────────────────────────────────────────
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; BLUE='\033[0;34m'; NC='\033[0m'
log()  { echo -e "${GREEN}[✓]${NC} $1"; }
warn() { echo -e "${YELLOW}[!]${NC} $1"; }
fail() { echo -e "${RED}[✗]${NC} $1"; exit 1; }

cd "$(dirname "$0")" || fail "Cannot enter script directory"
REPO_ROOT="$(pwd)"
log "Working in: $REPO_ROOT"

# ── 1. Pull latest remote changes ─────────────────────────────────────
log "Fetching & pulling latest from origin/main..."
git fetch origin main
if ! git pull --rebase origin main; then
    warn "Rebase failed – stashing local changes and retrying..."
    git stash
    git pull --rebase origin main || fail "Git pull failed even after stash. Resolve manually."
    git stash pop 2>/dev/null || true
fi
log "Repository is up to date."

# ── 2. Install dependencies (if missing) ──────────────────────────────
if [ ! -d "node_modules" ]; then
    log "Installing npm packages..."
    npm install 2>/dev/null || fail "npm install failed"
fi

# ── 3. Create logo placeholder ────────────────────────────────────────
mkdir -p public/assets/logo
if [ ! -f public/assets/logo/logo.png ]; then
    log "Generating logo placeholder..."
    if command -v python3 &> /dev/null; then
        python3 -c "
from PIL import Image, ImageDraw, ImageFont
img = Image.new('RGBA', (200, 60), (255,255,255,0))
draw = ImageDraw.Draw(img)
try:
    font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 40)
except:
    font = ImageFont.load_default()
draw.text((10, 10), 'P&T', fill=(212,175,55,255), font=font)
img.save('public/assets/logo/logo.png')
" 2>/dev/null || warn "Pillow not available – logo.png will be empty; upload manually"
    else
        touch public/assets/logo/logo.png
        warn "python3 not found – logo.png will be empty; upload manually"
    fi
fi

# ── 4. Rewrite globals.css (CRYSTAL CLEAR images, dark pearl buttons) ──
log "Writing production CSS..."
cat > src/app/globals.css <<'CSSEOF'
/* ═════════════════════════════════════════════════════════════════════
   Planet&Travel – Luxury Production Stylesheet
   ═════════════════════════════════════════════════════════════════════ */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,500&family=Inter:wght@300;400;500;600;700&display=swap');
@import "tailwindcss";

:root {
  --navy-950: #0a1628;
  --gold-400: #D4AF37;
  --cream-100: #FFF8F0;
  --overlay-light: rgba(10,22,40,0.35);   /* was 0.75, now crystal clear */
  --overlay-card: rgba(10,22,40,0.25);     /* barely there */
}

* { scroll-behavior: smooth; }
body {
  font-family: 'Inter', sans-serif;
  color: #FFF8F0;
  /* ── Global luxury animated gradient (skyblue/purple/yellow) ── */
  background: linear-gradient(135deg, #87CEEB 0%, #D8B4FE 40%, #FEF08A 70%, #87CEEB 100%);
  background-size: 400% 400%;
  animation: bodyGradient 20s ease infinite;
}
@keyframes bodyGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

h1,h2,h3,h4 { font-family: 'Playfair Display', serif; }

/* ── Glass (translucent) ── */
.glass {
  background: rgba(10,22,40,0.50);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(212,175,55,0.15);
  border-radius: 16px;
}
.glass-light {
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212,175,55,0.10);
  border-radius: 16px;
}

/* ── Text gradient (white‑skyblue) ── */
.text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #87CEEB 50%, #ffffff 100%);
  background-size: 300% 300%;
  animation: gradientShift 8s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
}
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* ── Text backdrop ── */
.text-backdrop {
  display: inline-block;
  background: rgba(10,22,40,0.55);
  backdrop-filter: blur(8px);
  padding: 0.5rem 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(212,175,55,0.2);
}

/* ── Hero (CRYSTAL CLEAR – overlay reduced to 35%) ── */
.hero-background {
  position: relative;
  overflow: hidden;
}
.hero-background video,
.hero-background img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  z-index: 0;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: var(--overlay-light);   /* 0.35 opacity – video clearly visible */
  z-index: 1;
}
.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 6rem 1rem 2rem;
}

/* ── Hero gradient fallback ── */
.hero-fallback-bg {
  background: linear-gradient(135deg, #87CEEB 0%, #00FFFF 50%, #90EE90 100%);
  background-size: 400% 400%;
  animation: heroGradient 12s ease infinite;
}
@keyframes heroGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* ── Header gradient ── */
.header-bg {
  background: linear-gradient(135deg, #ffffff 0%, #e0f0ff 20%, #b3d9ff 40%, #f5e6d3 60%, #ffffff 80%, #e0f0ff 100%);
  background-size: 400% 400%;
  animation: headerShift 16s ease infinite;
  backdrop-filter: blur(16px);
}
@keyframes headerShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* ── Dark pearl 3D header button ── */
.nav-btn-dark {
  position: relative;
  padding: 0.6rem 1.6rem;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: #f0e6d3;
  font-weight: 700;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow:
    0 4px 6px rgba(0,0,0,0.5),
    inset 0 1px 0 rgba(255,255,255,0.3),
    inset 0 -2px 0 rgba(0,0,0,0.3),
    0 0 12px rgba(135,206,235,0.3);
  transition: all 0.3s ease;
}
.nav-btn-dark:hover {
  box-shadow:
    0 8px 16px rgba(0,0,0,0.6),
    inset 0 1px 0 rgba(255,255,255,0.4),
    0 0 20px rgba(135,206,235,0.6);
  transform: translateY(-2px);
}

/* ── 3D card ── */
.card-3d {
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
}
.card-3d:hover {
  transform: rotateY(10deg) rotateX(-5deg) scale(1.02);
}

/* ── Service card with glow border ── */
.service-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}
.service-card::before {
  content: '';
  position: absolute;
  top: -2px; left: -2px; right: -2px; bottom: -2px;
  background: linear-gradient(45deg, #D4AF37, #F5E08E, #D4AF37, #F5E08E);
  background-size: 400% 400%;
  animation: borderGlow 4s linear infinite;
  border-radius: 20px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s;
}
.service-card:hover::before { opacity: 1; }
@keyframes borderGlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* ── Video card (translucent overlay – images shine through) ── */
.video-card {
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 1rem;
  perspective: 800px;
  transition: transform 0.4s ease;
}
.video-card:hover {
  transform: rotateY(5deg) rotateX(-3deg) scale(1.02);
}
.video-card video,
.video-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-card-overlay {
  background: var(--overlay-card);   /* very light overlay so video is clear */
}

/* ── Review carousel ── */
.review-carousel {
  animation: marquee 40s linear infinite;
}
.review-carousel:hover {
  animation-play-state: paused;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ── Sub text gradient ── */
.text-gradient-sub {
  font-weight: 600;
  background: linear-gradient(135deg, #ffffff 0%, #87CEEB 50%, #ffffff 100%);
  background-size: 300% 300%;
  animation: gradientShift 8s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
CSSEOF

# ── 5. Update Navbar with logo + dark pearl buttons ───────────────────
log "Updating Navbar..."
cat > src/components/Navbar.tsx <<'NAV'
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Car Rental', href: '/services/car-booking' },
    { name: 'Train', href: '/train' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/concierge' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 header-bg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <img src="/assets/logo/logo.png" alt="Planet&Travel" className="h-10 w-auto" />
          <span className="font-heading text-xl text-navy-950 font-bold">
            Planet<span className="text-gold-400">&</span>Travel
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link
              key={l.name}
              href={l.href}
              className="text-navy-900/80 hover:text-gold-400 transition-colors text-sm font-semibold"
            >
              {l.name}
            </Link>
          ))}
        </div>

        <Link href="/concierge" className="hidden md:inline-block nav-btn-dark">
          Book Now
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden text-navy-900 text-2xl">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur-xl px-4 py-4 flex flex-col gap-2">
          {links.map(l => (
            <Link
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-navy-900 hover:text-gold-400 text-sm py-1 font-medium"
            >
              {l.name}
            </Link>
          ))}
          <Link href="/concierge" className="nav-btn-dark text-center mt-2">
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
NAV

# ── 6. Update layout with JSON‑LD SEO schema ─────────────────────────
log "Adding SEO schema..."
cat > src/app/layout.tsx <<'LAY'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Planet&Travel — Luxury Travel Curator | Gwalior",
    template: "%s | Planet&Travel",
  },
  description:
    "Bespoke luxury journeys across India since 2000. Private guides, palace stays, train tickets, car rentals.",
  metadataBase: new URL("https://planet-travel.vercel.app"),
  openGraph: {
    siteName: "Planet&Travel",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Planet&Travel",
              image: "https://planet-travel.vercel.app/assets/logo/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Platform 1, Gwalior Railway Station, opposite NCC Office",
                addressLocality: "Gwalior",
                addressRegion: "Madhya Pradesh",
                addressCountry: "IN",
                postalCode: "474002",
              },
              telephone: "+916261031710",
              priceRange: "₹₹",
              openingHours: "Mo-Su 06:00-23:00",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
LAY

# ── 7. Update VideoCard3D to use the lighter overlay ─────────────────
log "Updating VideoCard3D for clearer images..."
cat > src/components/VideoCard3D.tsx <<'VC3D'
export default function VideoCard3D({
  webmSrc,
  posterSrc,
  title,
  description,
}: {
  webmSrc: string;
  posterSrc: string;
  title: string;
  description: string;
}) {
  return (
    <div className="glass rounded-2xl overflow-hidden border border-gold-400/10 video-card group relative">
      <video autoPlay muted loop playsInline poster={posterSrc} className="w-full h-full object-cover">
        <source src={webmSrc} type="video/webm" />
      </video>
      <div className="absolute inset-0 video-card-overlay group-hover:bg-navy-950/10 transition-colors flex items-end p-4">
        <div>
          <h4 className="text-white font-heading text-lg mb-1 drop-shadow-lg">{title}</h4>
          <p className="text-white/90 text-xs drop-shadow-md">{description}</p>
        </div>
      </div>
    </div>
  );
}
VC3D

# ── 8. Build & verify ─────────────────────────────────────────────────
log "Building project..."
if ! npm run build; then
    fail "Build failed – check the errors above."
fi

# ── 9. Commit & push ─────────────────────────────────────────────────
log "Committing and pushing..."
git add -A
git commit -m "💎 Pearl header, crystal-clear media, luxury gradient, SEO schema" || warn "Nothing to commit (maybe already up to date)"
git push origin main

echo ""
echo -e "${GREEN}════════════════════════════════════════════════${NC}"
echo -e "${GREEN}  ✅  Planet&Travel upgraded successfully!${NC}"
echo -e "${GREEN}  • Dark pearl 3D header buttons${NC}"
echo -e "${GREEN}  • Logo at /assets/logo/logo.png${NC}"
echo -e "${GREEN}  • Global animated skyblue/purple/yellow bg${NC}"
echo -e "${GREEN}  • All overlays lightened – images & videos are crystal clear${NC}"
echo -e "${GREEN}  • JSON‑LD LocalBusiness SEO schema active${NC}"
echo -e "${GREEN}  • Vercel will deploy automatically${NC}"
echo -e "${GREEN}════════════════════════════════════════════════${NC}"