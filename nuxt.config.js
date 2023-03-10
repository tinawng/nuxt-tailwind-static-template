// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  
  nitro: { compressPublicAssets: true },

  modules: [
    ['@nuxtjs/tailwindcss'],
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }]
  ],

  imports: {
    dirs: ['stores'],
  },

  css: [
    "@/assets/css/base.postcss"
  ],

  app: {
    head: {
      title: 'Template',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
      meta: [
        { hid: 'description', name: 'description', content: 'Tina Nuxt/Tailwind Template' },
      ]
    }
  }
})
