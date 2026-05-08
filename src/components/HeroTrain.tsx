'use client';
import { motion } from 'framer-motion';

export default function HeroTrain() {
  return (
    <div className="train-svg-container" style={{ opacity: 0.25 }}>
      <motion.svg
        viewBox="0 0 1600 300"
        className="train-svg"
        initial={{ x: -300 }}
        animate={{ x: [0, -200, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="trainWhite" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e0e0e0" />
          </linearGradient>
          <linearGradient id="trainDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#888888" />
            <stop offset="100%" stopColor="#333333" />
          </linearGradient>
        </defs>

        {/* Smoke from chimney */}
        <motion.circle
          cx="110" cy="70" r="20" fill="#ffffff" opacity="0.7"
          animate={{ y: [0, -50, -120], opacity: [0.7, 0.3, 0], scale: [1, 1.5, 2] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.2 }}
        />
        <motion.circle
          cx="90" cy="80" r="16" fill="#ffffff" opacity="0.6"
          animate={{ y: [0, -60, -130], opacity: [0.6, 0.2, 0], scale: [1, 1.3, 1.8] }}
          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.6 }}
        />
        <motion.circle
          cx="130" cy="60" r="14" fill="#ffffff" opacity="0.5"
          animate={{ y: [0, -45, -110], opacity: [0.5, 0.1, 0], scale: [1, 1.4, 2] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1 }}
        />

        {/* Track (golden railways) */}
        <line x1="0" y1="270" x2="1600" y2="270" stroke="#D4AF37" strokeWidth="3" fill="none" />
        <line x1="0" y1="278" x2="1600" y2="278" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.6" />

        {/* 3D Engine (white gradient) */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
        >
          {/* Main body */}
          <rect x="40" y="160" width="180" height="80" rx="10" fill="url(#trainWhite)" filter="url(#drop-shadow)" />
          {/* Cab roof */}
          <rect x="50" y="145" width="160" height="25" rx="6" fill="url(#trainWhite)" />
          {/* Chimney */}
          <rect x="120" y="115" width="30" height="40" rx="4" fill="url(#trainDark)" />
          <rect x="125" y="110" width="20" height="15" rx="3" fill="url(#trainWhite)" />
          {/* Wheels */}
          <circle cx="90" cy="245" r="24" fill="#444" stroke="#888" strokeWidth="3" />
          <circle cx="90" cy="245" r="12" fill="#666" />
          <circle cx="170" cy="245" r="24" fill="#444" stroke="#888" strokeWidth="3" />
          <circle cx="170" cy="245" r="12" fill="#666" />
          {/* Headlight */}
          <circle cx="40" cy="190" r="10" fill="#ffff88" />
          <circle cx="40" cy="190" r="6" fill="#ffffff" />
        </motion.g>

        {/* Coaches (white) */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
        >
          {/* Coach 1 */}
          <rect x="240" y="165" width="160" height="70" rx="8" fill="url(#trainWhite)" />
          <rect x="250" y="155" width="30" height="15" rx="3" fill="url(#trainWhite)" />
          <circle cx="280" cy="245" r="20" fill="#444" stroke="#888" strokeWidth="3" />
          <circle cx="360" cy="245" r="20" fill="#444" stroke="#888" strokeWidth="3" />
          {/* Windows */}
          <rect x="270" y="175" width="20" height="30" rx="3" fill="#a0d0ff" />
          <rect x="310" y="175" width="20" height="30" rx="3" fill="#a0d0ff" />
          <rect x="350" y="175" width="20" height="30" rx="3" fill="#a0d0ff" />
        </motion.g>

        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.3 }}
        >
          {/* Coach 2 */}
          <rect x="420" y="165" width="160" height="70" rx="8" fill="url(#trainWhite)" />
          <rect x="430" y="155" width="30" height="15" rx="3" fill="url(#trainWhite)" />
          <circle cx="460" cy="245" r="20" fill="#444" stroke="#888" strokeWidth="3" />
          <circle cx="540" cy="245" r="20" fill="#444" stroke="#888" strokeWidth="3" />
          <rect x="450" y="175" width="20" height="30" rx="3" fill="#a0d0ff" />
          <rect x="490" y="175" width="20" height="30" rx="3" fill="#a0d0ff" />
          <rect x="530" y="175" width="20" height="30" rx="3" fill="#a0d0ff" />
        </motion.g>
      </motion.svg>
    </div>
  );
}
