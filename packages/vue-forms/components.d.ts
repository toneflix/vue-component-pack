import type { ComponentConstructor, FormField, GroupMeta } from './src/types'

interface SlotScope extends FormField {
  modelValue: FormField['value']
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VueForms: ComponentConstructor<{
      fields?: FormField[];
      loading?: boolean
      useGrid?: boolean;
      rounded?: boolean;
      bordered?: boolean;
      separator?: boolean;
      groupMeta?: GroupMeta;
      hideSubmit?: boolean;
      hideCancel?: boolean;
      cancelLabel?: string;
      submitLabel?: string;
      showGroupLabels?: boolean;
      modelValue: { [key: FormField['name']]: FormField['value'] }
    }, {
      /**
       * This is where default content goes
       */
      default: () => VNode[];
      /**
       * Slot for overiding input components
       */
      input: (scope: SlotScope) => VNode[];
      /**
       * Slot for overiding select component
       */
      select: (scope: SlotScope) => VNode[];
      /**
       * Slot for overiding checkbox component
       */
      checkbox: (scope: SlotScope) => VNode[];
      /**
       * Slot for overiding radio component
       */
      radio: (scope: SlotScope) => VNode[];
      /**
       * Slot for overiding switch component
       */
      switch: (scope: SlotScope) => VNode[];
    }>
  }
}
export { }
