export default defineNuxtConfig({
  devtools: { enabled: false },
  components: true,
  modules: ["@nuxtjs/fontaine", "@vite-pwa/nuxt", "@nuxt/image", "nuxt-delay-hydration", "@nuxtjs/partytown"],

  delayHydration: {
    debug: process.env.NODE_ENV === "development",
    mode: "init",
  },

  compatibilityDate: "2025-01-13"
});