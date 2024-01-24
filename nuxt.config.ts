// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@/assets/css/main.scss'],
  build: {
    transpile: ["vuetify"],
  },

  runtimeConfig: {
    spaceId: process.env.NUXT_SPACE_ID,
    apiAccessToken: process.env.NUXT_API_ACCESS_TOKEN,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
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
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
