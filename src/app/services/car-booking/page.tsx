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
