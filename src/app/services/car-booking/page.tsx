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

function CarCard({ name, desc, img }: { name: string; desc: string; img: string }) {
  return (
    <div className="glass rounded-2xl overflow-hidden border border-gold-400/10 hover:border-gold-400/30 transition-all duration-500 group">
      <div className="h-48 overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
      </div>
      <div className="p-5">
        <h4 className="text-lg font-heading text-gold-400 mb-1">{name}</h4>
        <p className="text-cream-100/50 text-sm">{desc}</p>
      </div>
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

export default function CarBookingPage() {
  const whatsappUrl = "https://wa.me/916261031710?text=Hello%20Planet%26Travel!%20I%20need%20a%20car%20rental%20in%20Gwalior.";

  return (
    <>
      <Navbar />
      <main>
        {/* SECTION 1 – Hero with video background */}
        <section className="relative min-h-[70vh] hero-background">
          <video
            autoPlay muted loop playsInline
            poster="/assets/homepage/destinations/gwalior.png"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/homepage/destinations/gwalior.png" type="video/webm" />
            <source src="/assets/homepage/destinations/gwalior.png" type="video/mp4" />
          </video>
          <div className="hero-overlay absolute inset-0 bg-navy-950/70 z-[1]" />
          <div className="hero-content relative z-[2] flex items-center justify-center h-full text-center px-4 pt-20 md:pt-28">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6">
                <span className="text-backdrop">
                  <span className="text-gradient font-bold">Car Booking in Gwalior</span>
                </span>
              </h1>
              <p className="text-gradient-sub text-lg md:text-xl max-w-2xl mx-auto mb-8">
                <span className="text-backdrop">
                  From local errands to outstation trips – luxury cars, SUVs, tempo travellers with chauffeur or self‑drive.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={whatsappUrl} target="_blank" className="bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-500 transition-all text-lg">Book via WhatsApp</a>
                <Link href="/concierge" className="border border-gold-400/30 text-gradient-sub font-bold px-8 py-4 rounded-xl hover:bg-gold-400/10 transition-all text-lg">Contact Concierge</Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 – About Car Rental Service (with image) */}
        <section className="py-24 bg-navy-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading text-gold-400 mb-4">🚗 Car Rental in Gwalior</h2>
                <p className="text-cream-100/70 leading-relaxed mb-4">
                  Planet&Travel operates the largest fleet of luxury and economy cars in Gwalior. Whether you need a sedan for a day trip, an SUV for a family outing, or a tempo traveller for a group – we have it.
                </p>
                <p className="text-cream-100/70 leading-relaxed mb-6">
                  <strong className="text-gold-400">Your Car, Our Driver</strong> service available for outstation trips, airport transfers, and wedding events.
                </p>
                <ul className="space-y-2 text-cream-100/50 text-sm">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-gold-400 rounded-full pulse-dot" /> Local & outstation rentals</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-gold-400 rounded-full pulse-dot" /> Self‑drive & chauffeur options</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-gold-400 rounded-full pulse-dot" /> 50+ cars in fleet</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-gold-400 rounded-full pulse-dot" /> 24×7 roadside assistance</li>
                </ul>
              </div>
              <div className="glass rounded-2xl p-4 overflow-hidden">
                <img src="/assets/homepage/destinations/gwalior.png" alt="Luxury car fleet" className="w-full h-80 object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 – Our Fleet (Car Cards) */}
        <section className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Our Fleet" subtitle="Choose from a wide range of vehicles" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {carTypes.map((car, i) => (
                <CarCard key={i} {...car} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 – Why Choose Our Car Service (3D cards) */}
        <section className="py-24 bg-navy-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Why Choose Planet&Travel Cars?" subtitle="The difference is in the details" />
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title:"Well‑Maintained Fleet", desc:"All cars serviced regularly, clean & sanitised." },
                { title:"Experienced Drivers", desc:"Courteous, background‑verified chauffeurs." },
                { title:"Transparent Pricing", desc:"No hidden charges. All tolls & taxes included." },
                { title:"24×7 Support", desc:"Call us anytime for assistance." },
              ].map((f, i) => (
                <div key={i} className="glass-light rounded-xl p-6 text-center border border-gold-400/10 hover:border-gold-400/30 transition-all card-3d">
                  <h4 className="text-gold-400 font-heading text-lg mb-2">{f.title}</h4>
                  <p className="text-cream-100/50 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 – How It Works */}
        <section className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="How It Works" subtitle="Three simple steps to your dream ride" />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step:'01', title:'Tell Us Your Need', desc:'Pick a car, date, and time.' },
                { step:'02', title:'Get Confirmation', desc:'We confirm availability instantly.' },
                { step:'03', title:'Enjoy Your Ride', desc:'Your car arrives on time.' },
              ].map((s, i) => (
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

        {/* SECTION 6 – Pricing / Packages (Video cards) */}
        <section className="py-24 bg-navy-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Popular Packages" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title:"Local City Ride", desc:"4 hours / 40km", img:"/assets/homepage/destinations/gwalior.png" },
                { title:"Outstation Trip", desc:"300km per day", img:"/assets/homepage/destinations/gwalior.png" },
                { title:"Airport Transfer", desc:"One‑way or round trip", img:"/assets/homepage/destinations/gwalior.png" },
              ].map((pkg, i) => (
                <div key={i} className="glass rounded-2xl overflow-hidden border border-gold-400/10 hover:border-gold-400/30 transition-all group">
                  <div className="h-40 overflow-hidden"><img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" /></div>
                  <div className="p-5">
                    <h4 className="text-xl font-heading text-gold-400 mb-1">{pkg.title}</h4>
                    <p className="text-cream-100/50 text-sm">{pkg.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 – Video Showcase */}
        <section className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="See Our Fleet in Action" />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-2xl overflow-hidden video-card">
                <video autoPlay muted loop playsInline poster="/assets/homepage/destinations/gwalior.png">
                  <source src="/assets/homepage/destinations/gwalior.png" type="video/webm" />
                </video>
              </div>
              <div className="glass rounded-2xl overflow-hidden video-card">
                <video autoPlay muted loop playsInline poster="/assets/homepage/destinations/gwalior.png">
                  <source src="/assets/homepage/destinations/gwalior.png" type="video/webm" />
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 – FAQ */}
        <section className="py-24 bg-navy-900/30">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Frequently Asked Questions" />
            <div className="space-y-4">
              {[
                { q:"Do you provide self‑drive cars in Gwalior?", a:"Yes, we offer self‑drive options for both local and outstation trips. A valid driving license and security deposit are required." },
                { q:"Can I book a car for an outstation trip?", a:"Absolutely. Our outstation packages include 300km per day with driver allowance." },
                { q:"Are your drivers experienced?", a:"All our drivers are background‑verified and have at least 5 years of driving experience." },
                { q:"How do I pay?", a:"You can pay via UPI, cash, or card after the trip completion." },
              ].map((faq, i) => (
                <details key={i} className="glass-light rounded-xl border border-gold-400/10 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer flex items-center justify-between text-gold-400 font-heading list-none">
                    {faq.q}
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-6 pb-4 text-cream-100/60 text-sm">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9 – Stats */}
        <section className="py-20 bg-navy-950 border-y border-gold-400/5">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem number="50+" label="Cars in Fleet" />
            <StatItem number="10K+" label="Trips Completed" />
            <StatItem number="98%" label="On‑Time Rate" />
            <StatItem number="24×7" label="Support" />
          </div>
        </section>

        {/* SECTION 10 – CTA */}
        <section className="py-28 bg-gradient-to-br from-navy-900 to-navy-950 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.12),transparent_50%)]" />
          <div className="max-w-4xl mx-auto px-4 relative">
            <SectionHeader title="Ready to Book Your Car?" />
            <a href={whatsappUrl} target="_blank" className="bg-green-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-green-500 transition-all text-lg inline-flex items-center gap-2">
              Chat on WhatsApp
            </a>
          </div>
        </section>

        {/* SECTION 11 – Visit */}
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
