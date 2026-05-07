import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewCarousel from '@/components/ReviewCarousel';
import ReviewForm from '@/components/ReviewForm';
import SectionHeader from '@/components/SectionHeader';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata("Reviews — Real Traveller Experiences | Planet&Travel","Read genuine reviews from 50,000+ happy travellers. Share your experience with Planet&Travel.","/reviews");

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-24 bg-navy-950"><div className="max-w-7xl mx-auto px-4"><SectionHeader title="Traveller Stories" subtitle="50,000+ journeys and counting" /><ReviewCarousel /></div></section>
        <section className="py-20 bg-navy-900/30"><div className="max-w-3xl mx-auto px-4"><SectionHeader title="Share Your Experience" /><ReviewForm /></div></section>
      </main>
      <Footer />
    </>
  );
}
