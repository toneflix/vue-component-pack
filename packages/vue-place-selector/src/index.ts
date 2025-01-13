import type { App, Plugin } from 'vue'

import _VuePlaceSelector from './components/place-selector.vue'

type SFCWithInstall<T> = T & Plugin

const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const name: string = (comp as any).name
    // register component
    app.component(name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}

export const VuePlaceSelector = withInstall(_VuePlaceSelector)
export default VuePlaceSelector
