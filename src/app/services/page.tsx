import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard3D from '@/components/ServiceCard3D';
import LenisSmoothScroll from '@/components/LenisSmoothScroll';
import { services } from '@/lib/services';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMetadata(
  "Our Luxury Travel Services — Planet&Travel | Since 2000",
  "Explore all luxury travel services: confirmed railway tickets, bespoke tours, premium hotels, flights, visa assistance & corporate travel. 25+ years of excellence.",
  "/services"
);

function FeatureImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-2xl border border-gold-400/10">
      <img src={src} alt={alt} className="w-full h-64 md:h-80 object-cover service-img-hover" loading="lazy" />
    </div>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <span className="text-4xl md:text-5xl font-heading text-gradient block">{number}</span>
      <span className="text-cream-100/40 text-sm mt-2 block">{label}</span>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="glass-light rounded-xl border border-gold-400/10 overflow-hidden">
      <details className="group">
        <summary className="px-6 py-4 cursor-pointer flex items-center justify-between text-gold-400 font-heading text-lg list-none">
          {q}
          <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="px-6 pb-4 text-cream-100/60 text-sm leading-relaxed">{a}</div>
      </details>
    </div>
  );
}

export default function ServicesPage() {
  const whatsappUrl = "https://wa.me/916261031710?text=Hello%20Planet%26Travel!%20I%20am%20interested%20in%20your%20services.";
  return (
    <LenisSmoothScroll>
      <Navbar />
      <main>
        {/* SECTION 1 – Fixed Hero */}
        <section className="relative min-h-[70vh] hero-background">
          <video autoPlay muted loop playsInline poster="/assets/homepage/destinations/gwalior.png">
            <source src="/assets/homepage/destinations/gwalior.png" type="video/webm" />
            <source src="/assets/homepage/destinations/gwalior.png" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content flex items-center justify-center h-full">
            <div className="text-center px-4 max-w-4xl">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6">
                <span className="text-gradient font-bold">Our Luxury Services</span>
              </h1>
              <p className="text-cream-100/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Every journey is a masterpiece — curated with precision since 2000.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={whatsappUrl} target="_blank" className="bg-gold-400 text-navy-950 font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-gold-400/30 transition-all text-lg">
                  Enquire Now
                </a>
                <Link href="/concierge" className="border border-gold-400/30 text-gradient-sub font-bold px-8 py-4 rounded-xl hover:bg-gold-400/10 transition-all text-lg">
                  Contact Concierge
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections unchanged (as previously built) */}
        <section className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Everything You Need" subtitle="Six pillars of flawless luxury travel" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => <ServiceCard3D key={s.id} {...s} delay={i * 0.1} />)}
            </div>
          </div>
        </section>

        {/* Confirm Ticket Section */}
        <section className="py-24 bg-navy-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading text-gold-400 mb-4">🎫 Confirm Railway Ticket</h2>
                <p className="text-cream-100/60 leading-relaxed mb-4">
                  With a <strong className="text-gold-400">94% Tatkal success rate</strong>, our IRCTC‑authorized agents sit at the counter the moment booking opens. Over <strong className="text-gold-400">100,000 tickets</strong> confirmed since 2000.
                </p>
                <Link href="/services/confirm-ticket" className="inline-block mt-6 bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-lg hover:shadow-xl transition-all">Book Tickets →</Link>
              </div>
              <FeatureImage src="/assets/homepage/destinations/gwalior.png" alt="Indian Railway train" />
            </div>
          </div>
        </section>

        {/* Luxury Tours */}
        <section className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FeatureImage src="/assets/homepage/destinations/gwalior.png" alt="Luxury palace hotel" />
              <div>
                <h2 className="text-3xl md:text-4xl font-heading text-gold-400 mb-4">🏰 Bespoke Luxury Tours</h2>
                <p className="text-cream-100/60 leading-relaxed mb-4">Private guides, palace stays, helicopter transfers — every tour is a one‑of‑a‑kind masterpiece.</p>
                <Link href="/services/luxury-tours" className="inline-block mt-6 bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-lg hover:shadow-xl transition-all">Explore Tours →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Hotels */}
        <section className="py-24 bg-navy-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading text-gold-400 mb-4">🛏️ Premium Hotels & Palaces</h2>
                <p className="text-cream-100/60 leading-relaxed mb-4">From Taj Usha Kiran Palace to Jehan Numa Retreat — exclusive rates at India's finest.</p>
                <Link href="/services/hotel-booking" className="inline-block mt-6 bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-lg hover:shadow-xl transition-all">Book Hotels →</Link>
              </div>
              <FeatureImage src="/assets/homepage/destinations/gwalior.png" alt="Luxury hotel room" />
            </div>
          </div>
        </section>

        {/* Flights */}
        <section className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FeatureImage src="/assets/homepage/destinations/gwalior.png" alt="Airplane wing" />
              <div>
                <h2 className="text-3xl md:text-4xl font-heading text-gold-400 mb-4">✈️ Flight Booking</h2>
                <p className="text-cream-100/60 leading-relaxed mb-4">Domestic & international flights at competitive prices. Business class upgrades available.</p>
                <Link href="/services/flight-booking" className="inline-block mt-6 bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-lg hover:shadow-xl transition-all">Search Flights →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works (placeholder video in card could be added later) */}
        <section className="py-24 bg-navy-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="How It Works" subtitle="Three simple steps" />
            <div className="grid md:grid-cols-3 gap-8">
              {[{step:'01',title:'Share',desc:'Tell us your travel needs.'},{step:'02',title:'Plan',desc:'Get a custom itinerary.'},{step:'03',title:'Book',desc:'Confirm & travel.'}].map((s,i)=>(
                <div key={i} className="glass-light rounded-2xl p-8 text-center border border-gold-400/10">
                  <span className="text-5xl font-heading text-gold-400/20 absolute top-4 right-6">{s.step}</span>
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
            <StatItem number="25+" label="Years" />
            <StatItem number="50K+" label="Travellers" />
            <StatItem number="100K+" label="Tickets" />
            <StatItem number="500+" label="Tours" />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-navy-900/30">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="FAQ" />
            <div className="space-y-4">
              <FAQItem q="How quickly can I get a confirmed Tatkal ticket?" a="Within 2 hours of Tatkal opening." />
              <FAQItem q="Do you arrange tours outside MP?" a="Yes, across India and international." />
              <FAQItem q="What makes Planet&Travel different?" a="Boutique, human‑first travel concierge since 2000." />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Client Love" />
            <div className="grid md:grid-cols-3 gap-6">
              {[{q:"Flawless MP tour!",n:"Priya S.",c:"Mumbai"},{q:"Tatkal booked in minutes.",n:"Rajesh G.",c:"Indore"},{q:"Luxury safari perfection.",n:"Ananya P.",c:"Ahmedabad"}].map((r,i)=>(
                <div key={i} className="glass-light rounded-xl p-6">
                  <div className="flex gap-1 mb-3 text-gold-400">★★★★★</div>
                  <p className="text-cream-100/70 italic text-sm mb-4">"{r.q}"</p>
                  <span className="text-gold-400 font-semibold text-sm">{r.n}</span><span className="text-cream-100/40 text-xs ml-2">{r.c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 bg-gradient-to-br from-navy-900 to-navy-950 relative text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.12),transparent_50%)]" />
          <div className="max-w-4xl mx-auto px-4 relative">
            <SectionHeader title="Ready to Travel?" />
            <a href={whatsappUrl} target="_blank" className="bg-green-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-green-500 transition-all text-lg inline-flex items-center gap-2">
              Chat on WhatsApp
            </a>
          </div>
        </section>

        {/* Visit */}
        <section className="py-24 bg-navy-950 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Visit Us" />
            <div className="glass rounded-2xl p-8">
              <p className="text-xl text-gold-400 font-heading mb-2">Platform №1, Gwalior Railway Station</p>
              <p className="text-cream-100/50">Opposite NCC Office, Gwalior — 474002</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </LenisSmoothScroll>
  );
}
