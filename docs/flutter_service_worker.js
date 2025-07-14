'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4437d58abb2812f39ee536f1818b1134",
"version.json": "22e6a3ddc14e724e8b14f17e0df85494",
"index.html": "6cc8321e1cf47aa9d2860f4762780f31",
"/": "6cc8321e1cf47aa9d2860f4762780f31",
"main.dart.js": "c4fb90becdb1f499a74df24ab2f7cf19",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "16c7b91dabd10f50eb2a67428a35f223",
"assets/AssetManifest.json": "2b90d40915eec8361e43252792887014",
"assets/NOTICES": "210175f504dd1b58697f99518db430a4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "36bb65a18ce0bd668d0ca625bb82afb8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "41e8302cbaf04408585d948a435f4421",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "978ba53689106e35857790f800664fd6",
"assets/fonts/MaterialIcons-Regular.otf": "b8019e3eea9c344bc386b78b41408e59",
"assets/assets/images/vsc.png": "25ca6f3660a2199bf556e24dcd84f973",
"assets/assets/images/jkluu.png": "7d731792453d89e56f27a2ebe65698a0",
"assets/assets/images/git.png": "5b2255699fcb506b570720cdbc8ade1b",
"assets/assets/images/docker.png": "83c53b1f96c677f060f996590d1868ec",
"assets/assets/images/auth.png": "bd7249fca355f997cf5626858c0d4c65",
"assets/assets/images/hero.jpg": "4840c5384bfc2d35ba01d008098989f3",
"assets/assets/images/jklupng.png": "d1f02a84ba5695d9cf5c16aca3486b23",
"assets/assets/images/school.png": "15c5d9ddc9774641c9382c855e0694b1",
"assets/assets/images/aunwesha.png": "d553aa9a05906715a0ebf82f0326bceb",
"assets/assets/images/packt.png": "a1387aa210061821da473182f27a8082",
"assets/assets/images/flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/images/cpp.png": "b8a1078d92d851db2364d5e405a0649d",
"assets/assets/images/uiuxibm.png": "6296236a5f44efe43b82bfdfb2f4394d",
"assets/assets/images/dynamicore.jpeg": "f4d4012ecb0ff42deec08bc07ca3aec2",
"assets/assets/images/flutter_bw.png": "41344698f9951cac8b374845a4f68a39",
"assets/assets/images/solidity.png": "7a4d3d839c0da2e21ca538c5ffad3cfe",
"assets/assets/images/sql.png": "7fc44899ef1fb92eef62253ebe90d51f",
"assets/assets/images/firebase.png": "04aec5a53cd16f26a855e61aa5cd35b5",
"assets/assets/images/calc.png": "7cf180a4be2290c5ff96b1a2daa930d3",
"assets/assets/images/restapi.png": "6c2d5c67d18bb88b6e1697f74ea95c66",
"assets/assets/images/figma.png": "497f287338586c39043b6a206cf24338",
"assets/assets/images/jklu.jpg": "5fbeca93f492ba265b0577a26fd670b1",
"assets/assets/images/postgresql.png": "f2597d57f7135af09b083f1ace07084e",
"assets/assets/images/fylez-proj.png": "dce405e1a60506e225d42c482c3d62a9",
"assets/assets/images/postman.png": "c001e04cdad12261d4b04357721e1f8d",
"assets/assets/images/blockchainspecialisation.png": "1543629c6f1ada724b479318564dc6d5",
"assets/assets/images/fapi.png": "14511107be5da4369a818066c5d30f42",
"assets/assets/images/habits.png": "a08a0179f6be164cfcdf52ae09791805",
"assets/assets/images/flutteranddartibm.png": "0a6c78e11f6696dbec42d40cb5524e6b",
"assets/assets/images/androidstudio.png": "9dd721ab1d133e792eb65f42a5602a87",
"assets/assets/images/ryder.png": "9da5601a7777f73007dd4994316c71f4",
"assets/assets/images/dart.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/images/kotlin.png": "a7388fc60a26cfbeda5adf05dd318cc2",
"assets/assets/images/nodejs.png": "e84e544b9ac1cc3cc93678fa3f3cc86e",
"assets/assets/resume.pdf": "d97dbbbd6bb404b8f624facde143b3fe",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
