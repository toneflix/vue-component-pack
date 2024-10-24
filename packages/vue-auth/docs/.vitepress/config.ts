import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Paystack Inline",
  base: "/vue-component-pack/paystack-inline",
  description: "Vue Paystack Inline documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/get-started' },
      { text: 'Demo', link: '/demo' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Props', link: '/props' },
          { text: 'Events', link: '/events' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/toneflix/vue-component-pack/tree/main/packages/paystack-inline' }
    ],

  }
})
