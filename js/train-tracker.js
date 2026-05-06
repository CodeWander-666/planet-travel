let stations = [];
fetch('/planet-travel/datasets/stations.json')
  .then(r => r.json())
  .then(data => stations = data);

function autocomplete(inputId) {
  const inp = document.getElementById(inputId);
  const list = document.createElement('div');
  list.className = 'autocomplete-items';
  inp.parentNode.appendChild(list);
  inp.addEventListener('input', function() {
    const val = this.value.toLowerCase();
    list.innerHTML = '';
    if (!val) return;
    const matches = stations.filter(s => s.name.toLowerCase().includes(val)).slice(0,8);
    matches.forEach(s => {
      const div = document.createElement('div');
      div.className = 'autocomplete-item';
      div.innerHTML = `${s.name} (${s.code})`;
      div.addEventListener('click', () => {
        inp.value = s.code + ' - ' + s.name;
        list.innerHTML = '';
      });
      list.appendChild(div);
    });
  });
}

function searchTrains() {
  const from = document.getElementById('from-station').value.split(' - ')[0];
  const to = document.getElementById('to-station').value.split(' - ')[0];
  if(!from || !to) return alert('Select both stations');
  fetch(`/planet-travel/datasets/trains-between/${from}-${to}.json`)
    .then(r => r.json())
    .then(data => displayTrains(data));
}

function displayTrains(trains) {
  const list = document.getElementById('train-results');
  list.innerHTML = trains.map(t => `
    <div class="glass" style="padding:1rem; margin:1rem 0;">
      <h4>${t.number} - ${t.name}</h4>
      <p>Dep: ${t.departure} | Arr: ${t.arrival} | ${t.duration}</p>
      <button class="btn-gold" onclick="trackTrain('${t.number}')">Track Live</button>
    </div>
  `).join('');
}

function trackTrain(trainNo) {
  window.location.href = `/planet-travel/train-live.html?train=${trainNo}`;
}
