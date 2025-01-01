import { s as sanityClient } from '../chunks/page-ssr_Cc0-Qqx_.mjs';
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_BITgS1cK.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_DPPCtE2r.mjs';
import imageUrlBuilder from '@sanity/image-url';
import { $ as $$H1 } from '../chunks/h1_DVTceIWj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageParam = Astro2.url.searchParams.get("page");
  const currentPage = pageParam ? Math.max(1, parseInt(pageParam, 10)) : 1;
  console.log("Sanity page: " + currentPage);
  const postsPerPage = 12;
  const pageIndex = currentPage - 1;
  const { projectId, dataset } = sanityClient.config();
  const urlFor = (source) => projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;
  const COLLECTION_FRAGMENT = (
    /* groq */
    `
  *[_type == "post" && defined(slug.current)]
`
  );
  const query = (
    /* groq */
    `{
  "items": ${COLLECTION_FRAGMENT}
    | order(publishedAt desc)
    [($pageIndex * ${postsPerPage})...($pageIndex + 1) * ${postsPerPage}] {
      _id,
      title,
      slug,
      image,
      publishedAt,
    },
  "pagination": {
    "totalPageCount": count(${COLLECTION_FRAGMENT}) / ${postsPerPage},
    "currentPage": $pageIndex + 1,
  }
}`
  );
  const { items: posts, pagination } = await sanityClient.fetch(query, {
    pageIndex
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Blog Posts" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto min-h-[calc(100vh-120px)] w-10/12 py-8"> ${renderComponent($$result2, "H1", $$H1, {}, { "default": ($$result3) => renderTemplate`Projekt` })} ${posts.length === 0 ? renderTemplate`<div class="text-center py-10"> <p class="text-gray-600">Loading posts...</p> </div>` : renderTemplate`<ul class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`<li class="hover:shadow-lg transition-shadow duration-200 rounded-lg overflow-hidden"> <a${addAttribute(`/projekt/${post.slug.current}`, "href")} class="block"> ${post.image && renderTemplate`<div class="aspect-video overflow-hidden"> <img${addAttribute(urlFor(post.image.asset._ref)?.width(550).height(310).url(), "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover transition-transform duration-200 hover:scale-105"> </div>`} <div class="p-4"> <h2 class="text-xl font-semibold mb-2">${post.title}</h2> <p class="text-gray-600 text-sm"> ${new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </p> </div> </a> </li>`)} </ul>`}  <div class="flex justify-center gap-4 mt-12"> <nav class="flex items-center gap-2" aria-label="Pagination">  ${pagination.currentPage > 1 && renderTemplate`<a${addAttribute(`/projekt?page=${pagination.currentPage - 1}`, "href")} class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200" aria-label="Previous page">
Previous
</a>`}  <div class="flex gap-2"> ${Array.from(
    { length: Math.ceil(pagination.totalPageCount) },
    (_, i) => i + 1
  ).map((pageNum) => renderTemplate`<a${addAttribute(`/projekt?page=${pageNum}`, "href")}${addAttribute(`px-4 py-2 rounded-md transition-colors duration-200 ${pagination.currentPage === pageNum ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, "class")}${addAttribute(
    pagination.currentPage === pageNum ? "page" : void 0,
    "aria-current"
  )}> ${pageNum} </a>`)} </div>  ${pagination.currentPage < Math.ceil(pagination.totalPageCount) && renderTemplate`<a${addAttribute(`/projekt?page=${pagination.currentPage + 1}`, "href")} class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200" aria-label="Next page">
Next
</a>`} </nav> </div>  <div class="text-center mt-4 text-sm text-gray-600">
Page ${pagination.currentPage} of${" "} ${Math.ceil(pagination.totalPageCount)} </div> </div> ` })}`;
}, "/Users/akgngr/httpd/astro-mosaik-russelsheim/src/pages/projekt/index.astro", void 0);

const $$file = "/Users/akgngr/httpd/astro-mosaik-russelsheim/src/pages/projekt/index.astro";
const $$url = "/projekt";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
