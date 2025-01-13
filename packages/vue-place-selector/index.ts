import type { App } from 'vue'
import { VuePlaceSelector } from './src/index'

export { VuePlaceSelector } from './src/index'

export default {
  install: (app: App): void => {
    app.use(VuePlaceSelector)
  }
}
