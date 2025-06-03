// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  ui: {
    colorMode: false,
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/i18n",
  ],

  image: {
    provider: "static",
  },
  i18n: {
    defaultLocale: "es",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
    },
    baseUrl: "http://localhost:3000", // Ajusta según tu entorno
    lazy: true,
    locales: [
      { code: "es", name: "Español", file: "es.json" },
      { code: "ru", name: "Русский", file: "ru.json" },
    ],
  },
});
