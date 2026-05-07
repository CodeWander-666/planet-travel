'use client';
import SectionHeader from './SectionHeader';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicePageSections({ title, description, icon, whatsappMessage }: { title:string; description:string; icon:string; whatsappMessage:string }) {
  const waUrl = `https://wa.me/916261031710?text=${encodeURIComponent(whatsappMessage)}`;
  const features = [
    {n:'Personalised',d:'Tailored to your preferences.'},
    {n:'Expert Team',d:'25+ years of travel mastery.'},
    {n:'24×7 Support',d:'Always available for you.'},
    {n:'Exclusive Deals',d:'Special rates & upgrades.'}
  ];
  const steps = [
    {step:'01',title:'Share Your Needs',desc:'Tell us what you desire.'},
    {step:'02',title:'Receive a Plan',desc:'Get a bespoke itinerary.'},
    {step:'03',title:'Book & Relax',desc:'Confirm and enjoy your journey.'}
  ];
  const testis = [
    {t:"Absolutely stunning service!",n:"Neha K.",c:"Bhopal"},
    {t:"Everything was flawless.",n:"Rohit D.",c:"Indore"},
    {t:"Truly a royal experience.",n:"Priya M.",c:"Delhi"}
  ];

  return (<>
    {/* 1 – Hero */}
    <section className="py-24 bg-navy-950 text-center"><div className="max-w-4xl mx-auto px-4">
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7}}>
        <svg className="w-16 h-16 mx-auto mb-6 stroke-gold-400 fill-none" viewBox="0 0 24 24" strokeWidth="1"><path d={icon}/></svg>
        <h1 className="text-4xl md:text-5xl font-heading text-gradient mb-4">{title}</h1>
        <p className="text-cream-100/60 text-lg max-w-2xl mx-auto mb-8">{description}</p>
        <Link href={waUrl} target="_blank" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-500 transition-colors">Enquire on WhatsApp</Link>
      </motion.div>
    </div></section>

    {/* 2 – Why us */}
    <section className="py-20 bg-navy-900/30"><div className="max-w-7xl mx-auto px-4"><SectionHeader title="Why Choose Our Service?" subtitle="The Planet&Travel difference" /><div className="grid md:grid-cols-4 gap-6">
      {features.map((f,i)=><motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="glass-light rounded-xl p-6 text-center border border-gold-400/10"><h4 className="text-gold-400 font-heading mb-2">{f.n}</h4><p className="text-cream-100/50 text-sm">{f.d}</p></motion.div>)}
    </div></div></section>

    {/* 3 – How it works */}
    <section className="py-20 bg-navy-950"><div className="max-w-4xl mx-auto px-4"><SectionHeader title="How It Works" subtitle="Three simple steps" /><div className="grid md:grid-cols-3 gap-6">
      {steps.map((s,i)=><motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.2}} className="glass-light rounded-xl p-6 text-center border border-gold-400/10"><span className="text-3xl font-heading text-gold-400">{s.step}</span><h3 className="text-gold-400 mt-3 mb-2">{s.title}</h3><p className="text-cream-100/50 text-sm">{s.desc}</p></motion.div>)}
    </div></div></section>

    {/* 4 – Stats */}
    <section className="py-16 bg-navy-900/50 border-y border-gold-400/5"><div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[{n:'25+',l:'Years'},{n:'50K+',l:'Clients'},{n:'100K+',l:'Tickets'},{n:'500+',l:'Tours'}].map((s,i)=><div key={i}><span className="text-4xl font-heading text-gradient block">{s.n}</span><span className="text-cream-100/40 text-sm">{s.l}</span></div>)}
    </div></section>

    {/* 5 – Testimonials */}
    <section className="py-20 bg-navy-950"><div className="max-w-4xl mx-auto px-4"><SectionHeader title="What Our Guests Say" /><div className="grid md:grid-cols-3 gap-6">
      {testis.map((r,i)=><motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.15}} className="glass-light rounded-xl p-5 border border-gold-400/10"><p className="text-cream-100/70 italic text-sm mb-4">“{r.t}”</p><span className="text-gold-400 font-semibold text-sm">{r.n}</span><span className="text-cream-100/40 text-xs ml-2">{r.c}</span></motion.div>)}
    </div></div></section>

    {/* 6 – CTA */}
    <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-950 text-center"><div className="max-w-3xl mx-auto px-4"><SectionHeader title="Ready to Travel?" /><Link href={waUrl} target="_blank" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-500 transition-colors">Start via WhatsApp</Link></div></section>
  </>);
}
