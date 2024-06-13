// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  experimental: {
    typedPages: true,
  },
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
    navigation: {
      fields: ['date']
    },
    highlight: {
      langs: ['javascript', 'python', 'shell', 'typescript', 'json', 'yaml', 'css', 'html', 'markdown', 'bash', 'dockerfile', 'vue'],
      theme: {
        default: "dark-plus",
        dark: "github-dark",
      },
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/blog/**': { isr: true },
    '/projects/**': { ssr: false }
  },
  ogImage: {
    defaults: {
      extension: 'jpeg',
      cacheMaxAgeSeconds: 10, // to do remove this
    },
  },
  modules: [
    "@nuxt/content",
    'nuxt-icon',
    "@nuxt/image",
    "@nuxtjs/seo",
    "nuxt-og-image"
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/blog']
    }
  }
})