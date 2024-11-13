import type { App } from 'vue'
import { DataViewer } from './src/index'

export { DataViewer, MainContent, TBtn } from './src/index'

export default {
  install: (app: App): void => {
    app.use(DataViewer)
  }
}
