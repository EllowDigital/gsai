
// Service Worker for GSAI website
self.addEventListener('install', event => {
  console.log('[Service Worker] Installed');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activated');
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        // Return a fallback response for offline access
        if (event.request.destination === 'document') {
          return new Response('You are currently offline. Please reconnect to the internet.', {
            headers: { 'Content-Type': 'text/html' }
          });
        }
        return new Response();
      })
  );
});
