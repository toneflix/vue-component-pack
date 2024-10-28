// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import OtpInput from '@toneflix/otp-input/src/index';

export default {
  extends: DefaultTheme,
  enhanceApp ({ app }) {
    app.use(OtpInput)
  }
} satisfies Theme
