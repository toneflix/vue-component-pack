import type { App } from 'vue'
import { VueForms } from './src/index'
import _FormActions from './src/components/form-actions.vue'
import _InputCheckbox from './src/components/input-checkbox.vue'
import _InputField from './src/components/input-field.vue'
import _InputRadio from './src/components/input-radio.vue'
import _InputSelect from './src/components/input-select.vue'
import _InputSwitch from './src/components/input-switch.vue'
import _InputTextarea from './src/components/input-textarea.vue'

export { VueForms } from './src/index'
export const InputField = _InputField
export const InputRadio = _InputRadio
export const InputSelect = _InputSelect
export const FormActions = _FormActions
export const InputSwitch = _InputSwitch
export const InputCheckbox = _InputCheckbox
export const InputTextarea = _InputTextarea

export default {
  install: (app: App): void => {
    app.use(VueForms)
  }
}
