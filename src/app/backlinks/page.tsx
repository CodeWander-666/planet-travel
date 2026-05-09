import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata(
  "Backlinks & Authority — Planet&Travel | SEO Portfolio",
  "Verified backlink profile for Planet&Travel — featured on Medium, Dev.to, SooperArticles, ArticleBiz, Reddit, Scoop.it. Building domain authority for Gwalior's top travel agency.",
  "/backlinks"
);

const backlinks = [
  {
    platform: "Medium",
    title: "PLANET&TRAVEL — CONFIRM TKT",
    description: "In‑depth guide on Tatkal ticket booking, the local agent advantage, and why Planet&Travel has a 94% success rate. Covers Premium Tatkal, luxury MP tours, and car rentals.",
    url: "https://medium.com/@nikhilsingh0000888/planet-travel-confirm-tkt-9ea7a8a1771e",
    da: 95,
    type: "Editorial / Long‑form Guide",
  },
  {
    platform: "Dev.to",
    title: "Step‑by‑Step: How to Book a Luxury Heritage Tour of Madhya Pradesh",
    description: "Technical travel guide covering MP's golden triangle (Gwalior‑Orchha‑Khajuraho), train booking strategy, itinerary design, heritage accommodation, and luxury ground transport.",
    url: "https://dev.to/tbn_official/step-by-step-how-to-book-a-luxury-heritage-tour-of-madhya-pradesh-43ej",
    da: 92,
    type: "Developer Community / Tutorial",
  },
  {
    platform: "SooperArticles",
    title: "Planet&Travel — Business Profile",
    description: "Business listing with full service catalogue, address at Gwalior Railway Station, and contact details for confirmed Tatkal tickets and luxury tours.",
    url: "https://sooperarticles.com/businesses/planettravels",
    da: 70,
    type: "Business Directory / Citation",
  },
  {
    platform: "ArticleBiz",
    title: "How to Choose the Best Travel Agency in Gwalior for Confirmed Railway Tickets",
    description: "Consumer‑awareness article helping travellers identify trustworthy travel agents near Gwalior Railway Station.",
    url: "https://articlebiz.com/checkArticle/statuses/nikhilsingh0000888%40gmail.com",
    da: 65,
    type: "Article Directory",
  },
  {
    platform: "Reddit",
    title: "u/Planet_travels — Official Profile",
    description: "Community profile for Planet&Travel on Reddit. Engaging with travel communities and sharing expertise on Indian Railways, MP tourism, and local travel tips.",
    url: "https://www.reddit.com/user/Planet_travels/",
    da: 91,
    type: "Social / Community",
  },
  {
    platform: "Scoop.it",
    title: "How to Actually Get Confirmed Tatkal Tickets",
    description: "Curated topic page aggregating resources, tips, and guides on Indian Railways Tatkal booking, presented by Planet&Travel.",
    url: "https://www.scoop.it/topic/how-to-actually-get-confirmed-tatkal-tickets",
    da: 88,
    type: "Content Curation",
  },
];

export default function BacklinksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-white/5 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              <span className="text-gradient">Our Authority Network</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Planet&Travel is featured across high‑authority platforms, building
              domain trust and ensuring travellers find us wherever they search.
            </p>
          </div>
        </section>

        {/* Backlink Cards */}
        <section className="py-16 bg-white/10">
          <div className="max-w-5xl mx-auto px-4 grid gap-6">
            {backlinks.map((bl, i) => (
              <a
                key={i}
                href={bl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass rounded-2xl p-6 border border-white/20 hover:border-gold-400/40 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold bg-gold-400 text-navy-950 px-3 py-1 rounded-full">
                      DA {bl.da}
                    </span>
                    <h3 className="text-xl font-heading text-gradient">{bl.platform}</h3>
                  </div>
                  <span className="text-xs text-gray-500 bg-white/10 px-3 py-1 rounded-full">
                    {bl.type}
                  </span>
                </div>
                <h4 className="text-gold-400 font-semibold mb-2">{bl.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{bl.description}</p>
                <div className="mt-3 text-xs text-gold-400 group-hover:underline">
                  Visit article →
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Why Backlinks Matter */}
        <section className="py-16 bg-white/5">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeader title="Why This Matters for SEO" />
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                {
                  title: "Domain Authority",
                  desc: "Backlinks from high‑DA platforms like Medium and Dev.to signal to Google that Planet&Travel is a trusted, authoritative source for travel services in Gwalior.",
                },
                {
                  title: "Keyword Rankings",
                  desc: "Each article targets specific keywords — 'confirmed Tatkal tickets Gwalior', 'luxury MP tours', 'car rental Gwalior' — creating topical clusters that boost local search rankings.",
                },
                {
                  title: "Referral Traffic",
                  desc: "Readers of these articles click through to our website, driving high‑intent traffic from travellers actively researching their next journey.",
                },
              ].map((item, i) => (
                <div key={i} className="glass-light rounded-xl p-6 border border-white/10">
                  <h4 className="text-gradient font-heading text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
