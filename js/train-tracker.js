document.addEventListener('DOMContentLoaded', () => {
  const mapEl = document.getElementById('train-map');
  if (!mapEl) return;
  const map = L.map('train-map').setView([23.5, 78.5], 6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  function updateTrains() {
    fetch('/planet-travel/train-status/live-trains.json')
      .then(r => r.json())
      .then(data => {
        map.eachLayer(layer => {
          if (layer instanceof L.Marker) map.removeLayer(layer);
        });
        data.trains.forEach(train => {
          if (train.lat && train.lon) {
            const icon = L.divIcon({
              className: 'gold-train-icon',
              html: '🚂',
              iconSize: [30, 30]
            });
            L.marker([train.lat, train.lon], {icon}).addTo(map)
              .bindPopup(`<b>${train.name}</b><br>${train.status}`);
          }
        });
      });
  }
  updateTrains();
  setInterval(updateTrains, 30000);
});
