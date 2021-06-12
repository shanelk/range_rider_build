'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "84f1b0cf83374d388db3bab52f4388b3",
"index.html": "f38844df7d707650bdfa896a5e81e89f",
"/": "f38844df7d707650bdfa896a5e81e89f",
"CNAME": "3df4134c252309831ca27a2795ccd036",
"main.dart.js": "a25e2704fe55b3394da399a47f001bbe",
"README.md": "38e1e8794cdc268aa25764d7ffdc3038",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a48859debf26332f20b76546cc3a38c6",
".git/ORIG_HEAD": "5a8f57a389876646adac4d75d16f96a0",
".git/MERGE_MSG": "e8f0f5c00dd779e84ee110325987eb30",
".git/config": "ad7711475e1300850f9c5a9c13eda88d",
".git/objects/03/4eeb9a82c0a8f012563ff72abfea2f5720ec78": "e923431371feb6e0d2ca3bad32a92de8",
".git/objects/03/4a740059f8bbbccf90cc9a0a5cf44cb571d7c3": "7ac644aa85772e9229237e9556e424b2",
".git/objects/6a/5d89d8ea1b125f7e3d9ebd2e2ddcb021867deb": "6e5e0035febf3ac70d4eded75e61c049",
".git/objects/6a/0f2b6b6b06df18882708c02c7b2158720fdcfb": "a07eb7acdcb8b0b94189e2b182e17a06",
".git/objects/32/95ad87a9df715b85d6728814a83ccba4a84d70": "1d86379fcd6b8ee8536f11191e47d120",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/93/7a7c2479f0393b132445307b2fe6ac831e0e03": "846594b7728c443166da5bc785e7ed33",
".git/objects/5a/19187bfde89e57cf89cb83b7a81d1c66585540": "714f1e506ba16425af9b7b2580129d93",
".git/objects/02/e30a66068b631fad098de4ad019dbe65243cb4": "6d27e32d68328057d5cb6e481b745801",
".git/objects/b5/38596629060e10086b1765c2e6b24cc7939d4c": "9ef170b80290abdcbfc59acab5685976",
".git/objects/b5/c4beff1bc4a740181c1ae740eef2c52f5dacc9": "b2ff5675603f5ec17b1707b316cb627f",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/a5/8254f6ee0781c1c231de33f5b3de235d34b6f6": "a0e9c605d2ab8137a0a451190aab1e68",
".git/objects/a5/bcd71e510b7aae46e4f90c78c26520685a8191": "7359ee4a0fcb105e9d6df35073f5129d",
".git/objects/d6/cac8dc2ecc1d85916dfa48007497e30c1df774": "fb457fc3021899fb2c17df93557ad747",
".git/objects/d8/becde2b027528f8648864b712535d7171eb2dc": "805e31f58d8499fe15c35088c97b770a",
".git/objects/eb/95ebb79d791cd80d9042ece9c388ade451db5b": "954d0ce88051d0c9ef3f10c8f875b82f",
".git/objects/c0/50893a85d788237259ce76c351a3a94dd8cfc2": "2a26d7ebee79860d34bc7b28e4fa9384",
".git/objects/fd/73de749793818f11918cc6e8f42ad02754a6d1": "9a763baed77a2ebb28049b3dbb2b3656",
".git/objects/f5/7df01fbf95f58a90a41eb424861853698f5472": "1b41b4598f30f0110487f9201f1874c4",
".git/objects/f5/60bec76113b1ca1025175d0bb150d0e90522fa": "f83d1c60231f8e0686a509b4e3e45445",
".git/objects/e4/e6ed990a5554fea3ab71b42ae0ee312bb0dc87": "af246ae41bcdca1b9b0ba1b5ead3e38f",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/c1/469ef31eb0f1263d3b72b1a5e07f57f48f5d12": "245ee6f22a15bc73c54c9404ce307a0e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/6ae7f0e26f5963b692f6764057a4b92bcfcf85": "2be91fb9015df3cc3fd900cbaf0c0230",
".git/objects/29/4c1462a4c7eddab011f21ee334671ff9268175": "ac708a9b001f3fef103856faf4b1818a",
".git/objects/7c/0e65bf219fce6f9c9acc52effa148697785f22": "326587eac295c33a9141368eeaf075bb",
".git/objects/16/438042427400e6c74b4e4d83fcbf623c3aed2f": "00656570ae10dcf3b3e32853e7903388",
".git/objects/45/d7478e5bfd8f26d15edc38f17d76325d2006ed": "03b831025a82d5e994c8442aba130890",
".git/objects/45/825c9731e1f32b1e569697b6fd965451827ec2": "c59b33cc052227ea1bf29ec00772c9f4",
".git/objects/80/c9246a362131f30d6b5a51888aedc4352bfea6": "614e4da4e88df975552033af4a8a1caf",
".git/objects/74/47a6fc930c3f3cee1f3d02eaa186adaf76865f": "dba8c006bc3161d2571e07d4e39c3f57",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/17/69b8ec72f57a160c3a89d7ea0cacf3861cb29f": "0b90f47b4951773ea15a28ed90b4fbae",
".git/objects/7b/0ef9dda426a6ddf45de1d39674a17a452c1d4a": "7e719958971253dcafae5945671ec6a3",
".git/objects/8f/dd666cb870ef1a689788c492e9dea27f11280d": "adfe3f0026745a760a0d52bb7b70d642",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/20c77732958c307ab876c05d34cc06e2d7190a": "d9334c31434815c9a8d553577b5624c3",
".git/objects/21/f5e61f968541153cea1780aac27a420f8d44ac": "37529266f383569fea3a3b10be461944",
".git/objects/86/05ae7cfea1dc93bd7fad026c28cac9f3438c9c": "b3031c98bce8e850527350c594a30146",
".git/objects/2a/6969c62074df5c90f66bf69eab4ee9caaa0571": "0a072cecbf75f9fbdd9bd7bdaaab71c3",
".git/objects/2f/5d475c1653a04af255eb1906dc593d8feed999": "93f938510b5262f9f87e43281ba33568",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/d93ea52be28dbc95c769c0ee7abb22485ff4fa": "b0c6913b77cb5a283a3a0aea1e30cf67",
".git/objects/6b/95254c5dfeffc46283f8fea72a9db379d36b2f": "f97f3b9bd262dc0de7643107cf940b8e",
".git/objects/6b/4e77d5c20676c699eb97036464e0450fa6b9f9": "e03bb83366020f4068df8e887c1ebc8e",
".git/objects/07/87a11519a86971bab3eec57f1970406859c9da": "08a7e4a687d705cd54f8b911dfc551bb",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/96/7920b8cb29dc0c3900c793a276fc6eb51c0cb9": "88f488da45c1e00e08dccc08543e506e",
".git/objects/54/aef55a585780756846577edb9c9630ff55363b": "9e236304fd1f73f990d04f7d3002d68d",
".git/objects/3f/8d9edcce911e3f5caf0227e58fb7fe1d2b5784": "0c69943155985a8b6f5804407bc96f60",
".git/objects/3f/506d10696e9cf355f9499c01916c0a63eec0a7": "1f2393eed5e709c7ef98de63bc5ae662",
".git/objects/30/11145bfa7a29d4e31bb05bbbaa2ed2dd2ff36c": "7e2beaf5faa7f7b20e4adafbc875442c",
".git/objects/5b/53aa37c4270cd770c95705ee3576373a165f33": "1b0dfdc28b0fac1a499287136e6c1c7d",
".git/objects/08/d21569afecb452d5928a8cad933a373514cbb7": "c004a3fef9f5544c73e8e2fe92c3aad4",
".git/objects/6d/ac893c728a6bbd08484be4503e279b11d6de2f": "5b6ea2cc59418573f4e1af8ca5378a18",
".git/objects/6d/1ee2846d109f2944da24735f13b88372559835": "a8a81988be58bfe124a2465b52667deb",
".git/objects/6d/bdbc9aa7f607f80efeeaa1914d64e6cbb955f9": "656dea6094c46d4500563a3c366c2baa",
".git/objects/39/01a8658f0274bd33875873785be90c2ad402e4": "53010558b913114752f7f648a77cfd55",
".git/objects/99/cd13c60559390ed960f5ea12a6aa102d426cbf": "ddf34a164812f6279e2248ebd338449f",
".git/objects/97/d731f6874d2588e88a8448b4a94907b6845fb1": "92f28cc68f70c94e8aa941d6961285e4",
".git/objects/d3/6160e3ecdfb185fe3239814817a0eebec97026": "64f7eac7944a4a305654ed627504179a",
".git/objects/ba/eabf85afed4c297208aff17f1ef64e67497d31": "64f8fd55f5e32e827d58cd24791c77a4",
".git/objects/a0/d4df1dbf01b82baa03d02fce5d79da9e8a5b55": "064f57cf6d0faf95f3e622ed6bef174b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/7e9c80231ddd6c5c55eab858fcb9d5b46bf521": "f59c873ea9b8509ff12bc9122d92ec22",
".git/objects/b9/d3647c045beabe892e4e08e1de53f26db6f6af": "a3c9734777619318a6e9be524d9e1497",
".git/objects/b9/63fed85a11ada7bc408f27d75ce6ca44d9b383": "6a32092a470dc5da1bce9e0fe916dd2a",
".git/objects/ef/67084b776c8c5a080bc374059f27c6f3a90a56": "9067de85554843e7e02aa4b8d10ad172",
".git/objects/fa/32a74c95521697f829d0114f9c1903644ea806": "dc64409089c891da3780e83374f87893",
".git/objects/f6/99929ad8bc3adddd3677329b2141073f281d98": "f422fba53345f023a079db90474b5273",
".git/objects/e9/38ab89ffd137b3de0e87a89d0d8d8969d330b8": "0fe96e2e853482042140a4072801a7ae",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/24/15d0e76d8b21741a4f23bc1fadef656da6bf20": "2529ad58cd8c06ab59704b2ecf6a06a7",
".git/objects/15/a90231c603712285af5f8d2e182d0b100d4608": "44ca6fbf89e4fed406232982f01a0b7a",
".git/objects/12/ac169cde596cde770300ca3d23c10902040fc4": "c3cc922f60ad8b7df264288f422322bc",
".git/objects/8c/668ef206544c6d7dcfef4b69d2b5cd4e996aed": "97635993f8f0460d2878d0a66b937c0f",
".git/objects/85/a748df452b3c33230d05020ca6d2ee4e42053c": "d8bac90cc4a0d57abca341d5ed7b869e",
".git/objects/1d/8d2e938aa138df73a889e059586b1850ac0b85": "369fcef0a7d5cc1117132f79e5c9ce11",
".git/objects/40/c56b8d2078f23b260273e8c11e6f0fcce353cd": "4f2295a192ce462d23e14289b233bb44",
".git/objects/78/5b81473c85e3420bfc1cc31c78a026fd214249": "690da99910e9b0edca29c645cc949c15",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "38d6fd29412611ccdba5e18c3725ec1d",
".git/logs/refs/heads/main": "aa47f5ee46f65031d2eb1a8581b10ea2",
".git/logs/refs/remotes/origin/main": "4b80b08881b5bd8d0f45711edea83157",
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
".git/refs/heads/main": "ecc8556893fb77d67f54d1801ecdc132",
".git/refs/remotes/origin/main": "ecc8556893fb77d67f54d1801ecdc132",
".git/index": "86b4f84cb62e95ee60092ecc047c5cc2",
".git/COMMIT_EDITMSG": "88ee081417cec49e6217bebccb429928",
".git/FETCH_HEAD": "dfdc50e429f2f8e0279169c8748f33ff",
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
