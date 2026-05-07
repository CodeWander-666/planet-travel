'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ReviewForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', rating: 5, message: '', city: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/916261031710?text=${encodeURIComponent(`Hello Planet&Travel! I want to leave a review:\nName: ${form.name}\nEmail: ${form.email}\nCity: ${form.city}\nRating: ${'★'.repeat(form.rating)}${'☆'.repeat(5 - form.rating)}\nMessage: ${form.message}`)}`, '_blank');
    setSubmitted(true);
    setForm({ name: '', email: '', rating: 5, message: '', city: '' });
  };

  if (submitted) return (
    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-center py-8">
      <p className="text-gold-400 text-2xl font-heading">Thank you! 🌟</p>
      <p className="text-cream-100/50 mt-2">Your review has been sent via WhatsApp.</p>
    </motion.div>
  );

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass p-8 rounded-3xl border border-gold-400/20 max-w-xl mx-auto space-y-6 shadow-2xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
          placeholder="Your Name" className="bg-transparent border-b-2 border-gold-400/30 focus:border-gold-400 transition-colors outline-none py-2 text-white text-sm"
          required
        />
        <input
          value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
          placeholder="Your Email" className="bg-transparent border-b-2 border-gold-400/30 focus:border-gold-400 transition-colors outline-none py-2 text-white text-sm"
        />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-cream-100/70 text-sm">Rating:</span>
        {[1,2,3,4,5].map(s => (
          <motion.button
            key={s} type="button"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setForm({ ...form, rating: s })}
            className={`text-3xl ${s <= form.rating ? 'text-gold-400' : 'text-gray-600'} transition-colors`}
          >
            ★
          </motion.button>
        ))}
      </div>
      <input
        value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}
        placeholder="Your City" className="bg-transparent border-b-2 border-gold-400/30 focus:border-gold-400 transition-colors outline-none py-2 text-white text-sm w-full"
      />
      <textarea
        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
        placeholder="Share your experience..." rows={4}
        className="bg-navy-900/50 border border-gold-400/20 rounded-xl px-4 py-3 text-white text-sm w-full outline-none focus:border-gold-400"
        required
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(212,175,55,0.4)' }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-bold py-3 rounded-xl text-lg tracking-wide"
      >
        Submit Review via WhatsApp
      </motion.button>
    </motion.form>
  );
}
