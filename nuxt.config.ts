// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_URL,
    }
  },
  css: [
    '@/scss/styles.scss', 
    'primeicons/primeicons.css',
  ]
})
