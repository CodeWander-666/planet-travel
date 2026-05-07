'use client';
import { useState, useEffect, useCallback } from 'react';

interface Station { code: string; name: string; }
interface Train { number: string; name: string; departure: string; arrival: string; duration: string; }

export default function ConfirmTicketClient() {
  const [stations, setStations] = useState<Station[]>([]);
  const [from, setFrom] = useState(''); const [to, setTo] = useState('');
  const [fromCode, setFromCode] = useState(''); const [toCode, setToCode] = useState('');
  const [fromSuggestions, setFromSuggestions] = useState<Station[]>([]);
  const [toSuggestions, setToSuggestions] = useState<Station[]>([]);
  const [trains, setTrains] = useState<Train[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    fetch('/planet-travel/stations.json')
      .then(r => r.json())
      .then(setStations)
      .catch(() => setStations([{ code:'GWL', name:'Gwalior Jn' }, { code:'INDB', name:'Indore Jn Bg' }, { code:'BPL', name:'Bhopal Jn' }]));
  }, []);

  const filterStations = useCallback(
    (q: string) => stations.filter(s => s.name.toLowerCase().includes(q.toLowerCase()) || s.code.toLowerCase().includes(q.toLowerCase())).slice(0, 8),
    [stations]
  );

  const searchTrains = async () => {
    if (!fromCode || !toCode) { alert('Please select both stations'); return; }
    setLoading(true); setSearched(true);
    try {
      const resp = await fetch(`https://corsproxy.io/?${encodeURIComponent(`http://erail.in/rail/getTrains.aspx?Station_From=${fromCode}&Station_To=${toCode}&DataSource=0&Language=0&Cache=true`)}`);
      const text = await resp.text();
      const parsed: Train[] = [];
      text.split('^').slice(1).forEach(e => {
        const f = e.split('~');
        if (f.length >= 13) parsed.push({ number: f[0].trim(), name: f[1].trim(), departure: f[10].trim(), arrival: f[11].trim(), duration: f[12].trim() });
      });
      setTrains(parsed);
    } catch { setTrains([]); } finally { setLoading(false); }
  };

  const whatsappBook = (t: Train) => {
    window.open(`https://wa.me/916261031710?text=${encodeURIComponent(`Hello Planet&Travel! I want to book:\nTrain: ${t.number} - ${t.name}\nFrom: ${fromCode} → To: ${toCode}\nDep: ${t.departure} | Arr: ${t.arrival}\n\nPlease confirm availability.`)}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="glass rounded-2xl p-6 border border-gold-400/10">
        <h3 className="text-xl font-heading text-gold-400 mb-4">Search Trains</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <label className="block text-xs text-cream-100/50 mb-1">From</label>
            <input
              value={from}
              onChange={e => { setFrom(e.target.value); setFromSuggestions(filterStations(e.target.value)); }}
              placeholder="Type station name..."
              className="w-full bg-navy-900/50 border border-gold-400/20 rounded-lg px-4 py-3 text-white text-sm"
            />
            {fromSuggestions.length > 0 && (
              <div className="absolute z-10 w-full bg-navy-900 border border-gold-400/20 rounded-b-lg max-h-40 overflow-y-auto">
                {fromSuggestions.map(s => (
                  <div key={s.code} className="px-4 py-2 text-sm text-cream-100 hover:bg-gold-400/20 cursor-pointer"
                    onClick={() => { setFrom(`${s.code} - ${s.name}`); setFromCode(s.code); setFromSuggestions([]); }}>
                    {s.code} — {s.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <label className="block text-xs text-cream-100/50 mb-1">To</label>
            <input
              value={to}
              onChange={e => { setTo(e.target.value); setToSuggestions(filterStations(e.target.value)); }}
              placeholder="Type station name..."
              className="w-full bg-navy-900/50 border border-gold-400/20 rounded-lg px-4 py-3 text-white text-sm"
            />
            {toSuggestions.length > 0 && (
              <div className="absolute z-10 w-full bg-navy-900 border border-gold-400/20 rounded-b-lg max-h-40 overflow-y-auto">
                {toSuggestions.map(s => (
                  <div key={s.code} className="px-4 py-2 text-sm text-cream-100 hover:bg-gold-400/20 cursor-pointer"
                    onClick={() => { setTo(`${s.code} - ${s.name}`); setToCode(s.code); setToSuggestions([]); }}>
                    {s.code} — {s.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <button onClick={searchTrains} disabled={loading} className="w-full bg-gold-400 text-navy-950 font-bold py-3 rounded-lg hover:bg-gold-300 transition-colors disabled:opacity-50">
          {loading ? 'Searching...' : 'Find Trains'}
        </button>
      </div>

      {searched && (
        <div className="space-y-3">
          {trains.length === 0 && !loading ? (
            <p className="text-cream-100/50 text-center py-4">No trains found. <a href="/concierge" className="text-gold-400">Ask our concierge</a>.</p>
          ) : trains.map(t => (
            <div key={t.number} className="glass rounded-xl p-5 border border-gold-400/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-gold-400 font-heading">{t.number} — {t.name}</h4>
                <p className="text-cream-100/50 text-sm">Dep: {t.departure} | Arr: {t.arrival} | {t.duration}</p>
              </div>
              <button onClick={() => whatsappBook(t)} className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-green-500 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-..."/>
                </svg>
                Book via WhatsApp
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
