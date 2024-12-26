import type { App, Plugin } from 'vue'

import _VueTrix from './components/vue-trix.vue'

type SFCWithInstall<T> = T & Plugin

const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const name: string = (comp as any).name
    // register component

    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('trix')
    app.component(name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}

export const VueTrix = withInstall(_VueTrix)
export default VueTrix
