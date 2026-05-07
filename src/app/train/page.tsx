import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMetadata("Live Train Tracker — Golden Rail Conductor | Planet&Travel","Track any Indian train in real‑time. Search trains between stations, get live status, and book confirmed tickets.","/train");

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-24 bg-navy-950">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading text-gradient mb-6">Golden Rail Conductor</h1>
            <p className="text-cream-100/60 max-w-2xl mx-auto mb-10">Real‑time Indian Railways tracking. Accurate, beautiful, and free.</p>
            <div className="glass rounded-2xl p-6 inline-block">
              <Link href="/services/confirm-ticket" className="bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-lg">Search & Book Trains</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
