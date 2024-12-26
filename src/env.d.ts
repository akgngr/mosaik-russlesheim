/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />
/// <reference types="@sanity/image-url" />
/// <reference types="@sanity/image-url/lib/types/types" />


interface ImportMetaEnv {
    readonly PUBLIC_SANITY_PROJECT_ID: string;
    readonly PUBLIC_SANITY_DATASET: string;
    readonly PUBLIC_SANITY_CDN: boolean;
    // more env variables...
}