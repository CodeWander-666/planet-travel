import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard3D from '@/components/ServiceCard3D';
import { services } from '@/lib/services';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMetadata(
  "Luxury Travel Services Gwalior – Confirmed Train Tickets, Tatkal, Tours, Car Rental, Flights, Hotels | Planet&Travel",
  "Planet&Travel is Gwalior's #1 travel agency since 2000. Services: confirmed railway tickets (94% Tatkal success), luxury MP heritage tours, car rental, flights, hotel booking, visa & forex, corporate travel. Visit Platform 1, Gwalior Railway Station opposite NCC Office. WhatsApp +919926665382.",
  "/services"
);

/* ──────────────────────────────────────────────────────────────────
   SERVICE SECTION BLOCK – image + text + long keyword‑rich description
   Each service card now has a dedicated long section below it.
   ────────────────────────────────────────────────────────────────── */

const SERVICE_DETAILS = [
  {
    id:"confirm-ticket",
    title:"Confirm Railway Ticket Booking in Gwalior",
    subtitle:"Tatkal · Premium Tatkal · Advance Reservation · All Classes · 94% Success Rate",
    body:"Planet&Travel is Gwalior's most trusted agent for confirmed train tickets. Our IRCTC-authorised agents sit at the physical PRS counter at Platform 1, Gwalior Railway Station when the Tatkal window opens (10 AM for AC classes, 11 AM for Sleeper). Unlike apps and bots that crash under load, our agents use the railway's own terminal — which is why we maintain a 94% Tatkal success rate even during Diwali, Holi, and summer vacations. We book every class — Sleeper, 3AC, 2AC, 1AC — on every major train including Rajdhani, Shatabdi, Vande Bharat, Gatimaan Express, and Duronto. Over 100,000 tickets confirmed since 2000. Routes covered: Gwalior to Delhi (37+ trains daily, fares from ₹160), Gwalior to Mumbai (8 daily, from ₹695), Gwalior to Bengaluru (2 daily, from ₹1,095), Gwalior to Chennai (2 daily, from ₹845), Gwalior to Kolkata (3 daily, from ₹755), and 11 more metro routes. You pay only after your PNR is confirmed. No advance payment required.",
    img:"/assets/services/train.png",
    href:"/services/confirm-ticket",
    btn:"Book Confirmed Ticket →"
  },
  {
    id:"luxury-tours",
    title:"Luxury Madhya Pradesh Heritage Tour Packages",
    subtitle:"Private Guides · Palace Stays · Helicopter Transfers · Custom Itineraries",
    body:"Discover the heart of India in unparalleled luxury with Planet&Travel's bespoke MP tour packages. We have curated over 500 luxury tours since 2000 — from private dawn viewings of Gwalior Fort with a historian, to candlelit dinners inside the 15th-century Jahangir Mahal in Orchha, to tiger safaris in Kanha with a dedicated naturalist. Our signature packages include the 5‑day Royal MP Triangle (Gwalior → Orchha → Khajuraho, from ₹49,999 per couple), the 4‑day Kanha Tiger Safari Luxury (Banjaar Tola lodge, 4 jeep safaris, from ₹64,999 per person), the 3‑day Spiritual MP tour (Ujjain Mahakaleshwar VIP darshan + Omkareshwar, from ₹29,999), and the 10‑day Complete MP Luxury Odyssey covering 6 destinations with private helicopter transfers between parks. Every tour includes luxury palace stays (Taj, Oberoi, Jehan Numa, WelcomHeritage properties), private chauffeurs, all meals, monument fees, and 24/7 concierge support. We don't sell packages — we design journeys.",
    img:"/assets/services/palace.png",
    href:"/services/luxury-tours",
    btn:"Explore Luxury Tours →"
  },
  {
    id:"hotel-booking",
    title:"Premium Hotel & Palace Booking – Gwalior & Across MP",
    subtitle:"5‑Star Properties · Heritage Palaces · Exclusive Rates · Group Bookings",
    body:"Planet&Travel partners directly with India's finest luxury hotel chains and heritage properties to offer exclusive rates you won't find on online portals. In Gwalior, we book the Taj Usha Kiran Palace — a 120‑year‑old palace converted into a 5‑star hotel with 50 rooms, a pool, and a spa. In Bhopal, the Jehan Numa Retreat and Jehan Numa Palace offer lakeside luxury with Sufi evenings. In Orchha, the Amar Mahal combines Bundela architecture with modern comforts. In Kanha, the Banjaar Tola lodge (a Taj Safari property) puts you steps from the jungle. We also book Radisson Blu Indore, WelcomHeritage Golf View Pachmarhi, and boutique homestays across MP. Our corporate clients receive GST invoices and monthly billing. Group bookings (weddings, conferences, retreats) get dedicated coordinators. Since 2000, we have secured better‑than‑online rates for over 10,000 room nights.",
    img:"/assets/services/hotel-room.png",
    href:"/services/hotel-booking",
    btn:"Book Premium Hotels →"
  },
  {
    id:"flight-booking",
    title:"Domestic & International Flight Booking – Gwalior Airport & Beyond",
    subtitle:"All Airlines · Business Class Upgrades · Group Discounts · 24/7 Support",
    body:"Book domestic and international flights at the best rates through Planet&Travel's flight desk. We partner with IndiGo, Air India Express, SpiceJet, Vistara, Akasa Air, and all international carriers. From Gwalior Airport (GWL), direct flights connect to Delhi (1h 5m, from ₹2,499), Mumbai (2h 37m, from ₹4,499), Bengaluru (2h 25m, from ₹5,499), Hyderabad (1h 55m, from ₹4,299), and 5 more cities. For routes without direct flights, we book seamless connections via Delhi or Mumbai. Business class upgrades and priority boarding are available on request. We also handle group bookings for corporate teams, wedding parties, and student groups — with special baggage allowances and flexible cancellation. Our agents monitor your flight status and proactively rebook in case of cancellations. Since 2000, we have booked over 25,000 flight tickets for satisfied travellers across Gwalior and Madhya Pradesh.",
    img:"/assets/services/airplane-wing.png",
    href:"/services/flight-booking",
    btn:"Search Flights →"
  },
  {
    id:"visa-assistance",
    title:"Visa Processing & Foreign Exchange – Gwalior",
    subtitle:"Tourist · Business · Student Visa · Forex Cards · Travel Insurance",
    body:"Planet&Travel offers hassle‑free visa processing and foreign exchange services from our office at Platform 1, Gwalior Railway Station. We handle tourist visas for Dubai, Thailand, Singapore, Malaysia, Europe (Schengen), USA, UK, Australia, and 50+ other destinations. Our team reviews your documents, fills application forms, schedules biometric appointments, and tracks your application status. We also offer express processing for urgent travel. For foreign exchange, we provide US Dollars, Euros, Pounds, Dirhams, and all major currencies at competitive RBI‑compliant rates. Forex cards and traveller's cheques are available for safe international spending. Travel insurance (medical, baggage loss, trip cancellation) is bundled with every visa application. Since 2000, we have processed over 5,000 successful visa applications. Walk into our office or WhatsApp us at +919926665382 to start your visa process today.",
    img:"/assets/homepage/destinations/gwalior.png",
    href:"/services/visa-assistance",
    btn:"Start Visa Process →"
  },
  {
    id:"corporate-travel",
    title:"Corporate Travel Management – Gwalior & MP",
    subtitle:"MICE Events · Executive Retreats · Monthly Billing · GST Invoices · 24/7 Support",
    body:"Planet&Travel's corporate travel desk manages end‑to‑end business travel for companies across Gwalior and Madhya Pradesh. Our services include confirmed Tatkal tickets for employees, domestic and international flight bookings, premium hotel reservations with corporate rates, car rentals (self‑drive and chauffeur), and visa processing for business delegations. We provide monthly consolidated billing with GST invoices, real‑time travel policy compliance, and a dedicated account manager. For MICE (Meetings, Incentives, Conferences, Exhibitions), we handle venue selection, accommodation for 200+ attendees, airport transfers, team‑building activities, and gala dinners. We have successfully executed corporate retreats at Kanha, Pachmarhi, and Orchha for companies including manufacturing, pharmaceutical, and IT firms. 25+ years of corporate trust. To open a corporate account, WhatsApp +919926665382 or visit our office at Platform 1, Gwalior Railway Station.",
    img:"/assets/homepage/destinations/indore.png",
    href:"/services/corporate-travel",
    btn:"Open Corporate Account →"
  },
  {
    id:"car-booking",
    title:"Car Rental Services Gwalior – Self‑Drive & Chauffeur",
    subtitle:"Sedans · SUVs · Tempo Travellers · Luxury Coaches · Local & Outstation",
    body:"Planet&Travel operates Gwalior's largest independent car rental fleet with over 50 vehicles. Choose from hatchbacks (Swift, i20), sedans (Dzire, City, Ciaz), SUVs (Ertiga, Innova Crysta, Fortuner), Tempo Travellers (12‑seater, 17‑seater), and luxury coaches (32‑seater, 45‑seater). Self‑drive rentals start from ₹1,499/day with valid driving licence and security deposit. Chauffeur‑driven options include local city rides (4 hours / 40km), outstation trips (300km/day), airport transfers, and multi‑day tour packages. All vehicles are fully insured, sanitised, and come with 24/7 roadside assistance. Our drivers are background‑verified with minimum 5 years experience. Popular routes: Gwalior to Agra (1h 19m by train, 1h 45m by car), Gwalior to Delhi (3h 31m by Gatimaan, 5h by car), Gwalior to Jhansi (58 min by Shatabdi, 1h 30m by car). Book via WhatsApp at +919926665382 or visit Platform 1, Gwalior Railway Station.",
    img:"/assets/car-rental/sedan.png",
    href:"/services/car-booking",
    btn:"Book Car Rental →"
  }
];

/* ──────────────────────────────────────────────────────
   FAQ items targeting specific long‑tail keywords
   ────────────────────────────────────────────────────── */
const FAQS = [
  {
    q:"How to book a confirm train ticket in Gwalior?",
    a:"Visit Planet&Travel at Platform 1, Gwalior Railway Station (opposite NCC Office) or WhatsApp us at +919926665382. Our IRCTC-authorised agents book confirmed tickets across all classes — Tatkal, Premium Tatkal, and advance reservations. 94% success rate. You pay only after your PNR is confirmed."
  },
  {
    q:"Which is the best travel agency in Gwalior for Tatkal booking?",
    a:"Planet&Travel is Gwalior's most trusted travel agency for Tatkal booking since 2000. Our agents physically sit at the railway counter when Tatkal opens (10 AM AC, 11 AM Sleeper), giving you the highest chance of confirmation. 100,000+ tickets confirmed, 94% success rate even during peak season."
  },
  {
    q:"Do you provide self‑drive car rental in Gwalior near the railway station?",
    a:"Yes. Planet&Travel offers self‑drive car rentals from our office at Platform 1, Gwalior Railway Station. Choose from Swift, Dzire, Innova Crysta, and more. Rates from ₹1,499/day. Valid driving licence and security deposit required. 24/7 roadside assistance included."
  },
  {
    q:"What are the best luxury MP tour packages from Gwalior?",
    a:"Our most popular luxury MP tours are: Royal MP Triangle (Gwalior→Orchha→Khajuraho, 5 days, from ₹49,999/couple), Kanha Tiger Safari (4 days, from ₹64,999/person), Spiritual MP (Ujjain & Omkareshwar, 3 days, from ₹29,999), and Complete MP Luxury Odyssey (10 days, 6 destinations, from ₹1,99,999). All include palace stays, private guides, and chauffeur‑driven cars."
  },
  {
    q:"How can I book a flight from Gwalior to Delhi or Mumbai?",
    a:"Contact Planet&Travel via WhatsApp at +919926665382 or visit our office. We book IndiGo, Air India Express, SpiceJet, and all airlines. Gwalior to Delhi: 2 flights daily, 1h 5m, from ₹2,499. Gwalior to Mumbai: 2 flights daily, 2h 37m, from ₹4,499. We also handle group bookings and business class upgrades."
  },
  {
    q:"Do you offer corporate travel management with GST billing in Gwalior?",
    a:"Yes. Planet&Travel provides end‑to‑end corporate travel management including confirmed Tatkal tickets, flights, hotels, car rentals, and visa processing — all with monthly consolidated GST invoices. Dedicated account manager. 25+ years serving Gwalior businesses."
  },
  {
    q:"How to apply for a Dubai or Thailand tourist visa from Gwalior?",
    a:"Visit Planet&Travel at Platform 1, Gwalior Railway Station with your passport, photographs, and travel dates. We handle the complete application — form filling, document review, appointment scheduling, and tracking. Express processing available. Forex and travel insurance also provided."
  },
  {
    q:"Which hotels near Gwalior Railway Station offer luxury stays?",
    a:"We recommend Taj Usha Kiran Palace (5‑star heritage, 2 km from station), Radisson Blu Gwalior (4‑star, 3 km), and Neemrana's Deo Bagh (heritage, 5 km). Planet&Travel secures exclusive rates at all these properties. Contact us for group booking discounts."
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ═══════ SECTION 1 – HERO ═══════ */}
        <section className="hero-background hero-fallback-bg" style={{minHeight:'70vh'}}>
          <video autoPlay muted loop playsInline poster="/assets/services/palace.png">
            <source src="/assets/hero/services-hero.webm" type="video/webm" />
            <source src="/assets/hero/services-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content" style={{minHeight:'70vh'}}>
            <div className="max-w-4xl px-4">
              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-gradient">Luxury Travel Services in Gwalior</span>
              </h1>
              <p className="text-gradient-sub text-base md:text-lg max-w-3xl mx-auto mb-4">
                Confirmed train tickets · 94% Tatkal success · Luxury MP tours · Car rental · Flights · Hotels · Visa &amp; Forex · Corporate travel — all from Platform 1, Gwalior Railway Station since 2000
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <a href="https://wa.me/919926665382?text=Hello%20Planet%26Travel!%20I%20am%20interested%20in%20your%20services." target="_blank" className="bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-500 transition-all text-base">
                  📲 WhatsApp: +91 99266 65382
                </a>
                <Link href="/concierge" className="border border-gold-400/30 text-gold-400 px-8 py-4 rounded-xl hover:bg-gold-400/10 transition-all text-base">
                  Contact Concierge
                </Link>
              </div>
              <p className="text-white/50 text-xs mt-4">Open daily 6 AM – 11 PM · Platform 1, Gwalior Railway Station · Opposite NCC Office, Gwalior — 474002</p>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 2 – ALL 7 SERVICES GRID ═══════ */}
        <section className="py-20 bg-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Complete Travel Services Under One Roof" subtitle="Six pillars of luxury travel — every service delivered with 25+ years of Gwalior expertise" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => <ServiceCard3D key={s.id} {...s} />)}
            </div>
          </div>
        </section>

        {/* ═══════ SECTIONS 3–9 – EACH SERVICE DEEP‑DIVE ═══════ */}
        {SERVICE_DETAILS.map((svc, i) => (
          <section key={svc.id} className={`py-16 ${i%2===0 ? 'bg-white/10' : 'bg-white/5'}`}>
            <div className="max-w-6xl mx-auto px-4">
              <div className={`grid md:grid-cols-2 gap-10 items-center ${i%2===1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={i%2===1 ? 'order-2' : ''}>
                  <h2 className="text-2xl md:text-3xl font-heading text-gradient mb-2">{svc.title}</h2>
                  <p className="text-gold-400 font-semibold text-sm mb-4">{svc.subtitle}</p>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">{svc.body}</p>
                  <Link href={svc.href} className="inline-block bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-lg hover:shadow-xl transition-all text-sm">
                    {svc.btn}
                  </Link>
                </div>
                <div className={`glass rounded-2xl overflow-hidden ${i%2===1 ? 'order-1' : ''}`}>
                  <img src={svc.img} alt={svc.title} className="w-full h-80 object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ═══════ SECTION 10 – WHY PLANET&TRAVEL ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Why Gwalior Chooses Planet&Travel" subtitle="25+ years · 50,000+ travellers · 100,000+ confirmed tickets · IRCTC‑authorised agents" />
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {t:"94% Tatkal Success",d:"Our agents sit at the physical IRCTC counter. No bots, no app crashes — just 25+ years of booking experience."},
                {t:"Since 2000",d:"We have served three generations of Gwalior families. Our reputation is built on every confirmed PNR and every happy traveller."},
                {t:"All Services, One Roof",d:"Train tickets, tours, car rental, flights, hotels, visa, forex, corporate travel — walk into Platform 1 and get everything done."},
                {t:"Pay After Confirmation",d:"You pay only when your ticket is confirmed or your hotel is booked. No advance payment for regular customers. GST invoices for businesses."}
              ].map((item,i) => (
                <div key={i} className="glass-light rounded-xl p-6 border border-white/10 text-center hover:border-gold-400/30 transition-all">
                  <h4 className="text-gradient font-heading text-lg mb-2">{item.t}</h4>
                  <p className="text-gray-600 text-xs">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 11 – HOW IT WORKS ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="How to Book Any Service" subtitle="Three simple steps — no apps, no bots, just real agents at the railway station" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {s:"01",t:"Contact Us",d:"WhatsApp us at +919926665382 or visit our office at Platform 1, Gwalior Railway Station. Tell us what you need — train ticket, tour, car, flight, hotel, or visa."},
                {s:"02",t:"We Confirm Availability",d:"Our agents check real‑time availability — train seats, hotel rooms, flight fares, car inventory — and confirm within minutes."},
                {s:"03",t:"Pay & Travel",d:"Pay after confirmation via UPI, bank transfer, or cash. Receive your confirmed PNR, hotel voucher, or car booking instantly."}
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

        {/* ═══════ SECTION 12 – FAQ (8 items with schema‑ready markup) ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Frequently Asked Questions" subtitle="About our travel services in Gwalior" />
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

        {/* ═══════ SECTION 13 – STATS BANNER ═══════ */}
        <section className="py-12 bg-white/10 border-y border-white/20">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><span className="text-3xl font-heading text-gradient block">25+</span><span className="text-gray-500 text-xs">Years of Excellence</span></div>
            <div><span className="text-3xl font-heading text-gradient block">50K+</span><span className="text-gray-500 text-xs">Happy Travellers</span></div>
            <div><span className="text-3xl font-heading text-gradient block">100K+</span><span className="text-gray-500 text-xs">Tickets Confirmed</span></div>
            <div><span className="text-3xl font-heading text-gradient block">500+</span><span className="text-gray-500 text-xs">Luxury Tours</span></div>
          </div>
        </section>

        {/* ═══════ SECTION 14 – CONFIRMED TICKET CTA ═══════ */}
        <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-950 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Ready for a Confirmed Ticket?" subtitle="Tatkal, Premium Tatkal, or Advance — our agents get it done with a 94% success rate" />
            <p className="text-white/70 max-w-2xl mx-auto mb-6 text-sm">
              Over <strong className="text-gold-400">100,000 tickets confirmed</strong> since 2000. Gwalior to Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Jaipur, Lucknow, Nagpur, Patna, Kanpur, Bhopal, Indore, Agra — every route. All classes: Sleeper, 3AC, 2AC, 1AC. Pay only after confirmation.
            </p>
            <Link href="/services/confirm-ticket" className="inline-block bg-gold-400 text-navy-950 font-bold px-10 py-4 rounded-2xl text-lg hover:shadow-2xl transition-all">
              Get Confirmed Ticket →
            </Link>
          </div>
        </section>

        {/* ═══════ SECTION 15 – VISIT US ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Visit Our Office" subtitle="Walk into Platform 1, Gwalior Railway Station — we are open every day" />
            <div className="glass rounded-2xl p-8 text-center max-w-lg mx-auto">
              <p className="text-xl text-gold-400 font-heading mb-2">Platform №1, Gwalior Railway Station</p>
              <p className="text-gray-700 mb-3">Opposite NCC Office, Gwalior, Madhya Pradesh — 474002</p>
              <p className="text-gray-700 mb-1"><strong>📞</strong> <a href="tel:+919926665382" className="text-gold-400 font-semibold">+91 99266 65382</a></p>
              <p className="text-gray-700 mb-1"><strong>✉️</strong> <a href="mailto:concierge@planetandtravel.in" className="text-gold-400 font-semibold">concierge@planetandtravel.in</a></p>
              <p className="text-gray-700"><strong>🕐</strong> Open daily: 6 AM – 11 PM</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
