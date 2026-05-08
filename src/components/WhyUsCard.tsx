export default function WhyUsCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="glass-light rounded-xl p-6 text-center border border-white/10 hover:border-gold-400/30 transition-all">
      <h4 className="text-gradient font-heading text-lg mb-2">{title}</h4>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}
