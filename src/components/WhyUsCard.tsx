'use client';
import { motion } from 'framer-motion';

const icons: Record<string, string> = {
  concierge: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  tracking: 'M13 10V3L4 14h7v7l9-11h-7z',
  reviews: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  support: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
};

export default function WhyUsCard({ id, title, description, delay = 0 }: { id: string; title: string; description: string; delay?: number }) {
  const path = icons[id] || icons.concierge;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: 5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, rotateY: 3 }}
      className="glass-light rounded-2xl p-6 border border-gold-400/10 relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-gold-400/10 transition-shadow"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 text-center">
        <svg className="w-10 h-10 text-gold-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={path}/></svg>
        <h4 className="text-gold-400 font-heading text-lg mb-2">{title}</h4>
        <p className="text-cream-100/50 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
