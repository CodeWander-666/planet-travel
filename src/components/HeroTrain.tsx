'use client';
import { motion } from 'framer-motion';

export default function HeroTrain() {
  return (
    <div className="train-container">
      <motion.svg
        viewBox="0 0 1600 260"
        className="train-svg"
        initial={{ x: -400 }}
        animate={{ x: [0, -300, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        {/* Smoke from chimney */}
        <motion.circle
          cx="110" cy="65" r="10" fill="#FFFFFF" opacity="0.2"
          animate={{ y: [0, -35, -70], opacity: [0.3, 0.1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
        />
        <motion.circle
          cx="90" cy="70" r="14" fill="#FFFFFF" opacity="0.2"
          animate={{ y: [0, -50, -100], opacity: [0.3, 0.1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.8 }}
        />
        {/* Track */}
        <line x1="0" y1="220" x2="1600" y2="220" stroke="#333" strokeWidth="3" fill="none" />
        <line x1="0" y1="226" x2="1600" y2="226" stroke="#333" strokeWidth="1" fill="none" opacity="0.5" />
        {/* Engine (black) */}
        <rect x="40" y="135" width="160" height="70" rx="8" fill="#111" opacity="0.9" />
        <rect x="50" y="115" width="50" height="20" rx="6" fill="#111" />
        {/* Chimney */}
        <rect x="80" y="95" width="20" height="30" rx="3" fill="#111" />
        <circle cx="80" cy="210" r="18" fill="none" stroke="#111" strokeWidth="5" />
        <circle cx="150" cy="210" r="18" fill="none" stroke="#111" strokeWidth="5" />
        {/* Cabin */}
        <rect x="180" y="125" width="70" height="55" rx="4" fill="#111" opacity="0.9" />
        <line x1="195" y1="135" x2="195" y2="165" stroke="#D4AF37" strokeWidth="2" opacity="0.5" />
        <line x1="220" y1="135" x2="220" y2="165" stroke="#D4AF37" strokeWidth="2" opacity="0.5" />
        {/* Coaches (dark) */}
        <rect x="270" y="145" width="130" height="55" rx="4" fill="#111" opacity="0.7" />
        <circle cx="290" cy="210" r="14" fill="none" stroke="#111" strokeWidth="3" />
        <circle cx="370" cy="210" r="14" fill="none" stroke="#111" strokeWidth="3" />
        <rect x="420" y="140" width="130" height="60" rx="4" fill="#111" opacity="0.6" />
        <circle cx="440" cy="210" r="14" fill="none" stroke="#111" strokeWidth="3" />
        <circle cx="520" cy="210" r="14" fill="none" stroke="#111" strokeWidth="3" />
        <rect x="570" y="145" width="130" height="55" rx="4" fill="#111" opacity="0.5" />
        <circle cx="590" cy="210" r="14" fill="none" stroke="#111" strokeWidth="3" />
        <circle cx="670" cy="210" r="14" fill="none" stroke="#111" strokeWidth="3" />
      </motion.svg>
    </div>
  );
}
