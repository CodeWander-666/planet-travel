#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")" || exit 1
echo "⬇️  Pulling latest..."
git pull --rebase origin main 2>/dev/null || { git stash; git pull --rebase origin main; git stash pop 2>/dev/null || true; }

# ── Industry-grade footer with dark black text, bold styling ─────────
cat > src/components/Footer.tsx <<'FOOT'
import Link from 'next/link';

const serviceLinks = [
  { name: 'Confirm Railway Ticket', href: '/services/confirm-ticket' },
  { name: 'Luxury Tours & Packages', href: '/services/luxury-tours' },
  { name: 'Premium Hotel Booking', href: '/services/hotel-booking' },
  { name: 'Domestic & International Flights', href: '/services/flight-booking' },
  { name: 'Visa & Forex Assistance', href: '/services/visa-assistance' },
  { name: 'Corporate Travel & MICE', href: '/services/corporate-travel' },
  { name: 'Car Rental & Chauffeur', href: '/services/car-booking' },
];

const destinationCities = [
  'Gwalior', 'Indore', 'Bhopal', 'Jabalpur', 'Ujjain',
  'Khajuraho', 'Orchha', 'Kanha', 'Bandhavgarh', 'Pachmarhi'
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <img
                src="/assets/logo/logo.png"
                alt="Planet & Travel"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-800 font-semibold leading-relaxed mb-3">
              Planet<span className="text-gold-400">&</span>Travel
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Luxury travel curated since 2000. Your personal travel architect
              for India — private guides, palace stays, and confirmed railway tickets.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/916261031710"
                target="_blank"
                className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 transition"
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
              </a>
              <a
                href="mailto:concierge@planetandtravel.in"
                className="w-9 h-9 rounded-full bg-gold-400 flex items-center justify-center hover:bg-gold-300 transition"
                aria-label="Send email"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4 font-heading">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-gold-400 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Top Destinations */}
          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4 font-heading">
              Top Destinations
            </h4>
            <ul className="space-y-2.5">
              {destinationCities.map(city => (
                <li key={city}>
                  <Link
                    href="/#destinations"
                    className="text-sm text-gray-700 hover:text-gold-400 transition-colors font-medium"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Quick Links */}
          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-gray-700 hover:text-gold-400 font-medium">Home</Link></li>
              <li><Link href="/services" className="text-sm text-gray-700 hover:text-gold-400 font-medium">All Services</Link></li>
              <li><Link href="/services/car-booking" className="text-sm text-gray-700 hover:text-gold-400 font-medium">Car Rental</Link></li>
              <li><Link href="/train" className="text-sm text-gray-700 hover:text-gold-400 font-medium">Train Tracker</Link></li>
              <li><Link href="/reviews" className="text-sm text-gray-700 hover:text-gold-400 font-medium">Reviews</Link></li>
              <li><Link href="/concierge" className="text-sm text-gray-700 hover:text-gold-400 font-medium">Contact Concierge</Link></li>
            </ul>
          </div>

          {/* Column 5 — Contact / Visit Us */}
          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4 font-heading">
              Visit Us
            </h4>
            <div className="space-y-2.5 text-sm text-gray-700">
              <p className="font-semibold">Planet & Travel</p>
              <p>Platform №1, Gwalior Railway Station</p>
              <p>Opposite NCC Office</p>
              <p>Gwalior, Madhya Pradesh — 474002</p>
              <p className="pt-2">
                <span className="font-semibold">📞</span>{' '}
                <a href="tel:+916261031710" className="hover:text-gold-400 transition-colors font-medium">
                  +91 62610 31710
                </a>
              </p>
              <p>
                <span className="font-semibold">✉️</span>{' '}
                <a href="mailto:concierge@planetandtravel.in" className="hover:text-gold-400 transition-colors font-medium">
                  concierge@planetandtravel.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p className="font-medium">
            &copy; {currentYear} Planet &amp; Travel. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <p className="font-medium">Est. 2000 — 25+ Years of Excellence</p>
            <span className="hidden sm:inline text-gray-300">|</span>
            <Link href="/" className="hover:text-gold-400 transition-colors font-medium">Home</Link>
            <Link href="/concierge" className="hover:text-gold-400 transition-colors font-medium">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
FOOT

echo "🏗️  Building..."
npm run build

git add -A
git commit -m "💼 Industry-grade footer – dark text, bold, multi-column" || echo "Nothing to commit"
git push origin main

echo ""
echo "✅ Footer completely rewritten:"
echo "   • Pure white background with dark black text & bold headings"
echo "   • 5-column layout: Brand, Services, Destinations, Quick Links, Visit Us"
echo "   • WhatsApp & Email icons in Brand column"
echo "   • Full address, phone, email with proper links"
echo "   • Bottom bar with copyright & quick links"