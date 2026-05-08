#!/usr/bin/env bash
###############################################################################
# Planet&Travel – FINAL PRODUCTION BUILD (pull → fix → build → push)
###############################################################################
set -euo pipefail
cd "$(dirname "$0")" || exit 1

echo "⬇️  Pulling latest remote changes..."
git pull --rebase origin main 2>/dev/null || { git stash; git pull --rebase origin main; git stash pop 2>/dev/null || true; }

# ── 1. Update globals.css – dopamine gradient, dark overlay, NO pink tint ──
cat > src/app/globals.css <<'CSSEOF'
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,500&family=Inter:wght@300;400;500;600;700&display=swap');
@import "tailwindcss";

:root {
  --overlay-dark: rgba(0,0,0,0.55);
  --gold-400: #D4AF37;
  --navy-950: #0a1628;
}

* { scroll-behavior: smooth; }
body {
  font-family: 'Inter', sans-serif;
  color: #1a1a2e;
  background: linear-gradient(135deg, #FFD700 0%, #FF6B35 20%, #FF006E 40%, #00F5FF 60%, #32CD32 80%, #FFD700 100%);
  background-size: 400% 400%;
  animation: dopamineRotate 8s ease infinite;
}
@keyframes dopamineRotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

h1,h2,h3,h4 { font-family: 'Playfair Display', serif; }

.glass { background: rgba(255,255,255,0.12); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.25); border-radius: 16px; }
.glass-light { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.15); border-radius: 16px; }

.text-gradient {
  background: linear-gradient(135deg, #B8860B 0%, #8B0000 50%, #B8860B 100%);
  background-size: 300% 300%;
  animation: gradientShift 6s ease infinite;
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  font-weight: 900;
}
@keyframes gradientShift { 0% {background-position:0% 50%} 50% {background-position:100% 50%} 100% {background-position:0% 50%} }

.hero-background { position: relative; overflow: hidden; }
.hero-background video, .hero-background img { position: absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; z-index:0; }
.hero-overlay { position: absolute; inset:0; background: var(--overlay-dark); z-index:1; }
.hero-content { position: relative; z-index:2; display:flex; align-items:center; justify-content:center; min-height:100vh; text-align:center; padding:6rem 1rem 2rem; }
.hero-fallback-bg { background: linear-gradient(135deg, #FFD700 0%, #FF006E 50%, #00F5FF 100%); background-size:400% 400%; animation: heroGradient 8s ease infinite; }
@keyframes heroGradient { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }

.header-bg { background: rgba(255,255,255,0.85); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(0,0,0,0.08); }

.nav-btn-dark {
  position: relative; padding: 0.6rem 1.6rem;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: #f0e6d3; font-weight: 700; border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 4px 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3), 0 0 12px rgba(0,200,255,0.3);
  transition: all 0.3s ease;
}
.nav-btn-dark:hover { box-shadow: 0 8px 16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.4), 0 0 20px rgba(0,200,255,0.6); transform: translateY(-2px); }

.card-3d { perspective: 1000px; transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.4,0,0.2,1); }
.card-3d:hover { transform: rotateY(10deg) rotateX(-5deg) scale(1.02); }

.service-card { position: relative; border-radius: 20px; overflow: hidden; }
.service-card::before {
  content: ''; position: absolute; top:-2px; left:-2px; right:-2px; bottom:-2px;
  background: linear-gradient(45deg, #FFD700, #FF006E, #00F5FF, #FFD700);
  background-size: 400% 400%; animation: borderGlow 3s linear infinite;
  border-radius: 20px; z-index: -1; opacity: 0; transition: opacity 0.4s;
}
.service-card:hover::before { opacity: 1; }
@keyframes borderGlow { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }

.video-card { aspect-ratio: 16/9; overflow: hidden; border-radius: 1rem; perspective: 800px; transition: transform 0.4s ease; }
.video-card:hover { transform: rotateY(5deg) rotateX(-3deg) scale(1.02); }
.video-card video, .video-card img { width:100%; height:100%; object-fit:cover; }

.review-carousel { animation: marquee 40s linear infinite; }
.review-carousel:hover { animation-play-state: paused; }
@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

.text-gradient-sub {
  font-weight: 600;
  background: linear-gradient(135deg, #B8860B 0%, #8B0000 50%, #B8860B 100%);
  background-size: 300% 300%; animation: gradientShift 6s ease infinite;
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
CSSEOF

# ── 2. WhyUsCard – make `id` optional ─────────────────────────────────
cat > src/components/WhyUsCard.tsx <<'WHYUS'
export default function WhyUsCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="glass-light rounded-xl p-6 text-center border border-white/10 hover:border-gold-400/30 transition-all">
      <h4 className="text-gradient font-heading text-lg mb-2">{title}</h4>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}
WHYUS

# ── 3. Navbar – logo only, NO text ───────────────────────────────────
cat > src/components/Navbar.tsx <<'NAV'
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
NAV

# ── 4. ServicePageSections – pure divs, NO motion ────────────────────
cat > src/components/ServicePageSections.tsx <<'SP'
import SectionHeader from './SectionHeader';
import Link from 'next/link';

export default function ServicePageSections({ title, description, icon, whatsappMessage }: {
  title: string; description: string; icon: string; whatsappMessage: string;
}) {
  const wa = `https://wa.me/916261031710?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <>
      <section className="py-20 bg-white/5 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <svg className="w-16 h-16 mx-auto mb-6 stroke-gold-400 fill-none" viewBox="0 0 24 24" strokeWidth="1"><path d={icon}/></svg>
          <h1 className="text-4xl font-heading text-gradient mb-4">{title}</h1>
          <p className="text-gray-700 mb-8">{description}</p>
          <Link href={wa} target="_blank" className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold">Enquire on WhatsApp</Link>
        </div>
      </section>
      <section className="py-16 bg-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Why Choose Us?" />
          <div className="grid md:grid-cols-4 gap-6">
            {[{n:'Personalised',d:'Tailored to you.'},{n:'Expert',d:'25+ years.'},{n:'24x7',d:'Always available.'},{n:'Exclusive',d:'Best rates.'}].map((f,i)=>(
              <div key={i} className="glass-light rounded-xl p-4 text-center">
                <h4 className="text-gradient font-heading mb-1">{f.n}</h4>
                <p className="text-gray-600 text-sm">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader title="How It Works" />
          <div className="grid md:grid-cols-3 gap-6">
            {[{s:'01',t:'Share',d:'Tell us your needs.'},{s:'02',t:'Plan',d:'Get a custom plan.'},{s:'03',t:'Book',d:'Confirm & travel.'}].map((st,i)=>(
              <div key={i} className="glass-light rounded-xl p-6 text-center">
                <span className="text-3xl font-heading text-gradient">{st.s}</span>
                <h3 className="text-gold-400 mt-2 mb-1">{st.t}</h3>
                <p className="text-gray-600 text-sm">{st.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-white/10 border-y border-white/20">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{n:'25+',l:'Years'},{n:'50K+',l:'Clients'},{n:'100K+',l:'Tickets'},{n:'500+',l:'Tours'}].map((s,i)=>(
            <div key={i}><span className="text-3xl font-heading text-gradient">{s.n}</span><span className="text-gray-500 text-sm">{s.l}</span></div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader title="What Travellers Say" />
          <div className="grid md:grid-cols-3 gap-4">
            {[{q:"Flawless service!",n:"Ananya S.",c:"Mumbai"},{q:"Truly luxurious.",n:"Vikram R.",c:"Gwalior"},{q:"Highly recommended.",n:"Rakesh M.",c:"Delhi"}].map((r,i)=>(
              <div key={i} className="glass-light rounded-xl p-4">
                <p className="text-gray-600 italic text-sm mb-2">&ldquo;{r.q}&rdquo;</p>
                <span className="text-gradient-sub text-sm">{r.n}</span>
                <span className="text-gray-500 text-xs ml-2">{r.c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 text-center bg-white/10">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeader title="Ready to Begin?" />
          <Link href={wa} target="_blank" className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg">Start via WhatsApp</Link>
        </div>
      </section>
    </>
  );
}
SP

# ── 5. Footer – clean ──────────────────────────────────────────────────
cat > src/components/Footer.tsx <<'FOOT'
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-navy-900/80 backdrop-blur-lg border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-2xl text-gold-400 mb-3">Planet<span className="text-white">&amp;</span>Travel</h3>
          <p className="text-white/70 text-sm">Luxury travel since 2000. Platform 1, Gwalior Railway Station.</p>
        </div>
        <div>
          <h4 className="text-gold-400 font-semibold mb-2">Quick Links</h4>
          {['/','/services','/services/car-booking','/train','/reviews','/concierge'].map(h => {
            const label = h === '/' ? 'Home' : h.replace('/','').replace(/-/g,' ').replace(/\b\w/g, l => l.toUpperCase());
            return <Link key={h} href={h} className="block text-white/60 text-sm hover:text-gold-400 py-1">{label}</Link>;
          })}
        </div>
        <div>
          <h4 className="text-gold-400 font-semibold mb-2">Contact</h4>
          <p className="text-white/60 text-sm">Platform 1, Gwalior Railway Station</p>
          <p className="text-white/60 text-sm">Opposite NCC Office, Gwalior, MP</p>
          <a href="mailto:concierge@planetandtravel.in" className="text-gold-400 text-sm">concierge@planetandtravel.in</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t border-white/10 text-center text-white/40 text-xs">
        &copy; {new Date().getFullYear()} Planet&amp;Travel. Est. 2000.
      </div>
    </footer>
  );
}
FOOT

# ── 6. ReviewCarousel – clean, no unclosed spans ────────────────────
cat > src/components/ReviewCarousel.tsx <<'REVCAR'
const reviews = [
  { name:"Priya S.", rating:5, message:"Planet&Travel arranged our entire MP heritage tour flawlessly.", city:"Mumbai" },
  { name:"Rajesh G.", rating:5, message:"Got confirmed Tatkal tickets within 2 hours!", city:"Indore" },
  { name:"Ananya P.", rating:5, message:"The luxury Kanha safari exceeded all expectations.", city:"Ahmedabad" },
  { name:"Vikram S.", rating:4, message:"Excellent hotel booking at Taj Usha Kiran.", city:"Gwalior" },
  { name:"Sarah K.", rating:5, message:"Planned entire MP trip.", city:"Delhi" },
  { name:"Amit J.", rating:5, message:"Corporate retreat for 40 executives.", city:"Pune" },
];
function Star() { return <svg className="w-4 h-4 text-gold-400 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>; }
export default function ReviewCarousel() {
  return (
    <div className="overflow-hidden">
      <div className="review-carousel flex gap-6">
        {[...reviews,...reviews].map((r,i)=>(
          <div key={i} className="flex-shrink-0 w-80 glass-light rounded-xl p-6 border border-white/10">
            <div className="flex gap-1 mb-2 text-gold-400">{Array.from({length:r.rating},(_,j)=><Star key={j}/>)}</div>
            <p className="text-gray-700 text-sm italic mb-3">&ldquo;{r.message}&rdquo;</p>
            <span className="text-gradient-sub text-sm">{r.name}</span>
            <span className="text-gray-500 text-xs ml-2">{r.city}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
REVCAR

# ── 7. ReviewForm – clean ────────────────────────────────────────────
cat > src/components/ReviewForm.tsx <<'FRM'
'use client';
import { useState } from 'react';
export default function ReviewForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:'', rating:5, message:'' });
  const submit = (e: React.FormEvent) => { e.preventDefault();
    window.open(`https://wa.me/916261031710?text=${encodeURIComponent(`Review: ${'★'.repeat(form.rating)} — ${form.message} — ${form.name}`)}`, '_blank');
    setSubmitted(true); setForm({ name:'', rating:5, message:'' });
  };
  if (submitted) return <div className="text-center py-8"><p className="text-gradient text-xl">Thank you!</p></div>;
  return (
    <form onSubmit={submit} className="glass-light rounded-2xl p-6 max-w-xl mx-auto space-y-4">
      <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your Name" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-gray-800 text-sm" required />
      <div className="flex items-center gap-3">
        <span className="text-gray-700 text-sm">Rating:</span>
        {[1,2,3,4,5].map(s=>(
          <button key={s} type="button" onClick={()=>setForm({...form,rating:s})} className={`text-2xl ${s<=form.rating?'text-gold-400':'text-gray-400'}`}>&star;</button>
        ))}
      </div>
      <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Your experience..." className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-gray-800 text-sm h-28" required />
      <button type="submit" className="w-full bg-gold-400 text-navy-950 font-bold py-3 rounded-lg hover:shadow-xl transition-all">Submit via WhatsApp</button>
    </form>
  );
}
FRM

# ── 8. Remove train component if exists ──────────────────────────────
rm -f src/components/HeroTrain.tsx

# ── 9. Build ─────────────────────────────────────────────────────────
echo "🏗️  Building..."
npm run build

# ── 10. Commit & push ────────────────────────────────────────────────
git add -A
git commit -m "🚀 Final production build – logo only header, dopamine bg, no JSX errors" || echo "Nothing to commit"
git push origin main

echo ""
echo "✅ Site built successfully!"
echo "   • Header: logo only (no text)"
echo "   • Background: dopamine gradient (yellow→orange→pink→blue→lime)"
echo "   • All JSX errors fixed"
echo "   • Vercel deploy incoming"