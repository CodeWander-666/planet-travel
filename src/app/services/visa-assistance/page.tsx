import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMetadata(
  "Visa Agent Gwalior – Tourist, Student, Work Visa, Passport, Forex | Planet&Travel Since 2000",
  "Best visa consultant in Gwalior. Student visa for USA (F1), UK (Tier 4), Canada, Australia (Subclass 500), Europe. Tourist visa Dubai, Thailand, Singapore, Schengen. Work visa H1B, employment visa. Passport (Tatkal), forex, travel insurance. Platform 1, Gwalior Railway Station. WhatsApp +919926665382.",
  "/services/visa-assistance"
);

/* ────────────────────────────────────────────────────
   TOURIST VISA DESTINATIONS
   ──────────────────────────────────────────────────── */
const TOURIST_VISAS = [
  { dest:"Dubai (UAE)", duration:"14–90 days", processing:"3–7 working days", docs:"Passport (6 months validity), photo, PAN card, confirmed flight & hotel", fee:"From ₹5,999", note:"Visa on arrival available for Indians with valid US/UK/Schengen visa" },
  { dest:"Thailand", duration:"15–60 days", processing:"3–5 working days", docs:"Passport, photo, confirmed flight & hotel, bank statement (₹50,000+)", fee:"From ₹2,999", note:"Visa on arrival available for 15 days at Thai airports" },
  { dest:"Singapore", duration:"30 days", processing:"3–5 working days", docs:"Passport, photo, confirmed flight & hotel, bank statement, Form 14A", fee:"From ₹2,499", note:"E‑visa available; apply online through ICA Singapore" },
  { dest:"Malaysia", duration:"30 days", processing:"3–5 working days", docs:"Passport, photo, confirmed flight & hotel, bank statement", fee:"From ₹2,999", note:"E‑visa available through Malaysian government portal" },
  { dest:"Schengen (Europe)", duration:"Up to 90 days", processing:"15–21 working days", docs:"Passport (3 months validity beyond return), photo, flight itinerary, hotel bookings, travel insurance (€30,000 coverage), bank statement (6 months), ITR (3 years), cover letter, NOC from employer", fee:"From ₹7,999", note:"VFS appointment required; book 4–6 weeks before travel; highest documentation standard" },
  { dest:"USA (B1/B2)", duration:"Up to 6 months", processing:"2–4 weeks after interview", docs:"Passport, photo, DS‑160 confirmation, interview appointment, bank statement, ITR, employment proof", fee:"From ₹14,999", note:"In‑person interview at US Embassy required; preparation of DS‑160 form included" },
  { dest:"UK", duration:"6 months", processing:"15 working days", docs:"Passport, photo, bank statement (6 months), ITR, employment proof, accommodation proof", fee:"From ₹11,999", note:"Standard Visitor Visa; biometrics appointment at VFS included" },
  { dest:"Australia", duration:"3–12 months", processing:"15–25 working days", docs:"Passport, photo, bank statement, ITR, employment proof, travel itinerary", fee:"From ₹9,999", note:"Visitor Visa (Subclass 600); biometrics required" },
  { dest:"Japan", duration:"15–90 days", processing:"4–7 working days", docs:"Passport, photo, flight & hotel, bank statement, ITR, detailed day‑wise itinerary", fee:"From ₹3,999", note:"E‑visa available; detailed itinerary critical for approval" },
  { dest:"Vietnam", duration:"30 days", processing:"3–5 working days", docs:"Passport, photo, flight & hotel confirmation", fee:"From ₹2,499", note:"E‑visa available for 30 days single entry" },
];

/* ────────────────────────────────────────────────────
   STUDENT VISA DESTINATIONS
   ──────────────────────────────────────────────────── */
const STUDENT_VISAS = [
  { dest:"USA (F1 Visa)", key:"Form I‑20 from SEVP‑approved university, DS‑160, SEVIS I‑901 fee receipt, MRV fee receipt, passport, photo, academic transcripts, IELTS/TOEFL score, financial proof (bank balance + sponsor affidavit), interview preparation", processing:"2–4 weeks after interview", note:"F1 rejection rate ~41% in FY2024 — proper documentation and interview preparation are essential. 2026: mandatory 5‑year social media history disclosure, 6‑month continuous financial records required." },
  { dest:"UK (Student Visa)", key:"CAS (Confirmation of Acceptance for Studies) from licensed Tier 4 sponsor, passport, IELTS/PTE score, financial proof (£1,334/month for London, £1,023/month outside London), TB test certificate, ATAS certificate (if applicable), academic transcripts", processing:"3 weeks (priority), 8 weeks (standard)", note:"Formerly Tier 4 visa. 2026: visa costs increasing, dependant rights limited, Graduate Route under review. CAS letter is mandatory — cannot apply without it." },
  { dest:"Canada (Study Permit)", key:"Letter of Acceptance from DLI, Provincial Attestation Letter (PAL), IELTS 6.0 each band (or equivalent), GIC of CAD 22,895 (new 2026 requirement), upfront medical exam, biometrics, academic transcripts", processing:"4–12 weeks", note:"SDS fast‑track scrapped in late 2024. All students now apply via regular stream. 2026: national study‑permit cap imposed. 360,000 Indian students currently in Canada." },
  { dest:"Australia (Subclass 500)", key:"Confirmation of Enrolment (CoE) from CRICOS‑registered institution, IELTS/TOEFL/PTE score, Genuine Student (GS) statement, OSHC health insurance, proof of funds (AU$29,710/year + tuition + travel), academic transcripts, passport", processing:"4–8 weeks", note:"India reclassified to Evidence Level 3 (higher scrutiny) from January 2026. GS statement replaced GTE. Minimum ₹14 lakh bank balance required. 60%+ in 12th standard recommended." },
  { dest:"New Zealand", key:"Offer of Place from NZQA‑approved institution, IELTS 5.5+ (or equivalent), financial proof (NZ$20,000/year), medical certificate, police clearance, passport, academic transcripts", processing:"4–8 weeks", note:"Pathway Student Visa available for 3 consecutive programmes. Work rights: 20 hours/week during term, full‑time during holidays." },
  { dest:"Germany", key:"Admission letter from German university, APS certificate (mandatory from 2023), blocked account (Sperrkonto) with €11,208, IELTS/TOEFL score, academic transcripts, passport, photo, health insurance", processing:"4–8 weeks", note:"Most public universities charge zero tuition. APS certificate takes 4–6 weeks — start early. Student visa allows 120 full days or 240 half days of work per year." },
  { dest:"Ireland", key:"Letter of Acceptance from Irish university, IELTS 6.0+, proof of funds (€10,000/year), health insurance, academic transcripts, passport, photo", processing:"4–8 weeks", note:"Stay‑back visa: up to 2 years after graduation. Part‑time work: 20 hours/week during term, 40 hours during holidays." },
  { dest:"France", key:"Admission letter from French institution, Campus France registration, IELTS/DELF score, proof of funds (€615/month), health insurance, accommodation proof, passport, photo", processing:"2–4 weeks (after Campus France)", note:"2‑year post‑study work visa for Master's graduates. Part‑time work: 964 hours/year." },
];

/* ────────────────────────────────────────────────────
   WORK VISA SERVICES
   ──────────────────────────────────────────────────── */
const WORK_VISAS = [
  { dest:"USA", types:"H‑1B (Specialty Occupation), L‑1 (Intra‑Company Transfer), H‑2B (Seasonal Worker), O‑1 (Extraordinary Ability)", key:"Employer sponsorship mandatory for H‑1B. Labour Condition Application (LCA), Form I‑129, educational evaluation, experience letters, passport. H‑1B cap: 85,000 per year (April lottery).", processing:"3–6 months (regular), 15 days (premium)" },
  { dest:"Canada", types:"Express Entry (Federal Skilled Worker), Provincial Nominee Program (PNP), Temporary Foreign Worker Program, Global Talent Stream", key:"CRS score calculation, ECA (WES), IELTS General (CLB 7+), work experience letters, proof of funds, police clearance, medical exam.", processing:"6–12 months (Express Entry), 2–4 months (PNP)" },
  { dest:"UK", types:"Skilled Worker Visa (formerly Tier 2), Health & Care Worker Visa, Global Talent Visa, Innovator Founder Visa", key:"Certificate of Sponsorship (CoS) from UK employer, IELTS for UKVI, salary threshold (min. £38,700 for Skilled Worker, lower for shortage occupations), TB test, criminal record certificate.", processing:"3 weeks (priority), 8 weeks (standard)" },
  { dest:"Australia", types:"Subclass 482 (TSS), Subclass 186 (ENS), Subclass 189 (Skilled Independent), Subclass 190 (Skilled Nominated)", key:"Skills assessment from relevant authority, IELTS 6.0+ each band, EOI through SkillSelect, state nomination (190), employer sponsorship (482/186), health & character checks.", processing:"3–12 months depending on stream" },
  { dest:"Germany", types:"EU Blue Card, Skilled Immigration Act visa, Job Seeker Visa, Work Visa for Qualified Professionals", key:"Recognised university degree (Anabin/Statement of Comparability), job offer with salary ≥€43,800 (Blue Card) or ≥€39,683 (shortage occupations), health insurance, accommodation proof.", processing:"4–8 weeks" },
  { dest:"UAE/Dubai", types:"Employment Visa, Green Visa, Golden Visa, Freelance Visa", key:"Employment contract from UAE company, educational certificates (attested), medical fitness test, Emirates ID registration, passport, photo. Employer typically sponsors the visa.", processing:"2–4 weeks" },
];

/* ────────────────────────────────────────────────────
   FAQ ITEMS
   ──────────────────────────────────────────────────── */
const FAQS = [
  { q:"How to apply for a student visa for USA from Gwalior?", a:"Contact Planet&Travel at Platform 1, Gwalior Railway Station or WhatsApp +919926665382. We help you through the complete F1 visa process: university shortlisting, I‑20 procurement, DS‑160 form filling, SEVIS fee payment, visa fee payment, interview scheduling, mock interview preparation, and document verification. The F1 rejection rate is ~41% — our expertise dramatically improves your chances. 2026 updates: 5‑year social media history required, 6‑month continuous bank statements needed." },
  { q:"Which is the best visa agent in Gwalior for Dubai tourist visa?", a:"Planet&Travel is Gwalior's most trusted visa agent since 2000. Dubai tourist visa processing from ₹5,999, 3–7 working days. We also handle visa‑on‑arrival arrangements for Indian passport holders with valid US/UK/Schengen visas. Visit our office at Platform 1, Gwalior Railway Station for same‑day application processing." },
  { q:"How to get a Schengen tourist visa from Gwalior?", a:"We handle the complete Schengen visa process: country selection based on itinerary, VFS appointment booking (book 4–6 weeks ahead), document preparation (passport, photos, flight itinerary, hotel bookings, travel insurance with €30,000 coverage, 6‑month bank statement, 3‑year ITR, cover letter, NOC from employer), and appointment day guidance. Schengen visa rejection is common due to incomplete documentation — our 25+ years of experience minimises this risk." },
  { q:"What is the cost of a Canada student visa from India in 2026?", a:"The Canada study permit application fee is CAD 150 (approx. ₹9,300) plus biometrics fee of CAD 85 (approx. ₹5,270). Additionally, you must show a GIC of CAD 22,895 (new 2026 requirement). Planet&Travel guides you through the complete process including PAL (Provincial Attestation Letter), IELTS preparation guidance, and document verification. Note: SDS fast‑track was abolished in late 2024 — all applications now go through the regular stream." },
  { q:"Can I apply for an Australia student visa from Gwalior?", a:"Yes. Planet&Travel assists with Subclass 500 student visa applications for Australia. India is now at Evidence Level 3 (higher scrutiny from January 2026) — meaning more documentation is required. We help with CoE procurement, Genuine Student (GS) statement drafting, OSHC health insurance, proof of funds (AU$29,710/year + tuition), and document preparation. Minimum ₹14 lakh bank balance required." },
  { q:"Do you handle H1B work visa documentation for USA?", a:"Yes. Our team assists with H‑1B cap registration, Labour Condition Application (LCA) coordination, Form I‑129 preparation, educational evaluation, experience letter drafting, and premium processing requests. We work with your sponsoring US employer to ensure complete documentation. Also handle L‑1 intra‑company transfer visas and O‑1 extraordinary ability visas." },
  { q:"How to get a Tatkal passport in Gwalior?", a:"Planet&Travel provides complete Tatkal passport assistance. We help with online application form filling, appointment booking at Gwalior PSK (Passport Seva Kendra, Lashkar Head Post Office, Jiwaji Chowk), document preparation (identity proof, address proof, date of birth proof, Annexure F for Tatkal), and pre‑appointment document verification. Tatkal passport is typically issued within 1–3 days after appointment." },
  { q:"What documents are needed for a UK student visa from India?", a:"Essential documents: CAS (Confirmation of Acceptance for Studies) from a licensed Tier 4 sponsor, valid passport, IELTS/PTE score meeting course requirements, proof of funds (£1,334/month for London, £1,023/month outside London for up to 9 months), TB test certificate (if applicable), ATAS certificate (for certain courses), academic transcripts, and passport‑sized photographs. Planet&Travel verifies all documents before submission." },
  { q:"Do you provide forex (foreign currency exchange) in Gwalior?", a:"Yes. Planet&Travel provides foreign currency exchange at competitive rates. We deal in US Dollars (USD), Euros (EUR), British Pounds (GBP), UAE Dirhams (AED), Canadian Dollars (CAD), Australian Dollars (AUD), Singapore Dollars (SGD), Thai Baht (THB), and all major currencies. Forex cards and traveller's cheques also available. Travel insurance bundled with every forex transaction. RBI‑compliant." },
  { q:"Which countries offer visa on arrival for Indian passport holders?", a:"As of 2026, Indian passport holders can get visa on arrival in Thailand (15 days), Maldives (30 days), Mauritius (60 days), Seychelles (30 days), Bhutan (14 days), Nepal, Jamaica, and several other destinations. Dubai also offers visa on arrival for Indians holding valid US/UK/Schengen visas. Planet&Travel helps you understand which option is best for your travel plan." },
];

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <span className="text-3xl font-heading text-gradient">{number}</span>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

export default function VisaAssistancePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ═══════ SECTION 1 – HERO ═══════ */}
        <section className="hero-background hero-fallback-bg" style={{minHeight:'70vh'}}>
          <video autoPlay muted loop playsInline poster="/assets/hero/homepage-hero.webm">
            <source src="/assets/hero/services-hero.webm" type="video/webm" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content" style={{minHeight:'70vh'}}>
            <div className="max-w-4xl px-4">
              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-gradient">Visa Agent Gwalior – Tourist, Student, Work Visa &amp; Passport Services</span>
              </h1>
              <p className="text-gradient-sub text-base md:text-lg max-w-3xl mx-auto mb-4">
                Complete visa assistance from Gwalior since 2000. Student visa (USA F1, UK Tier 4, Canada Study Permit, Australia Subclass 500, Germany, Ireland, France). Tourist visa (Dubai, Thailand, Singapore, Schengen, USA, UK, Australia, Japan, Vietnam). Work visa (H1B, Express Entry, Skilled Worker). Passport (Tatkal). Forex. Travel insurance. Visit Platform 1, Gwalior Railway Station.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <a href="https://wa.me/919926665382?text=Hello%20Planet%26Travel!%20I%20need%20visa%20assistance." target="_blank" className="bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-500 transition-all text-base">
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

        {/* ═══════ SECTION 2 – ABOUT VISA SERVICES ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Complete Visa &amp; Immigration Services in Gwalior" subtitle="Since 2000 — 5,000+ successful visa applications. Tourist, student, work, business — every category covered." />
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed text-sm mb-3">
                  Planet&Travel is <strong className="text-gold-400">Gwalior's most experienced visa agent</strong>, operating from Platform 1, Gwalior Railway Station since 2000. Over 25 years, we have successfully processed <strong className="text-gold-400">5,000+ visa applications</strong> across all categories — tourist visas (Dubai, Thailand, Singapore, Schengen, USA, UK, Australia, Japan, Vietnam), student visas (USA F1, UK Tier 4/Student Route, Canada Study Permit, Australia Subclass 500, Germany, Ireland, France, New Zealand), and work visas (H‑1B, L‑1, Express Entry, Skilled Worker, EU Blue Card).
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  We also provide <strong className="text-gold-400">Tatkal passport assistance</strong> (Gwalior PSK — Lashkar Head Post Office), <strong className="text-gold-400">foreign currency exchange</strong> (USD, EUR, GBP, AED, CAD, AUD, SGD, THB and 20+ currencies), <strong className="text-gold-400">forex cards</strong>, and <strong className="text-gold-400">travel insurance</strong>. Every service is backed by our 25+ years of local trust and a physical office you can walk into any day between 6 AM and 11 PM.
                </p>
              </div>
              <div className="glass rounded-2xl p-6 space-y-2 text-sm">
                <p><strong className="text-gold-400">📍 Location:</strong> Platform 1, Gwalior Railway Station, opposite NCC Office</p>
                <p><strong className="text-gold-400">📞 Contact:</strong> <a href="tel:+919926665382" className="text-gold-400 font-semibold">+91 99266 65382</a></p>
                <p><strong className="text-gold-400">📲 WhatsApp:</strong> <a href="https://wa.me/919926665382" className="text-gold-400 font-semibold">Chat Now</a></p>
                <p><strong className="text-gold-400">🕐 Hours:</strong> 6 AM – 11 PM, 7 days a week</p>
                <p><strong className="text-gold-400">🏛️ PSK Gwalior:</strong> Passport Seva Kendra, Lashkar Head Post Office, Jiwaji Chowk, Gwalior — 474001</p>
                <p><strong className="text-gold-400">✅ Success Rate:</strong> 5,000+ visas processed since 2000</p>
                <p><strong className="text-gold-400">💱 Forex:</strong> All major currencies at RBI‑compliant rates</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 3 – STUDENT VISA SERVICES ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Student Visa Services – Study Abroad from Gwalior" subtitle="USA (F1) · UK (Tier 4/Student Route) · Canada (Study Permit) · Australia (Subclass 500) · Germany · Ireland · France · New Zealand" />
            <p className="text-gray-700 text-sm text-center max-w-3xl mx-auto mb-8">
              2026 has brought major changes to student visa rules worldwide — tighter financial proof requirements, higher English language bars, new attestation letters, and scrapped fast‑track streams. Our 25+ years of experience navigating these changes ensures your application is complete, accurate, and optimised for approval. We assist with university shortlisting, document preparation, SOP/LOR guidance, interview preparation, and post‑visa forex.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {STUDENT_VISAS.map((sv, i) => (
                <div key={i} className="glass-light rounded-xl p-5 border border-white/10 hover:border-gold-400/30 transition-all">
                  <h3 className="text-gold-400 font-heading text-lg mb-1">{sv.dest}</h3>
                  <p className="text-gray-500 text-xs mb-2">{sv.processing}</p>
                  <p className="text-gray-700 text-xs mb-2"><strong>Requirements:</strong> {sv.key}</p>
                  <p className="text-gray-600 text-xs italic border-l-2 border-gold-400 pl-3">{sv.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 4 – TOURIST VISA DESTINATIONS TABLE ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Tourist Visa Services – 10 Most Popular Destinations" subtitle="Dubai · Thailand · Singapore · Malaysia · Schengen Europe · USA · UK · Australia · Japan · Vietnam" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-800">
                <thead className="bg-navy-950/20">
                  <tr>
                    <th className="px-3 py-3 font-heading text-gold-400">Country</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden sm:table-cell">Duration</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden md:table-cell">Processing</th>
                    <th className="px-3 py-3 font-heading text-gold-400 hidden lg:table-cell">Key Documents</th>
                    <th className="px-3 py-3 font-heading text-gold-400">Fee From</th>
                    <th className="px-3 py-3 font-heading text-gold-400">Apply</th>
                  </tr>
                </thead>
                <tbody>
                  {TOURIST_VISAS.map((v, i) => (
                    <tr key={i} className={i%2===0 ? 'bg-white/5' : 'bg-white/10'}>
                      <td className="px-3 py-2 font-semibold text-xs">{v.dest}</td>
                      <td className="px-3 py-2 hidden sm:table-cell text-xs">{v.duration}</td>
                      <td className="px-3 py-2 hidden md:table-cell text-xs">{v.processing}</td>
                      <td className="px-3 py-2 hidden lg:table-cell text-xs">{v.docs}</td>
                      <td className="px-3 py-2 text-xs">{v.fee}</td>
                      <td className="px-3 py-2">
                        <a href={`https://wa.me/919926665382?text=I%20want%20a%20tourist%20visa%20for%20${v.dest.split('(')[0].trim()}`} target="_blank" className="text-green-600 font-semibold hover:underline text-xs">Apply</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">All fees are indicative. Contact us for exact costs, complete document checklists, and appointment scheduling. We also process visas for 40+ other countries.</p>
          </div>
        </section>

        {/* ═══════ SECTION 5 – WORK VISA SERVICES ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="Work Visa &amp; Employment Visa Services" subtitle="USA (H1B, L1, O1) · Canada (Express Entry, PNP) · UK (Skilled Worker) · Australia (482, 189, 190) · Germany (Blue Card) · UAE (Employment Visa)" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {WORK_VISAS.map((wv, i) => (
                <div key={i} className="glass-light rounded-xl p-5 border border-white/10 hover:border-gold-400/30 transition-all">
                  <h3 className="text-gold-400 font-heading text-lg mb-1">{wv.dest}</h3>
                  <p className="text-gray-500 text-xs mb-2"><strong>Types:</strong> {wv.types}</p>
                  <p className="text-gray-700 text-xs mb-2"><strong>Key Requirements:</strong> {wv.key}</p>
                  <p className="text-gray-500 text-xs">{wv.processing}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 6 – BUSINESS VISA ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Business Visa Services" subtitle="For entrepreneurs, investors, and business travellers from Gwalior" />
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              {[
                {dest:"USA (B1)",desc:"For business meetings, conferences, negotiations. Cannot be used for employment. DS‑160 form, invitation letter from US company, proof of business ties to India, bank statements, ITR. In‑person interview required."},
                {dest:"UK (Business Visitor)",desc:"For meetings, conferences, training. Maximum 6 months stay. Invitation letter from UK organisation, proof of business activities in India, financial documents. Cannot undertake paid work."},
                {dest:"Schengen (Business)",desc:"For business meetings across 27 European countries. Invitation from European company, employer NOC, travel insurance, bank statements, detailed itinerary. VFS appointment required."},
                {dest:"Dubai (Business)",desc:"For business meetings, trade shows, company formation. UAE company invitation, Chamber of Commerce registration, Indian company documents. Multiple entry options available."},
                {dest:"Singapore (Business)",desc:"E‑visa available for business visits. Singapore company invitation (registered with ACRA), Indian company covering letter, bank statements, meeting schedule."},
                {dest:"China (Business)",desc:"Invitation letter from Chinese company (TA‑1 form), Indian company covering letter, hotel bookings, flight itinerary, bank statements. Biometrics at Chinese Visa Application Service Centre."},
              ].map((bv,i) => (
                <div key={i} className="glass-light rounded-xl p-4 border border-white/10">
                  <h4 className="text-gold-400 font-heading text-sm mb-1">{bv.dest}</h4>
                  <p className="text-gray-600 text-xs">{bv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 7 – DOCUMENT PREPARATION ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Visa Document Preparation – The Planet&Travel Difference" subtitle="Most visa rejections happen because of incomplete or incorrectly formatted documents. We eliminate that risk." />
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              {[
                {t:"Document Checklist",d:"Every visa type has a unique document checklist. We provide a personalised checklist for your specific visa category — tourist, student, work, or business — and verify every document before submission."},
                {t:"Cover Letter & SOP Drafting",d:"For Schengen and student visas, a compelling cover letter or Statement of Purpose (SOP) significantly increases approval chances. Our team drafts professional cover letters highlighting your travel intent, financial stability, and ties to India."},
                {t:"Financial Documentation",d:"Bank statements (6 months), Income Tax Returns (3 years), salary slips, Fixed Deposit certificates, sponsorship letters, and Chartered Accountant statements — we help you organise financial proof exactly as the embassy requires."},
                {t:"Interview Preparation",d:"For USA F1, B1/B2, and UK visas requiring interviews, we conduct mock interview sessions covering common questions, documentation review, and body language tips. 2026: F1 applicants must demonstrate intent to return to India."},
                {t:"Form Filling",d:"DS‑160 (USA), online application (UK), ImmiAccount (Australia), IRCC portal (Canada), VIDEX (Schengen) — our team accurately fills every online form, reducing rejection risk from data entry errors."},
                {t:"Appointment Booking",d:"VFS slots for Schengen, USA, UK, and Australia fill rapidly — especially during summer and holiday seasons. We monitor availability and book your appointment at the earliest possible date."},
              ].map((item,i) => (
                <div key={i} className="glass-light rounded-xl p-4 border border-white/10">
                  <h4 className="text-gradient font-heading text-sm mb-1">{item.t}</h4>
                  <p className="text-gray-600 text-xs">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 8 – PASSPORT ASSISTANCE ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Passport Services – Gwalior PSK" subtitle="Tatkal passport · Renewal · Re‑issue · New passport · Document preparation" />
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed text-sm mb-3">
                  Planet&Travel provides complete passport assistance for residents of Gwalior. We handle <strong className="text-gold-400">Tatkal (urgent) passport applications</strong>, normal passport applications, passport renewal/re‑issue, and documentation for the <strong className="text-gold-400">Passport Seva Kendra (PSK) Gwalior</strong> — located at Lashkar Head Post Office, Jiwaji Chowk, Bada Gwalior (PIN 474001). Contact number for PSK Gwalior: 0755‑258‑3258.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm mb-3">
                  <strong className="text-gold-400">Tatkal Passport:</strong> Issued within 1–3 days after appointment. Requires Annexure F (verification certificate), standard identity/address/DOB proof documents, and a higher fee. Our team fills the online application, books the earliest PSK appointment, and verifies all documents before your visit.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  <strong className="text-gold-400">Normal Passport:</strong> Issued within 30–45 days. We assist with the complete online application, document preparation, and appointment booking. Both fresh passport applications and renewal/re‑issue cases handled. We also support special cases — lost passport, damaged passport, change of personal details, and minor (child) passport applications.
                </p>
              </div>
              <div className="glass rounded-2xl p-6 space-y-2 text-sm">
                <p><strong className="text-gold-400">🏛️ PSK Gwalior:</strong> Passport Seva Kendra, Lashkar Head Post Office, Jiwaji Chowk, Bada Gwalior — 474001</p>
                <p><strong className="text-gold-400">📞 PSK Contact:</strong> 0755 258 3258</p>
                <p><strong className="text-gold-400">🕐 PSK Hours:</strong> Mon–Sat, 9 AM – 5 PM</p>
                <p><strong className="text-gold-400">⚡ Tatkal Processing:</strong> 1–3 days after appointment</p>
                <p><strong className="text-gold-400">📋 Normal Processing:</strong> 30–45 days</p>
                <p><strong className="text-gold-400">📍 Our Office:</strong> Platform 1, Gwalior Railway Station (walk 2 min from any platform)</p>
                <p><strong className="text-gold-400">✅ Documents:</strong> Identity proof, address proof, DOB proof, photographs, Annexure F (Tatkal)</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 9 – FOREX & TRAVEL INSURANCE ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Forex (Foreign Currency Exchange) &amp; Travel Insurance" subtitle="RBI‑compliant currency exchange · Forex cards · Multi‑currency travel insurance · All from Platform 1, Gwalior" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {t:"Currency Exchange",d:"We provide US Dollars (USD), Euros (EUR), British Pounds (GBP), UAE Dirhams (AED), Canadian Dollars (CAD), Australian Dollars (AUD), Singapore Dollars (SGD), Thai Baht (THB), Japanese Yen (JPY), Malaysian Ringgit (MYR), and 15+ other currencies at competitive, RBI‑compliant rates. Walk into Platform 1, Gwalior Railway Station — exchange your rupees in minutes."},
                {t:"Forex Cards",d:"Multi‑currency forex cards are safer than carrying cash abroad. Load USD, EUR, GBP, or any major currency onto a single card. Use it at ATMs, restaurants, and shops worldwide. We help you choose between Visa and Mastercard forex cards, explain loading fees, and activate the card before your trip. Balance top‑up available online."},
                {t:"Travel Insurance",d:"Medical emergencies abroad can cost lakhs. Our travel insurance policies cover medical expenses (up to $500,000), trip cancellation, baggage loss/delay, passport loss, personal accident, and emergency evacuation. Schengen visa requires minimum €30,000 medical coverage — we provide compliant policies. Single‑trip and annual multi‑trip plans available. Starting from ₹299."},
              ].map((item,i) => (
                <div key={i} className="glass-light rounded-xl p-5 border border-white/10">
                  <h4 className="text-gradient font-heading text-lg mb-2">{item.t}</h4>
                  <p className="text-gray-600 text-xs">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 10 – WHY CHOOSE PLANET&TRAVEL ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Why Gwalior Trusts Planet&Travel for Visa Services" subtitle="25+ years of visa expertise — 5,000+ successful applications, zero black marks" />
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {t:"Since 2000",d:"We've been processing visas from Platform 1, Gwalior Railway Station for over 25 years. We've seen every rule change, every documentation update, and every embassy nuance. Our experience is your advantage."},
                {t:"Physical Office",d:"Unlike online‑only visa portals, we have a real office you can visit. Bring your documents, discuss your case face‑to‑face, and get instant answers. Open 6 AM – 11 PM, 7 days a week."},
                {t:"5,000+ Visas Processed",d:"Tourist, student, work, and business visas — we've successfully processed over 5,000 applications. Our team knows exactly what each embassy looks for and how to present your case."},
                {t:"Complete Package",d:"Visa + Passport + Forex + Travel Insurance — everything under one roof. No need to visit multiple agents. We handle the entire pre‑travel checklist so you can focus on packing."}
              ].map((item,i) => (
                <div key={i} className="glass-light rounded-xl p-5 border border-white/10 text-center hover:border-gold-400/30 transition-all">
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
            <SectionHeader title="How to Apply for a Visa Through Planet&Travel" subtitle="Three simple steps — we handle the complexity, you get the visa" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {s:"01",t:"Contact Us with Your Travel Plan",d:"WhatsApp us at +919926665382 or visit Platform 1, Gwalior Railway Station. Tell us your destination, purpose (tourist/student/work/business), travel dates, and number of applicants. We recommend the right visa type and provide a complete document checklist within minutes."},
                {s:"02",t:"Submit Documents & We Process",d:"Bring your documents to our office or share scanned copies via WhatsApp. Our team reviews every document, fills online application forms (DS‑160, online application, ImmiAccount, etc.), drafts cover letters/SOPs, books VFS/embassy appointments, and prepares your application package to embassy standards."},
                {s:"03",t:"Attend Appointment & Get Visa",d:"We guide you through the biometrics/interview appointment — what to expect, what to carry, how to answer questions. Post‑approval, we help with forex, travel insurance, and flight booking. For passport services, we book your PSK appointment and ensure document readiness."}
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

        {/* ═══════ SECTION 12 – 2026 VISA RULE CHANGES ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="2026 Visa Rule Changes – What You Need to Know" subtitle="Major policy shifts in student and work visas worldwide. Stay informed, stay prepared." />
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {[
                {t:"Canada – SDS Scrapped, Study Permit Cap",d:"The Student Direct Stream (SDS) fast‑track was abolished in late 2024. All Indian students now apply via the regular stream with longer processing times (4–12 weeks). A national study‑permit cap is in effect for 2026. Financial proof requirement raised to CAD 22,895 GIC. Provincial Attestation Letter (PAL) now mandatory for most applicants."},
                {t:"Australia – India at Evidence Level 3",d:"From January 2026, India is classified at Evidence Level 3 (higher scrutiny). Students must provide more extensive financial documentation — proof of funds for 12 months living expenses (AU$29,710/year) plus tuition and travel. The Genuine Student (GS) requirement has replaced the earlier GTE. English language requirements are stricter."},
                {t:"USA – F1 Rejection Rate at 41%",d:"The F1 student visa rejection rate reached approximately 41% in FY2024 — historically high. 2026 applicants must disclose 5‑year social media history and provide 6‑month continuous bank statements. Demonstrating intent to return to India after studies is critical for approval."},
                {t:"UK – Visa Costs Rising, Dependant Rights Limited",d:"UK visa fees increased in 2026. Most international students can no longer bring dependants (except for PhD and research‑based Master's programmes). The Graduate Route (post‑study work) remains under review. CAS letter from a licensed sponsor remains mandatory."},
                {t:"Schengen – Appointment Scarcity",d:"VFS appointments for Schengen visas remain extremely scarce during peak season (April–September). Book 4–6 weeks ahead of travel. 2026 requires travel insurance with minimum €30,000 medical coverage. Cover letters have become more critical — generic letters are frequently rejected."},
                {t:"Dubai – New 5‑Year Multiple Entry Visa",d:"Indian travellers can now apply for a 5‑year multiple‑entry Dubai tourist visa, allowing stays up to 90 days per visit. Standard tourist visas also available (14–90 days). Visa‑on‑arrival for Indians holding valid US/UK/Schengen visas. Zero grace period for tourist visa overstay in 2026."}
              ].map((item,i) => (
                <div key={i} className="glass-light rounded-xl p-4 border border-white/10">
                  <h4 className="text-gold-400 font-heading text-sm mb-1">{item.t}</h4>
                  <p className="text-gray-600 text-xs">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 13 – VISA REJECTION HELP ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Visa Rejection? We Can Help" subtitle="Don't lose hope after a rejection — we analyse, rectify, and reapply with stronger documentation" />
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              {[
                {t:"Common Rejection Reasons",d:"Incomplete documentation, insufficient financial proof, weak travel history, unclear travel purpose, mismatched information between forms and documents, lack of ties to home country, previous immigration violations, and poor interview performance."},
                {t:"Our Re‑application Process",d:"1. Analysis: We review your previous application and rejection letter to identify the exact reason. 2. Rectification: We strengthen the weak areas — better financial documentation, revised cover letter, additional supporting documents. 3. Re‑application: We submit a fresh application addressing every concern raised by the embassy. 4. Success: Our re‑application success rate is significantly higher than first‑time averages."},
              ].map((item,i) => (
                <div key={i} className="glass-light rounded-xl p-5 border border-white/10">
                  <h4 className="text-gradient font-heading text-lg mb-2">{item.t}</h4>
                  <p className="text-gray-600 text-xs">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 14 – FAQ ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Visa FAQs – Gwalior" subtitle="Quick answers to the most common visa and passport questions" />
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

        {/* ═══════ SECTION 15 – STATS BANNER ═══════ */}
        <section className="py-12 bg-white/10 border-y border-white/20">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatBox number="25+" label="Years of Visa Expertise" />
            <StatBox number="5,000+" label="Visas Processed" />
            <StatBox number="50+" label="Countries Covered" />
            <StatBox number="3" label="Visa Categories" />
          </div>
        </section>

        {/* ═══════ SECTION 16 – STUDENT TESTIMONIALS ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader title="What Our Visa Applicants Say" subtitle="Real stories from students, tourists, and professionals who trusted Planet&Travel" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {q:"Got my USA F1 visa with Planet&Travel's help. The mock interview was exactly like the real one — they predicted 8 out of 10 questions correctly. My visa was approved at the Mumbai consulate.",n:"Ankit Sharma",c:"Gwalior → USA (F1 Student Visa)"},
                {q:"Applied for Schengen visa for our honeymoon — France, Switzerland, Italy. Planet&Travel handled everything from VFS appointment to cover letter. Got approved in 12 days. Hassle‑free experience.",n:"Priya &amp; Rohan Gupta",c:"Gwalior → Schengen (Tourist Visa)"},
                {q:"Needed an urgent Dubai visa for a business meeting. Planet&Travel processed it in 3 days. Also got forex (Dirhams) and travel insurance from them. One‑stop solution for everything.",n:"Vikram Singh",c:"Gwalior → Dubai (Business Visa)"},
                {q:"My Australia student visa was initially rejected due to insufficient financial proof. Planet&Travel analysed the rejection, helped me restructure my bank statements and GS statement, and re‑applied. Approved on the second attempt.",n:"Neha Patel",c:"Gwalior → Australia (Subclass 500)"},
                {q:"Applied for Canada study permit after the SDS was scrapped. Planet&Travel guided me through the regular stream — PAL, GIC, IELTS, medical exam. Took 8 weeks but got approved. Very professional team.",n:"Rahul Joshi",c:"Gwalior → Canada (Study Permit)"},
                {q:"Got my Tatkal passport renewed through Planet&Travel. They booked the PSK appointment within 2 days, verified all documents, and I received my new passport in 3 days. Smooth process.",n:"Suman Devi",c:"Gwalior (Tatkal Passport)"},
              ].map((r,i) => (
                <div key={i} className="glass-light rounded-xl p-5 border border-white/10">
                  <div className="text-gold-400 mb-2 text-sm">★★★★★</div>
                  <p className="text-gray-700 text-xs italic mb-3">&ldquo;{r.q}&rdquo;</p>
                  <span className="text-gradient-sub text-xs font-semibold">{r.n}</span>
                  <span className="text-gray-500 text-xs block mt-1">{r.c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 17 – COUNTRIES WE COVER ═══════ */}
        <section className="py-16 bg-white/10">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <SectionHeader title="50+ Countries – One Visa Desk" subtitle="From Gwalior to the world — every continent covered" />
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              {["USA","UK","Canada","Australia","New Zealand","Germany","France","Italy","Spain","Netherlands","Switzerland","Austria","Belgium","Sweden","Norway","Denmark","Finland","Ireland","Portugal","Greece","Poland","Czech Republic","Hungary","Romania","Bulgaria","Croatia","Slovenia","Slovakia","Estonia","Latvia","Lithuania","Iceland","Malta","Cyprus","Luxembourg","UAE (Dubai)","Saudi Arabia","Qatar","Kuwait","Oman","Bahrain","Singapore","Malaysia","Thailand","Vietnam","Japan","South Korea","China","Turkey","South Africa","Brazil","Argentina"].map((c,i) => (
                <span key={i} className="bg-navy-950/30 text-gray-700 px-3 py-1.5 rounded-full border border-white/20">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 18 – BOOKING CTA ═══════ */}
        <section className="py-16 bg-white/5 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <SectionHeader title="Ready to Apply for Your Visa?" subtitle="WhatsApp us now — we'll guide you through the complete process" />
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/919926665382?text=Hello%20Planet%26Travel!%20I%20need%20visa%20assistance." target="_blank" className="bg-green-600 text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-green-500 transition-all">
                📲 WhatsApp: +91 99266 65382
              </a>
              <a href="tel:+919926665382" className="border border-gold-400/30 text-gold-400 px-10 py-4 rounded-xl hover:bg-gold-400/10 transition-all text-lg font-bold">
                📞 Call Now
              </a>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 19 – VISA + FLIGHT + FOREX PACKAGE ═══════ */}
        <section className="py-16 bg-white/10 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Complete Travel Package: Visa + Flight + Forex + Insurance" subtitle="Book everything together and save — one agent, one office, one payment" />
            <p className="text-gray-700 max-w-2xl mx-auto text-sm mb-6">
              Why run to three different agents? Planet&Travel bundles your visa application, flight booking, foreign currency exchange, and travel insurance into one seamless package. Walk into Platform 1, Gwalior Railway Station with your passport and travel plan — leave with your visa application submitted, flight confirmed, forex in hand, and insurance active. 25+ years of doing exactly this.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/services/flight-booking" className="bg-gold-400 text-navy-950 font-bold px-8 py-3 rounded-xl hover:shadow-xl transition-all text-sm">
                Book Flights →
              </Link>
              <a href="https://wa.me/919926665382?text=I%20want%20the%20complete%20travel%20package%20-%20visa%20%2B%20flight%20%2B%20forex%20%2B%20insurance" target="_blank" className="bg-green-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-500 transition-all text-sm">
                📲 Get Complete Package
              </a>
            </div>
          </div>
        </section>

        {/* ═══════ SECTION 20 – VISIT US ═══════ */}
        <section className="py-16 bg-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <SectionHeader title="Visit Our Visa Desk" subtitle="Walk into Platform 1, Gwalior Railway Station — we're open every day, 6 AM to 11 PM" />
            <div className="glass rounded-2xl p-8 max-w-lg mx-auto">
              <p className="text-xl text-gold-400 font-heading mb-2">Platform №1, Gwalior Railway Station</p>
              <p className="text-gray-700 mb-3">Opposite NCC Office, Gwalior, Madhya Pradesh — 474002</p>
              <p className="text-gray-700 mb-1"><strong>📞</strong> <a href="tel:+919926665382" className="text-gold-400 font-semibold">+91 99266 65382</a></p>
              <p className="text-gray-700 mb-1"><strong>📲</strong> <a href="https://wa.me/919926665382" target="_blank" className="text-gold-400 font-semibold">WhatsApp Chat</a></p>
              <p className="text-gray-700"><strong>🕐</strong> Open daily: 6 AM – 11 PM</p>
              <p className="text-gray-500 text-xs mt-4">PSK Gwalior is 10 minutes from our office — we can guide you there</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
