'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"index.html": "68c03f5ffb7c992800878206ad59248e",
"/": "68c03f5ffb7c992800878206ad59248e",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "ca7ff5bc370a12ac344d6ef86fcc62d9",
"version.json": "e718b4c7a973f4ee0b89d0ea6590fa7e",
"assets/images/grocery-cart.png": "ac09cec08635a0659d792a52c03193cb",
"assets/images/clothes.png": "73017aaaeb37a60a895b28b82317c28d",
"assets/images/couple-counseling.png": "a75fa5918e96f14b5ec565a1f1ddaab2",
"assets/images/healthcare.png": "18a0640a8e6fcd116d12e15243a094f8",
"assets/images/teaching.png": "c4f81c4cd7d954f5074ffdaa19389a88",
"assets/images/first-aid-kit.png": "3a6d6f983d819a9c5dd2d02eefed49b6",
"assets/images/newspaper.png": "fe375324e8907a8f120e6d4bbb9c1f23",
"assets/images/consultant.png": "8f3b0e779afa662e92e7f278740bb145",
"assets/images/read.png": "f456ce5a460194c37ad92f27b46d6009",
"assets/images/hand.png": "5e760456958e4e220f7a2c1f305f3299",
"assets/images/therapy.png": "075d595d4b697714e24101e60e4128a2",
"assets/images/medical-checkup.png": "da90fb6582b5fc9873556c30a6deffa2",
"assets/images/furnace.png": "d1bab8478bd9699a594c522e5bb678bc",
"assets/images/home-repair.png": "2de99e45cd420a486a2a3c5ec8220c37",
"assets/images/emergency-call.png": "17d5e73e2578c4a1217ecd08ca9e58e5",
"assets/images/elderly.png": "225ffcdf0b0c328e2ef8b2e4526867ad",
"assets/images/document.png": "1c2c298b010ec2d818014288e742bef8",
"assets/images/laundry-service.png": "d7dbf43222cde8cde8c6c93e39511167",
"assets/images/firewood.png": "a84178e04e8599d28409ea9708edc805",
"assets/images/babysitter.png": "f41c0702fd2f036b2cfe5ab2878fc4d8",
"assets/images/casket.png": "e15fa4ea52f634140925310aeef91c2e",
"assets/images/delivery-man.png": "c5f2179a26142680b53062379afab81e",
"assets/images/scientist.png": "5955aefae55f01a74f2155c02f43cbcb",
"assets/images/wheelchair.png": "17581905106273af60fa2155900c9fc6",
"assets/images/sauna.png": "e4f6e4920f9b830a987909da32023c58",
"assets/images/buy-grocceries.png": "0834b40a0d652fb348176cd6776b43a4",
"assets/images/change-clothes.png": "e41913aaca26604d53ec93af1927472a",
"assets/images/document-home.png": "f782b24c316cdab51b167f84527d7f45",
"assets/images/female-doctor.png": "c6686123d252e3c8875a351f81c7fe4e",
"assets/images/drug.png": "dcdd1b51af9785bbcbf04f5f03232e71",
"assets/images/cook.png": "588da7a4f99c81c8f7d6053790378c58",
"assets/images/verdict.png": "6fa4834ab5d73882cb931808ca5100f8",
"assets/images/law.png": "50f79ab4d6a8125d60acfe35c2389541",
"assets/images/vacation.png": "183b47626ed20a710df43b547236adb1",
"assets/images/baggage.png": "a0d2bbbc444126ee2ce8c9b21b53fdc4",
"assets/images/household.png": "b0aa7d5778f8162f46d8bca888609f62",
"assets/images/LICENSE.txt": "8553542b8f87fbb323116170f8c090de",
"assets/images/checklist.png": "8eb9eeb75f24d1c003a8405eba95bf59",
"assets/images/phone-operator.png": "6b82c3f9f4bcb602e52a16876d3c3287",
"assets/images/consultation.png": "825113ea3704c8a3d349ed758c9256ac",
"assets/images/bath.png": "230f3330a07ac8b95096771d735ea774",
"assets/images/interview.png": "e3f618abab5cee87b44e671dee00b2f2",
"assets/images/laundry.png": "f9c3629f3b6bc9d90407faf3ba475858",
"assets/images/diapers.png": "5c1b6b92f11eb80e4db409956e5492be",
"assets/images/help.png": "6e7db66da14df315006eaa0f14b73031",
"assets/images/healthy-lifestyle.png": "d94714b85f6dc1af0f34834315e9618e",
"assets/images/garbage.png": "ab9c1e4ea4f0148533ee680245e7dff2",
"assets/images/smartphone.png": "d03b32f7bb868ba9f5e455a4b7d507a3",
"assets/images/detection.png": "b24355d03ea991a9934ef2bb36914824",
"assets/images/cleaning.png": "5192b62a2abb5cc82525ba5e6d6bcab3",
"assets/images/email.png": "eda34d51d530f2653a89114276149b00",
"assets/images/camp.png": "443b4b03ce2de7a28d678977ba640e4a",
"assets/images/barber.png": "89f640b7ec0facd6802200d0931d5379",
"assets/images/vaccine.png": "774bf28aad1bfe78557ec01826247fa9",
"assets/images/feed.png": "dd9dc9d83423bc037b511d73b29e6b80",
"assets/images/_license.pdf": "714c6719db990ba57ec0e49076ca4e0b",
"assets/images/bed.png": "f3fa9ca4dd33ec5ec30d6b1895620b8d",
"assets/images/wrench.png": "8e8b18181bb9fa480d4bc96057b2df0d",
"assets/images/bill.png": "597c744d06abbc9ce9908d098b625ad0",
"assets/images/elderly-things.png": "bf38328ba0ae28b194c2bcc6167e66f0",
"assets/images/elderly_chair.png": "dd0b2747f0b6692e5afa620eeeeb4358",
"assets/images/self-service.png": "1ef174f0543b913087202336bcbac355",
"assets/images/total.png": "1f86620d8607c12b17e2dd6077de8aa3",
"assets/images/sleeping.png": "92a2ccbf67a8039472c0d9b56e49320a",
"assets/images/conversation.png": "bc8e94990536962409089671d7a90326",
"assets/images/not-found.png": "6bad49227d1aea798e104b474c746d5f",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "0198435514633abef8f5f4ad576b712f",
"assets/assets/ais-3uson-logo-128.png": "1e2a76c35a3429f04e52733e49f974fe",
"assets/assets/ais-3uson-logo.png": "536d2725415bf3b968f12cf8ab10ba56",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/record_linux/assets/fmedia/fmedia.conf": "705fa5e517bd80d8e232966f4480a204",
"assets/packages/record_linux/assets/fmedia/fmedia": "9812435dc9896b4c66d723a0f0e8739f",
"assets/packages/record_linux/assets/fmedia/mod/dynanorm.so": "837fe34ce8c825db3b482e46962d54e2",
"assets/packages/record_linux/assets/fmedia/mod/aac.so": "efc8aaee76c09c01da5a000c14661c94",
"assets/packages/record_linux/assets/fmedia/mod/fmt.so": "5ebaa79ea80ae35ac53d1bb55546d282",
"assets/packages/record_linux/assets/fmedia/mod/libwavpack-ff.so": "7359614c1db34dd9965e323c3f5983b3",
"assets/packages/record_linux/assets/fmedia/mod/libDynamicAudioNormalizer-ff.so": "2190a6bf5f46c5160681f3ca5850665a",
"assets/packages/record_linux/assets/fmedia/mod/libFLAC-ff.so": "e56cdfb0dc3c6a1f21fe98b09164670f",
"assets/packages/record_linux/assets/fmedia/mod/libMAC-ff.so": "8872fdb969ee9a7779969ba2abf9ebdd",
"assets/packages/record_linux/assets/fmedia/mod/libmp3lame-ff.so": "409b013e8c0f432d7042148efa37608c",
"assets/packages/record_linux/assets/fmedia/mod/libALAC-ff.so": "417a285bba20fd9f370fe941e658bcc4",
"assets/packages/record_linux/assets/fmedia/mod/libopus-ff.so": "53bff8254cce7fcd70b207bc0bd54e8b",
"assets/packages/record_linux/assets/fmedia/mod/libmpg123-ff.so": "6f5cbd3ad93d14e0274703dcf02c0252",
"assets/packages/record_linux/assets/fmedia/mod/mpc.so": "d1f5b3a3bb49ed7e8931ae8359cd3364",
"assets/packages/record_linux/assets/fmedia/mod/core.so": "12474fdf4e7f8de1311194c70066afd3",
"assets/packages/record_linux/assets/fmedia/mod/libsoxr-ff.so": "cb1355076864f1546e92caed50cb58a8",
"assets/packages/record_linux/assets/fmedia/mod/alac.so": "d5bb2df5e8306829c30b09c30addb1a1",
"assets/packages/record_linux/assets/fmedia/mod/vorbis.so": "4dfd779966d6d68c2535db7dff54795d",
"assets/packages/record_linux/assets/fmedia/mod/tui.so": "03d5f544d62fa9ea78960aeb5da53d04",
"assets/packages/record_linux/assets/fmedia/mod/wavpack.so": "bc8d5dc2668eeb2b0e82f25ddbc32849",
"assets/packages/record_linux/assets/fmedia/mod/libogg-ff.so": "d3d713881bf3743426f9f903244a643c",
"assets/packages/record_linux/assets/fmedia/mod/libmpc-ff.so": "74a443e10982a9df03e8b0f2b2513752",
"assets/packages/record_linux/assets/fmedia/mod/libvorbis-ff.so": "cba9b0bd9da9131913b1a34e0fbd1ca8",
"assets/packages/record_linux/assets/fmedia/mod/flac.so": "9e75f0a38f4e5fc61eb4b31d541eca1c",
"assets/packages/record_linux/assets/fmedia/mod/afilter.so": "f091279b933e5827e51898b99a74bcf0",
"assets/packages/record_linux/assets/fmedia/mod/ape.so": "de30364c01cb9e1e8003cae284620f83",
"assets/packages/record_linux/assets/fmedia/mod/opus.so": "0cd64917cb64f9d7ee1a70d1f32bc7b1",
"assets/packages/record_linux/assets/fmedia/mod/libfdk-aac-ff.so": "750400da6841f9129f31e7d9c21292f6",
"assets/packages/record_linux/assets/fmedia/mod/libvorbisenc-ff.so": "f269f6c794bec6fc8742ae685da7cb79",
"assets/packages/record_linux/assets/fmedia/mod/plist.so": "ef0f13697afc4fee55586a8b6209b8ca",
"assets/packages/record_linux/assets/fmedia/mod/mpeg.so": "8fbb497a70e4e8f4cadf2715c5cdd516",
"assets/packages/record_linux/assets/fmedia/mod/net.so": "d250ad6f7ce69fb0c86438c0a995bcb1",
"assets/packages/record_linux/assets/fmedia/mod/soxr.so": "b5e1025d3b52dfec1358cce299cafccb",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/record_windows/assets/fmedia/fmedia.exe": "372fd8b9181821bea60c213df3733f28",
"assets/packages/record_windows/assets/fmedia/fmedia.conf": "2778179ad014443ad062631f63aa64d3",
"assets/packages/record_windows/assets/fmedia/mod/libvorbis-ff.dll": "bca4ba9389bf4ecf17edc5b4054efc03",
"assets/packages/record_windows/assets/fmedia/mod/libsoxr-ff.dll": "7b684353fd4e0c32d219b064a24056f3",
"assets/packages/record_windows/assets/fmedia/mod/dynanorm.dll": "f55c66ac1be741213f04a1ec443b14ee",
"assets/packages/record_windows/assets/fmedia/mod/libALAC-ff.dll": "247ac15cecfd98b7cb3f60925065b190",
"assets/packages/record_windows/assets/fmedia/mod/ape.dll": "f6dd31ba3f8129ff82c6dbc6a8843099",
"assets/packages/record_windows/assets/fmedia/mod/direct-sound.dll": "8c3fe5a44c7737a9b53f175c601cb0e1",
"assets/packages/record_windows/assets/fmedia/mod/libopus-ff.dll": "9c86baf6a0b97b15a0819bf5088cde5d",
"assets/packages/record_windows/assets/fmedia/mod/libmp3lame-ff.dll": "94fc6548daa41605945c02077f4a2bb1",
"assets/packages/record_windows/assets/fmedia/mod/mpc.dll": "72e3f4db930b8ccdb889afa70b517506",
"assets/packages/record_windows/assets/fmedia/mod/libMAC-ff.dll": "37d50336ae42fd8e17a95244aa096af1",
"assets/packages/record_windows/assets/fmedia/mod/mpeg.dll": "a65970819a42a68b053f6084f5706dbd",
"assets/packages/record_windows/assets/fmedia/mod/wasapi.dll": "80c1c757d13591774b544512c5125801",
"assets/packages/record_windows/assets/fmedia/mod/libmpc-ff.dll": "e21c0a35e22be1104c958547b14a4613",
"assets/packages/record_windows/assets/fmedia/mod/afilter.dll": "2e86908e65843c167664d17a6547de4b",
"assets/packages/record_windows/assets/fmedia/mod/tui.dll": "2523b862435a52363e79cc1857091df0",
"assets/packages/record_windows/assets/fmedia/mod/libDynamicAudioNormalizer-ff.dll": "e8e0079333c37154da65b3f45590f918",
"assets/packages/record_windows/assets/fmedia/mod/flac.dll": "8ee227b13448fdbc0dba050f6301c0d0",
"assets/packages/record_windows/assets/fmedia/mod/core.dll": "9dac392af9c816be6f6f86a492315115",
"assets/packages/record_windows/assets/fmedia/mod/libfdk-aac-ff.dll": "32545a83392e7c50f03899f77b7d3ad9",
"assets/packages/record_windows/assets/fmedia/mod/libFLAC-ff.dll": "729a0fe2b337a863ea1796c94fb60448",
"assets/packages/record_windows/assets/fmedia/mod/libvorbisenc-ff.dll": "c8d21d47f9eb36a2307aabbf47dafd88",
"assets/packages/record_windows/assets/fmedia/mod/alac.dll": "902f8e7eaaa7b3d326c0bb1ff63a1342",
"assets/packages/record_windows/assets/fmedia/mod/libogg-ff.dll": "6070f38352adf081864211bfde5dc9f9",
"assets/packages/record_windows/assets/fmedia/mod/plist.dll": "33e29df5abaaa0f2e352d2c25c279e56",
"assets/packages/record_windows/assets/fmedia/mod/vorbis.dll": "ca172c074614043b1d9bd8bcc829485f",
"assets/packages/record_windows/assets/fmedia/mod/fmt.dll": "88b08b361d3e31f3b96655c9d7f1c450",
"assets/packages/record_windows/assets/fmedia/mod/net.dll": "d89a1a607ef3ac63f5c934d592b2cadc",
"assets/packages/record_windows/assets/fmedia/mod/libmpg123-ff.dll": "2ba538e38058894e4bd465ab522f9dbe",
"assets/packages/record_windows/assets/fmedia/mod/soxr.dll": "585e735e835404a5864f2fca1cdf05cf",
"assets/packages/record_windows/assets/fmedia/mod/opus.dll": "1c2d377af67e865a4cd226a9d5be0c93",
"assets/packages/record_windows/assets/fmedia/mod/libwavpack-ff.dll": "11b980ec2f5cace9af9a79ae06d601b8",
"assets/packages/record_windows/assets/fmedia/mod/wavpack.dll": "292a731d1f15435fc016cbee9610cc55",
"assets/packages/record_windows/assets/fmedia/mod/aac.dll": "f6983a5de9e8976e7f5e82cb00d1389c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "7110bab0bc8fe5f8d00b5fa6b72b03ed",
"main.dart.js": "25d998eb2849aa96e0bb6e4872dc6137"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
