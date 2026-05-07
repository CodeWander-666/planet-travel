'use client';
import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-5xl font-heading text-gradient mb-4">{title}</h2>
      {subtitle && <p className="text-cream-100/60 text-lg max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6" />
    </motion.div>
  );
}
