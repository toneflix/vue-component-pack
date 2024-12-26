import type { App } from 'vue'
import { VueTrix } from './src/index'

export { VueTrix } from './src/index'

export default {
  install: (app: App): void => {
    app.config.compilerOptions.isCustomElement = tag => tag.startsWith('trix')
    app.use(VueTrix as never)
  }
}
