// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  ui: {
    colorMode: false,
    fonts: false,
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/i18n",
  ],
  // vite: {
  //   base: "/",
  //   build: {
  //     sourcemap: false,
  //   },
  // },

  // Configuración de @nuxt/image (si lo usas)
  // image: {
  //   dir: "public",
  // },

  i18n: {
    defaultLocale: "es",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
    },
    lazy: true,
    locales: [
      { code: "es", name: "Español", file: "es.json" },
      { code: "ru", name: "Русский", file: "ru.json" },
    ],
  },
});
