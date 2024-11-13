import type { App } from 'vue'
import { VueForms } from './src/index'

export {
  VueForms,
  InputField,
  InputRadio,
  InputSelect,
  FormActions,
  InputSwitch,
  InputCheckbox,
  InputTextarea
} from './src/index'

export default {
  install: (app: App): void => {
    app.use(VueForms)
  }
}
