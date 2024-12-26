import { VNode } from 'vue'
import type { EventsDef, GlobalComponentConstructor } from './src/types'

/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VueTrix: GlobalComponentConstructor<
      EventsDef & {
        /**
         * Emitted when the component needs to change the model; Is also used by v-model
         * @param value New model value
         */
        'onUpdate:modelValue'?: (value: any) => void
      },
      {
        /**
         * Default slot can be used as label, unless 'label' prop is specified; Suggestion: string
         */
        default: () => VNode[]
      }
    >
  }
}
export {}
