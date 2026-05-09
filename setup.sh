#!/usr/bin/env bash
###############################################################################
# Planet&Travel – INDUSTRY FOOTER + CLEAR HDR + FULL HERO FIX
###############################################################################
set -euo pipefail
cd "$(dirname "$0")" || exit 1

echo "⬇️  Pulling latest..."
git pull --rebase origin main 2>/dev/null || { git stash; git pull --rebase origin main; git stash pop 2>/dev/null || true; }

# ── 1. Lighter hero overlay (crystal clear HDR) ─────────────────────
sed -i 's/--overlay-dark: rgba(0,0,0,0.55);/--overlay-dark: rgba(0,0,0,0.25);/' src/app/globals.css

# ── 2. Industry-grade Footer ────────────────────────────────────────
cat > src/components/Footer.tsx <<'FOOT'
import Link from 'next/link';

const services = [
  { name: "Confirm Ticket", href: "/services/confirm-ticket" },
  { name: "Luxury Tours", href: "/services/luxury-tours" },
  { name: "Premium Hotels", href: "/services/hotel-booking" },
  { name: "Flight Booking", href: "/services/flight-booking" },
  { name: "Visa & Forex", href: "/services/visa-assistance" },
  { name: "Corporate Travel", href: "/services/corporate-travel" },
  { name: "Car Rental", href: "/services/car-booking" },
];

const destinations = [
  "Gwalior", "Indore", "Bhopal", "Jabalpur", "Ujjain", "Khajuraho", "Orchha", "Kanha"
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80">
      {/* Top Wave */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white/5">
          <path d="M0,40 C300,100 900,0 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <Link href="/" className="inline-block mb-4">
            <img src="/assets/logo/logo.png" alt="Planet & Travel" className="h-12 w-auto brightness-200" />
          </Link>
          <p className="text-sm text-white/50 leading-relaxed mb-4">
            Crafting bespoke luxury journeys since 2000. Your trusted travel architect in the heart of India.
          </p>
          <div className="flex gap-3">
            <a href="https://wa.me/916261031710" target="_blank" className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 transition">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
            </a>
            <a href="mailto:concierge@planetandtravel.in" className="w-9 h-9 rounded-full bg-gold-400 flex items-center justify-center hover:bg-gold-300 transition">
              <svg className="w-4 h-4 fill-navy-950" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-gold-400 font-heading text-lg mb-4">Our Services</h4>
          <ul className="space-y-2">
            {services.map(s => (
              <li key={s.name}>
                <Link href={s.href} className="text-sm text-white/50 hover:text-gold-400 transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="text-gold-400 font-heading text-lg mb-4">Top Destinations</h4>
          <ul className="space-y-2">
            {destinations.map(d => (
              <li key={d}>
                <Link href="/#destinations" className="text-sm text-white/50 hover:text-gold-400 transition-colors">
                  {d}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold-400 font-heading text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-sm text-white/50 hover:text-gold-400">Home</Link></li>
            <li><Link href="/train" className="text-sm text-white/50 hover:text-gold-400">Train Tracker</Link></li>
            <li><Link href="/reviews" className="text-sm text-white/50 hover:text-gold-400">Reviews</Link></li>
            <li><Link href="/concierge" className="text-sm text-white/50 hover:text-gold-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gold-400 font-heading text-lg mb-4">Visit Us</h4>
          <p className="text-sm text-white/50 mb-2">Platform №1, Gwalior Railway Station</p>
          <p className="text-sm text-white/50 mb-2">Opposite NCC Office, Gwalior — 474002</p>
          <p className="text-sm text-white/50 mb-2">📞 +91 6261031710</p>
          <p className="text-sm text-white/50">✉️ concierge@planetandtravel.in</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Planet &amp; Travel. All rights reserved.</p>
          <p>Est. 2000 — 25+ Years of Excellence</p>
        </div>
      </div>
    </footer>
  );
}
FOOT

# ── 3. Expand services hero width (make it wide) ────────────────────
# The services hero uses hero-content with max-w-4xl. We'll make it max-w-7xl.
sed -i 's/max-w-4xl/max-w-7xl/g' src/app/services/page.tsx
# Also ensure the hero section fills width
sed -i 's/min-h-\[70vh\]/min-h-screen/g' src/app/services/page.tsx

# ── 4. Add hero section to sub-service pages ────────────────────────
# They currently import ServicePageSections directly without a hero.
# We'll rewrite each to include a hero with the services background video.

SERVICES_HERO_VIDEO="/assets/hero/services-hero.webm"
SERVICES_HERO_POSTER="/assets/services/palace.png"

for svc in confirm-ticket luxury-tours hotel-booking flight-booking visa-assistance corporate-travel; do
  TITLE=$(echo $svc | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')
  cat > "src/app/services/${svc}/page.tsx" <<END
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import ServicePageSections from '@/components/ServicePageSections';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata(
  "${TITLE} — Luxury Travel Service | Planet&Travel",
  "Experience the finest ${TITLE} with Planet&Travel since 2000.",
  "/services/${svc}"
);

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero section with services background video */}
        <section className="hero-background hero-fallback-bg" style={{minHeight:'70vh'}}>
          <video autoPlay muted loop playsInline poster="${SERVICES_HERO_POSTER}">
            <source src="${SERVICES_HERO_VIDEO}" type="video/webm" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content" style={{minHeight:'70vh'}}>
            <div className="max-w-7xl px-4">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                <span className="text-gradient">${TITLE}</span>
              </h1>
              <p className="text-gradient-sub text-lg max-w-2xl mx-auto">
                Premium ${TITLE} — curated by Planet&amp;Travel since 2000.
              </p>
            </div>
          </div>
        </section>
        <ServicePageSections
          title="${TITLE}"
          description="Discover luxury ${TITLE} with Planet&Travel."
          icon="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
          whatsappMessage="Hello Planet&Travel! I am interested in ${TITLE}."
        />
      </main>
      <Footer />
    </>
  );
}
END
done

# ── 5. Build & push ──────────────────────────────────────────────────
echo "🏗️  Building..."
npm run build

git add -A
git commit -m "💼 Industry footer, HDR clear overlay, wide services hero, sub-service heroes" || echo "Nothing to commit"
git push origin main

echo ""
echo "✅ All fixes applied:"
echo "   • Footer: luxurious multi-column with wave, icons, services, destinations, contact"
echo "   • Overlay: reduced to 25% – images & videos are crystal clear"
echo "   • Services hero: full-height (100vh) and max-w-7xl wide"
echo "   • Sub-services: each now has a hero section with the services background video"
echo "   • Vercel will deploy"