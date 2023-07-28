'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "7c1037d4dcd29a4d5f23d199956df0b7",
"/": "7c1037d4dcd29a4d5f23d199956df0b7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "a8f5ad7a685e6a59a7efac41d0104ee4",
"version.json": "9bbf268badba9c173423c7b367e7d31b",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"manifest.json": "ca7ff5bc370a12ac344d6ef86fcc62d9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "7feafff6f162c4e02eee4eb984f13101",
"assets/AssetManifest.bin": "53ac43204fb91e6d8ac134572fccd9ee",
"assets/AssetManifest.json": "ee42450e797b79e63418384f73946d86",
"assets/NOTICES": "ba11e8cd9d29cbe0b6ad1ff4489533a9",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/packages/record_web/assets/js/record.worklet.js": "1d8b8d5ad26ba8b24ebf4e8286053bb2",
"assets/assets/ca/lets-encrypt-r3.pem": "be77e5992c00fcd753d1b9c11d3768f2",
"assets/assets/ais-3uson-logo.png": "536d2725415bf3b968f12cf8ab10ba56",
"assets/assets/ais-3uson-logo-128.png": "1e2a76c35a3429f04e52733e49f974fe",
"assets/images/document-home.png": "f782b24c316cdab51b167f84527d7f45",
"assets/images/first-aid-kit.png": "3a6d6f983d819a9c5dd2d02eefed49b6",
"assets/images/newspaper.png": "fe375324e8907a8f120e6d4bbb9c1f23",
"assets/images/verdict.png": "6fa4834ab5d73882cb931808ca5100f8",
"assets/images/total.png": "1f86620d8607c12b17e2dd6077de8aa3",
"assets/images/vaccine.png": "774bf28aad1bfe78557ec01826247fa9",
"assets/images/cook.png": "588da7a4f99c81c8f7d6053790378c58",
"assets/images/email.png": "eda34d51d530f2653a89114276149b00",
"assets/images/barber.png": "89f640b7ec0facd6802200d0931d5379",
"assets/images/diapers.png": "5c1b6b92f11eb80e4db409956e5492be",
"assets/images/clothes.png": "73017aaaeb37a60a895b28b82317c28d",
"assets/images/wheelchair.png": "17581905106273af60fa2155900c9fc6",
"assets/images/home-repair.png": "2de99e45cd420a486a2a3c5ec8220c37",
"assets/images/read.png": "f456ce5a460194c37ad92f27b46d6009",
"assets/images/checklist.png": "8eb9eeb75f24d1c003a8405eba95bf59",
"assets/images/sauna.png": "e4f6e4920f9b830a987909da32023c58",
"assets/images/bill.png": "597c744d06abbc9ce9908d098b625ad0",
"assets/images/interview.png": "e3f618abab5cee87b44e671dee00b2f2",
"assets/images/help.png": "6e7db66da14df315006eaa0f14b73031",
"assets/images/document.png": "1c2c298b010ec2d818014288e742bef8",
"assets/images/drug.png": "dcdd1b51af9785bbcbf04f5f03232e71",
"assets/images/baggage.png": "a0d2bbbc444126ee2ce8c9b21b53fdc4",
"assets/images/furnace.png": "d1bab8478bd9699a594c522e5bb678bc",
"assets/images/conversation.png": "bc8e94990536962409089671d7a90326",
"assets/images/laundry-service.png": "d7dbf43222cde8cde8c6c93e39511167",
"assets/images/change-clothes.png": "e41913aaca26604d53ec93af1927472a",
"assets/images/grocery-cart.png": "ac09cec08635a0659d792a52c03193cb",
"assets/images/LICENSE.txt": "8553542b8f87fbb323116170f8c090de",
"assets/images/bath.png": "230f3330a07ac8b95096771d735ea774",
"assets/images/vacation.png": "183b47626ed20a710df43b547236adb1",
"assets/images/law.png": "50f79ab4d6a8125d60acfe35c2389541",
"assets/images/laundry.png": "f9c3629f3b6bc9d90407faf3ba475858",
"assets/images/self-service.png": "1ef174f0543b913087202336bcbac355",
"assets/images/not-found.png": "6bad49227d1aea798e104b474c746d5f",
"assets/images/elderly.png": "225ffcdf0b0c328e2ef8b2e4526867ad",
"assets/images/buy-grocceries.png": "0834b40a0d652fb348176cd6776b43a4",
"assets/images/firewood.png": "a84178e04e8599d28409ea9708edc805",
"assets/images/scientist.png": "5955aefae55f01a74f2155c02f43cbcb",
"assets/images/camp.png": "443b4b03ce2de7a28d678977ba640e4a",
"assets/images/wrench.png": "8e8b18181bb9fa480d4bc96057b2df0d",
"assets/images/detection.png": "b24355d03ea991a9934ef2bb36914824",
"assets/images/smartphone.png": "d03b32f7bb868ba9f5e455a4b7d507a3",
"assets/images/bed.png": "f3fa9ca4dd33ec5ec30d6b1895620b8d",
"assets/images/couple-counseling.png": "a75fa5918e96f14b5ec565a1f1ddaab2",
"assets/images/cleaning.png": "5192b62a2abb5cc82525ba5e6d6bcab3",
"assets/images/elderly_chair.png": "dd0b2747f0b6692e5afa620eeeeb4358",
"assets/images/sleeping.png": "92a2ccbf67a8039472c0d9b56e49320a",
"assets/images/teaching.png": "c4f81c4cd7d954f5074ffdaa19389a88",
"assets/images/hand.png": "5e760456958e4e220f7a2c1f305f3299",
"assets/images/female-doctor.png": "c6686123d252e3c8875a351f81c7fe4e",
"assets/images/healthcare.png": "18a0640a8e6fcd116d12e15243a094f8",
"assets/images/phone-operator.png": "6b82c3f9f4bcb602e52a16876d3c3287",
"assets/images/delivery-man.png": "c5f2179a26142680b53062379afab81e",
"assets/images/feed.png": "dd9dc9d83423bc037b511d73b29e6b80",
"assets/images/babysitter.png": "f41c0702fd2f036b2cfe5ab2878fc4d8",
"assets/images/elderly-things.png": "bf38328ba0ae28b194c2bcc6167e66f0",
"assets/images/therapy.png": "075d595d4b697714e24101e60e4128a2",
"assets/images/garbage.png": "ab9c1e4ea4f0148533ee680245e7dff2",
"assets/images/emergency-call.png": "17d5e73e2578c4a1217ecd08ca9e58e5",
"assets/images/casket.png": "e15fa4ea52f634140925310aeef91c2e",
"assets/images/consultant.png": "8f3b0e779afa662e92e7f278740bb145",
"assets/images/_license.pdf": "714c6719db990ba57ec0e49076ca4e0b",
"assets/images/household.png": "b0aa7d5778f8162f46d8bca888609f62",
"assets/images/healthy-lifestyle.png": "d94714b85f6dc1af0f34834315e9618e",
"assets/images/medical-checkup.png": "da90fb6582b5fc9873556c30a6deffa2",
"assets/images/consultation.png": "825113ea3704c8a3d349ed758c9256ac",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
