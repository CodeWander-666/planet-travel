import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageSections from '@/components/ServicePageSections';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata(
  "Corporate Travel — Luxury Travel Service | Planet&Travel",
  "Experience the finest Corporate Travel with Planet&Travel, serving Gwalior, Indore, and all of Madhya Pradesh since 2000.",
  "/services/corporate-travel"
);

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Video hero section */}
        <section className="relative min-h-[50vh] flex items-center video-hero">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/homepage/destinations/gwalior.png"
          >
            <source src="/assets/homepage/destinations/gwalior.png" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content relative z-10 text-center px-4 w-full">
            <h1 className="text-4xl md:text-6xl font-heading text-gradient mb-4">Corporate Travel</h1>
            <p className="text-gradient-sub text-lg">Premium Corporate Travel tailored to your desires, delivered with the signature Planet&Travel touch.</p>
          </div>
        </section>
        <ServicePageSections
          title="Corporate Travel"
          description="Discover luxury Corporate Travel — curated by Planet&Travel since 2000."
          icon="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
          whatsappMessage="Hello Planet&Travel! I am interested in Corporate Travel. Please share details and pricing."
        />
      </main>
      <Footer />
    </>
  );
}
