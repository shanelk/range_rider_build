'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "84f1b0cf83374d388db3bab52f4388b3",
"index.html": "31eccb47b56807eef58f1956d6a90463",
"/": "31eccb47b56807eef58f1956d6a90463",
"LICENSE": "40d16af95feee65334ec36a0183a8a2d",
"main.dart.js": "a2c4a4fced8e874a1f38a3f68b43ae7d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a48859debf26332f20b76546cc3a38c6",
".git/config": "ad7711475e1300850f9c5a9c13eda88d",
".git/objects/03/4eeb9a82c0a8f012563ff72abfea2f5720ec78": "e923431371feb6e0d2ca3bad32a92de8",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/5a/19187bfde89e57cf89cb83b7a81d1c66585540": "714f1e506ba16425af9b7b2580129d93",
".git/objects/b5/38596629060e10086b1765c2e6b24cc7939d4c": "9ef170b80290abdcbfc59acab5685976",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/a5/8254f6ee0781c1c231de33f5b3de235d34b6f6": "a0e9c605d2ab8137a0a451190aab1e68",
".git/objects/fd/73de749793818f11918cc6e8f42ad02754a6d1": "9a763baed77a2ebb28049b3dbb2b3656",
".git/objects/f5/7df01fbf95f58a90a41eb424861853698f5472": "1b41b4598f30f0110487f9201f1874c4",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/c1/469ef31eb0f1263d3b72b1a5e07f57f48f5d12": "245ee6f22a15bc73c54c9404ce307a0e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/4c1462a4c7eddab011f21ee334671ff9268175": "ac708a9b001f3fef103856faf4b1818a",
".git/objects/16/438042427400e6c74b4e4d83fcbf623c3aed2f": "00656570ae10dcf3b3e32853e7903388",
".git/objects/45/d7478e5bfd8f26d15edc38f17d76325d2006ed": "03b831025a82d5e994c8442aba130890",
".git/objects/80/c9246a362131f30d6b5a51888aedc4352bfea6": "614e4da4e88df975552033af4a8a1caf",
".git/objects/74/47a6fc930c3f3cee1f3d02eaa186adaf76865f": "dba8c006bc3161d2571e07d4e39c3f57",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/20c77732958c307ab876c05d34cc06e2d7190a": "d9334c31434815c9a8d553577b5624c3",
".git/objects/21/f5e61f968541153cea1780aac27a420f8d44ac": "37529266f383569fea3a3b10be461944",
".git/objects/2a/6969c62074df5c90f66bf69eab4ee9caaa0571": "0a072cecbf75f9fbdd9bd7bdaaab71c3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/d93ea52be28dbc95c769c0ee7abb22485ff4fa": "b0c6913b77cb5a283a3a0aea1e30cf67",
".git/objects/6b/95254c5dfeffc46283f8fea72a9db379d36b2f": "f97f3b9bd262dc0de7643107cf940b8e",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/96/7920b8cb29dc0c3900c793a276fc6eb51c0cb9": "88f488da45c1e00e08dccc08543e506e",
".git/objects/08/d21569afecb452d5928a8cad933a373514cbb7": "c004a3fef9f5544c73e8e2fe92c3aad4",
".git/objects/6d/bdbc9aa7f607f80efeeaa1914d64e6cbb955f9": "656dea6094c46d4500563a3c366c2baa",
".git/objects/39/01a8658f0274bd33875873785be90c2ad402e4": "53010558b913114752f7f648a77cfd55",
".git/objects/97/d731f6874d2588e88a8448b4a94907b6845fb1": "92f28cc68f70c94e8aa941d6961285e4",
".git/objects/ba/eabf85afed4c297208aff17f1ef64e67497d31": "64f8fd55f5e32e827d58cd24791c77a4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/7e9c80231ddd6c5c55eab858fcb9d5b46bf521": "f59c873ea9b8509ff12bc9122d92ec22",
".git/objects/b9/63fed85a11ada7bc408f27d75ce6ca44d9b383": "6a32092a470dc5da1bce9e0fe916dd2a",
".git/objects/ef/67084b776c8c5a080bc374059f27c6f3a90a56": "9067de85554843e7e02aa4b8d10ad172",
".git/objects/fa/32a74c95521697f829d0114f9c1903644ea806": "dc64409089c891da3780e83374f87893",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/15/a90231c603712285af5f8d2e182d0b100d4608": "44ca6fbf89e4fed406232982f01a0b7a",
".git/objects/8c/668ef206544c6d7dcfef4b69d2b5cd4e996aed": "97635993f8f0460d2878d0a66b937c0f",
".git/objects/85/a748df452b3c33230d05020ca6d2ee4e42053c": "d8bac90cc4a0d57abca341d5ed7b869e",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "581f59f97d39a94af80e391261647643",
".git/logs/refs/heads/main": "5ac39996825a616fc83194bbb1387da3",
".git/logs/refs/remotes/origin/main": "10f7b57374cd3f2e8a744f5c0e3ab312",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "9f623e1c7d5dffa4968f8c63b50735d7",
".git/refs/remotes/origin/main": "6aa09bcd995b9a629e2290f1b84bbd51",
".git/index": "3d7a2a90f0853d2e2cb495643c386516",
".git/COMMIT_EDITMSG": "a7675a8b6fc90393d89c1022340a8135",
"assets/images/tehama_horse_two.jpg": "8898e671e9d2c10097a7b334a8576448",
"assets/images/burro_one.jpg": "6a7476f57ab9612489d5e01d6dc16037",
"assets/images/tahama_pipe_thumb.jpg": "b9ffdf9b652ea4895b88293f2d920b0e",
"assets/images/tehama_horse_one_thumb.jpg": "ef9f761926bf5dabf4bed1539ac94953",
"assets/images/tehama_side_thumb.jpg": "1273ae4e67ebe4ab3de80a0cdf8a106e",
"assets/images/tehama_rack_two.jpg": "98fbc97472adeba0c3b304b2d3b89f2c",
"assets/images/burro_one_thumb.jpg": "86122000757f02305195de0e37dea956",
"assets/images/tehama_side.jpg": "e505a0a6f97d1572fab793cdeff3d49f",
"assets/images/tehama_horse_two_thumb.jpg": "ffa09cb00701ec225808244338af75fa",
"assets/images/tehama_bottom.jpg": "f10315ab7437798bbd29d5afb1d1cbee",
"assets/images/burro_two.jpg": "02bca1e837fed133787e0f607c2a6172",
"assets/images/tehama_horse_one.jpg": "0badf298d1e18378f230e95083e4e855",
"assets/images/burro_two_thumb.jpg": "70249e25608ece6e9828f6fd85b9df1e",
"assets/images/tehama_bottom_thumb.jpg": "86c0673866d9dace755f5f86ac429536",
"assets/images/tehama_pipe.jpg": "e301deb059c8f3988653552be9c04165",
"assets/images/burro_top_tehama_bottom.jpg": "4cd83670752b8963a61b921ce5557045",
"assets/AssetManifest.json": "a05720176968c35391ee61d5fc1ca241",
"assets/NOTICES": "bde9ee889e7cdb2c908965b81d635c52",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
