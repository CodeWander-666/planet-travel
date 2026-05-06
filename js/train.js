let stations = [];

// Fetch the self‑contained station list
fetch('/planet-travel/datasets/stations.json')
  .then(r=>r.json())
  .then(data=>{ stations=data; })
  .catch(console.error);

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
    const matches = stations.filter(s => s.name.toLowerCase().includes(val) || s.code.toLowerCase().includes(val)).slice(0, 8);
    matches.forEach((s, i) => {
      const div = document.createElement('div');
      div.className = 'autocomplete-item';
      div.innerHTML = `${s.name} (${s.code})`;
      div.addEventListener('click', () => {
        input.value = s.code + ' - ' + s.name;
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
    for (let i=0;i<items.length;i++) items[i].classList.remove('selected');
    if (idx>=0) items[idx].classList.add('selected');
  }

  document.addEventListener('click', function(e) {
    if (!wrapper.contains(e.target)) list.innerHTML = '';
  });
}

function searchTrains() {
  const fromInput = document.getElementById('from-station');
  const toInput = document.getElementById('to-station');
  const fromCode = fromInput.value.split(' - ')[0];
  const toCode = toInput.value.split(' - ')[0];
  if (!fromCode || !toCode) { alert('Please select both stations'); return; }
  const url = `/planet-travel/datasets/trains-between/${fromCode}-${toCode}.json`;
  fetch(url)
    .then(r => {
      if (!r.ok) throw new Error('No data');
      return r.json();
    })
    .then(data => displayTrains(data))
    .catch(() => {
      document.getElementById('train-results').innerHTML = `<p style="color:var(--gold-light);padding:1rem;">No pre‑computed train data for this route. Please <a href="/planet-travel/concierge.html">ask our concierge</a> for assistance.</p>`;
    });
}

function displayTrains(trains) {
  const list = document.getElementById('train-results');
  list.innerHTML = trains.map(t => `
    <div class="glass" style="padding:1rem; margin:1rem 0;">
      <h4>${t.number} - ${t.name}</h4>
      <p>Dep: ${t.departure} | Arr: ${t.arrival} | Duration: ${t.duration}</p>
      <button class="btn-gold" onclick="trackTrain('${t.number}')">Track Live</button>
    </div>
  `).join('');
}

function trackTrain(trainNo) {
  window.location.href = `/planet-travel/train-live.html?train=${trainNo}`;
}
