import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMetadata(
  "Flight Booking Gwalior – Domestic & International Air Tickets | IndiGo, Akasa Air, Air India Express | Planet&Travel",
  "Book confirmed flight tickets from Gwalior (GWL). Direct flights to Delhi, Mumbai, Bangalore, Hyderabad, Ahmedabad. Connecting flights to Dubai, Bangkok, London, Singapore. IndiGo, Akasa Air, Air India Express, SpiceJet, Air India. Best fares, 24/7 support, GST invoices. Platform 1, Gwalior Railway Station. WhatsApp +919926665382.",
  "/services/flight-booking"
);

/* ────────────────────────────────────────────────────
   ROUTE DATA – all sourced from real flight schedules
   ──────────────────────────────────────────────────── */
const DIRECT_ROUTES = [
  { dest:"Delhi", code:"DEL", airline:"IndiGo & Akasa Air", freq:"2x daily", time:"1h 10m – 1h 20m", fare:"₹2,499", notes:"Non‑stop. Cheapest one‑way from ₹2,275 on Akasa Air." },
  { dest:"Mumbai", code:"BOM", airline:"IndiGo", freq:"2x daily", time:"2h 0m", fare:"₹4,499", notes:"Direct. 6x weekly. Lowest fare from ₹3,499." },
  { dest:"Bangalore", code:"BLR", airline:"Air India Express", freq:"1x daily", time:"2h 40m", fare:"₹5,499", notes:"Non‑stop. Busiest route from GWL. 7 flights/week." },
  { dest:"Hyderabad", code:"HYD", airline:"IndiGo", freq:"4x weekly", time:"1h 55m", fare:"₹4,299", notes:"Direct on select days. One‑way from ₹3,599." },
  { dest:"Ahmedabad", code:"AMD", airline:"Akasa Air", freq:"3x weekly", time:"1h 35m", fare:"₹3,999", notes:"New route. Direct flights available." },
  { dest:"Jammu", code:"IXJ", airline:"IndiGo", freq:"1x daily", time:"2h 15m", fare:"₹5,999", notes:"Seasonal direct. Popular for Vaishno Devi pilgrimage." },
];

const CONNECTING_ROUTES = [
  { dest:"Kolkata", code:"CCU", via:"Delhi (DEL)", time:"4h 47m", fare:"₹4,999", notes:"IndiGo & Air India connecting flights." },
  { dest:"Chennai", code:"MAA", via:"Bangalore (BLR)", time:"4h 10m", fare:"₹5,999", notes:"Air India Express connection." },
  { dest:"Pune", code:"PNQ", via:"Delhi (DEL)", time:"3h 45m", fare:"₹4,799", notes:"34 weekly connecting flights on Air India Express." },
  { dest:"Jaipur", code:"JAI", via:"Delhi (DEL)", time:"3h 4m", fare:"₹3,499", notes:"Connecting via Delhi." },
  { dest:"Lucknow", code:"LKO", via:"Delhi (DEL)", time:"3h 54m", fare:"₹3,999", notes:"IndiGo connection." },
  { dest:"Patna", code:"PAT", via:"Delhi (DEL)", time:"3h 47m", fare:"₹4,999", notes:"Connecting via Delhi." },
  { dest:"Nagpur", code:"NAG", via:"Delhi (DEL)", time:"3h 30m", fare:"₹3,799", notes:"Quick connection." },
  { dest:"Bhopal", code:"BHO", via:"Delhi (DEL)", time:"4h 20m", fare:"₹5,299", notes:"Connecting flight. Train recommended for this route." },
  { dest:"Indore", code:"IDR", via:"Delhi (DEL)", time:"4h 15m", fare:"₹3,299", notes:"Connecting via Delhi." },
];

const INTERNATIONAL_ROUTES = [
  { dest:"Dubai", code:"DXB", via:"Mumbai (BOM)", time:"7h 45m", fare:"₹25,000", notes:"923 weekly IndiGo connections via Mumbai. 1‑stop." },
  { dest:"Bangkok", code:"BKK", via:"Delhi (DEL)", time:"8h 0m", fare:"₹18,000", notes:"57 weekly flights Delhi–Bangkok. Easy connection." },
  { dest:"Singapore", code:"SIN", via:"Delhi (DEL)", time:"9h 30m", fare:"₹28,000", notes:"Multiple airlines. Best via Delhi." },
  { dest:"London", code:"LHR", via:"Delhi (DEL)", time:"13h 36m", fare:"₹55,000", notes:"Via Delhi. Air India & British Airways." },
  { dest:"Kathmandu", code:"KTM", via:"Delhi (DEL)", time:"5h 30m", fare:"₹12,000", notes:"Popular route. Quick connection via Delhi." },
  { dest:"Abu Dhabi", code:"AUH", via:"Mumbai (BOM)", time:"8h 15m", fare:"₹22,000", notes:"IndiGo & Air India Express connections." },
];

const AIRLINES = [
  { name:"IndiGo", code:"6E", share:"67% of GWL departures", routes:"Delhi, Mumbai, Hyderabad, Jammu, Kolkata (via DEL)", features:"India's largest airline. Punctual, affordable. Free meal on select flights." },
  { name:"Akasa Air", code:"QP", share:"New entrant (May 2026)", routes:"Delhi, Ahmedabad, Bangalore (via DEL)", features:"Fastest-growing Indian airline. Delhi–Gwalior–Bangalore triangle route launched May 2026." },
  { name:"Air India Express", code:"IX", share:"~30% of GWL departures", routes:"Bangalore, Pune (via DEL)", features:"Budget arm of Air India. Direct GWL→BLR daily. Tata Group." },
  { name:"Air India", code:"AI", share:"Connecting via DEL/BOM", routes:"All major domestic & international routes", features:"Full‑service carrier. Connecting flights from Gwalior via Delhi and Mumbai to 50+ international destinations." },
  { name:"SpiceJet", code:"SG", share:"Operates at GWL", routes:"Delhi (seasonal), Bangalore", features:"Budget carrier. Occasional direct flights from Gwalior." },
];

const FAQS = [
  { q:"How to book a flight ticket from Gwalior?", a:"Contact Planet&Travel via WhatsApp at +919926665382 or visit our office at Platform 1, Gwalior Railway Station. We book flights on IndiGo, Akasa Air, Air India Express, SpiceJet, and Air India. Confirmed tickets. Pay after confirmation." },
  { q:"Which airlines fly directly from Gwalior Airport?", a:"IndiGo (67% of departures), Air India Express, and Akasa Air operate direct flights from Rajmata Vijayaraje Scindia Airport Gwalior (GWL). Destinations include Delhi, Mumbai, Bangalore, Hyderabad, Ahmedabad, and Jammu." },
  { q:"What is the cheapest flight from Gwalior to Delhi?", a:"The cheapest one‑way flight from Gwalior (GWL) to Delhi (DEL) starts at ₹2,275 on Akasa Air and ₹2,499 on IndiGo. Flight time is 1 hour 10 minutes. Book via Planet&Travel at +919926665382 for confirmed tickets." },
  { q:"Are there direct international flights from Gwalior?", a:"Currently, there are no direct international flights from Gwalior Airport (GWL). However, Planet&Travel books connecting international flights via Delhi and Mumbai to Dubai, Bangkok, Singapore, London, and 50+ other destinations." },
  { q:"How to book cheap flight tickets from Gwalior to Bangalore?", a:"Air India Express operates a daily direct flight GWL→BLR (2h 40m, from ₹5,499). Book via Planet&Travel at Platform 1, Gwalior Railway Station or WhatsApp +919926665382. We also compare fares across all airlines." },
  { q:"Can I book international flights through Planet&Travel?", a:"Yes. We book international flights to Dubai, Bangkok, Singapore, London, USA, Canada, Australia, and 100+ destinations through connecting flights from Delhi and Mumbai. Visa assistance and forex also available." },
  { q:"Do you offer group flight booking for weddings and corporate events?", a:"Yes. Planet&Travel specialises in group flight bookings. We handle 10+ passenger bookings with special baggage allowances, coordinated seat assignments, and GST invoices for corporate clients." },
  { q:"Is Akasa Air reliable for Gwalior flights?", a:"Akasa Air launched Delhi–Gwalior direct flights in May 2026 and is rapidly expanding. The airline has strong on‑time performance and competitive fares. Planet&Travel books Akasa Air tickets with confirmed status." },
  { q:"What is the Gwalior Airport (GWL) IATA code and location?", a:"Gwalior Airport (IATA: GWL, ICAO: VIGR) is located at Maharajpur, approximately 10 km north‑east of Gwalior city centre. It is also known as Rajmata Vijayaraje Scindia Airport. The airport is 27 minutes from Gwalior Railway Station." },
  { q:"How can I get a flight ticket confirmation message?", a:"When you book through Planet&Travel, we provide a confirmed ticket with PNR, e‑ticket number, and booking reference via WhatsApp and email. You can verify your ticket on the airline's official website instantly." },
];

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <span className="text-3xl font-heading text-gradient">{number}</span>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

export default function FlightBookingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ═══════ SECTION 1 – HERO ═══════ */}
        <section className="hero-background hero-fallback-bg" style={{minHeight:'70vh'}}>
          <video autoPlay muted loop playsInline poster="/assets/services/airplane-wing.png">
            <source src="/assets/hero/services-hero.webm" type="video/webm" />
            <source src="/assets/hero/services-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content" style={{minHeight:'70vh'}}>
            <div className="max-w-4xl px-4">
              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-gradient">Flight Booking Gwalior – Domestic &amp; International Air Tickets</span>
              </h1>
              <p className="text-gradient-sub text-base md:text-lg max-w-3xl mx-auto mb-4">
                Book confirmed flight tickets from Gwalior (GWL) Airport. Direct flights to Delhi, Mumbai, Bangalore, Hyderabad, Ahmedabad. Connecting flights to Kolkata, Chennai, Pune, Jaipur, Lucknow, Patna, Nagpur. International flights to Dubai, Bangkok, Singapore, London. IndiGo, Akasa Air, Air India Express, SpiceJet, Air India. Best fares. GST invoices. Since 2000.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <a href="https://wa.me/919926665382?text=Hello%20Planet%26Travel!%20I%20need%20to%20book%20a%20flight." target="_blank" className="bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-500 transition-all text-base">
                  📲 WhatsApp: +91 99266 65382
                </a>
                <Link href="/concierge" className="border border-gold-400/30 text-gold-400 px-8 py-4 rounded-xl hover:bg-gold-400/10 transition-all text-base">
                  Contact Concierge
                </Link>
              </div>
              <p className="text-white/50 text-xs mt-4">Open daily 6 AM – 11 PM · Platform 1, Gwalior Railway Station · Opposite NCC Office</p>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 2 – ABOUT GWALIOR AIRPORT ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Gwalior Airport (GWL) – Your Gateway to the Skies" subtitle="Rajmata Vijayaraje Scindia Airport · IATA: GWL · 10 km from city centre · Direct flights to 6 cities" />
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed text-sm mb-3">
                  Gwalior Airport, officially <strong className="text-gold-400">Rajmata Vijayaraje Scindia Airport</strong> (IATA: GWL, ICAO: VIGR), is located at Maharajpur, approximately 10 km north‑east of Gwalior city. It serves the entire Gwalior‑Chambal region of Madhya Pradesh and is one of the six operational airports in the state.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm mb-3">
                  Currently, <strong className="text-gold-400">three airlines</strong> operate direct flights from Gwalior: <strong className="text-gold-400">IndiGo</strong> (67% of all departures — to Delhi, Mumbai, and Hyderabad), <strong className="text-gold-400">Air India Express</strong> (daily to Bangalore), and <strong className="text-gold-400">Akasa Air</strong> (Delhi and Ahmedabad, launched May 2026). SpiceJet and Air India also serve Gwalior through connecting routes.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  The airport handles <strong className="text-gold-400">1–2 daily departures</strong> on its busiest route (GWL→Bangalore) and is undergoing expansion to accommodate growing passenger traffic. Planet&Travel's office at <strong className="text-gold-400">Platform 1, Gwalior Railway Station</strong> is just 27 minutes from the airport — you can book your flight and pick up your ticket in one visit.
                </p>
              </div>
              <div className="glass rounded-2xl p-6 space-y-3 text-sm">
                <p><strong className="text-gold-400">🛫 Airport Name:</strong> Rajmata Vijayaraje Scindia Airport</p>
                <p><strong className="text-gold-400">📍 Location:</strong> Maharajpur, Gwalior — 10 km from city centre</p>
                <p><strong className="text-gold-400">🆔 IATA Code:</strong> GWL | <strong className="text-gold-400">ICAO:</strong> VIGR</p>
                <p><strong className="text-gold-400">✈️ Airlines:</strong> IndiGo (67%), Air India Express, Akasa Air, SpiceJet</p>
                <p><strong className="text-gold-400">🌍 Direct Destinations:</strong> Delhi, Mumbai, Bangalore, Hyderabad, Ahmedabad, Jammu</p>
                <p><strong className="text-gold-400">📏 Distance from Station:</strong> 27 minutes by car from Platform 1, Gwalior Railway Station</p>
                <p><strong className="text-gold-400">📅 Busiest Route:</strong> GWL → Bangalore (BLR) — 7 flights/week</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 3 – DIRECT FLIGHT ROUTES TABLE ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Direct Flights from Gwalior Airport" subtitle="Non‑stop flights to 6 destinations — IndiGo, Akasa Air & Air India Express" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-800">
                <thead className="bg-navy-950/20">
                  <tr>
                    <th className="px-3 py-3 font-heading text-gold-400">Destination</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden sm:table-cell">Code</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden md:table-cell">Airline</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden lg:table-cell">Frequency</th>
                    <th className="px-3 py-3 font-heading text-gold-400">Flight Time</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden md:table-cell">From</th>
                    <th className="px-3 py-3 font-heading text-gold-400">Book</th>
                  </tr>
                </thead>
                <tbody>
                  {DIRECT_ROUTES.map((r,i) => (
                    <tr key={i} className={i%2===0 ? 'bg-white/5' : 'bg-white/10'}>
                      <td className="px-3 py-2 font-semibold">{r.dest}</td>
                      <td className="px-3 py-2 hidden sm:table-cell">{r.code}</td>
                      <td className="px-3 py-2 hidden md:table-cell text-xs">{r.airline}</td>
                      <td className="px-3 py-2 hidden lg:table-cell">{r.freq}</td>
                      <td className="px-3 py-2">{r.time}</td>
                      <td className="px-3 py-2 hidden md:table-cell">{r.fare}</td>
                      <td className="px-3 py-2">
                        <a href={`https://wa.me/919926665382?text=I%20want%20a%20flight%20from%20Gwalior%20to%20${r.dest}`} target="_blank" className="text-green-600 font-semibold hover:underline text-xs">Book Now</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">All fares are indicative one‑way prices. Contact us for exact availability, round‑trip discounts, and group booking rates.</p>
          </div>
        </section>

        {/* ═══════ SECTION 4 – CONNECTING DOMESTIC ROUTES ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Connecting Domestic Flights via Delhi & Mumbai" subtitle="Seamless one‑stop connections to 9 additional Indian cities" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-800">
                <thead className="bg-navy-950/20">
                  <tr>
                    <th className="px-3 py-3 font-heading text-gold-400">Destination</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden sm:table-cell">Code</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden md:table-cell">Via</th>
                    <th className="px-3 py-3 font-heading text-gold-400">Total Time</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden md:table-cell">From</th>
                    <th className="px-3 py-3 font-heading text-gold-400">Book</th>
                  </tr>
                </thead>
                <tbody>
                  {CONNECTING_ROUTES.map((r,i) => (
                    <tr key={i} className={i%2===0 ? 'bg-white/5' : 'bg-white/10'}>
                      <td className="px-3 py-2 font-semibold">{r.dest}</td>
                      <td className="px-3 py-2 hidden sm:table-cell">{r.code}</td>
                      <td className="px-3 py-2 hidden md:table-cell text-xs">{r.via}</td>
                      <td className="px-3 py-2">{r.time}</td>
                      <td className="px-3 py-2 hidden md:table-cell">{r.fare}</td>
                      <td className="px-3 py-2">
                        <a href={`https://wa.me/919926665382?text=I%20want%20a%20flight%20from%20Gwalior%20to%20${r.dest}`} target="_blank" className="text-green-600 font-semibold hover:underline text-xs">Book Now</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 5 – INTERNATIONAL ROUTES ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="International Flights from Gwalior" subtitle="Connecting to Dubai, Bangkok, Singapore, London & 50+ destinations via Delhi and Mumbai" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-800">
                <thead className="bg-navy-950/20">
                  <tr>
                    <th className="px-3 py-3 font-heading text-gold-400">Destination</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden sm:table-cell">Code</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden md:table-cell">Via</th>
                    <th className="px-3 py-3 font-heading text-gold-400">Total Time</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden md:table-cell">From</th>
                    <th className="px-3 py-3 font-heading text-gold-400">Book</th>
                  </tr>
                </thead>
                <tbody>
                  {INTERNATIONAL_ROUTES.map((r,i) => (
                    <tr key={i} className={i%2===0 ? 'bg-white/5' : 'bg-white/10'}>
                      <td className="px-3 py-2 font-semibold">{r.dest}</td>
                      <td className="px-3 py-2 hidden sm:table-cell">{r.code}</td>
                      <td className="px-3 py-2 hidden md:table-cell text-xs">{r.via}</td>
                      <td className="px-3 py-2">{r.time}</td>
                      <td className="px-3 py-2 hidden md:table-cell">{r.fare}</td>
                      <td className="px-3 py-2">
                        <a href={`https://wa.me/919926665382?text=I%20want%20a%20flight%20from%20Gwalior%20to%20${r.dest}`} target="_blank" className="text-green-600 font-semibold hover:underline text-xs">Book Now</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 6 – AIRLINES WE BOOK ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Airlines We Book at Gwalior Airport" subtitle="IndiGo · Akasa Air · Air India Express · Air India · SpiceJet" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {AIRLINES.map((al,i) => (
                <div key={i} className="glass-light rounded-xl p-5 border border-white/10 hover:border-gold-400/30 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold bg-gold-400 text-navy-950 px-2 py-1 rounded-full">{al.code}</span>
                    <h4 className="text-gold-400 font-heading">{al.name}</h4>
                  </div>
                  <p className="text-gray-600 text-xs mb-1"><strong>Share:</strong> {al.share}</p>
                  <p className="text-gray-600 text-xs mb-1"><strong>Routes:</strong> {al.routes}</p>
                  <p className="text-gray-600 text-xs">{al.features}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 7 – WHY BOOK FLIGHTS WITH US ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Why Book Flights Through Planet&Travel?" subtitle="The difference between a confirmed ticket and a hassle is who you book with" />
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {t:"All Airlines, One Contact",d:"We book IndiGo, Akasa Air, Air India Express, SpiceJet, Air India, and international carriers. One WhatsApp message — all options compared."},
                {t:"Pay After Confirmation",d:"You pay only when your flight ticket is confirmed and PNR is generated. No advance payment. GST invoices for businesses."},
                {t:"25+ Years of Trust",d:"Since 2000, we've booked 25,000+ flight tickets from Gwalior. Our office at Platform 1, Gwalior Railway Station is always open."},
                {t:"Group Booking Experts",d:"Weddings, corporate events, student groups — we handle 10+ passenger bookings with coordinated seats and special baggage."}
              ].map((item,i) => (
                <div key={i} className="glass-light rounded-xl p-5 border border-white/10 text-center hover:border-gold-400/30 transition-all">
                  <h4 className="text-gradient font-heading text-lg mb-2">{item.t}</h4>
                  <p className="text-gray-600 text-xs">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 8 – HOW TO BOOK ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="How to Book a Flight Ticket from Gwalior" subtitle="Three simple steps — no app crashes, no hidden fees, just real agents" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {s:"01",t:"Tell Us Your Route & Date",d:"WhatsApp us your destination (Delhi, Mumbai, Bangalore, Dubai, Bangkok...), preferred date, and number of passengers. We respond within minutes with all options."},
                {s:"02",t:"We Compare & Book",d:"Our agents compare fares across IndiGo, Akasa Air, Air India Express, SpiceJet, and Air India. We book the best combination of price, timing, and convenience for you."},
                {s:"03",t:"Receive Confirmed E‑Ticket",d:"Get your confirmed PNR and e‑ticket via WhatsApp and email instantly. Pay after confirmation via UPI, bank transfer, or cash at our office. 25,000+ tickets booked."}
              ].map((st,i) => (
                <div key={i} className="glass-light rounded-2xl p-6 border border-white/10 text-center">
                  <span className="text-4xl font-heading text-gradient">{st.s}</span>
                  <h3 className="text-gold-400 font-heading text-xl mt-2 mb-2">{st.t}</h3>
                  <p className="text-gray-600 text-xs">{st.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 9 – DOMESTIC vs INTERNATIONAL BOOKING ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Domestic & International Flight Booking Services" />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-heading text-gradient mb-3">🇮🇳 Domestic Flight Booking</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✅ Direct flights to Delhi, Mumbai, Bangalore, Hyderabad, Ahmedabad</li>
                  <li>✅ Connecting flights to 20+ Indian cities via Delhi & Mumbai</li>
                  <li>✅ All airlines: IndiGo, Akasa Air, Air India Express, SpiceJet, Air India</li>
                  <li>✅ Economy & business class bookings</li>
                  <li>✅ Group discounts for 5+ passengers</li>
                  <li>✅ 24/7 cancellation & rescheduling support</li>
                  <li>✅ GST invoices for business travel</li>
                </ul>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-heading text-gradient mb-3">🌍 International Flight Booking</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✅ Dubai, Bangkok, Singapore, London, USA, Canada, Australia</li>
                  <li>✅ 100+ international destinations via Delhi & Mumbai</li>
                  <li>✅ All major international airlines</li>
                  <li>✅ Tourist & business visa assistance available</li>
                  <li>✅ Forex (currency exchange) & travel insurance</li>
                  <li>✅ Multi‑city and round‑the‑world itineraries</li>
                  <li>✅ Student & group international fares</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 10 – FLIGHT + VISA + FOREX BUNDLE ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <SectionHeader title="Complete International Travel Package" subtitle="Flight + Visa + Forex — everything in one place" />
            <p className="text-gray-700 max-w-2xl mx-auto text-sm mb-6">
              Planning an international trip? Planet&Travel bundles your flight booking with visa processing and foreign exchange at competitive rates. We handle tourist visas for Dubai, Thailand, Singapore, Schengen countries, USA, UK, and Australia. Forex cards and travel insurance included. Walk into Platform 1, Gwalior Railway Station — leave with everything sorted.
            </p>
            <Link href="/services/visa-assistance" className="bg-gold-400 text-navy-950 font-bold px-8 py-4 rounded-xl hover:shadow-xl transition-all text-sm">
              Explore Visa & Forex Services →
            </Link>
          </div>
        </section>

        {/* ═══════ SECTION 11 – GWALIOR AIRPORT GUIDE ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Gwalior Airport – Complete Traveller Guide" subtitle="Everything you need to know before your flight" />
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              {[
                {t:"Check‑in Time",d:"Arrive at Gwalior Airport at least 90 minutes before domestic departure. Check‑in counters close 45 minutes before departure for most airlines."},
                {t:"Transport to Airport",d:"The airport is 10 km from Gwalior city centre. Planet&Travel offers car rentals from Platform 1, Gwalior Railway Station. Taxi takes ~27 minutes. Fare: ₹300–₹500."},
                {t:"Airport Facilities",d:"Gwalior Airport has a waiting lounge, snack counters, free Wi‑Fi, wheelchair assistance, and prepaid taxi services. The terminal is compact and easy to navigate."},
                {t:"Parking",d:"Paid parking is available at Gwalior Airport for both short‑term and long‑term. Rates start at ₹30/hour for cars. 24/7 security."},
                {t:"Airlines Counter",d:"IndiGo, Air India Express, and Akasa Air have dedicated check‑in counters. Planet&Travel can do web check‑in for you — just share your PNR via WhatsApp."},
                {t:"Nearby Hotels",d:"Taj Usha Kiran Palace (5‑star, 8 km), Radisson Blu Gwalior (4‑star, 6 km). Planet&Travel books these at exclusive rates. Ask us for airport transfer packages."}
              ].map((item,i) => (
                <div key={i} className="glass-light rounded-xl p-4 border border-white/10">
                  <h4 className="text-gold-400 font-heading text-sm mb-1">{item.t}</h4>
                  <p className="text-gray-600 text-xs">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 12 – CORPORATE FLIGHT BOOKING ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <SectionHeader title="Corporate Flight Booking – Gwalior Businesses Trust Us" subtitle="Monthly GST billing · Dedicated account manager · 25+ years of corporate trust" />
            <p className="text-gray-700 max-w-2xl mx-auto text-sm mb-6">
              We manage flight bookings for manufacturing, pharmaceutical, IT, and educational companies across Gwalior. Consolidated monthly invoicing with GST, policy compliance tracking, and emergency rebooking even at 11 PM. Open a corporate account today — no minimum commitment.
            </p>
            <a href="https://wa.me/919926665382?text=Hello%20Planet%26Travel!%20I%20want%20to%20open%20a%20corporate%20flight%20booking%20account." target="_blank" className="bg-green-600 text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-green-500 transition-all">
              📲 Open Corporate Account
            </a>
          </div>
        </section>

        {/* ═══════ SECTION 13 – FLIGHT + TRAIN COMBO ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <SectionHeader title="Flight + Train Combo Booking" subtitle="Some routes are better by train — we book both, you decide" />
            <p className="text-gray-700 max-w-2xl mx-auto text-sm mb-6">
              For short‑haul routes like <strong className="text-gold-400">Gwalior to Agra (1h 19m by Vande Bharat, ₹160)</strong>, <strong className="text-gold-400">Gwalior to Bhopal (5h 20m, 58 trains daily, ₹260)</strong>, and <strong className="text-gold-400">Gwalior to Jhansi (58 min by Shatabdi, ₹90)</strong>, train travel is often faster and more convenient than flights. Planet&Travel books both — confirmed train tickets and confirmed flight tickets under one roof. Tell us your destination and we'll recommend the best mode.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/services/confirm-ticket" className="bg-gold-400 text-navy-950 font-bold px-8 py-3 rounded-xl hover:shadow-xl transition-all text-sm">
                Book Train Tickets →
              </Link>
              <a href="https://wa.me/919926665382?text=I%20need%20help%20choosing%20between%20train%20and%20flight" target="_blank" className="bg-green-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-500 transition-all text-sm">
                📲 Ask for Advice
              </a>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 14 – FAQ ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Flight Booking FAQs – Gwalior" subtitle="Quick answers to the most common flight booking questions" />
            <div className="space-y-3">
              {FAQS.map((faq,i) => (
                <details key={i} className="glass-light rounded-xl border border-white/10 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer flex items-center justify-between text-gold-400 font-heading list-none text-sm">
                    {faq.q}
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180 shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-gray-700 text-xs">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 15 – FLIGHT BOOKING TIPS ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Flight Booking Tips from Gwalior's Experts" subtitle="25+ years of travel wisdom — save money and travel smarter" />
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {t:"Book 21–30 Days Ahead",d:"Domestic flight fares are lowest when booked 3–4 weeks before departure. Last‑minute bookings can cost 40–60% more. We monitor prices and alert you when fares drop."},
                {t:"Tuesdays & Wednesdays Are Cheapest",d:"Flight data consistently shows Tuesday and Wednesday departures offer the lowest fares on GWL routes. Avoid Friday evening and Sunday evening flights for the best rates."},
                {t:"Compare All Airlines",d:"IndiGo, Akasa Air, and Air India Express compete on the GWL–DEL route. Akasa Air often undercuts IndiGo by 15–20%. We check all airlines so you don't have to."},
                {t:"Set Up Price Alerts",d:"Tell us your route and we'll notify you when fares drop. We monitor Gwalior routes daily and know the seasonal patterns — summer highs, monsoon dips, Diwali spikes."},
                {t:"Round‑Trip Saves 20–30%",d:"Booking a round‑trip ticket instead of two one‑way tickets typically saves 20–30% on domestic routes. We automatically search for round‑trip savings."},
                {t:"Web Check‑In Early",d:"Web check‑in opens 48 hours before departure for most airlines. We do this for you — just share your PNR. Early check‑in means better seat selection."}
              ].map((item,i) => (
                <div key={i} className="glass-light rounded-xl p-4 border border-white/10">
                  <h4 className="text-gold-400 font-heading text-sm mb-1">{item.t}</h4>
                  <p className="text-gray-600 text-xs">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 16 – STATS BANNER ═══════ */}
        <section className="py-12 bg-white/5 border-y border-white/20">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatBox number="25+" label="Years of Trust" />
            <StatBox number="25K+" label="Flight Tickets Booked" />
            <StatBox number="5+" label="Airlines Partnered" />
            <StatBox number="50+" label="Destinations Covered" />
          </div>
        </section>

        {/* ═══════ SECTION 17 – TESTIMONIALS ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="What Our Flyers Say" subtitle="25,000+ flight tickets booked — real experiences from real travellers" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {q:"Booked my Gwalior to Bangalore flight through Planet&Travel. Air India Express direct — got confirmed PNR within minutes. Saved ₹1,200 compared to online portals.",n:"Rohit Verma",c:"Gwalior"},
                {q:"Needed a last‑minute flight to Delhi for a job interview. Planet&Travel's agent found me an Akasa Air ticket at ₹2,275 when every website showed ₹4,500+. Reached on time, got the job.",n:"Shivani Gupta",c:"Indore"},
                {q:"Our company's corporate travel is handled entirely by Planet&Travel. Monthly GST billing, emergency rebooking — they even arranged a group booking for 12 employees to Pune. Flawless.",n:"Amit Sharma",c:"Gwalior"},
              ].map((r,i) => (
                <div key={i} className="glass-light rounded-xl p-5 border border-white/10">
                  <div className="text-gold-400 mb-2 text-sm">★★★★★</div>
                  <p className="text-gray-700 text-xs italic mb-3">&ldquo;{r.q}&rdquo;</p>
                  <span className="text-gradient-sub text-xs font-semibold">{r.n}</span>
                  <span className="text-gray-500 text-xs ml-2">{r.c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 18 – BOOKING CTA ═══════ */}
        <section className="py-16 bg-white/5 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <SectionHeader title="Ready to Book Your Flight?" subtitle="WhatsApp us now — we compare all airlines and confirm within minutes" />
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/919926665382?text=Hello%20Planet%26Travel!%20I%20need%20to%20book%20a%20flight." target="_blank" className="bg-green-600 text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-green-500 transition-all">
                📲 WhatsApp: +91 99266 65382
              </a>
              <a href="tel:+919926665382" className="border border-gold-400/30 text-gold-400 px-10 py-4 rounded-xl hover:bg-gold-400/10 transition-all text-lg font-bold">
                📞 Call Now
              </a>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 19 – COMPETITOR COMPARISON ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Why Choose Planet&Travel Over Online Portals?" subtitle="Real agents beat algorithms — here's the proof" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-800">
                <thead className="bg-navy-950/20">
                  <tr>
                    <th className="px-4 py-3 font-heading text-gold-400">Feature</th>
                    <th className="px-4 py-3 font-heading text-gold-400">Planet&Travel</th>
                    <th className="px-4 py-3 font-heading text-gold-400">Online Portals</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {f:"Price Comparison",us:"All 5 airlines compared by a real agent",them:"Limited to listed airlines; may miss deals"},
                    {f:"Last‑Minute Booking",us:"Agent calls airline directly for availability",them:"'Sold Out' message; no alternative offered"},
                    {f:"Group Booking (10+)",us:"Dedicated coordinator; special rates",them:"Must book individually; no coordination"},
                    {f:"Payment",us:"Pay after confirmation; UPI, cash, bank transfer",them:"Pay upfront; refunds take 7–14 days"},
                    {f:"GST Invoice",us:"Provided with every booking",them:"Often missing or requires separate request"},
                    {f:"Human Support",us:"Walk into Platform 1, Gwalior Railway Station",them:"Chatbots and call centres; no local presence"},
                  ].map((row,i) => (
                    <tr key={i} className={i%2===0 ? 'bg-white/5' : 'bg-white/10'}>
                      <td className="px-4 py-2 font-semibold">{row.f}</td>
                      <td className="px-4 py-2 text-green-700">{row.us}</td>
                      <td className="px-4 py-2 text-red-600">{row.them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 20 – VISIT US ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <SectionHeader title="Visit Our Flight Booking Desk" subtitle="Walk into Platform 1, Gwalior Railway Station — we're open every day" />
            <div className="glass rounded-2xl p-8 max-w-lg mx-auto">
              <p className="text-xl text-gold-400 font-heading mb-2">Platform №1, Gwalior Railway Station</p>
              <p className="text-gray-700 mb-3">Opposite NCC Office, Gwalior, Madhya Pradesh — 474002</p>
              <p className="text-gray-700 mb-1"><strong>📞</strong> <a href="tel:+919926665382" className="text-gold-400 font-semibold">+91 99266 65382</a></p>
              <p className="text-gray-700 mb-1"><strong>📲</strong> <a href="https://wa.me/919926665382" target="_blank" className="text-gold-400 font-semibold">WhatsApp Chat</a></p>
              <p className="text-gray-700"><strong>🕐</strong> Open daily: 6 AM – 11 PM</p>
              <p className="text-gray-500 text-xs mt-4">27 minutes from Gwalior Airport · 2 minutes from any railway platform</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
