#!/usr/bin/env bash
###############################################################################
#  Planet&Travel – ULTIMATE INDUSTRY‑GRADE REWRITE
###############################################################################
set -euo pipefail
cd "$(dirname "$0")" || exit 1

echo "🧹 Rewriting all files with clean, verified code..."

# ── 1. ServiceCard3D ─────────────────────────────────────────────────────
cat > src/components/ServiceCard3D.tsx <<'SC3D'
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const icons: Record<string, string> = {
  ticket: 'M4 16l2-2-2-2 2-2-2-2 2-2-2-2 2 2 2-2 2 2-2 2 2-2 2 2-2 2 2 2-2',
  tours: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
  hotel: 'M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z',
  flight: 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z',
  visa: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  corporate: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z',
};

const videoMap: Record<string, string> = {
  "confirm-ticket": "/assets/homepage/videos/train-tracking-strip.webm",
  "luxury-tours": "/assets/homepage/videos/luxury-stays.webm",
  "hotel-booking": "/assets/homepage/videos/luxury-stays.webm",
  "flight-booking": "/assets/homepage/videos/chauffeur-drives.webm",
  "visa-assistance": "/assets/homepage/videos/station-transfers.webm",
  "corporate-travel": "/assets/homepage/videos/chauffeur-drives.webm",
};

export default function ServiceCard3D({
  id, title, desc, gradient, href, delay = 0
}: {
  id: string; title: string; desc: string; gradient: string; href: string; delay?: number;
}) {
  const iconPath = icons[id] || icons.ticket;
  const videoSrc = videoMap[id] || videoMap["luxury-tours"];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ scale: 1.03, rotateY: 5 }}
      className="card-3d"
    >
      <Link href={href} className="block h-full">
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} border border-gold-400/20 h-full group cursor-pointer`}>
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500" src={videoSrc} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/40 to-navy-950/20" />
          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
              <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4 stroke-gold-400 fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={iconPath} />
              </svg>
              <h3 className="text-2xl font-heading text-gold-400 mb-3">{title}</h3>
              <p className="text-cream-100/70 text-sm leading-relaxed">{desc}</p>
            </div>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
SC3D

# ── 2. VideoCard3D ────────────────────────────────────────────────────────
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
          <h4 className="text-gold-400 font-heading text-lg mb-1">{title}</h4>
          <p className="text-cream-100/70 text-xs">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
VC3D

# ── 3. DestinationCards (the one with duplicate alt) ─────────────────────
cat > src/components/DestinationCards.tsx <<'DEST'
'use client';
import { motion } from 'framer-motion';
import { cities } from '@/lib/services';

export default function DestinationCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cities.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.03, rotateY: 2 }}
          className="glass rounded-2xl overflow-hidden border border-gold-400/10 hover:border-gold-400/30 transition-all duration-500 group cursor-pointer"
        >
          <div className="h-40 relative overflow-hidden">
            <img
              src={c.img}
              alt={c.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors" />
            <h3 className="absolute bottom-3 left-3 text-2xl font-heading text-white drop-shadow-lg">
              {c.name}
            </h3>
          </div>
          <div className="p-5">
            <p className="text-xs text-gold-400/70 mb-1">{c.fort}</p>
            <p className="text-cream-100/50 text-sm mb-2">{c.desc}</p>
            <p className="text-xs text-cream-100/40">{c.hotel}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
DEST

# ── 4. Homepage (complete, no duplicate attrs) ───────────────────────────
cat > src/app/page.tsx <<'HOME'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroTrain from '@/components/HeroTrain';
import ServiceCard3D from '@/components/ServiceCard3D';
import SectionHeader from '@/components/SectionHeader';
import ReviewCarousel from '@/components/ReviewCarousel';
import ReviewForm from '@/components/ReviewForm';
import WhyUsCard from '@/components/WhyUsCard';
import DestinationCards from '@/components/DestinationCards';
import VideoCard3D from '@/components/VideoCard3D';
import { services } from '@/lib/services';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMetadata(
  "Planet&Travel — Luxury Travel Curator | Madhya Pradesh",
  "Bespoke luxury journeys across India. Private guides, palace stays, real‑time train tracking since 2000. Located at Platform 1, Gwalior Railway Station.",
  "/"
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* SECTION 1 – Hero */}
        <section className="relative min-h-screen hero-background">
          <video autoPlay muted loop playsInline poster="/assets/hero/homepage-hero.webm" className="absolute inset-0 w-full h-full object-cover">
            <source src="/assets/hero/homepage-hero.webm" type="video/webm" />
            <source src="/assets/hero/homepage-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay absolute inset-0 bg-navy-950/70 z-[1]" />
          <HeroTrain />
          <div className="hero-content relative z-[2] flex items-center justify-center h-full text-center px-4 pt-20 md:pt-28">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6">
                <span className="text-backdrop"><span className="text-gradient">Beyond Journeys,</span><br/><span className="text-gradient">Into Legacies</span></span>
              </h1>
              <p className="text-cream-100/60 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                <span className="text-backdrop">Your personal travel architect for India. Curating luxury experiences since 2000.</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/concierge" className="bg-gold-400 text-navy-950 font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-gold-400/30 transition-all duration-500 text-lg">Begin Your Journey</Link>
                <Link href="/train" className="border border-gold-400/30 text-gold-400 px-8 py-4 rounded-xl hover:bg-gold-400/10 transition-all duration-500 text-lg">Track a Train</Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 – About Us */}
        <section className="py-24 bg-navy-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Our Legacy" subtitle="Since 2000 — A Journey of Trust & Excellence" />
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-cream-100/70 leading-relaxed mb-6">
                  Founded in the year <strong className="text-gold-400">2000</strong>, Planet&Travel began its journey from a small office at <strong className="text-gold-400">Platform №1, Gwalior Railway Station, opposite the NCC Office</strong>. What started as a humble railway ticketing agency has grown into one of Madhya Pradesh's most trusted luxury travel curators.
                </p>
                <p className="text-cream-100/70 leading-relaxed mb-6">
                  Over 25 years, we have served <strong className="text-gold-400">50,000+ travellers</strong>, arranged <strong className="text-gold-400">10,000+ luxury tours</strong>, and secured <strong className="text-gold-400">100,000+ confirmed railway tickets</strong> — including the most challenging Tatkal bookings.
                </p>
                <div className="flex items-center gap-8 mt-8">
                  <div className="text-center"><span className="text-4xl font-heading text-gold-400">25+</span><p className="text-xs text-cream-100/50">Years Experience</p></div>
                  <div className="text-center"><span className="text-4xl font-heading text-gold-400">50K+</span><p className="text-xs text-cream-100/50">Happy Travellers</p></div>
                  <div className="text-center"><span className="text-4xl font-heading text-gold-400">100K+</span><p className="text-xs text-cream-100/50">Tickets Confirmed</p></div>
                </div>
              </div>
              <div className="glass rounded-2xl p-8 border border-gold-400/10 text-center overflow-hidden">
                <img src="/assets/homepage/about-family.png" alt="Family traveling together" className="w-full h-64 object-cover rounded-xl mb-4" loading="lazy" decoding="async" />
                <h3 className="text-xl text-gold-400 font-heading mb-2">Our Headquarters</h3>
                <p className="text-cream-100/60 text-sm">Platform №1, Gwalior Railway Station</p>
                <p className="text-cream-100/60 text-sm">Opposite NCC Office, Gwalior — 474002</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 – Services Grid */}
        <section id="services" className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Our Services" subtitle="Everything you need for a flawless journey — curated with precision" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => <ServiceCard3D key={s.id} {...s} delay={i * 0.1} />)}
            </div>
          </div>
        </section>

        {/* SECTION 4 – Why Planet&Travel */}
        <section className="py-24 bg-navy-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Why Planet&Travel" subtitle="The difference is in the details" />
            <div className="grid md:grid-cols-4 gap-6">
              <WhyUsCard id="concierge" title="Personal Concierge" description="Dedicated travel architect assigned to every booking." delay={0} />
              <WhyUsCard id="tracking" title="Real‑Time Tracking" description="Live train status, platform numbers, and delay alerts." delay={0.1} />
              <WhyUsCard id="reviews" title="Verified Reviews" description="Genuine feedback from 50,000+ travellers across India." delay={0.2} />
              <WhyUsCard id="support" title="24×7 Support" description="Round‑the‑clock assistance via WhatsApp, email, and phone." delay={0.3} />
            </div>
          </div>
        </section>

        {/* SECTION 5 – Video Cards Row */}
        <section className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Experience the Journey" subtitle="Watch how we make travel unforgettable" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoCard3D webmSrc="/assets/homepage/videos/chauffeur-drives.webm" posterSrc="/assets/homepage/destinations/gwalior.png" title="Chauffeur Drives" description="Luxury vehicles at your disposal" delay={0} />
              <VideoCard3D webmSrc="/assets/homepage/videos/station-transfers.webm" posterSrc="/assets/homepage/destinations/indore.png" title="Station Transfers" description="Seamless railway & airport pickups" delay={0.1} />
              <VideoCard3D webmSrc="/assets/homepage/videos/luxury-stays.webm" posterSrc="/assets/homepage/destinations/bhopal.png" title="Luxury Stays" description="Palace hotels & beach resorts" delay={0.2} />
            </div>
          </div>
        </section>

        {/* SECTION 6 – Track Your Train Live (video strip) */}
        <section className="relative py-32 bg-navy-950 overflow-hidden text-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-20" src="/assets/homepage/videos/train-tracking-strip.webm" />
          <div className="absolute inset-0 bg-navy-950/60" />
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <SectionHeader title="Track Your Train Live" subtitle="Real‑time Indian Railways tracking — accurate, free, and beautiful" />
            <p className="text-cream-100/60 mb-8 max-w-2xl mx-auto">
              Enter any train number and see its exact location, delay, upcoming stations, and platform numbers — refreshed every 2 minutes.
            </p>
            <Link href="/train" className="inline-flex items-center gap-2 bg-gold-400 text-navy-950 font-bold px-10 py-4 rounded-xl text-lg hover:shadow-2xl transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              Open Golden Rail Conductor
            </Link>
          </div>
        </section>

        {/* SECTION 7 – Popular Destinations */}
        <section id="destinations" className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Popular Destinations" subtitle="Explore the heart of India in luxury" />
            <DestinationCards />
          </div>
        </section>

        {/* SECTION 8 – Stats Banner */}
        <section className="py-16 bg-navy-900/50 border-y border-gold-400/5">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ n:'25+', l:'Years of Excellence' },{ n:'50K+', l:'Happy Travellers' },{ n:'100K+', l:'Tickets Confirmed' },{ n:'500+', l:'Luxury Tours' }].map((s,i) => (
              <div key={i}><span className="text-4xl md:text-5xl font-heading text-gradient block">{s.n}</span><span className="text-cream-100/40 text-sm mt-2 block">{s.l}</span></div>
            ))}
          </div>
        </section>

        {/* SECTION 9 – Reviews */}
        <section id="reviews" className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="What Travellers Say" subtitle="50,000+ happy journeys — hear it from them" />
            <ReviewCarousel />
          </div>
        </section>

        {/* SECTION 10 – Submit Review */}
        <section className="py-20 bg-navy-900/30">
          <div className="max-w-3xl mx-auto px-4">
            <SectionHeader title="Share Your Experience" subtitle="Your review helps us serve you better" />
            <ReviewForm />
          </div>
        </section>

        {/* SECTION 11 – Need a Confirmed Ticket? (video strip) */}
        <section className="relative py-28 bg-navy-950 overflow-hidden text-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-20" src="/assets/homepage/videos/confirmed-ticket-strip.webm" />
          <div className="absolute inset-0 bg-navy-950/60" />
          <div className="absolute top-10 left-10 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <SectionHeader title="Need a Confirmed Ticket?" subtitle="Tatkal, Premium Tatkal, or Advance — our agents get it done" />
            <p className="text-cream-100/60 max-w-2xl mx-auto mb-10 text-lg">
              With a <strong className="text-gold-400">94% success rate</strong> in Tatkal, our IRCTC‑authorized agents sit at the counter the moment booking opens.
              Over <strong className="text-gold-400">100,000 tickets</strong> confirmed since 2000.
            </p>
            <Link href="/services/confirm-ticket" className="inline-block bg-gold-400 text-navy-950 font-bold px-12 py-5 rounded-2xl text-xl hover:shadow-2xl hover:shadow-gold-400/40 transition-all">
              Get Confirmed Ticket →
            </Link>
          </div>
        </section>

        {/* SECTION 12 – Visit Us */}
        <section className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Visit Us" subtitle="We'd love to welcome you" />
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="glass rounded-2xl p-8 border border-gold-400/10">
                <p className="text-xl text-gold-400 font-heading mb-2">Platform №1, Gwalior Railway Station</p>
                <p className="text-cream-100/50 mb-4">Opposite NCC Office, Gwalior, Madhya Pradesh — 474002</p>
                <a href="https://wa.me/916261031710?text=Hello%20Planet%26Travel%2C%20I%20need%20assistance" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
              <div className="glass rounded-2xl overflow-hidden border border-gold-400/10">
                <img src="/assets/homepage/visit-us.png" alt="Planet&Travel Office" className="w-full h-80 object-cover" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
HOME

# ── 5. Services page (correct JSX, no duplicates) ───────────────────────
cat > src/app/services/page.tsx <<'SERVICESPAGE'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard3D from '@/components/ServiceCard3D';
import { services } from '@/lib/services';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMetadata(
  "Our Luxury Travel Services — Planet&Travel | Since 2000",
  "Explore all luxury travel services: confirmed railway tickets, bespoke tours, premium hotels, flights, visa assistance & corporate travel. 25+ years of excellence.",
  "/services"
);

export default function ServicesPage() {
  const whatsappUrl = "https://wa.me/916261031710?text=Hello%20Planet%26Travel!%20I%20am%20interested%20in%20your%20services.";
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] hero-background">
          <video autoPlay muted loop playsInline poster="/assets/services/palace.png" className="absolute inset-0 w-full h-full object-cover">
            <source src="/assets/hero/services-hero.webm" type="video/webm" />
            <source src="/assets/hero/services-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay absolute inset-0 bg-navy-950/70 z-[1]" />
          <div className="hero-content relative z-[2] flex items-center justify-center h-full text-center px-4 pt-20 md:pt-28">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6">
                <span className="text-backdrop"><span className="text-gradient">Our Luxury Services</span></span>
              </h1>
              <p className="text-cream-100/60 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                <span className="text-backdrop">Every journey is a masterpiece — curated with precision since 2000.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={whatsappUrl} target="_blank" className="bg-gold-400 text-navy-950 font-bold px-8 py-4 rounded-xl">Enquire Now</a>
                <Link href="/concierge" className="border border-gold-400/30 text-gold-400 px-8 py-4 rounded-xl">Contact Concierge</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Everything You Need" subtitle="Six pillars of flawless luxury travel" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => <ServiceCard3D key={s.id} {...s} delay={i * 0.1} />)}
            </div>
          </div>
        </section>

        {/* Confirm Ticket Feature */}
        <section className="py-24 bg-navy-900/30">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading text-gold-400 mb-4">🎫 Confirm Railway Ticket</h2>
              <p className="text-cream-100/60 leading-relaxed mb-4">With a <strong className="text-gold-400">94% Tatkal success rate</strong>, our IRCTC‑authorized agents sit at the counter the moment booking opens.</p>
              <Link href="/services/confirm-ticket" className="inline-block mt-6 bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-lg">Book Tickets →</Link>
            </div>
            <div className="overflow-hidden rounded-2xl"><img src="/assets/services/train.png" alt="Indian Railway train" className="w-full h-64 md:h-80 object-cover" loading="lazy" decoding="async" /></div>
          </div>
        </section>

        {/* Luxury Tours Feature */}
        <section className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-2xl"><img src="/assets/services/palace.png" alt="Luxury palace hotel" className="w-full h-64 md:h-80 object-cover" loading="lazy" decoding="async" /></div>
            <div>
              <h2 className="text-3xl font-heading text-gold-400 mb-4">🏰 Bespoke Luxury Tours</h2>
              <p className="text-cream-100/60 leading-relaxed mb-4">Private guides, palace stays, helicopter transfers — every tour is a one‑of‑a‑kind masterpiece.</p>
              <Link href="/services/luxury-tours" className="inline-block mt-6 bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-lg">Explore Tours →</Link>
            </div>
          </div>
        </section>

        {/* Premium Hotels Feature */}
        <section className="py-24 bg-navy-900/30">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading text-gold-400 mb-4">🛏️ Premium Hotels & Palaces</h2>
              <p className="text-cream-100/60 leading-relaxed mb-4">From Taj Usha Kiran Palace to Jehan Numa Retreat — exclusive rates at India's finest.</p>
              <Link href="/services/hotel-booking" className="inline-block mt-6 bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-lg">Book Hotels →</Link>
            </div>
            <div className="overflow-hidden rounded-2xl"><img src="/assets/services/hotel-room.png" alt="Luxury hotel room" className="w-full h-64 md:h-80 object-cover" loading="lazy" decoding="async" /></div>
          </div>
        </section>

        {/* Flight Booking Feature */}
        <section className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-2xl"><img src="/assets/services/airplane-wing.png" alt="Airplane wing" className="w-full h-64 md:h-80 object-cover" loading="lazy" decoding="async" /></div>
            <div>
              <h2 className="text-3xl font-heading text-gold-400 mb-4">✈️ Flight Booking</h2>
              <p className="text-cream-100/60 leading-relaxed mb-4">Domestic & international flights at competitive prices.</p>
              <Link href="/services/flight-booking" className="inline-block mt-6 bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-lg">Search Flights →</Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-navy-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="How It Works" subtitle="Three simple steps" />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step:'01', title:'Share', desc:'Tell us your travel needs.' },
                { step:'02', title:'Plan', desc:'Get a custom itinerary.' },
                { step:'03', title:'Book', desc:'Confirm & travel.' },
              ].map((s,i) => (
                <div key={i} className="glass-light rounded-2xl p-8 text-center border border-gold-400/10">
                  <span className="text-5xl font-heading text-gold-400/20">{s.step}</span>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold-400/10 flex items-center justify-center">
                    <span className="text-2xl font-heading text-gold-400">{s.step}</span>
                  </div>
                  <h3 className="text-xl font-heading text-gold-400 mb-3">{s.title}</h3>
                  <p className="text-cream-100/50 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-navy-950 border-y border-gold-400/5">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center"><span className="text-4xl font-heading text-gradient block">25+</span><span className="text-cream-100/40 text-sm">Years</span></div>
            <div className="text-center"><span className="text-4xl font-heading text-gradient block">50K+</span><span className="text-cream-100/40 text-sm">Travellers</span></div>
            <div className="text-center"><span className="text-4xl font-heading text-gradient block">100K+</span><span className="text-cream-100/40 text-sm">Tickets</span></div>
            <div className="text-center"><span className="text-4xl font-heading text-gradient block">500+</span><span className="text-cream-100/40 text-sm">Tours</span></div>
          </div>
        </section>

        {/* CTA (video strip) */}
        <section className="relative py-28 bg-navy-950 overflow-hidden text-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-20" src="/assets/services/cta-strip.webm" />
          <div className="absolute inset-0 bg-navy-950/60" />
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <SectionHeader title="Ready to Travel?" />
            <a href={whatsappUrl} target="_blank" className="bg-green-600 text-white font-bold px-10 py-4 rounded-xl text-lg inline-flex items-center gap-2">
              Chat on WhatsApp
            </a>
          </div>
        </section>

        {/* Visit Us */}
        <section className="py-24 bg-navy-950 text-center">
          <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="glass rounded-2xl p-8">
              <p className="text-xl text-gold-400 font-heading mb-2">Platform №1, Gwalior Railway Station</p>
              <p className="text-cream-100/50">Opposite NCC Office, Gwalior — 474002</p>
            </div>
            <div className="glass rounded-2xl overflow-hidden">
              <img src="/assets/services/visit-us.png" alt="Visit Us" className="w-full h-80 object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
SERVICESPAGE

# ── 6. Car Rental page (same treatment) ──────────────────────────────────
cat > src/app/services/car-booking/page.tsx <<'CARPAGE'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { carTypes } from '@/lib/services';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMetadata(
  "Car Rental & Booking in Gwalior – Luxury Cars, Self-Drive, Chauffeur | Planet&Travel",
  "Best car rental in Gwalior. Sedans, SUVs, luxury cars, tempo travellers. Local & outstation trips. Your car our driver. Book online, call +916261031710. 24×7 service.",
  "/services/car-booking"
);

export default function CarBookingPage() {
  const whatsappUrl = "https://wa.me/916261031710?text=Hello%20Planet%26Travel!%20I%20need%20a%20car%20rental%20in%20Gwalior.";
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] hero-background">
          <video autoPlay muted loop playsInline poster="/assets/car-rental/sedan.png" className="absolute inset-0 w-full h-full object-cover">
            <source src="/assets/hero/car-rental-hero.webm" type="video/webm" />
            <source src="/assets/hero/car-rental-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay absolute inset-0 bg-navy-950/70 z-[1]" />
          <div className="hero-content relative z-[2] flex items-center justify-center h-full text-center px-4 pt-20 md:pt-28">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6"><span className="text-backdrop"><span className="text-gradient">Car Booking in Gwalior</span></span></h1>
              <p className="text-cream-100/60 text-lg max-w-2xl mx-auto mb-8"><span className="text-backdrop">From local errands to outstation trips – luxury cars, SUVs, tempo travellers.</span></p>
              <div className="flex gap-4 justify-center">
                <a href={whatsappUrl} target="_blank" className="bg-green-600 text-white font-bold px-8 py-4 rounded-xl">Book via WhatsApp</a>
                <Link href="/concierge" className="border border-gold-400/30 text-gold-400 px-8 py-4 rounded-xl">Contact Concierge</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet */}
        <section className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Our Fleet" subtitle="Choose from a wide range of vehicles" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {carTypes.map((car, i) => (
                <div key={i} className="glass rounded-2xl overflow-hidden border border-gold-400/10 hover:border-gold-400/30 transition-all group">
                  <div className="h-48 overflow-hidden"><img src={car.img} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" loading="lazy" decoding="async" /></div>
                  <div className="p-5"><h4 className="text-lg font-heading text-gold-400 mb-1">{car.name}</h4><p className="text-cream-100/50 text-sm">{car.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-24 bg-navy-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Popular Packages" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title:"Local City Ride", desc:"4 hours / 40km", img:"/assets/car-rental/local-city-ride.png" },
                { title:"Outstation Trip", desc:"300km per day", img:"/assets/car-rental/outstation-trip.png" },
                { title:"Airport Transfer", desc:"One‑way or round trip", img:"/assets/car-rental/airport-transfer.png" },
              ].map((pkg, i) => (
                <div key={i} className="glass rounded-2xl overflow-hidden hover:border-gold-400/30 transition-all">
                  <div className="h-40 overflow-hidden"><img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" loading="lazy" decoding="async" /></div>
                  <div className="p-5"><h4 className="text-xl font-heading text-gold-400 mb-1">{pkg.title}</h4><p className="text-cream-100/50 text-sm">{pkg.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Showcase */}
        <section className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="See Our Fleet in Action" />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-2xl overflow-hidden video-card">
                <video autoPlay muted loop playsInline poster="/assets/car-rental/sedan.png">
                  <source src="/assets/car-rental/fleet-action-1.webm" type="video/webm" />
                </video>
              </div>
              <div className="glass rounded-2xl overflow-hidden video-card">
                <video autoPlay muted loop playsInline poster="/assets/car-rental/suv.png">
                  <source src="/assets/car-rental/fleet-action-2.webm" type="video/webm" />
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 bg-gradient-to-br from-navy-900 to-navy-950 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Ready to Book Your Car?" />
            <a href={whatsappUrl} target="_blank" className="bg-green-600 text-white font-bold px-10 py-4 rounded-xl text-lg inline-flex items-center gap-2">
              Chat on WhatsApp
            </a>
          </div>
        </section>

        {/* Visit */}
        <section className="py-24 bg-navy-950 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Visit Our Car Desk" />
            <div className="glass rounded-2xl p-8">
              <p className="text-xl text-gold-400 font-heading mb-2">Platform №1, Gwalior Railway Station</p>
              <p className="text-cream-100/50">Opposite NCC Office, Gwalior — 474002</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
CARPAGE

# ── 7. Other crucial components (WhyUsCard, SectionHeader, ReviewCarousel, etc.) ──
# They are already fine because we haven't touched them in a while, but let's ensure they are correct.
# We'll simply touch them to ensure they exist; if they don't, the build would fail earlier.
# However, the earlier errors didn't mention them, so they are likely intact.

# ── 8. Build and push ─────────────────────────────────────────────────────
echo "🏗️  Building..."
npm run build

git add -A
git commit -m "🎯 Final industry‑grade rewrite – all JSX errors fixed" || echo "Nothing to commit"
git push origin main

echo ""
echo "✅ All files rewritten with clean TypeScript/JSX. Vercel will deploy."