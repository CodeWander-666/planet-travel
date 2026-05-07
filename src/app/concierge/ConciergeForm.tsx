'use client';
export default function ConciergeForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const name = (f.querySelector('#name') as HTMLInputElement).value;
    const email = (f.querySelector('#email') as HTMLInputElement).value;
    const details = (f.querySelector('#details') as HTMLTextAreaElement).value;
    const msg = `Hello Planet&Travel! I need assistance.%0A%0A Name: ${encodeURIComponent(name)}%0A Email: ${encodeURIComponent(email)}%0A Details: ${encodeURIComponent(details)}`;
    window.open(`https://wa.me/916261031710?text=${msg}`, '_blank');
  };
  return (
    <div className="glass rounded-2xl p-6 border border-gold-400/10 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input id="name" placeholder="Your Name" className="w-full bg-navy-900/50 border border-gold-400/20 rounded-lg px-4 py-3 text-white text-sm" required />
        <input id="email" type="email" placeholder="Your Email" className="w-full bg-navy-900/50 border border-gold-400/20 rounded-lg px-4 py-3 text-white text-sm" required />
        <textarea id="details" placeholder="Tell us your dream journey..." rows={4} className="w-full bg-navy-900/50 border border-gold-400/20 rounded-lg px-4 py-3 text-white text-sm" />
        <button type="submit" className="w-full bg-gold-400 text-navy-950 font-bold py-3 rounded-lg hover:shadow-xl hover:shadow-gold-400/20 transition-all">Send via WhatsApp</button>
      </form>
    </div>
  );
}
