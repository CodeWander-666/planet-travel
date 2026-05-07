import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generatePageMetadata } from '@/lib/seo';
import ConciergeForm from './ConciergeForm';

export const metadata = generatePageMetadata("Contact Your Travel Architect | Planet&Travel","Reach Planet&Travel's luxury concierge at Platform 1, Gwalior Railway Station.","/concierge");

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-24 bg-navy-950">
          <div className="max-w-xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-heading text-gradient mb-6">Your Personal Travel Architect</h1>
            <p className="text-cream-100/60 mb-8">Tell us your dream journey. We will make it happen.</p>
            <ConciergeForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
