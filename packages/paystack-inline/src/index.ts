import type { App, Plugin } from 'vue'

import _PaystackInline from './components/paystack-inline.vue'

type SFCWithInstall<T> = T & Plugin

const withInstall = <T> (comp: T) => {
  ; (comp as SFCWithInstall<T>).install = (app: App) => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const name = (comp as any).name
    // register component
    app.component(name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}

export const PaystackInline = withInstall(_PaystackInline)
export * from './types'

export default {
  install: (app: App): void => {
    app.use(PaystackInline)
  }
}
