import type {
  MainProps,
  GlobalComponentConstructor,
  MainContentProps,
  DataViewerProps
} from './src/types'

/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DataViewer: GlobalComponentConstructor<
      DataViewerProps &
        MainProps & {
          /**
           * Emitted when the component needs to change the model; Is also used by v-model
           * @param value New model value
           */
          'onUpdate:modelValue'?: (value: any) => void
          /**
           * Emited when the dialog is toggled
           * @param data
           * @param mode
           * @returns
           */
          toggleDialog: (data: any, mode: MainProps['mode']) => void
          /**
           * Emited when the data is updated
           * @param data
           * @returns
           */
          'onUpdate:data': (data: MainProps['data']) => void
          /**
           * Emited when the save button is clicked
           * @param data
           * @returns
           */
          'click:save': (data: any) => void
        },
      {
        /**
         * Default slot can be used as label, unless 'label' prop is specified; Suggestion: string
         */
        default: () => VNode[]
      }
    >
    MainContent: GlobalComponentConstructor<
      MainContentProps &
        MainProps & {
          /**
           * Emitted when the component needs to change the model; Is also used by v-model
           * @param value New model value
           */
          'onUpdate:modelValue'?: (value: any) => void
          /**
           * Emited when the dialog is toggled
           * @param data
           * @returns
           */
          toggleDialog?: (state: boolean) => void
          /**
           * Emited when the data needs to change
           * @param data
           * @returns
           */
          'onUpdate:data'?: (data: MainProps['data']) => void
          /**
           * Emited when the form data needs to change
           * @param data
           * @returns
           */
          'onUpdate:form'?: (data: { [key: string]: any }) => void
          /**
           * Emited when the save button is clicked
           * @param data
           * @returns
           */
          'click:save'?: (data: any) => void
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
