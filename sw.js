const CACHE_NAME = 'hive-planner-oof-map-background-v2';
const ASSETS = [
  './',
  './index.html',
  './map-background-aligned.jpg',
  './manifest.webmanifest',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
  './cat-bees-transparent.png',
  './oof-splash-1.webp',
  './oof-splash-2.webp',
  './oof-splash-3.webp',
  './oof-splash-4.webp',
  './oof-splash-5.webp',
  './oof-splash-organized.webp',
  './oof-splash-chaos.webp',
  './oof-splash-eye.webp'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
