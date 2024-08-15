self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/index.html',
                'https://cdn.jsdelivr.net/npm/@picocss/pico@2.0.6/css/pico.classless.min.css',
                'https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.pumpkin.min.css',
                'https://aidatadoc.org/img/favicon-32x32.png',
                'https://i.aimarkdown.org/ioshtmlviewer.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
