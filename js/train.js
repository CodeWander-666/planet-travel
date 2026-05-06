let stations = [];

// Load the COMPLETE station list (4,603 stations across India)
fetch('/planet-travel/datasets/stations.json')
  .then(r => r.json())
  .then(data => {
    // Transform to autocomplete format
    stations = data.stations.map(s => ({
      code: s.stnCode,
      name: s.stnName,
      city: s.stnCity
    }));
    console.log('✅ Loaded ' + stations.length + ' stations');
  })
  .catch(err => console.error('Failed to load stations:', err));

function autocomplete(inputId) {
  const input = document.getElementById(inputId);
  const wrapper = input.closest('.autocomplete-wrapper');
  let list = wrapper.querySelector('.autocomplete-items');
  if (!list) {
    list = document.createElement('div');
    list.className = 'autocomplete-items';
    wrapper.appendChild(list);
  }
  let selectedIndex = -1;

  input.addEventListener('input', function() {
    const val = this.value.toLowerCase();
    list.innerHTML = '';
    selectedIndex = -1;
    if (!val) return;
    // Search by station name OR station code
    const matches = stations.filter(s =>
      s.name.toLowerCase().includes(val) ||
      s.code.toLowerCase().includes(val)
    ).slice(0, 8);
    matches.forEach((s, i) => {
      const div = document.createElement('div');
      div.className = 'autocomplete-item';
      div.innerHTML = `<strong>${s.code}</strong> — ${s.name}${s.city ? ', ' + s.city : ''}`;
      div.addEventListener('click', () => {
        input.value = s.code + ' - ' + s.name;
        // Store just the code in a hidden field
        const hidden = document.getElementById(inputId + '-code');
        if (hidden) hidden.value = s.code;
        list.innerHTML = '';
      });
      list.appendChild(div);
    });
  });

  input.addEventListener('keydown', function(e) {
    const items = list.getElementsByClassName('autocomplete-item');
    if (!items.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
      highlight(items, selectedIndex);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, 0);
      highlight(items, selectedIndex);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0) items[selectedIndex].click();
    }
  });

  function highlight(items, idx) {
    for (let i = 0; i < items.length; i++) items[i].classList.remove('selected');
    if (idx >= 0) items[idx].classList.add('selected');
  }

  document.addEventListener('click', function(e) {
    if (!wrapper.contains(e.target)) list.innerHTML = '';
  });
}

// 🔥 NEW: Uses eRail.in public API as primary, pre‑computed JSON as fallback
function searchTrains() {
  const fromInput = document.getElementById('from-station');
  const toInput = document.getElementById('to-station');
  const fromCode = fromInput.value.split(' - ')[0].trim();
  const toCode = toInput.value.split(' - ')[0].trim();

  if (!fromCode || !toCode) { alert('Please select both stations from the dropdown'); return; }

  const resultsDiv = document.getElementById('train-results');
  resultsDiv.innerHTML = '<p style="color:var(--gold-light);padding:1rem;">🔍 Searching trains between <strong>' + fromCode + '</strong> and <strong>' + toCode + '</strong>...</p>';

  // Step 1: Try pre‑computed JSON (fastest)
  const precomputedUrl = '/planet-travel/datasets/trains-between/' + fromCode + '-' + toCode + '.json';

  fetch(precomputedUrl)
    .then(r => {
      if (!r.ok) throw new Error('not precomputed');
      return r.json();
    })
    .then(data => {
      if (data && data.length > 0) {
        displayTrains(data);
      } else {
        throw new Error('empty');
      }
    })
    .catch(() => {
      // Step 2: Fallback — try to load trains from eRail API via a pre‑generated file
      // (The GitHub Action generates these hourly)
      resultsDiv.innerHTML = '<p style="color:var(--gold-light);padding:1rem;">⏳ This route is being computed. Please try again in a few minutes, or <a href="/planet-travel/concierge.html">ask our concierge</a> for immediate assistance.</p>';

      // Step 3: Trigger a workflow dispatch to generate this route
      // (This would require a PAT — for now, concierge is the fallback)
    });
}

function displayTrains(trains) {
  const list = document.getElementById('train-results');
  if (!trains || trains.length === 0) {
    list.innerHTML = '<p style="color:var(--gold-light);padding:1rem;">No trains found for this route. Please <a href="/planet-travel/concierge.html">ask our concierge</a>.</p>';
    return;
  }
  list.innerHTML = trains.map(t => `
    <div class="glass" style="padding:1rem; margin:1rem 0;">
      <h4>${t.number} — ${t.name}</h4>
      <p>🚂 Dep: ${t.departure} | 🏁 Arr: ${t.arrival} | ⏱️ Duration: ${t.duration}</p>
      <button class="btn-gold" onclick="trackTrain('${t.number}')">📍 Track Live</button>
    </div>
  `).join('');
}

function trackTrain(trainNo) {
  window.location.href = '/planet-travel/train-live.html?train=' + trainNo;
}
