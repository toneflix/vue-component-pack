import type { App } from 'vue'
import { VueForms } from './src/index'

export { VueForms } from './src/index'

export default {
    install: (app: App): void => {
        app.use(VueForms)
    }
}
