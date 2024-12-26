// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  async enhanceApp ({ app }) {
    if (!import.meta.env.SSR) {
      const VueTrix = await import('@toneflix/vue-trix')
      app.use(VueTrix.default)
    }
  }
} satisfies Theme
