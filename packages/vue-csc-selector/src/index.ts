import type { App, Plugin } from 'vue'

import _CscSelector from './components/csc-selector.vue'

type SFCWithInstall<T> = T & Plugin

const withInstall = <T> (comp: T) => {
  ; (comp as SFCWithInstall<T>).install = (app: App) => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const name: string = (comp as any).name
    // register component
    app.component(name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}

export const CscSelector = withInstall(_CscSelector)
export default CscSelector
