// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  async enhanceApp ({ app }) {
    if (!import.meta.env.SSR) {
      const PaystackPage = await import('./PaystackPage.vue')
      app.component('paystack-inline', PaystackPage.default)
    }
  }
} satisfies Theme
