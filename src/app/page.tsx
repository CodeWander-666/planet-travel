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
  "Planet&Travel Gwalior – #1 Travel Agency | Confirmed Train Tickets, Tatkal Booking, Luxury MP Tours, Car Rental",
  "Planet&Travel is Gwalior's most trusted travel agency since 2000. Confirmed railway tickets with 94% Tatkal success rate. Luxury MP tours, car rental, flights, hotels, visa & forex. Visit us at Platform 1, Gwalior Railway Station opposite NCC Office. Call +919926665382.",
  "/"
);

const METRO_ROUTES = [
  { from:"Gwalior", to:"Delhi", trains:"37+ daily", cheapest:"₹160", fastest:"Gatimaan Exp (3h 31m)", flight:"IndiGo & Air India Express, 2x daily, 1h 5m", flightFare:"₹2,499" },
  { from:"Gwalior", to:"Mumbai", trains:"8 daily", cheapest:"₹695", fastest:"Punjab Mail (18h 15m)", flight:"IndiGo & Starlight, 2x daily, 2h 37m", flightFare:"₹4,499" },
  { from:"Gwalior", to:"Bengaluru", trains:"2 daily", cheapest:"₹1,095", fastest:"Karnataka Exp (30h)", flight:"IndiGo & AI Express, 3x daily, 2h 25m", flightFare:"₹5,499" },
  { from:"Gwalior", to:"Chennai", trains:"2 daily", cheapest:"₹845", fastest:"Grand Trunk Exp (28h 35m)", flight:"IndiGo & AI Express, 4x daily, 2h 10m", flightFare:"₹5,999" },
  { from:"Gwalior", to:"Kolkata", trains:"3 daily", cheapest:"₹755", fastest:"Chambal Exp (23h)", flight:"IndiGo via Delhi, 4h 47m", flightFare:"₹4,999" },
  { from:"Gwalior", to:"Hyderabad", trains:"3 daily", cheapest:"₹795", fastest:"Dakshin Exp (18h)", flight:"IndiGo & AI Express, 4x daily, 1h 55m", flightFare:"₹4,299" },
  { from:"Gwalior", to:"Pune", trains:"2 daily", cheapest:"₹865", fastest:"Jhelum Exp (20h 23m)", flight:"IndiGo & AI Express, 4x daily, 1h 45m", flightFare:"₹4,799" },
  { from:"Gwalior", to:"Ahmedabad", trains:"3 weekly", cheapest:"₹585", fastest:"Sabarmati Exp (14h)", flight:"IndiGo & AI Express, 4x daily, 1h 35m", flightFare:"₹3,999" },
  { from:"Gwalior", to:"Jaipur", trains:"1 daily", cheapest:"₹425", fastest:"Marudhar Exp (7h 8m)", flight:"IndiGo & AI Express, 4x daily, 3h 4m", flightFare:"₹3,499" },
  { from:"Gwalior", to:"Lucknow", trains:"1 daily", cheapest:"₹350", fastest:"Avadh Exp (8h 30m)", flight:"IndiGo via Delhi, 3h 54m", flightFare:"₹3,999" },
  { from:"Gwalior", to:"Nagpur", trains:"hourly", cheapest:"₹305", fastest:"Intercity (10h 15m)", flight:"IndiGo & AI Express, 4x daily, 1h 30m", flightFare:"₹3,799" },
  { from:"Gwalior", to:"Patna", trains:"2 daily", cheapest:"₹565", fastest:"HWH-ASR Mail (17h 25m)", flight:"IndiGo via Delhi, 3h 47m", flightFare:"₹4,999" },
  { from:"Gwalior", to:"Kanpur", trains:"15 daily", cheapest:"₹195", fastest:"Shatabdi Exp (3h)", flight:"AI Express & IndiGo, 1x daily", flightFare:"₹3,499" },
  { from:"Gwalior", to:"Bhopal", trains:"58 daily", cheapest:"₹260", fastest:"Vande Bharat (5h 20m)", flight:"N/A (best by train)", flightFare:"-" },
  { from:"Gwalior", to:"Indore", trains:"8 daily", cheapest:"₹350", fastest:"Malwa Express (11h)", flight:"IndiGo, 1x daily, 1h 15m", flightFare:"₹3,299" },
  { from:"Gwalior", to:"Agra", trains:"82 daily", cheapest:"₹160", fastest:"Vande Bharat (1h 19m)", flight:"N/A (best by train)", flightFare:"-" },
];

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
        {/* ═══════ SECTION 1 – HERO ═══════ */}
        <section className="hero-background hero-fallback-bg">
          <video autoPlay muted loop playsInline poster="/assets/hero/homepage-hero.webm">
            <source src="/assets/hero/homepage-hero.webm" type="video/webm" />
            <source src="/assets/hero/homepage-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="max-w-5xl px-4">
              <h1 className="text-3xl md:text-6xl font-heading font-bold mb-4">
                <span className="text-gradient">Planet&Travel — Gwalior&apos;s #1 Travel Agency</span>
              </h1>
              <p className="text-gradient-sub text-base md:text-xl max-w-3xl mx-auto mb-6">
                Confirmed train tickets · 94% Tatkal success · Luxury MP heritage tours · Car rental · Flights · Hotels · Visa · Since 2000 at Platform 1, Gwalior Railway Station
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={`https://wa.me/919926665382?text=Hello%20Planet%26Travel!%20I%20need%20a%20confirmed%20train%20ticket.`} target="_blank" className="bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-500 transition-all text-base">
                  📲 WhatsApp: +91 99266 65382
                </a>
                <Link href="/services/confirm-ticket" className="bg-gold-400 text-navy-950 font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition-all text-base">
                  Book Confirmed Ticket →
                </Link>
              </div>
              <p className="text-white/50 text-xs mt-4">Open daily 6 AM – 11 PM · Platform 1, Gwalior Railway Station · Opposite NCC Office</p>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 2 – ABOUT / E‑E‑A‑T ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Gwalior&apos;s Most Trusted Travel Agency Since 2000" subtitle="25+ years · 50,000+ travellers · 100,000+ confirmed tickets · IRCTC‑authorised agents" />
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-800 leading-relaxed mb-4">
                  Planet&Travel was founded in <strong className="text-gold-400">2000</strong> at <strong className="text-gold-400">Platform №1, Gwalior Railway Station, opposite the NCC Office</strong>. What began as a humble railway ticketing counter has grown into the most trusted travel agency in Gwalior — specialising in confirmed Tatkal tickets, luxury Madhya Pradesh tours, car rentals, and complete corporate travel management.
                </p>
                <p className="text-gray-800 leading-relaxed mb-4">
                  Our <strong className="text-gold-400">IRCTC‑authorised agents</strong> sit at the physical railway counter when Tatkal opens — not behind a screen competing with bots. That is why we maintain a <strong className="text-gold-400">94% Tatkal success rate</strong> even during Diwali, Holi, and summer rush. We have confirmed <strong className="text-gold-400">over 100,000 tickets</strong> since 2000 — across every class from Sleeper to 1st AC, on every major route including Rajdhani, Shatabdi, Vande Bharat, and Gatimaan Express.
                </p>
                <div className="flex gap-6 mt-4">
                  <StatBox number="25+" label="Years of Trust" />
                  <StatBox number="50K+" label="Happy Travellers" />
                  <StatBox number="100K+" label="Tickets Confirmed" />
                  <StatBox number="500+" label="Luxury Tours" />
                </div>
              </div>
              <div className="glass rounded-2xl overflow-hidden">
                <img src="/assets/homepage/about-family.png" alt="Planet&Travel Gwalior office" className="w-full h-72 object-cover" loading="lazy" />
                <p className="text-center text-gold-400 font-heading py-4">Visit Us — Platform №1, Gwalior Railway Station</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 3 – SERVICES GRID ═══════ */}
        <section id="services" className="py-16 bg-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Our Luxury Travel Services" subtitle="Everything you need for a flawless journey — curated since 2000" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => <ServiceCard3D key={s.id} {...s} />)}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 4 – WHY PLANET&TRAVEL ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Why Choose Planet&Travel?" subtitle="The difference between a confirmed ticket and a waitlisted one is who you book with" />
            <div className="grid md:grid-cols-4 gap-6">
              <WhyUsCard title="94% Tatkal Success" description="Our agents sit at the physical IRCTC counter when Tatkal opens. No bots, no glitches — just experience." />
              <WhyUsCard title="Since 2000" description="25+ years serving Gwalior. We have confirmed over 100,000 tickets. Our reputation is built on every confirmed PNR." />
              <WhyUsCard title="All Routes Covered" description="Gwalior to Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Jaipur, Lucknow, Nagpur, Patna, Kanpur, Bhopal, Indore, Agra — every metro city." />
              <WhyUsCard title="Pay After Confirmation" description="You pay only when your ticket is confirmed and PNR is generated. No advance payment required for regular customers." />
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 5 – ROUTE TABLE (TRAIN + FLIGHT) ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Confirmed Train Tickets from Gwalior to All Major Cities" subtitle="We book confirmed Tatkal, Premium Tatkal, and advance tickets for every route. Flights also available." />
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-800">
                <thead className="bg-navy-950/20">
                  <tr>
                    <th className="px-3 py-3 font-heading text-gold-400">From</th>
                    <th className="px-3 py-3 font-heading text-gold-400">To</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden sm:table-cell">Trains</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden md:table-cell">From</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden lg:table-cell">Fastest Train</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden lg:table-cell">Flight</th>
                    <th className="px-3 py-3 font-heading text-gold-400">Book</th>
                  </tr>
                </thead>
                <tbody>
                  {METRO_ROUTES.map((r, i) => (
                    <tr key={i} className={i%2===0 ? 'bg-white/5' : 'bg-white/10'}>
                      <td className="px-3 py-2 font-semibold">{r.from}</td>
                      <td className="px-3 py-2 font-semibold">{r.to}</td>
                      <td className="px-3 py-2 hidden sm:table-cell">{r.trains}</td>
                      <td className="px-3 py-2 hidden md:table-cell">{r.cheapest}</td>
                      <td className="px-3 py-2 hidden lg:table-cell text-xs">{r.fastest}</td>
                      <td className="px-3 py-2 hidden lg:table-cell text-xs">{r.flight}</td>
                      <td className="px-3 py-2">
                        <a href={`https://wa.me/919926665382?text=I%20want%20a%20confirmed%20ticket%20from%20${r.from}%20to%20${r.to}`} target="_blank" className="text-green-600 font-semibold hover:underline text-xs">Book Now</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-600 text-xs mt-4">
              These are our most‑booked routes. We confirm tickets for <strong className="text-gold-400">every station pair</strong> across Indian Railways. Flights booked through partner airlines — IndiGo, Air India Express, SpiceJet, Vistara, Akasa Air.
            </p>
          </div>
        </section>

        {/* ═══════ SECTION 6 – HOW TO BOOK A CONFIRM TICKET ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="How to Book a Confirm Train Ticket in Gwalior" subtitle="Three simple steps — no app, no bot, just real agents at the railway counter" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step:"01", title:"Share Your Route & Date", desc:"WhatsApp us your travel route (e.g., Gwalior to Delhi), preferred date, class (Sleeper / 3AC / 2AC / 1AC), and number of passengers. We respond within minutes." },
                { step:"02", title:"Agent Books at Tatkal Counter", desc:"Our IRCTC‑authorised agent sits at the physical PRS counter when Tatkal opens (10 AM for AC, 11 AM for Sleeper). We handle CAPTCHA, payment gateway, and seat selection — faster than any app or bot." },
                { step:"03", title:"Get Confirmed PNR & Pay", desc:"You receive your confirmed PNR within 2 hours of the booking window opening. Pay only after confirmation via UPI, bank transfer, or cash at our office. 94% success rate — 100,000+ tickets confirmed." },
              ].map((s, i) => (
                <div key={i} className="glass-light rounded-2xl p-6 border border-white/10 text-center">
                  <span className="text-4xl font-heading text-gradient">{s.step}</span>
                  <h3 className="text-gold-400 font-heading text-xl mt-3 mb-2">{s.title}</h3>
                  <p className="text-gray-700 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 7 – VIDEO CARDS ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Experience the Journey" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoCard3D webmSrc="/assets/homepage/videos/chauffeur-drives.webm" posterSrc="/assets/homepage/videos/chauffeur-drives.webm" title="Chauffeur Drives" description="Luxury vehicles at your disposal" />
              <VideoCard3D webmSrc="/assets/homepage/videos/station-transfers.webm" posterSrc="/assets/homepage/videos/station-transfers.webm" title="Station Transfers" description="Seamless railway & airport pickups" />
              <VideoCard3D webmSrc="/assets/homepage/videos/luxury-stays.webm" posterSrc="/assets/homepage/videos/luxury-stays.webm" title="Luxury Stays" description="Palace hotels & beach resorts" />
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 8 – DESTINATIONS ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Popular Destinations from Gwalior" subtitle="Luxury heritage tours, wildlife safaris, and bespoke itineraries across Madhya Pradesh" />
            <DestinationCards />
          </div>
        </section>

        {/* ═══════ SECTION 9 – STATS BANNER ═══════ */}
        <section className="py-12 bg-white/10 border-y border-white/20">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatBox number="25+" label="Years of Excellence" />
            <StatBox number="50K+" label="Happy Travellers" />
            <StatBox number="100K+" label="Tickets Confirmed" />
            <StatBox number="500+" label="Luxury Tours" />
          </div>
        </section>

        {/* ═══════ SECTION 10 – REVIEWS ═══════ */}
        <section id="reviews" className="py-16 bg-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="What Our Travellers Say" subtitle="50,000+ happy journeys — genuine reviews from real customers" />
            <ReviewCarousel />
          </div>
        </section>

        {/* ═══════ SECTION 11 – SUBMIT REVIEW ═══════ */}
        <section className="py-14 bg-white/10">
          <div className="max-w-3xl mx-auto px-4">
            <SectionHeader title="Share Your Experience" />
            <ReviewForm />
          </div>
        </section>

        {/* ═══════ SECTION 12 – CONFIRMED TICKET CTA ═══════ */}
        <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-950 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Need a Confirmed Train Ticket?" subtitle="Tatkal, Premium Tatkal, or Advance — our agents get it done with a 94% success rate" />
            <p className="text-white/70 max-w-2xl mx-auto mb-8 text-sm">
              Over <strong className="text-gold-400">100,000 tickets confirmed</strong> since 2000. From Gwalior to Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Jaipur, Lucknow, Nagpur, Patna, Kanpur, Bhopal, Indore, Agra — every route covered. All classes: Sleeper, 3AC, 2AC, 1AC. Rajdhani, Shatabdi, Vande Bharat, Gatimaan — every train. Book with confidence. Pay only after confirmation.
            </p>
            <Link href="/services/confirm-ticket" className="inline-block bg-gold-400 text-navy-950 font-bold px-10 py-4 rounded-2xl text-lg hover:shadow-2xl transition-all">
              Get Confirmed Ticket →
            </Link>
          </div>
        </section>

        {/* ═══════ SECTION 13 – VISIT US ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Visit Our Office" subtitle="We are located at the most accessible spot in Gwalior — inside the railway station" />
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
              <div className="glass rounded-2xl p-8">
                <p className="text-xl text-gold-400 font-heading mb-2">Platform №1, Gwalior Railway Station</p>
                <p className="text-gray-700 mb-3">Opposite NCC Office, Gwalior, Madhya Pradesh — 474002</p>
                <p className="text-gray-700 mb-1"><strong>📞</strong> <a href="tel:+919926665382" className="text-gold-400 font-semibold">+91 99266 65382</a></p>
                <p className="text-gray-700 mb-1"><strong>✉️</strong> <a href="mailto:concierge@planetandtravel.in" className="text-gold-400 font-semibold">concierge@planetandtravel.in</a></p>
                <p className="text-gray-700"><strong>🕐</strong> Open daily: 6 AM – 11 PM</p>
              </div>
              <div className="glass rounded-2xl overflow-hidden">
                <img src="/assets/homepage/visit-us.png" alt="Planet&Travel Office — Platform 1, Gwalior Railway Station" className="w-full h-80 object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
