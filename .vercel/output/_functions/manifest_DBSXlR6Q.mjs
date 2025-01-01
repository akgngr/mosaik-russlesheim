import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_WJnaAF-s.mjs';
import { h as decodeKey } from './chunks/astro/server_BITgS1cK.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/akgngr/httpd/astro-mosaik-russelsheim/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"projekt/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projekt","isIndex":true,"type":"page","pattern":"^\\/projekt\\/?$","segments":[[{"content":"projekt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projekt/index.astro","pathname":"/projekt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"spenden/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/spenden","isIndex":false,"type":"page","pattern":"^\\/spenden\\/?$","segments":[[{"content":"spenden","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/spenden.astro","pathname":"/spenden","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"uber-uns/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/uber-uns","isIndex":false,"type":"page","pattern":"^\\/uber-uns\\/?$","segments":[[{"content":"uber-uns","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/uber-uns.astro","pathname":"/uber-uns","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.1.1_@types+node@22.10.2_jiti@2.4.2_rollup@4.29.1_terser@5.37.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.BTiCxN5L.css"},{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/.pnpm/@sanity+astro@3.1.9_@sanity+client@6.24.1_@sanity+visual-editing@2.11.3_@sanity+client@6.24.1_adlcyolxxn7let4fz5e4pejtby/node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/akgngr/httpd/astro-mosaik-russelsheim/node_modules/.pnpm/@sanity+astro@3.1.9_@sanity+client@6.24.1_@sanity+visual-editing@2.11.3_@sanity+client@6.24.1_adlcyolxxn7let4fz5e4pejtby/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/akgngr/httpd/astro-mosaik-russelsheim/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/akgngr/httpd/astro-mosaik-russelsheim/src/pages/projekt/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/akgngr/httpd/astro-mosaik-russelsheim/src/pages/projekt/index.astro",{"propagation":"none","containsHead":true}],["/Users/akgngr/httpd/astro-mosaik-russelsheim/src/pages/spenden.astro",{"propagation":"none","containsHead":true}],["/Users/akgngr/httpd/astro-mosaik-russelsheim/src/pages/uber-uns.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/projekt/index@_@astro":"pages/projekt.astro.mjs","\u0000@astro-page:src/pages/spenden@_@astro":"pages/spenden.astro.mjs","\u0000@astro-page:node_modules/.pnpm/@sanity+astro@3.1.9_@sanity+client@6.24.1_@sanity+visual-editing@2.11.3_@sanity+client@6.24.1_adlcyolxxn7let4fz5e4pejtby/node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.1.1_@types+node@22.10.2_jiti@2.4.2_rollup@4.29.1_terser@5.37.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/projekt/[slug]@_@astro":"pages/projekt/_slug_.astro.mjs","\u0000@astro-page:src/pages/uber-uns@_@astro":"pages/uber-uns.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/akgngr/httpd/astro-mosaik-russelsheim/node_modules/.pnpm/astro@5.1.1_@types+node@22.10.2_jiti@2.4.2_rollup@4.29.1_terser@5.37.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/services/noop.js":"chunks/noop_BhY1xbI4.mjs","\u0000@astrojs-manifest":"manifest_DBSXlR6Q.mjs","/Users/akgngr/httpd/astro-mosaik-russelsheim/src/pages/spenden.astro?astro&type=script&index=0&lang.ts":"_astro/spenden.astro_astro_type_script_index_0_lang.Cd5AgaYE.js","/Users/akgngr/httpd/astro-mosaik-russelsheim/src/components/btn_transparent.astro?astro&type=script&index=0&lang.ts":"_astro/btn_transparent.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","/Users/akgngr/httpd/astro-mosaik-russelsheim/src/components/slideshow/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DWYb1WGM.js","/Users/akgngr/httpd/astro-mosaik-russelsheim/src/components/activites/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BhPgaj46.js","/Users/akgngr/httpd/astro-mosaik-russelsheim/src/layouts/header/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.nFKwR3u9.js","/Users/akgngr/httpd/astro-mosaik-russelsheim/node_modules/.pnpm/sanity@3.68.3_@emotion+is-prop-valid@1.2.2_@types+babel__core@7.20.5_@types+node@22.10.2_@typ_e35ze6wadhf3jt43l5hlfas6hy/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.Va412yqq.js","/Users/akgngr/httpd/astro-mosaik-russelsheim/node_modules/.pnpm/sanity@3.68.3_@emotion+is-prop-valid@1.2.2_@types+babel__core@7.20.5_@types+node@22.10.2_@typ_e35ze6wadhf3jt43l5hlfas6hy/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.CGt_oyrh.js","/Users/akgngr/httpd/astro-mosaik-russelsheim/node_modules/.pnpm/sanity@3.68.3_@emotion+is-prop-valid@1.2.2_@types+babel__core@7.20.5_@types+node@22.10.2_@typ_e35ze6wadhf3jt43l5hlfas6hy/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.D4KBPein.js","/Users/akgngr/httpd/astro-mosaik-russelsheim/node_modules/.pnpm/sanity@3.68.3_@emotion+is-prop-valid@1.2.2_@types+babel__core@7.20.5_@types+node@22.10.2_@typ_e35ze6wadhf3jt43l5hlfas6hy/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.CI-RYFXe.js","/Users/akgngr/httpd/astro-mosaik-russelsheim/node_modules/.pnpm/@sanity+client@6.24.1_debug@4.4.0/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.Dnb2kpX3.js","/Users/akgngr/httpd/astro-mosaik-russelsheim/node_modules/.pnpm/sanity@3.68.3_@emotion+is-prop-valid@1.2.2_@types+babel__core@7.20.5_@types+node@22.10.2_@typ_e35ze6wadhf3jt43l5hlfas6hy/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.5scDHcVZ.js","/Users/akgngr/httpd/astro-mosaik-russelsheim/node_modules/.pnpm/sanity@3.68.3_@emotion+is-prop-valid@1.2.2_@types+babel__core@7.20.5_@types+node@22.10.2_@typ_e35ze6wadhf3jt43l5hlfas6hy/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.DSEH2Rm-.js","/Users/akgngr/httpd/astro-mosaik-russelsheim/node_modules/.pnpm/sanity@3.68.3_@emotion+is-prop-valid@1.2.2_@types+babel__core@7.20.5_@types+node@22.10.2_@typ_e35ze6wadhf3jt43l5hlfas6hy/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.aGyQWftJ.js","@astrojs/react/client.js":"_astro/client.CR_6AO3Y.js","/Users/akgngr/httpd/astro-mosaik-russelsheim/src/components/projekt/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.B6Zh2ZoW.js","/Users/akgngr/httpd/astro-mosaik-russelsheim/node_modules/.pnpm/sanity@3.68.3_@emotion+is-prop-valid@1.2.2_@types+babel__core@7.20.5_@types+node@22.10.2_@typ_e35ze6wadhf3jt43l5hlfas6hy/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.CPeGKvVr.js","/Users/akgngr/httpd/astro-mosaik-russelsheim/node_modules/.pnpm/@sanity+astro@3.1.9_@sanity+client@6.24.1_@sanity+visual-editing@2.11.3_@sanity+client@6.24.1_adlcyolxxn7let4fz5e4pejtby/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.BvzCXHfs.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/akgngr/httpd/astro-mosaik-russelsheim/src/components/btn_transparent.astro?astro&type=script&index=0&lang.ts",""],["/Users/akgngr/httpd/astro-mosaik-russelsheim/src/components/slideshow/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.querySelectorAll(\"#slides > div\"),l=document.getElementById(\"prev\"),c=document.getElementById(\"next\");let e=0;function n(i){t.forEach((s,r)=>{s.style.opacity=r===i?1:0})}function d(){e=(e+1)%t.length,n(e)}function o(){e=(e-1+t.length)%t.length,n(e)}n(e),c.addEventListener(\"click\",d),l.addEventListener(\"click\",o),setInterval(d,5e3)});"],["/Users/akgngr/httpd/astro-mosaik-russelsheim/src/layouts/header/index.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"menu-button\"),e=document.getElementById(\"menu\");t&&e&&t.addEventListener(\"click\",()=>{e.classList.contains(\"hidden\")?(e.classList.remove(\"hidden\"),document.body.style.overflow=\"hidden\"):(e.classList.add(\"hidden\"),document.body.style.overflow=\"\")});t.addEventListener(\"click\",()=>{t.classList.toggle(\"active\"),e.classList.toggle(\"active\")});"]],"assets":["/_astro/dialog.BSNSnhmQ.png","/_astro/index.BZQRdW8Q.css","/_astro/studio-route.BTiCxN5L.css","/Kooperation-mit-Projekt-auf.jpg","/favicon.svg","/mosaikev_logo.svg","/mosaikevlogo.png","/slide1.jpg","/style.css","/_astro/ViteDevServerStopped.CI-RYFXe.js","/_astro/browser.DFztJi3A.js","/_astro/client.CR_6AO3Y.js","/_astro/client.Dc_o9dEB.js","/_astro/index.DSEH2Rm-.js","/_astro/index.astro_astro_type_script_index_0_lang.B6Zh2ZoW.js","/_astro/index.astro_astro_type_script_index_0_lang.BhPgaj46.js","/_astro/index2.aGyQWftJ.js","/_astro/index3.CPeGKvVr.js","/_astro/resources.Va412yqq.js","/_astro/resources2.D4KBPein.js","/_astro/resources3.CGt_oyrh.js","/_astro/resources4.5scDHcVZ.js","/_astro/spenden.astro_astro_type_script_index_0_lang.Cd5AgaYE.js","/_astro/stegaEncodeSourceMap.Dnb2kpX3.js","/_astro/studio-component.BvzCXHfs.js","/_astro/studio-component.DtClU_0u.js","/_astro/swiper.DV8PrLMj.css","/_astro/swiper.Q9gGecdY.js","/projekt/index.html","/spenden/index.html","/uber-uns/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"CAn+er095VcxzKiJCOJX+OB4TiISHpPDH0mYESEAcu4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
