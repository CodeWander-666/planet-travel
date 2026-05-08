'use client';
import { motion } from 'framer-motion';
import { cities } from '@/lib/services';

export default function DestinationCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cities.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.03, rotateY: 2 }}
          className="glass rounded-2xl overflow-hidden border border-gold-400/10 hover:border-gold-400/30 transition-all duration-500 group cursor-pointer"
        >
          <div className="h-40 relative overflow-hidden">
            <img
              src={c.img}
              alt={c.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors" />
            <h3 className="absolute bottom-3 left-3 text-2xl font-heading text-white drop-shadow-lg">
              {c.name}
            </h3>
          </div>
          <div className="p-5">
            <p className="text-xs text-gold-400/70 mb-1">{c.fort}</p>
            <p className="text-cream-100/50 text-sm mb-2">{c.desc}</p>
            <p className="text-xs text-cream-100/40">{c.hotel}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
