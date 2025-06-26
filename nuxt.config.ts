export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/variables" as *;'
        }
      }
    }
  },
  app: {
    head: {
      meta: [{ name: "viewport", content: "initial-scale=1, maximum-scale=1, user-scalable=no" }],
    }
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://porngamestown.com'
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    'vue3-carousel-nuxt',
    '@nuxtjs/device'
  ]
})