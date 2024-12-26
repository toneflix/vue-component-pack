import { VNode } from 'vue'
import type { EventsDef, GlobalComponentConstructor } from './src/types'

/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VueTrix: GlobalComponentConstructor<
      EventsDef,
      {
        /**
         * Default slot can be used as label, unless 'label' prop is specified; Suggestion: string
         */
        default: () => VNode[]
      }
    >
  }
}
export { }
