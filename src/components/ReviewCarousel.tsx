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
