// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      titleTemplate: 'MJ Blog | %s',
      link: [
        { rel: "icon", type: "image/svg", href: "/favicon.svg" }
      ],
      htmlAttrs: {
        lang: "en",
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  content: {
    highlight: {
      langs: ['javascript', 'python', 'shell', 'typescript', 'json', 'yaml', 'css', 'html', 'markdown', 'bash', 'dockerfile'],
      theme: {
        default: "catppuccin-mocha",
        dark: "github-dark",
      },
    }
  },
  routeRules : {
    '/':  {prerender: true},
  },
  modules: ["@nuxt/content", 'nuxt-icon']
})