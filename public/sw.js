// sw.js
self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/src/main.tsx',  // Adjust this depending on your main entry point file.
                // Add more files you want to cache here
            ]);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse; // Return cached response if available
            }
            return fetch(event.request); // Otherwise, fetch from network
        })
    );
});
