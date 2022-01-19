import { resolve } from 'path';
import { defineNuxtConfig } from 'nuxt3';
import { createCommonJS } from 'mlly';
const { __dirname } = createCommonJS(import.meta.url);

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    hooks: {
        'pages:extend'(pages) {
            pages.push({
                name: 'books',
                path: '/books/:type',
                file: resolve(__dirname, './pages/books.vue'),
            });
        },
    },
});
