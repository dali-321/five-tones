// Five Tones — PWA Service Worker
// Caches static assets for offline use and fast repeat visits
const CACHE = 'five-tones-v1';
const PRELOAD = [
  '/',
  '/quiz',
  '/result',
  '/manifest.json',
  '/favicon.ico',
];

// Cache static assets on install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRELOAD))
  );
  self.skipWaiting();
});

// Clean old caches on activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first for pages, cache-first for static assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isPage = PRELOAD.some((p) => url.pathname === p || url.pathname.endsWith('.html'));
  const isStatic = /\.(js|css|png|jpg|jpeg|gif|ico|svg|woff2|json)$/.test(url.pathname);

  if (isPage) {
    // Pages: network first, fallback to cache
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
  } else if (isStatic) {
    // Static assets: cache first, fallback to network
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const fetched = fetch(event.request).then((res) => {
          const clone = res.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, clone));
          return res;
        });
        return cached || fetched;
      })
    );
  }
});
