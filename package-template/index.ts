import type { App } from 'vue'
import { DummyComp } from './src/index'

export { DummyComp } from './src/index'

export default {
  install: (app: App): void => {
    app.use(DummyComp)
  }
}
