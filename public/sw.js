
// A working service worker
self.addEventListener('install', event => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activated');
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Simple pass-through fetch handler
  event.respondWith(fetch(event.request));
});
