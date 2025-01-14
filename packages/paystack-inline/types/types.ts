import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from 'vue'

import { RouteLocationRaw } from 'vue-router'

type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps

/* eslint-disable @typescript-eslint/no-empty-object-type */
export type GlobalComponentConstructor<Props = {}, Slots = {}> = new () => {
  $props: PublicProps & Props
  $slots: Slots
}

export type PaystackInlineProps = {
  /**
   * The amount to charge the customer
   */
  amount: number
  /**
   * Wether the transaction should be handled by Paystack inline-js or payment page
   */
  inline?: boolean | undefined
  /**
   * The component will not be visible, usefull for inline verification
   */
  hidden?: boolean | undefined
  /**
   * Show tooltip on the payment button
   */
  tooltip?: string | undefined
  /**
   * The customer details
   */
  customer: { email: string; phone?: string | undefined; name?: string | undefined }
  /**
   * The label on the payment button
   */
  btnLabel?: string | undefined
  /**
   * Your paystack public key
   */
  publicKey: string
  /**
   * Component will not attempt to verify the transaction even when a reference is available on the url
   */
  dontVerify?: boolean | undefined
  /**
   * An Icon to show on the tooltip
   */
  tooltipIcon?: string | undefined
  /**
   * User will be redirected to this route after payment has been verified
   * Ignored when verifyCallback is not provided
   */
  redirectRoute?: RouteLocationRaw | undefined
  /**
   * Will be called to verify the transaction
   *
   * @param reference
   */
  verifyCallback?: (reference: string) =>
    | (
        | Promise<{
            status: boolean
            message?: string | undefined
          }>
        | Promise<undefined>
        | undefined
      )
    | undefined
  /**
   * Will be called before we initialize the transaction, usefull if you need to initialize transaction from server
   */
  initializeCallback?:
    | (() =>
        | Promise<{
            message?: string | undefined
            reference: string
            authorization_url?: string | undefined
          }>
        | Promise<undefined>
        | undefined)
    | undefined
}
