import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    
    css: ["~/assets/css/tailwind.css", "~/assets/css/base.postcss"],
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
    },
})
