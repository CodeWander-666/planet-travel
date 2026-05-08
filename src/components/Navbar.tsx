'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Car Rental', href: '/services/car-booking' },
    { name: 'Train', href: '/train' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/concierge' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 header-bg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <img src="/assets/logo/logo.png" alt="Planet &amp; Travel" className="h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.name} href={l.href} className="text-navy-900/80 hover:text-gold-400 transition-colors text-sm font-semibold">
              {l.name}
            </Link>
          ))}
        </div>

        <Link href="/concierge" className="hidden md:inline-block nav-btn-dark">Book Now</Link>
        <button onClick={() => setOpen(!open)} className="md:hidden text-navy-900 text-2xl">&equiv;</button>
      </div>

      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl px-4 py-4 flex flex-col gap-2">
          {links.map(l => (
            <Link key={l.name} href={l.href} onClick={() => setOpen(false)} className="text-navy-900 hover:text-gold-400 text-sm py-1 font-medium">
              {l.name}
            </Link>
          ))}
          <Link href="/concierge" className="nav-btn-dark text-center mt-2">Book Now</Link>
        </div>
      )}
    </nav>
  );
}
