'use client';
import { motion } from 'framer-motion';

interface VideoCard3DProps {
  webmSrc: string;
  posterSrc: string;
  title: string;
  description: string;
  delay?: number;
}

export default function VideoCard3D({ webmSrc, posterSrc, title, description, delay = 0 }: VideoCard3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-2xl overflow-hidden border border-gold-400/10 video-card group relative"
    >
      <video autoPlay muted loop playsInline poster={posterSrc} className="w-full h-full object-cover">
        <source src={webmSrc} type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-navy-950/60 group-hover:bg-navy-950/30 transition-colors flex items-end p-4">
        <div>
          <h4 className="text-white font-heading text-lg mb-1">{title}</h4>
          <p className="text-white/80 text-xs">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
