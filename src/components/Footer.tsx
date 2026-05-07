import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-gold-400/10 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div><h3 className="font-heading text-2xl text-gold-400 mb-4">Planet<span className="text-cream-50">&</span>Travel</h3><p className="text-cream-100/50 text-sm">Luxury travel since 2000. Platform 1, Gwalior Railway Station.</p></div>
        <div><h4 className="text-gold-400 font-semibold mb-3">Services</h4>{['Confirm Ticket','Luxury Tours','Premium Hotels','Flight Booking','Visa & Forex','Corporate Travel'].map(s=><Link key={s} href="/#services" className="block text-cream-100/50 text-sm hover:text-gold-400 py-1">{s}</Link>)}</div>
        <div><h4 className="text-gold-400 font-semibold mb-3">Destinations</h4>{['Gwalior','Indore','Bhopal','Jabalpur','Ujjain','Khajuraho'].map(d=><Link key={d} href="/#destinations" className="block text-cream-100/50 text-sm hover:text-gold-400 py-1">{d}</Link>)}</div>
        <div><h4 className="text-gold-400 font-semibold mb-3">Contact</h4><p className="text-cream-100/50 text-sm">Platform 1, Gwalior Railway Station</p><p className="text-cream-100/50 text-sm">Opposite NCC Office, Gwalior</p><a href="mailto:concierge@planetandtravel.in" className="text-gold-400 text-sm">concierge@planetandtravel.in</a></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-gold-400/5 text-center text-cream-100/30 text-xs">© {new Date().getFullYear()} Planet&Travel. Est. 2000.</div>
    </footer>
  );
}
