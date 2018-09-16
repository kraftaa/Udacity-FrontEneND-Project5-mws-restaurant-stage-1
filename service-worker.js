let cacheName = 'v-1';

let cacheFiles = [
  './',
  './css/styles.css',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
  './js/main.js',
  './js/restaurant_info.js',
  './js/dbhelper.js',
  'index.html',
  'restaurant.html',
];

// to set up service worker using this instruction
// https://bitsofco.de/setting-up-a-basic-service-worker/
self.addEventListener('install', event =>  {
  // event.waitUntil Delays the event until the Promise is resolved
  event.waitUntil(
  // Open the cache
    caches.open(cacheName).then(cache => {
      console.log('[ServiceWorker] Caching cacheFiles');
       // console.log(cacheFiles);
      // Add all the default files to the cache
        return cache.addAll(cacheFiles);
      }).catch(error => {
        console.log(error);
      })
    ); // end event.waitUntil
});


self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activated');
  event.waitUntil(
    // Get all the cache keys (cacheName)
    caches.keys()
      .then(cacheNames => {
        return Promise.all(cacheNames.map(thisCacheName => {
        // If a cached item is saved under a previous cacheName
          if (thisCacheName !== cacheName) {
          // Delete that cached file
            console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
            return caches.delete(thisCacheName);
          }
      }));
    })
  ); // end event.waitUntil
});

self.addEventListener('fetch', event => {
    // event.respondWidth Responds to the fetch event
    event.respondWith(
        caches.match(event.request)
          .then(response => {
            // Return the cached version or if the request is not in the cache, fetch and cache
            return response || fetch(event.request);
        })
    );
});
