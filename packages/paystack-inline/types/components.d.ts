import type { GlobalComponentConstructor, PaystackInlineProps } from './types'

/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PaystackInline: GlobalComponentConstructor<
      PaystackInlineProps & {
        /**
         * Emitted when the component is ready
         */
        onReady?: () => void
        /**
         * Emitted when the payment has been verified successfully
         */
        onVerified?: (response: { message?: string; status: boolean }) => void
        /**
         * Emitted when the payment was successfull
         */
        onSuccess?: (response: { message?: string; status: boolean }) => void
        /**
         * Emitted when the payment is canceled
         */
        onCanceled?: (response: { reference: string }) => void
        /**
         * Emitted when the component is unmounted
         */
        onDestroyed?: () => void
        /**
         * Emitted when there is an error with the payment
         */
        onError?: (error: { message: string }, reference?: string) => void
        /**
         * Emitted when the payment initialization is successfull
         */
        onInitialized?: (data: { reference: string; authorization_url?: string; message?: string }) => void
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
