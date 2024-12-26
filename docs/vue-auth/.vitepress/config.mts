import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Authenticator",
  base: "/vue-component-pack/vue-auth",
  description: "Advanced authentication plugin for Vue 3.",
  head: [
    ['link', { rel: 'icon', href: '/vue-component-pack/vue-auth/images/banner.png' }],
    ['meta', {
      name: 'author',
      content: 'Toneflix Code.',
    }],
  ],
  themeConfig: {
    logo: '/images/banner.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Get Started', link: '/get-started' },
      { text: 'API', link: '/api' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Usage', link: '/usage' },
          { text: 'Setup', link: '/setup' },
          { text: 'Authenticated User', link: '/auth-user' },
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Inline Mode', link: '/inline-usage' },
          { text: 'Middlewares', link: '/middlewares' },
        ]
      },
      {
        text: 'API and Typescript',
        items: [
          { text: 'API', link: '/api' },
          { text: 'Typescript', link: '/typescript' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/toneflix/vue-component-pack/tree/main/packages/vue-auth' }
    ],

  }
})
