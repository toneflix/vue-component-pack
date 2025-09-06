import type { GlobalComponentConstructor, PaystackInlineProps } from '.'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PaystackInline: GlobalComponentConstructor<
      PaystackInlineProps & {
        /**
         * Emitted when the component is ready
         */
        onReady?: (() => void) | undefined
        /**
         * Emitted when the payment has been verified successfully
         */
        onVerified?:
        | ((response: { message?: string | undefined; status: boolean }) => void)
        | undefined
        /**
         * Emitted when the payment was successfull
         */
        onSuccess?:
        | ((response: { message?: string | undefined; status: boolean }) => void)
        | undefined
        /**
         * Emitted when the payment is canceled
         */
        onCanceled?: ((response: { reference: string }) => void) | undefined
        /**
         * Emitted when the component is unmounted
         */
        onDestroyed?: (() => void) | undefined
        /**
         * Emitted when there is an error with the payment
         */
        onError?: ((error: { message: string }, reference?: string | undefined) => void) | undefined
        /**
         * Emitted when the payment initialization is successfull
         */
        onInitialized?:
        | ((data: {
          reference: string
          authorization_url?: string | undefined
          message?: string | undefined
        }) => void)
        | undefined
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
export { }
