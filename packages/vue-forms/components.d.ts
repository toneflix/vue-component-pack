import type { ComponentConstructor, VueFormProps, VueFormSlots } from './src/types'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VueForms: ComponentConstructor<
      VueFormProps,
      VueFormSlots
    >
  }
}
export { }
