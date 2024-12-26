// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { VueTrix } from '@toneflix/vue-trix/src/index';
import 'trix/dist/trix.css'

export default {
  extends: DefaultTheme,
  enhanceApp ({ app }) {
    app.component('vue-trix', VueTrix)
  }
} satisfies Theme
