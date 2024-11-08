import type { ComponentConstructor, VueFormProps, VueFormSlots } from './src/types'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VueForms: ComponentConstructor<
      VueFormProps & {
        /**
         * Emitted when the component needs to change the model; Is also used by v-model
         * @param value New model value
         */
        'onUpdate:modelValue'?: (value: unknown) => void
        /**
         * Emitted when the cancel button is clicked
         */
        onCancel?: () => void
        /**
         * Emitted when the submit button is clicked
         */
        onSubmit?: () => void
      },
      VueFormSlots
    >
  }
}
export {}
