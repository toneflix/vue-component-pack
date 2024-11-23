import type { App, Plugin } from 'vue'

import _FormActions from './components/form-actions.vue'
import _InlineForm from "./components/inline-form.vue";
import _InputCheckbox from './components/input-checkbox.vue'
import _InputField from './components/input-field.vue'
import _InputRadio from './components/input-radio.vue'
import _InputSelect from './components/input-select.vue'
import _InputSwitch from './components/input-switch.vue'
import _InputTextarea from './components/input-textarea.vue'
import _VueForms from './components/vue-forms.vue'

type SFCWithInstall<T> = T & Plugin

const withInstall = <T> (comp: T) => {
  ; (comp as SFCWithInstall<T>).install = (app: App) => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const name = (comp as any).name
    // register component
    app.component(name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}

export const VueForms = withInstall(_VueForms)
export const InputField = _InputField
export const InlineForm = _InlineForm
export const InputRadio = _InputRadio
export const InputSelect = _InputSelect
export const FormActions = _FormActions
export const InputSwitch = _InputSwitch
export const InputCheckbox = _InputCheckbox
export const InputTextarea = _InputTextarea
export default VueForms
