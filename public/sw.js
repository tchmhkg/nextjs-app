if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,a,n)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+c.slice(1)};return Promise.all(a.map(c=>{switch(c){case"exports":return s;case"module":return i;default:return e(c)}})).then(e=>{const c=n(...e);return s.default||(s.default=c),s})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/05d954cf.cedef9030303381d5820.js",revision:"417fc20564e4df1effc365bd72179156"},{url:"/_next/static/chunks/24.ebd118bfa117f62f2418.js",revision:"245780aef213ea576de95da49ab667a4"},{url:"/_next/static/chunks/25.c173afe806b0b2516c46.js",revision:"57757521e19e8dae823c01f016e1e0e5"},{url:"/_next/static/chunks/26.163ea4591021eb5133ff.js",revision:"089b19862798bf48a5eb8b78509d664d"},{url:"/_next/static/chunks/260fb190.8c64249acfaf9f80db63.js",revision:"b4162235c99a10c573baf4a46e5750d1"},{url:"/_next/static/chunks/27.e60ec6e81e9fc1c936d8.js",revision:"2195048e7d9a0b8f0a1f3086b0000600"},{url:"/_next/static/chunks/28.3e040bd1be378f7b5fa9.js",revision:"aa1c833885184f749b6237bd99e13f30"},{url:"/_next/static/chunks/2852872c.63c7ffbbc2defd79a944.js",revision:"6dd6f06e7380d5dd36d59f14dc0952e0"},{url:"/_next/static/chunks/29107295.db3068114b0a5c4f2f03.js",revision:"b4853570bb491381f8a5dbf0cff1f1e6"},{url:"/_next/static/chunks/36b3dba18eaabbf109ecf58165f53ef7e8689024.e57e242900d4b047e20c.js",revision:"be512c75bc2fef2705f923140b477dc6"},{url:"/_next/static/chunks/4b358913.7a0df60868918120a1a7.js",revision:"16e01b3fb1b1d662195aee164d900841"},{url:"/_next/static/chunks/5eec9076b7122a47bb63baa280245b3614395d2a.931c54680c6a9217dee1.js",revision:"57844203d017e183c9cc1550f079552e"},{url:"/_next/static/chunks/75fc9c18.38d06fa2df3e58325d27.js",revision:"aabc38fca8067e76e83a23adc6655c34"},{url:"/_next/static/chunks/919405ddb78e72cb172836b035e4d8768b7dbc65.dc9f8806097c420c86f4.js",revision:"295bd43b0e908982d8f78f6a2128428b"},{url:"/_next/static/chunks/a8cea8f15a5471b42bd58ab8f5db57246a78a399.35ab8e0c48f735999c30.js",revision:"f58a3300c25a2fe41df0cd2a66f32ece"},{url:"/_next/static/chunks/efcc9a538fd05dbdda573ce6037736cf5f5ab397.0c645bc1c3a40ec6500e.js",revision:"cd3f39bfb50694c067c5698c3cc04735"},{url:"/_next/static/chunks/framework.6748ec775e9172d245d7.js",revision:"74e2884781b65b1f8656ee9a44d64e84"},{url:"/_next/static/chunks/main-6c2d436116cbbf2d7f4d.js",revision:"7ed6f9b2dc2ea8e706bc6312abf4401b"},{url:"/_next/static/chunks/pages/%5Blang%5D-dcd61b51fae23afde25b.js",revision:"eb2a03d14a79b4880248203e59e418bc"},{url:"/_next/static/chunks/pages/%5Blang%5D/market-56ede62a2bc9a177fd35.js",revision:"446345d4ff57d8ee39091274b93502e9"},{url:"/_next/static/chunks/pages/%5Blang%5D/market/hk-f0473b16154d019b5cf3.js",revision:"db626d5852a24d61f3f524d87475ec08"},{url:"/_next/static/chunks/pages/%5Blang%5D/market/quote-d74db33ee12cfb9462c5.js",revision:"0aeea847478f1a821c3028080da200b4"},{url:"/_next/static/chunks/pages/%5Blang%5D/posts/%5Bid%5D-540a4b7139e241102561.js",revision:"5c757c075bc41ee0bf53c2a5ea76c8dd"},{url:"/_next/static/chunks/pages/404-508ba854265193f9c00d.js",revision:"36368e4f8395eca1bc8e554663ccb31f"},{url:"/_next/static/chunks/pages/_app-6ffdf172f8c1eff47c26.js",revision:"c7a6657c70a0fac3ac82ea9756b35315"},{url:"/_next/static/chunks/pages/_error-b64b7e40d1c5113691b5.js",revision:"c88d2c2848dc6e53345ab7e0f6fabc3b"},{url:"/_next/static/chunks/pages/index-0cd8b46b4276cf1f701f.js",revision:"b5e7d89700a95c007bc1b47e2e8a7df2"},{url:"/_next/static/chunks/polyfills-05d6b25b3c33d28a7267.js",revision:"0e076d47ddcfa8b46257b2fa14fb59ce"},{url:"/_next/static/chunks/webpack-0e472f4f68920cd7a33e.js",revision:"f512b94f231220e37631c2b3cb35e3b8"},{url:"/_next/static/css/4160ef029daf1b311190.css",revision:"7bfaf416431b5ffbe946215ffa1abdea"},{url:"/_next/static/css/5a152620ee8a43c060a8.css",revision:"d5df327c7a7c53c8fcb8422afe6b7bb2"},{url:"/_next/static/css/783f9200c80ada27ff8f.css",revision:"6e6fb2c3e572ba066008582d9cdb42d5"},{url:"/_next/static/css/b9274e98e26acf79f881.css",revision:"3b54ff61e5d5968602ed8235511b7384"},{url:"/_next/static/css/d973bdc07faa44e96ad7.css",revision:"aa3afab0f1d62871dc7020f0c9a2d9f7"},{url:"/_next/static/css/e9653b0e83d8727b461e.css",revision:"5ae8612e3a4e0e2f110508e858901bf8"},{url:"/_next/static/dtIWjZNDx7UlpajsGWiQw/_buildManifest.js",revision:"cfbf14e2adb703f79885b1bddb2b9b68"},{url:"/_next/static/dtIWjZNDx7UlpajsGWiQw/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/favicon-16x16.png",revision:"9489175bb946d20f930fe7280cd9f554"},{url:"/favicon-32x32.png",revision:"7c38a0de3f1fc5a125d4b934b6ab56a4"},{url:"/favicon-96x96.png",revision:"8a5f936aa9fcfdeabdf74f937ad32239"},{url:"/favicon.ico",revision:"298d11102d21008542cf9aefef6f34c4"},{url:"/icons/apple-icon-120x120.png",revision:"efa01ce1b724f4c98901188e63a34f36"},{url:"/icons/apple-icon-152x152.png",revision:"e258b8d61683101fbede25070895dcf4"},{url:"/icons/apple-icon-60x60.png",revision:"ee7aee8f2cdbf70511dcbcd2b5f02f8f"},{url:"/icons/apple-icon-76x76.png",revision:"72c45ccb18361246b4b118fff4ad1ee3"},{url:"/icons/icon-192x192.png",revision:"983b5ac24d7753866e5aa2bc257e1c70"},{url:"/icons/icon-256x256.png",revision:"d8c8d4a92e43df1f2bb97c10d87d23cb"},{url:"/icons/icon-384x384.png",revision:"d660475db9586c65272c8499e8a6619a"},{url:"/icons/icon-512x512.png",revision:"928f48fb64f61666428901f19fb8982c"},{url:"/images/github.png",revision:"ef7a02b69836dc8b6a732a54c4200dcb"},{url:"/images/profile.png",revision:"eb5c764dfe0dcceb75594c96a4b39cdd"},{url:"/manifest.json",revision:"5624fdfa38af0e9a96fee819b15a4c59"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
