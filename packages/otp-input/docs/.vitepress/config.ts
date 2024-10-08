import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue OTP Input",
  base: "/vue-component-pack/otp-input",
  description: "Vue OTP Input documentation",
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
      { icon: 'github', link: 'https://github.com/toneflix/vue-component-pack/tree/main/packages/otp-input' }
    ]
  }
})
