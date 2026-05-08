import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageSections from '@/components/ServicePageSections';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata(
  "Hotel Booking — Luxury Travel Service | Planet&Travel",
  "Experience the finest Hotel Booking with Planet&Travel, serving Gwalior, Indore, and all of Madhya Pradesh since 2000.",
  "/services/hotel-booking"
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
            poster="/assets/img/img-dd663bb7.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          >
            <source src="/assets/img/img-b252f6d3.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content relative z-10 text-center px-4 w-full">
            <h1 className="text-4xl md:text-6xl font-heading text-gradient mb-4">Hotel Booking</h1>
            <p className="text-gradient-sub text-lg">Premium Hotel Booking tailored to your desires, delivered with the signature Planet&Travel touch.</p>
          </div>
        </section>
        <ServicePageSections
          title="Hotel Booking"
          description="Discover luxury Hotel Booking — curated by Planet&Travel since 2000."
          icon="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
          whatsappMessage="Hello Planet&Travel! I am interested in Hotel Booking. Please share details and pricing."
        />
      </main>
      <Footer />
    </>
  );
}
