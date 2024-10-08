// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// import PaystackInline from '../../../src/index'
import './custom.css'
import PaystackPage from './PaystackPage.vue'

export default {
  extends: DefaultTheme,
  enhanceApp ({ app }) {
    // app.use(PaystackPage)
    app.component('paystack-inline', PaystackPage)
  }
} satisfies Theme
