import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
  "Bespoke luxury journeys across India. Private guides, palace stays, real-time train tracking since 2000.",
  "/"
);

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <span className="text-3xl font-heading text-gradient">{number}</span>
      <p className="text-xs text-gray-700">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="hero-background hero-fallback-bg">
          <video autoPlay muted loop playsInline poster="/assets/hero/homepage-hero.webm">
            <source src="/assets/hero/homepage-hero.webm" type="video/webm" />
            <source src="/assets/hero/homepage-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="max-w-4xl px-4">
              <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6">
                <span className="text-gradient">Beyond Journeys,</span><br />
                <span className="text-gradient">Into Legacies</span>
              </h1>
              <p className="text-gradient-sub text-lg mb-8">
                Your personal travel architect for India. Curating luxury since 2000.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/concierge" className="bg-gold-400 text-navy-950 font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition-all text-lg">
                  Begin Your Journey
                </Link>
                <Link href="/train" className="border border-gold-400/30 text-gold-400 px-8 py-4 rounded-xl hover:bg-gold-400/10 transition-all text-lg">
                  Track a Train
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-20 bg-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Our Legacy" subtitle="Since 2000 — A Journey of Trust &amp; Excellence" />
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-gray-800 leading-relaxed mb-4">
                  Founded in <strong className="text-gold-400">2000</strong> at{" "}
                  <strong className="text-gold-400">Platform No.1, Gwalior Railway Station, opposite the NCC Office</strong>.
                  Planet&amp;Travel has grown into MP&apos;s most trusted luxury travel curator.
                </p>
                <div className="flex gap-6 mt-6">
                  <StatBox number="25+" label="Years" />
                  <StatBox number="50K+" label="Travellers" />
                  <StatBox number="100K+" label="Tickets" />
                </div>
              </div>
              <div className="glass rounded-2xl overflow-hidden">
                <img src="/assets/homepage/about-family.png" alt="Family traveling" className="w-full h-72 object-cover" loading="lazy" />
                <p className="text-center text-gold-400 font-heading py-4">Platform No.1, Gwalior Railway Station</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Our Services" subtitle="Curated with precision" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => <ServiceCard3D key={s.id} {...s} />)}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20 bg-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Why Planet&amp;Travel" />
            <div className="grid md:grid-cols-4 gap-6">
              <WhyUsCard title="Personal Concierge" description="Dedicated travel architect for every booking." />
              <WhyUsCard title="Real-Time Tracking" description="Live train status, platforms, delays." />
              <WhyUsCard title="Verified Reviews" description="50,000+ genuine traveller reviews." />
              <WhyUsCard title="24x7 Support" description="WhatsApp, email, and phone." />
            </div>
          </div>
        </section>

        {/* Video Cards */}
        <section className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Experience the Journey" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoCard3D webmSrc="/assets/homepage/videos/chauffeur-drives.webm" posterSrc="/assets/homepage/videos/chauffeur-drives.webm" title="Chauffeur Drives" description="Luxury vehicles at your disposal" />
              <VideoCard3D webmSrc="/assets/homepage/videos/station-transfers.webm" posterSrc="/assets/homepage/videos/station-transfers.webm" title="Station Transfers" description="Seamless railway &amp; airport pickups" />
              <VideoCard3D webmSrc="/assets/homepage/videos/luxury-stays.webm" posterSrc="/assets/homepage/videos/luxury-stays.webm" title="Luxury Stays" description="Palace hotels &amp; beach resorts" />
            </div>
          </div>
        </section>

        {/* Train CTA */}
        <section className="py-20 text-center bg-white/10">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Track Your Train Live" subtitle="Real-time Indian Railways tracking" />
            <Link href="/train" className="inline-flex items-center gap-2 bg-gold-400 text-navy-950 font-bold px-10 py-4 rounded-xl text-lg hover:shadow-2xl transition-all">
              Open Golden Rail Conductor
            </Link>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Popular Destinations" />
            <DestinationCards />
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 bg-white/10 border-y border-white/20">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatBox number="25+" label="Years" />
            <StatBox number="50K+" label="Travellers" />
            <StatBox number="100K+" label="Tickets" />
            <StatBox number="500+" label="Tours" />
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="What Travellers Say" />
            <ReviewCarousel />
          </div>
        </section>

        {/* Submit Review */}
        <section className="py-16 bg-white/10">
          <div className="max-w-3xl mx-auto px-4">
            <SectionHeader title="Share Your Experience" />
            <ReviewForm />
          </div>
        </section>

        {/* Confirmed Ticket */}
        <section className="py-24 text-center bg-white/5">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Need a Confirmed Ticket?" subtitle="Tatkal, Premium Tatkal, or Advance — our agents get it done" />
            <Link href="/services/confirm-ticket" className="inline-block bg-gold-400 text-navy-950 font-bold px-12 py-5 rounded-2xl text-xl hover:shadow-2xl transition-all">
              Get Confirmed Ticket →
            </Link>
          </div>
        </section>

        {/* Visit Us */}
        <section className="py-20 bg-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Visit Us" />
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
              <div className="glass rounded-2xl p-8">
                <p className="text-xl text-gold-400 font-heading mb-2">Platform No.1, Gwalior Railway Station</p>
                <p className="text-gray-700">Opposite NCC Office, Gwalior — 474002</p>
              </div>
              <div className="glass rounded-2xl overflow-hidden">
                <img src="/assets/homepage/visit-us.png" alt="Planet&amp;Travel Office" className="w-full h-80 object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
