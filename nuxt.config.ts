// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/svg", href: "/favicon.svg" }
      ]
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
        default: "one-dark-pro",
        dark: "github-dark",
      },
    },
    documentDriven: {
      layoutFallbacks: ['article'],
    }
  },
  modules: ["@nuxt/content", 'nuxt-icon']
})