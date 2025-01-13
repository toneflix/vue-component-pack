import type { App } from 'vue'
import { CscSelector } from './src/index'

export { CscSelector } from './src/index'

export default {
  install: (app: App): void => {
    app.use(CscSelector)
  }
}
