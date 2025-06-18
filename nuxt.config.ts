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
  runtimeConfig: {
    public: {
      apiBase: 'https://porngamestown.com'
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', 'vue3-carousel-nuxt']
})