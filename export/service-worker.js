!function(){"use strict";const e=1606883577563,t=`cache${e}`,s=["/client/client.2d83423c.js","/client/index.b6fecea8.js"].concat(["/service-worker-index.html","/css/bootstrap.min.css","/css/font-awesome.min.css","/favicon.png","/fonts/centurygothicv1.eot","/fonts/centurygothicv1.svg","/fonts/centurygothicv1.ttf","/fonts/centurygothicv1.woff","/fonts/centurygothicv1.woff2","/fonts/fontawesome-webfont.eot","/fonts/fontawesome-webfont.svg","/fonts/fontawesome-webfont.ttf","/fonts/fontawesome-webfont.woff","/fonts/fontawesome-webfont.woff2","/fonts/FontAwesome.otf","/global.css","/images/black-brick-wall-2.jpg","/images/city-bg.jpg","/images/cogs-bg.jpg","/images/couple.jpg","/images/happy-woman.jpg","/images/header.jpg","/images/homeopathy.jpg","/images/iict.png","/images/janine.jpg","/images/light-chair-bg.png","/images/linkedin.png","/images/logo-watermark.jpg","/images/logo-watermark.png","/images/logo.jpg","/images/minnd.png","/images/poster.png","/images/silver-frame-o-2.jpg","/images/silver-frame-o.png","/images/support-o.jpg","/images/unhappy-man.jpg","/js/bootstrap.min.js","/js/jquery.min.js","/logo-192.png","/logo-512.png","/manifest.json"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url),o=s.protocol.startsWith("http"),a=s.hostname===self.location.hostname&&s.port!==self.location.port,i=s.host===self.location.host&&n.has(s.pathname),c="only-if-cached"===t.request.cache&&!i;!o||a||c||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const s=await caches.open(`offline${e}`);try{const e=await fetch(t);return s.put(t,e.clone()),e}catch(e){const n=await s.match(t);if(n)return n;throw e}}(t.request))())}))}();
