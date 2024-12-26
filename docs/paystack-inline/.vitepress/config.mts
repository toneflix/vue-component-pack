import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Paystack Inline",
  base: "/vue-component-pack/paystack-inline",
  description: "Vue Paystack Inline documentation",
  head: [
    ['link', { rel: 'icon', href: '/vue-component-pack/paystack-inline/images/banner.png' }],
    ['meta', {
      name: 'author',
      content: 'Toneflix Code.',
    }],
  ],
  themeConfig: {
    logo: '/images/banner.png',
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
