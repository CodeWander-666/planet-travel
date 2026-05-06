self.addEventListener('install', e => {
  e.waitUntil(caches.open('planet-v1').then(cache => cache.addAll([
    '/planet-travel/','/planet-travel/css/luxury.css','/planet-travel/js/core.js'
  ])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
