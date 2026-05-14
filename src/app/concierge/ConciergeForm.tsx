'use client';
export default function ConciergeForm() {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const name = (f.querySelector('#name') as HTMLInputElement).value;
    const phone = (f.querySelector('#phone') as HTMLInputElement).value;
    const service = (f.querySelector('#service') as HTMLSelectElement).value;
    const details = (f.querySelector('#details') as HTMLTextAreaElement).value;
    const msg = `Hello Planet&Travel!%0A%0A Name: ${encodeURIComponent(name)}%0A Phone: ${encodeURIComponent(phone)}%0A Service: ${encodeURIComponent(service)}%0A Details: ${encodeURIComponent(details)}`;
    window.open(`https://wa.me/919926665382?text=${msg}`, '_blank');
  };
  return (
    <form onSubmit={submit} className="glass rounded-2xl p-8 max-w-xl mx-auto space-y-5 border border-white/20">
      <input id="name" placeholder="Your Name" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-gray-800 text-sm" required />
      <input id="phone" type="tel" placeholder="Your Phone Number" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-gray-800 text-sm" required />
      <select id="service" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-gray-800 text-sm" required>
        <option value="">Select Service</option>
        <option>Confirm Train Ticket</option>
        <option>Luxury MP Tour</option>
        <option>Car Rental</option>
        <option>Flight Booking</option>
        <option>Hotel Booking</option>
        <option>Visa & Forex</option>
        <option>Corporate Travel</option>
        <option>Other</option>
      </select>
      <textarea id="details" placeholder="Tell us your travel needs..." rows={4} className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-gray-800 text-sm" />
      <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-500 transition-all text-sm">
        📲 Send via WhatsApp
      </button>
    </form>
  );
}
