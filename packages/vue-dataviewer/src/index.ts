import type { App, Plugin } from 'vue'

import _DataViewer from './components/data-viewer.vue'

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

export const DataViewer = withInstall(_DataViewer)
export default DataViewer
