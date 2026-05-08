export default function VideoCard3D({
  webmSrc,
  posterSrc,
  title,
  description,
}: {
  webmSrc: string;
  posterSrc: string;
  title: string;
  description: string;
}) {
  return (
    <div className="glass rounded-2xl overflow-hidden border border-gold-400/10 video-card group relative">
      <video autoPlay muted loop playsInline poster={posterSrc} className="w-full h-full object-cover">
        <source src={webmSrc} type="video/webm" />
      </video>
      <div className="absolute inset-0 video-card-overlay group-hover:bg-navy-950/10 transition-colors flex items-end p-4">
        <div>
          <h4 className="text-white font-heading text-lg mb-1 drop-shadow-lg">{title}</h4>
          <p className="text-white/90 text-xs drop-shadow-md">{description}</p>
        </div>
      </div>
    </div>
  );
}
