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
