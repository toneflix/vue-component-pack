import type { App } from 'vue'
import { OtpInput } from './src/index'

export { OtpInput } from './src/index'

export default {
  install: (app: App): void => {
    app.use(OtpInput)
  }
}
