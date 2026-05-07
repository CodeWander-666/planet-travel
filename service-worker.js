self.addEventListener('install',e=>{e.waitUntil(caches.open('planet-v5').then(c=>c.addAll(['/','/css/luxury.css','/js/core.js'])))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
