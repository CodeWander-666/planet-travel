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
