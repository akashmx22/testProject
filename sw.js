/* eslint-disable */
// src/sw.js

const CACHE_NAME = 'build-1725637781502';
const urlsToCache = [
    '/index.html'
];

// Install event: cache the application shell
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            // console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
        .catch((error) => {
            // console.error('Failed to cache:', error);
        })
    );
});

// Fetch event: serve cached content if available, else fetch from network
self.addEventListener('fetch', (event) => {
    // console.log('Fetch event for:', event.request.url);

    // Filter requests to cache only specific resources
    if (event.request.url.startsWith(self.location.origin) && urlsToCache.includes(new URL(event.request.url).pathname)) {
        event.respondWith(
            caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }

                // console.log('No response found in cache. About to fetch from network...');

                const fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                    (response) => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            console.log('Network response was not ok.');
                            return response;
                        }

                        // console.log('Network response was ok. Cloning response.');

                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                                // console.log('Response cached:', event.request.url);
                            })
                            .catch((error) => {
                                console.error('Failed to open cache:', error);
                            });

                        return response;
                    }
                ).catch((error) => {
                    // console.error('Failed to fetch:', error);
                    return new Response('Network request failed', {
                        status: 408,
                        statusText: 'Request Timeout'
                    });
                });
            })
            .catch((error) => {
                // console.error('Failed to match cache:', error);
                return new Response('Cache match failed', {
                    status: 500,
                    statusText: 'Internal Server Error'
                });
            })
        );
    }
});

// Activate event: remove old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (cacheWhitelist.indexOf(key) === -1) {
                    return caches.delete(key).catch((error) => {
                        // console.error('Failed to delete cache:', error);
                    });
                }
            }));
        })
        .catch((error) => {
            console.error('Failed to retrieve cache keys:', error);
        })
    );
});