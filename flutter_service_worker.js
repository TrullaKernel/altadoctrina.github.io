'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "df4fff583ad7d71f00d40f0eb1f97237",
"assets/AssetManifest.bin.json": "a11f89fe6347868062f40f311f9d354d",
"assets/AssetManifest.json": "78b611dcf7b69b72466963679c38f8f4",
"assets/assets/coins.webp": "8c2f424afa2bd79b3e4788507f064655",
"assets/assets/fonts/aptos.ttf": "7dd5f4bf5d38875ca1822a830b6e6fe4",
"assets/assets/fonts/verdana.ttf": "7652f550f74d065c79f44da613344338",
"assets/assets/Hero_background.webp": "1475b855a88a81a3b2b6ffbdb3cb5317",
"assets/assets/Hero_grafic.png": "02ecef13f71b4a0cfe94ff622d009431",
"assets/assets/Hero_grafik.webp": "3363bb794c06949e6057489f65718dae",
"assets/assets/HSGG_Logo.png": "a69756320b99696dd77a2ae5b22aeaa7",
"assets/assets/night_sky.webp": "6886e71f629f637ff607fc6c83333125",
"assets/assets/scroll.webp": "be8006a4d3acbe96763e7c4e3751a4b7",
"assets/assets/scroll_shadow.webp": "00e3cf3c5bcee4a5d6830342b344b64c",
"assets/assets/settings.webp": "1b688c691a1735b2d4ab791a74caaba9",
"assets/assets/store/Amphora.png": "0871bfe1d9910b048ce254489bd7a721",
"assets/assets/store/Amphora2.png": "2d0d066ee8f33715af986cb81240a166",
"assets/assets/store/AmphoraBroken.png": "f3495d2ff9c88882dc361659e8e6f130",
"assets/assets/store/AmphoraBroken2.png": "8b2121039f2d637faffcde5e411fde47",
"assets/assets/store/Armor.png": "f944f2789d8d07ded928159e0d28ef0d",
"assets/assets/store/Banner.png": "afdcdb2a3930589419fe87e6695c1056",
"assets/assets/store/BannerChiro.png": "e13a433717e14035ed6aaf3f0091bebf",
"assets/assets/store/Bus2tOld.png": "dfdeb3907df419e46c8340803dcdade9",
"assets/assets/store/Bust.png": "be4e0cef3e7dc62c439c822494cf807a",
"assets/assets/store/Bust2.png": "af216913da04a031b6fce34974767e7b",
"assets/assets/store/BustOld.png": "0274fc5e6b42e749f14313c9da0c258b",
"assets/assets/store/CenturionHelmet.png": "95aae99595cc3a6f33776f7f11e05f28",
"assets/assets/store/CenturionHelmet2.png": "60d102a755daf5a85fa08f82ef2255a6",
"assets/assets/store/CenturionHelmetBronze.png": "606b6b4ba9033635e759417cf8d86a8c",
"assets/assets/store/CenturionHelmetBronze2.png": "6f01c6f77b0bb46a36a93cfe903378c9",
"assets/assets/store/CoinBronze.png": "7e4d7be03833bd072e2e504f5b260e19",
"assets/assets/store/CoinGold.png": "42168a1fb81f77a45c9f7341605e41c7",
"assets/assets/store/CoinSilver.png": "d059510c20b7215ff5c877fe3bcd2489",
"assets/assets/store/Colloseum.png": "48b0eea0de2af9dcd26c0329f2f7a0f6",
"assets/assets/store/ColloseumNew.png": "a522bdcad03abe9e6b16e2dbd908ae3b",
"assets/assets/store/Column.png": "0789b4b5b65538feb906b6f4e3294fcf",
"assets/assets/store/Column2.png": "a200564f493d71f3842635b56187ec59",
"assets/assets/store/Emperor.png": "49b0b055d079237235aa8467d62f9d67",
"assets/assets/store/flag.png": "f37239e92b8422d7a2e42ecb03be4643",
"assets/assets/store/flagChiro.png": "ee26068dab33ba165c68b4d0a542384f",
"assets/assets/store/flagSPQR.png": "b34c4c69a821aa4758179ffbcff88353",
"assets/assets/store/Gear.png": "3290e683ad25f0a021397b3aa8b48b46",
"assets/assets/store/Grapes.png": "d4a9b6d1c3908f4db241e069020efb07",
"assets/assets/store/Insula.png": "040b5688a004cc605b07aa0dc4726452",
"assets/assets/store/Laurels.png": "f4f0caec4577fdda1d006fee8420d3a8",
"assets/assets/store/LaurelsBronze.png": "911d167014e91f77f96bb41054b36a22",
"assets/assets/store/LaurelsGold.png": "0534fda6a9b871ea02ecc4d689fb0202",
"assets/assets/store/LaurelsSilver.png": "fa9e45b0f7666335f181083dfc8355be",
"assets/assets/store/Legionnaire.png": "3ae0a55e275dadb8501a4e6a245681fa",
"assets/assets/store/Obelisk.png": "ea2dc2f34b0491d085f4a5d4285109c7",
"assets/assets/store/Obelisk2.png": "6287c4d1e6af4fd17f1f7598e6d082ed",
"assets/assets/store/Roman.png": "13ff1a206757cbbd23afc03f81dbc711",
"assets/assets/store/RomanOld.png": "c054c60a75432cd179213155bc0cd8e4",
"assets/assets/store/RomanOld_.png": "13654779a95476e178e262e37b5b4f5e",
"assets/assets/store/RomanWoman.png": "d08191fd5872803250635dbb42daf8b4",
"assets/assets/store/Roman_.png": "73afec1b552e13552d7241539c220609",
"assets/assets/store/Scroll.png": "e29d66e792e2f9e813c39645b984653a",
"assets/assets/store/Scroll2.png": "1d69ceb61088d68e5ea0b4d9f91e56eb",
"assets/assets/store/Senate.png": "67f05ca53d427f964eaebdc6e0715e8b",
"assets/assets/store/Senate_.png": "3b33c840eb8c26c8f8a5ef4b06b0da5d",
"assets/assets/store/Shield.png": "4a716c54028203eecda55faa44cde58b",
"assets/assets/store/Temple.png": "e97987dee72f3b3433d3f6434a882751",
"assets/assets/store/Villa.png": "f1fd0c33d82bf766b73414a273e75351",
"assets/assets/test.webp": "4c21f1924d855a0b4a335addb8016969",
"assets/assets/user_profile.webp": "aea5669ed9d7b20c267f19ccc9e824ef",
"assets/assets/xp_banner.webp": "8f25aef0c253e79f3177aa2e250b943f",
"assets/FontManifest.json": "e40ebd8dbc52926af5f39824f7bcb24d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "fe1c7bdc56d518b98a977bd6d864721c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "a300753dbfc254a1223ccad99fcd28c9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "db544ec9e32ebd7e19399c444bf807f4",
"/": "db544ec9e32ebd7e19399c444bf807f4",
"main.dart.js": "bba1729b0be490cdd7fa8a2bd5480c36",
"manifest.json": "ed453410f99bddcf3373a28fe651dd94",
"version.json": "ab1b96459710006bef34dd9301c4a5e6"};
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
