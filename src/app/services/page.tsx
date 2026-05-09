import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard3D from '@/components/ServiceCard3D';
import { services } from '@/lib/services';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMetadata("Our Luxury Travel Services — Planet&Travel","Explore all luxury travel services since 2000.","/services");

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-background hero-fallback-bg" style={{minHeight:'70vh'}}>
          <video autoPlay muted loop playsInline poster="/assets/services/palace.png">
            <source src="/assets/hero/services-hero.webm" type="video/webm" />
            <source src="/assets/hero/services-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content" style={{minHeight:'70vh'}}>
            <div className="max-w-7xl px-4">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                <span className="text-gradient">Our Luxury Services</span>
              </h1>
              <p className="text-gradient-sub text-lg">Every journey is a masterpiece since 2000.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Everything You Need" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => <ServiceCard3D key={s.id} {...s} />)}
            </div>
          </div>
        </section>

        {[
          { title:"Confirm Railway Ticket", desc:"94% Tatkal success rate. Our IRCTC-authorized agents sit at the counter the moment booking opens.", img:"/assets/services/train.png", link:"/services/confirm-ticket", btn:"Book Tickets →" },
          { title:"Bespoke Luxury Tours", desc:"Private guides, palace stays, helicopter transfers — every tour is a one-of-a-kind masterpiece.", img:"/assets/services/palace.png", link:"/services/luxury-tours", btn:"Explore Tours →" },
          { title:"Premium Hotels & Palaces", desc:"From Taj Usha Kiran Palace to Jehan Numa Retreat — exclusive rates at India's finest.", img:"/assets/services/hotel-room.png", link:"/services/hotel-booking", btn:"Book Hotels →" },
          { title:"Flight Booking", desc:"Domestic & international flights at competitive prices. Business class upgrades available.", img:"/assets/services/airplane-wing.png", link:"/services/flight-booking", btn:"Search Flights →" },
        ].map((f,i)=>(
          <section key={i} className={`py-16 ${i%2===0?'bg-white/10':'bg-white/5'}`}>
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
              {i%2===0 ? (
                <>
                  <div>
                    <h2 className="text-3xl font-heading text-gradient mb-3">{f.title}</h2>
                    <p className="text-gray-700 mb-4">{f.desc}</p>
                    <Link href={f.link} className="bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-lg">{f.btn}</Link>
                  </div>
                  <div className="glass rounded-2xl overflow-hidden">
                    <img src={f.img} alt={f.title} className="w-full h-72 object-cover" loading="lazy" />
                  </div>
                </>
              ) : (
                <>
                  <div className="glass rounded-2xl overflow-hidden">
                    <img src={f.img} alt={f.title} className="w-full h-72 object-cover" loading="lazy" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-heading text-gradient mb-3">{f.title}</h2>
                    <p className="text-gray-700 mb-4">{f.desc}</p>
                    <Link href={f.link} className="bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-lg">{f.btn}</Link>
                  </div>
                </>
              )}
            </div>
          </section>
        ))}

        <section className="py-20 text-center bg-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Ready to Travel?" />
            <a href="https://wa.me/916261031710?text=Hello%20Planet%26Travel!%20I%20am%20interested%20in%20your%20services." target="_blank" className="bg-green-600 text-white font-bold px-10 py-4 rounded-xl text-lg">
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
