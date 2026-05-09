import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import ServicePageSections from '@/components/ServicePageSections';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata(
  "Hotel Booking — Luxury Travel Service | Planet&Travel",
  "Experience the finest Hotel Booking with Planet&Travel since 2000.",
  "/services/hotel-booking"
);

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero section with services background video */}
        <section className="hero-background hero-fallback-bg" style={{minHeight:'70vh'}}>
          <video autoPlay muted loop playsInline poster="/assets/services/palace.png">
            <source src="/assets/hero/services-hero.webm" type="video/webm" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content" style={{minHeight:'70vh'}}>
            <div className="max-w-7xl px-4">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                <span className="text-gradient">Hotel Booking</span>
              </h1>
              <p className="text-gradient-sub text-lg max-w-2xl mx-auto">
                Premium Hotel Booking — curated by Planet&amp;Travel since 2000.
              </p>
            </div>
          </div>
        </section>
        <ServicePageSections
          title="Hotel Booking"
          description="Discover luxury Hotel Booking with Planet&Travel."
          icon="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
          whatsappMessage="Hello Planet&Travel! I am interested in Hotel Booking."
        />
      </main>
      <Footer />
    </>
  );
}
