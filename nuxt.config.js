import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  /*
   ** Headers of the page
   */
  bridge: false, // Temporarily disable bridge integration
  target: 'static',
  server: {
    port: 8080,
  },
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // modules to load
  modules: [],

  // Build Modules before loading app
  buildModules: [
    // "@nuxtjs/tailwindcss",
    "nuxt-windicss"
  ],
  /*
   ** Global CSS and Highlight.js theme
   */
  css: [
    "~/css/main.css",
    // { src: '~/node_modules/highlight.js/styles/night-owl.css', lang: 'css' },
    // I also like darcula
  ],
  tailwindcss: {
    viewer: false
  },
  /*
   ** Environment variables
   */
})
