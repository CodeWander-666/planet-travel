let stations = [];

fetch('/planet-travel/datasets/stations.json')
  .then(r => r.json())
  .then(data => { stations = data; console.log('✅ ' + stations.length + ' stations loaded'); })
  .catch(e => console.error('Station load error:', e));

function autocomplete(inputId) {
  const input = document.getElementById(inputId);
  const wrapper = input.closest('.autocomplete-wrapper');
  let list = wrapper.querySelector('.autocomplete-items');
  if (!list) { list = document.createElement('div'); list.className = 'autocomplete-items'; wrapper.appendChild(list); }
  let idx = -1;
  input.addEventListener('input', function() {
    const v = this.value.toLowerCase(); list.innerHTML = ''; idx = -1;
    if (!v) return;
    const matches = stations.filter(s => s.name.toLowerCase().includes(v) || s.code.toLowerCase().includes(v)).slice(0, 8);
    matches.forEach((s, i) => {
      const d = document.createElement('div'); d.className = 'autocomplete-item';
      d.innerHTML = `<strong>${s.code}</strong> — ${s.name}${s.city ? ', ' + s.city : ''}`;
      d.addEventListener('click', () => { input.value = s.code + ' - ' + s.name; list.innerHTML = ''; });
      list.appendChild(d);
    });
  });
  // keyboard navigation (omitted for brevity, same as before)
  input.addEventListener('keydown', function(e) { /* keep existing keyboard handler */ });
  document.addEventListener('click', e => { if (!wrapper.contains(e.target)) list.innerHTML = ''; });
}

function searchTrains() {
  const fromCode = document.getElementById('from-station').value.split(' - ')[0].trim();
  const toCode = document.getElementById('to-station').value.split(' - ')[0].trim();
  if (!fromCode || !toCode) { alert('Please select both stations'); return; }
  const res = document.getElementById('train-results');
  res.innerHTML = '<p style="color:var(--gold-light);">🔍 Searching trains...</p>';

  // PRIMARY: call indian-rail-api.cyclic.app (unlimited, no key)
  fetch(`https://indian-railway-api.cyclic.app/trains/betweenStations/?from=${fromCode}&to=${toCode}`)
    .then(r => {
      if (!r.ok) throw new Error('API error');
      return r.json();
    })
    .then(data => {
      if (data.success && data.data && data.data.length > 0) {
        displayTrains(data.data);
      } else {
        // Fallback to pre‑computed JSON (cached by GitHub Action)
        fetch(`/planet-travel/datasets/trains-between/${fromCode}-${toCode}.json`)
          .then(r2 => r2.ok ? r2.json() : [])
          .then(trains => {
            if (trains.length > 0) displayTrains(trains);
            else res.innerHTML = '<p style="color:var(--gold-light);">No trains found. <a href="/planet-travel/concierge.html">Ask our concierge</a>.</p>';
          });
      }
    })
    .catch(() => {
      // API down? Try the static cache
      fetch(`/planet-travel/datasets/trains-between/${fromCode}-${toCode}.json`)
        .then(r => r.ok ? r.json() : [])
        .then(trains => {
          if (trains.length > 0) displayTrains(trains);
          else res.innerHTML = '<p style="color:var(--gold-light);">Service unavailable. Please use our <a href="/planet-travel/concierge.html">concierge</a>.</p>';
        });
    });
}

function displayTrains(trains) {
  const list = document.getElementById('train-results');
  list.innerHTML = trains.map(t => `
    <div class="glass" style="padding:1rem; margin:1rem 0;">
      <h4>${t.train_number || t.train_no} — ${t.train_name}</h4>
      <p>🚂 Dep: ${t.from_time || t.departure} | 🏁 Arr: ${t.to_time || t.arrival} | ⏱️ ${t.travel_time || t.duration}</p>
      <button class="btn-gold" onclick="trackTrain('${t.train_number || t.train_no}')">📍 Track Live</button>
    </div>
  `).join('');
}

function trackTrain(n) { window.location.href = '/planet-travel/train-live.html?train=' + n; }
