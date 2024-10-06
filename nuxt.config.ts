// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@/assets/css/main.scss'],
  ssr: false,

  build: {
    transpile: ["vuetify"],
  },

  runtimeConfig: {
    spaceId: process.env.SPACE_ID,
    apiAccessToken: process.env.API_ACCESS_TOKEN,
    public: {
      apiBase: process.env.PUBLIC_API_BASE
    }
  },

  devtools: { enabled: true },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
    '@pinia/nuxt',
    '@nuxt/test-utils/module'
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  compatibilityDate: '2024-10-06',
});