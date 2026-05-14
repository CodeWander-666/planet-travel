import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import ConciergeForm from './ConciergeForm';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMetadata(
  "Contact Planet&Travel Gwalior – Concierge | Confirmed Tickets, Luxury Tours, Car Rental, Flights, Hotels",
  "Reach Planet&Travel's luxury concierge at Platform 1, Gwalior Railway Station (opposite NCC Office). Book confirmed train tickets, MP tours, car rentals, flights, hotels, visa & forex. Call/WhatsApp +919926665382. Open 6 AM–11 PM daily.",
  "/concierge"
);

const FAQS = [
  { q:"How do I book a confirmed Tatkal ticket from Gwalior?", a:"Call or WhatsApp Planet&Travel at +919926665382. Our IRCTC-authorised agents sit at the physical counter when Tatkal opens. 94% success rate. You pay after your PNR is confirmed." },
  { q:"Where is Planet&Travel located in Gwalior?", a:"We are at Platform No.1, Gwalior Railway Station, directly opposite the NCC Office. Walk from any platform to our office in under 2 minutes. Open daily 6 AM to 11 PM." },
  { q:"Can I book a luxury MP tour through the concierge?", a:"Yes. Tell us your preferred destinations (Gwalior Fort, Orchha, Khajuraho, Kanha, etc.), travel dates, and group size. We design a bespoke itinerary with private guides, palace stays, and chauffeur-driven cars." },
  { q:"Do you provide car rentals in Gwalior near the railway station?", a:"Yes. Our fleet of 50+ cars (sedans, SUVs, Tempo Travellers) is available for self-drive or chauffeur-driven rental. Pickup from Platform 1. Instant booking via WhatsApp." },
  { q:"Can I book international flights and apply for a visa through Planet&Travel?", a:"Absolutely. We book flights with all major airlines and process tourist/business visas for Dubai, Thailand, Schengen, USA, UK, etc. Forex and travel insurance available." },
  { q:"Do you offer corporate travel management with GST billing?", a:"Yes. We manage corporate travel for Gwalior businesses — confirmed Tatkal, flights, hotels, car rentals — with monthly consolidated GST invoices and a dedicated account manager." }
];

export default function ConciergePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ═══════ SECTION 1 – HERO ═══════ */}
        <section className="hero-background hero-fallback-bg" style={{minHeight:'70vh'}}>
          <video autoPlay muted loop playsInline poster="/assets/hero/homepage-hero.webm">
            <source src="/assets/hero/homepage-hero.webm" type="video/webm" />
            <source src="/assets/hero/homepage-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content" style={{minHeight:'70vh'}}>
            <div className="max-w-4xl px-4">
              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-gradient">Your Personal Travel Architect — Gwalior Concierge</span>
              </h1>
              <p className="text-gradient-sub text-base md:text-lg max-w-3xl mx-auto mb-4">
                Reach Planet&Travel's luxury concierge at Platform 1, Gwalior Railway Station. Confirmed train tickets, luxury MP tours, car rentals, flights, hotels, visa &amp; forex — all managed with 25+ years of local expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <a href="https://wa.me/919926665382?text=Hello%20Planet%26Travel!%20I%20need%20travel%20assistance." target="_blank" className="bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-500 transition-all text-base">
                  📲 WhatsApp: +91 99266 65382
                </a>
                <a href="tel:+919926665382" className="border border-gold-400/30 text-gold-400 px-8 py-4 rounded-xl hover:bg-gold-400/10 transition-all text-base font-bold">
                  📞 Call Now
                </a>
              </div>
              <p className="text-white/50 text-xs mt-4">Open daily 6 AM – 11 PM · Platform 1, Gwalior Railway Station · Opposite NCC Office, Gwalior — 474002</p>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 2 – WELCOME MESSAGE ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <SectionHeader title="Welcome to Planet&Travel Concierge" subtitle="Since 2000, we've been Gwalior's most trusted travel partner — your journey begins with a conversation" />
            <p className="text-gray-700 max-w-3xl mx-auto text-sm leading-relaxed">
              Whether you need a confirmed Tatkal ticket to Delhi, a luxury heritage tour of Madhya Pradesh, a reliable car rental for an outstation trip, or a complete corporate travel solution — our concierge desk at Platform 1, Gwalior Railway Station is here to make it happen. <strong className="text-gold-400">No bots, no apps, no automated responses</strong> — just real travel experts who know Indian Railways, MP tourism, and Gwalior better than anyone else. Reach us via WhatsApp, phone, or walk into our office. We respond within minutes, confirm bookings within hours, and have maintained a <strong className="text-gold-400">94% Tatkal success rate</strong> for over two decades.
            </p>
          </div>
        </section>

        {/* ═══════ SECTION 3 – SERVICES OVERVIEW ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Our Concierge Services" subtitle="Everything you need, available through a single WhatsApp message or a walk‑in" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {t:"Confirm Train Ticket",d:"Tatkal, Premium Tatkal, advance booking. 94% success. All classes. All routes.",href:"/services/confirm-ticket"},
                {t:"Luxury MP Tours",d:"Private guides, palace stays, helicopter transfers. Gwalior, Orchha, Khajuraho, Kanha.",href:"/services/luxury-tours"},
                {t:"Car Rental",d:"Self‑drive & chauffeur. Sedans, SUVs, Tempo Travellers. Local & outstation.",href:"/services/car-booking"},
                {t:"Flights & Hotels",d:"Domestic & international flights. 5‑star & heritage palace bookings.",href:"/services/flight-booking"},
                {t:"Visa & Forex",d:"Dubai, Thailand, Schengen, USA, UK visas. Forex cards & travel insurance.",href:"/services/visa-assistance"},
                {t:"Corporate Travel",d:"MICE events, executive retreats, monthly GST billing, dedicated account manager.",href:"/services/corporate-travel"},
              ].map((s,i) => (
                <Link key={i} href={s.href} className="glass-light rounded-xl p-4 border border-white/10 hover:border-gold-400/40 transition-all text-left group">
                  <h4 className="text-gold-400 font-heading text-sm mb-1">{s.t}</h4>
                  <p className="text-gray-600 text-xs">{s.d}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 4 – WHY OUR CONCIERGE ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Why Choose Planet&Travel's Concierge?" subtitle="The difference between a confirmed ticket and a waitlisted one is who you call" />
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {t:"Real Agents, Real Counter",d:"Our IRCTC-authorised agents sit at the physical railway counter. No bots, no app crashes."},
                {t:"94% Tatkal Success",d:"We know the exact second to submit. 100,000+ tickets confirmed since 2000."},
                {t:"Pay After Confirmation",d:"You pay only when your PNR is confirmed or your hotel is booked. No risk."},
                {t:"Available 6 AM – 11 PM",d:"Walk into Platform 1, Gwalior Railway Station any day of the week. We're always here."}
              ].map((item,i) => (
                <div key={i} className="glass-light rounded-xl p-6 border border-white/10 text-center hover:border-gold-400/30 transition-all">
                  <h4 className="text-gradient font-heading text-lg mb-2">{item.t}</h4>
                  <p className="text-gray-600 text-xs">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 5 – CONTACT FORM ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-3xl mx-auto px-4">
            <SectionHeader title="Send Us a Message" subtitle="Fill the form below — we'll respond on WhatsApp within minutes" />
            <ConciergeForm />
          </div>
        </section>

        {/* ═══════ SECTION 6 – HOW TO REACH US (MAP + ADDRESS) ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Visit Our Concierge Desk" subtitle="We're inside Gwalior Railway Station — the most accessible travel agency in the city" />
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
              <div className="glass rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Planet%26Travel%2C+Platform+1%2C+Gwalior+Railway+Station%2C+opposite+NCC+Office%2C+Gwalior%2C+Madhya+Pradesh+474002&output=embed"
                  width="100%" height="300" style={{border:0}} allowFullScreen loading="lazy"
                  title="Planet & Travel Location"
                />
              </div>
              <div className="glass rounded-2xl p-8">
                <p className="text-xl text-gold-400 font-heading mb-2">Platform №1, Gwalior Railway Station</p>
                <p className="text-gray-700 mb-3">Opposite NCC Office, Gwalior, Madhya Pradesh — 474002</p>
                <p className="text-gray-700 mb-1"><strong>📞</strong> <a href="tel:+919926665382" className="text-gold-400 font-semibold">+91 99266 65382</a></p>
                <p className="text-gray-700 mb-1"><strong>📲</strong> <a href="https://wa.me/919926665382" target="_blank" className="text-gold-400 font-semibold">WhatsApp Chat</a></p>
                <p className="text-gray-700 mb-1"><strong>✉️</strong> <a href="mailto:concierge@planetandtravel.in" className="text-gold-400 font-semibold">concierge@planetandtravel.in</a></p>
                <p className="text-gray-700"><strong>🕐</strong> Open daily: 6 AM – 11 PM</p>
                <a href="https://g.page/r/CVuIiNhTCqs-EBM/review" target="_blank" className="inline-block mt-4 bg-gold-400 text-navy-950 font-bold px-6 py-2 rounded-lg text-sm hover:bg-gold-300 transition-all">
                  ⭐ Review us on Google
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 7 – POPULAR ROUTES ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Popular Requests Our Concierge Handles Daily" subtitle="From Gwalior to every major city — confirmed tickets, flights, and car rentals" />
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              {[
                { route:"Gwalior → Delhi", train:"Gatimaan Exp (3h 31m), 37+ trains daily, from ₹160", flight:"2 flights daily, 1h 5m, from ₹2,499" },
                { route:"Gwalior → Mumbai", train:"Punjab Mail (18h 15m), 8 trains daily, from ₹695", flight:"2 flights daily, 2h 37m, from ₹4,499" },
                { route:"Gwalior → Bengaluru", train:"Karnataka Exp (30h), 2 trains daily, from ₹1,095", flight:"3 flights daily, 2h 25m, from ₹5,499" },
                { route:"Gwalior → Chennai", train:"Grand Trunk Exp (28h 35m), 2 trains daily, from ₹845", flight:"4 flights daily, 2h 10m, from ₹5,999" },
                { route:"Gwalior → Kolkata", train:"Chambal Exp (23h), 3 trains daily, from ₹755", flight:"Via Delhi, 4h 47m, from ₹4,999" },
                { route:"Gwalior → Hyderabad", train:"Dakshin Exp (18h), 3 trains daily, from ₹795", flight:"4 flights daily, 1h 55m, from ₹4,299" },
                { route:"Gwalior → Pune", train:"Jhelum Exp (20h 23m), 2 trains daily, from ₹865", flight:"4 flights daily, 1h 45m, from ₹4,799" },
                { route:"Gwalior → Bhopal", train:"Vande Bharat (5h 20m), 58 trains daily, from ₹260", flight:"N/A (best by train)" },
                { route:"Gwalior → Indore", train:"Malwa Express (11h), 8 trains daily, from ₹350", flight:"1 flight daily, 1h 15m, from ₹3,299" },
              ].map((r,i) => (
                <div key={i} className="glass-light rounded-xl p-4 border border-white/10">
                  <h4 className="text-gold-400 font-heading text-sm mb-1">{r.route}</h4>
                  <p className="text-gray-700 text-xs">🚂 {r.train}</p>
                  <p className="text-gray-700 text-xs mt-1">✈️ {r.flight}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-xs mt-6">Tell us your route via WhatsApp — we confirm tickets within 2 hours of Tatkal opening.</p>
          </div>
        </section>

        {/* ═══════ SECTION 8 – CORPORATE CTA ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <SectionHeader title="Corporate Travel Desk" subtitle="Dedicated account manager · Monthly GST billing · 25+ years of business trust" />
            <p className="text-gray-700 max-w-2xl mx-auto text-sm mb-6">
              If you run a business in Gwalior and need reliable travel management — confirmed Tatkal tickets for employees, flights, hotels, and car rentals with consolidated invoicing — our corporate concierge is ready to help. We serve manufacturing, pharmaceutical, IT, and educational institutions across Madhya Pradesh.
            </p>
            <a href="https://wa.me/919926665382?text=Hello%20Planet%26Travel!%20I%20want%20to%20open%20a%20corporate%20account." target="_blank" className="bg-green-600 text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-green-500 transition-all">
              📲 Open Corporate Account
            </a>
          </div>
        </section>

        {/* ═══════ SECTION 9 – FAQ ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Frequently Asked Questions" subtitle="Quick answers about our concierge services" />
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

        {/* ═══════ SECTION 10 – STATS BANNER ═══════ */}
        <section className="py-12 bg-white/5 border-y border-white/20">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><span className="text-3xl font-heading text-gradient block">25+</span><span className="text-gray-500 text-xs">Years of Excellence</span></div>
            <div><span className="text-3xl font-heading text-gradient block">50K+</span><span className="text-gray-500 text-xs">Happy Travellers</span></div>
            <div><span className="text-3xl font-heading text-gradient block">100K+</span><span className="text-gray-500 text-xs">Tickets Confirmed</span></div>
            <div><span className="text-3xl font-heading text-gradient block">500+</span><span className="text-gray-500 text-xs">Luxury Tours</span></div>
          </div>
        </section>

        {/* ═══════ SECTION 11 – TESTIMONIALS ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="What Our Clients Say" subtitle="Real feedback from 50,000+ travellers" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {q:"Planet&Travel's concierge booked my family's entire MP tour over WhatsApp. Private guides, palace stays — everything was flawless.",n:"Priya Sharma",c:"Mumbai"},
                {q:"I needed a Tatkal ticket to Delhi during Diwali. Their agent confirmed it in under 2 hours. I've been using them for 3 years now.",n:"Rajesh Gupta",c:"Indore"},
                {q:"Their corporate desk handles our company's travel. Monthly GST billing saves our accounts team hours every month.",n:"Amit Joshi",c:"Pune"},
              ].map((r,i) => (
                <div key={i} className="glass-light rounded-xl p-5 border border-white/10">
                  <div className="text-gold-400 mb-2 text-sm">★★★★★</div>
                  <p className="text-gray-700 text-xs italic mb-3">"{r.q}"</p>
                  <span className="text-gradient-sub text-xs font-semibold">{r.n}</span>
                  <span className="text-gray-500 text-xs ml-2">{r.c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 12 – FINAL CTA ═══════ */}
        <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-950 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Ready to Travel?" subtitle="Your personal travel architect is just a message away" />
            <p className="text-white/70 max-w-2xl mx-auto mb-6 text-sm">
              Since 2000, we've been turning travel dreams into reality. Join 50,000+ happy travellers who trust Planet&Travel for confirmed tickets, luxury tours, and seamless journeys across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/919926665382?text=Hello%20Planet%26Travel!%20I%20need%20travel%20assistance." target="_blank" className="bg-green-600 text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-green-500 transition-all">
                📲 WhatsApp Now
              </a>
              <Link href="/services/confirm-ticket" className="bg-gold-400 text-navy-950 font-bold px-10 py-4 rounded-xl text-lg hover:shadow-2xl transition-all">
                Book Confirmed Ticket
              </Link>
            </div>
            <p className="text-white/50 text-xs mt-4">Or visit Platform 1, Gwalior Railway Station — open daily 6 AM to 11 PM</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
