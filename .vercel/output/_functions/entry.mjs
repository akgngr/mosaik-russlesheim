import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B7qLwx1H.mjs';
import { manifest } from './manifest_O173Edj7.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/projekt/_slug_.astro.mjs');
const _page2 = () => import('./pages/projekt.astro.mjs');
const _page3 = () => import('./pages/spenden.astro.mjs');
const _page4 = () => import('./pages/studio/_---params_.astro.mjs');
const _page5 = () => import('./pages/uber-uns.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.1.1_@types+node@22.10.2_jiti@2.4.2_rollup@4.29.1_terser@5.37.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/projekt/[slug].astro", _page1],
    ["src/pages/projekt/index.astro", _page2],
    ["src/pages/spenden.astro", _page3],
    ["node_modules/.pnpm/@sanity+astro@3.1.9_@sanity+client@6.24.1_@sanity+visual-editing@2.11.3_@sanity+client@6.24.1_adlcyolxxn7let4fz5e4pejtby/node_modules/@sanity/astro/dist/studio/studio-route.astro", _page4],
    ["src/pages/uber-uns.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "297be2d5-8078-4e49-b996-da5840a26202",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
