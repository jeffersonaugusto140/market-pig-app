const CACHE_NAME = "market-pig-app-v1";
const BASE_PATH = "/market-pig-app/";

const urlsToCache = [
  BASE_PATH,
  BASE_PATH + "index.html",
  BASE_PATH + "manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});