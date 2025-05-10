// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui'
  ],
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_API_KEY,
      apiBase: process.env.NUXT_API_BASE_URL
    }
  }
})