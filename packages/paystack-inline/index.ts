import type { App } from 'vue'
import { PaystackInline } from './src/index'

export { PaystackInline } from './src/index'

export default {
  install: (app: App): void => {
    app.use(PaystackInline)
  }
}
