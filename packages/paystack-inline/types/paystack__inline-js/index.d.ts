interface PopupTransactionData {
  /**
   * Transaction id, if loaded
   */
  id: string
  /**
   * Status of the transaction
   */
  status: null | 'error' | 'abandoned' | 'auth' | 'failed' | 'success' | 'pending'
  /**
   * List of transaction errors, if any
   */
  errors: string[]
  /**
   * API response from last charge attempt
   */
  response: Record<string, string>
  /**
   * Checkout url if transaction is loaded
   */
  checkoutUrl: string
}

interface PopupTransaction {
  /**
   * This method returns all available transaction information.
   * This is populated throughout the lifecycle of the transaction.
   *
   * @returns
   */
  getStatus: () => PopupTransactionData
}

interface NewTransactionOptions {
  /**
   * Your Paystack public key. You can find this on your dashboard in Settings > API Keys & Webhooks
   */
  key: string
  /**
   * The amount of the transaction in kobo
   */
  amount: number
  /**
   * The currency of the transaction. Available options in PaystackPop.CURRENCIES object
   */
  currency?: string | undefined
  /**
   * The email address of the customer
   */
  email: string
  /**
   * The first name of the customer
   */
  firstName?: string | undefined
  /**
   * The last name of the customer
   */
  lastName?: string | undefined
  /**
   * The phone number of the customer
   */
  phone?: string | undefined
  /**
   * A valid Paystack customer code. If provided, this overrides all the customer information above
   */
  customerCode?: string | undefined
  /**
   * An array of payment channels to use. By default, all options available in in PaystackPop.CHANNELS are used
   */
  channels?:
    | Array<'card' | 'apple_pay' | 'bank_transfer' | 'ussd' | 'mobile_money' | 'eft' | 'qr'>
    | undefined
  /**
   * A valid Paystack payment request id
   */
  paymentRequest?: string | undefined
  /**
   * A valid Paystack payment page id
   */
  paymentPage?: string | undefined
  /**
   * A valid object of extra information that you want to be saved to the transaction. To show this on the dashboard, see https://www.npmjs.com/package/@paystack/inline-js#tip-seeing-your-metadata-on-the-dashboard
   */
  metadata?:
    | {
        custom_fields?: Array<{
          display_name: string
          variable_name: string
          value?: string | number | undefined
        }>
      }
    | undefined
  /**
   * Unique case sensitive transaction reference. Only -,., = and alphanumeric characters allowed.
   */
  reference?: string | undefined
  /**
   * A valid Paystack split code e.g. SPL_qQsdYLXddd
   */
  split_code?: string | undefined
  /**
   * A valid Paystack subaccount code e.g. ACCT_8f4s1eq7ml6rlzj
   */
  subaccountCode?: string | undefined
  /**
   * Who bears Paystack charges? account or subaccount (defaults to account).
   */
  bearer?: 'account' | 'all' | 'subaccount' | 'all-proportional' | undefined
  /**
   * A flat fee (in kobo) to charge the subaccount for this transaction.
   * This overrides the split percentage set when the subaccount was created.
   */
  transactionCharge?: number | undefined
  /**
   * A valid Paystack plan code e.g. PLN_cujsmvoyq2209ws
   */
  planCode?: string | undefined
  /**
   * The number of subscriptions to create for this plan
   */
  subscriptionCount?: number | undefined
  /**
   * Interval for the plan. Valid intervals are hourly, daily, weekly, monthly, annually
   */
  planInterval?: 'hourly' | 'daily' | 'weekly' | 'monthly' | 'annually' | undefined
  /**
   * The number of times to charge for this subscription
   */
  subscriptionLimit?: number | undefined
  /**
   * The start date for the subscription (after the first charge)
   */
  subscriptionStartDate?: string | undefined
  /**
   * Called when the customer successfully completes a transaction
   *
   * @param tranx
   * @returns
   */
  onSuccess?:
    | ((tranx: {
        /**
         * transaction id from API
         */
        id: string
        /**
         * transaction reference
         */
        reference: string
        /**
         * message from API
         */
        message: string
        /**
         * The redirect URL configured on you paystach dashboard along with the transaction reference
         */
        redirecturl: string
        /**
         * The status of the transaction
         */
        status: 'success'
        /**
         * The transaction ID
         */
        trans: string
        /**
         * The transaction ID
         */
        transaction: string
        /**
         * transaction reference
         */
        trxref: string
      }) => void)
    | undefined
  /**
   * Called when the transaction is successful loaded and the customer can see the checkout form
   *
   * @param tranx
   * @returns
   */
  onLoad?:
    | ((tranx: {
        /**
         * customer object from API
         */
        customer: Record<string, string>
        /**
         * transaction access code
         */
        accessCode: string
      }) => void)
    | undefined
  /**
   * Called when the customer cancels the transaction
   *
   * @returns
   */
  onCancel?: (() => void) | undefined
  /**
   * Called when the transaction was not successfully loaded
   *
   * @returns
   */
  onError?:
    | ((
        /**
         * error response from API
         */
        error: {
          type: 'setup'
          message: string
        }
      ) => void)
    | undefined
}

declare module '@paystack/inline-js' {
  export default class PaystackInline {
    constructor()
    /**
     * This method starts a new transaction on the checkout form.
     * @param options
     */
    newTransaction(options: NewTransactionOptions): PopupTransaction

    isLoaded(): boolean

    resumeTransaction(
      /**
       * Access code created on the API via the https://paystack.com/docs/#initialize-a-transaction endpoint
       */
      accessCode: string,
      /**
       * Callback Definitions
       */
      callbacks?: Pick<NewTransactionOptions, 'onSuccess' | 'onCancel' | 'onError' | 'onLoad'>
    ): PopupTransaction

    /**
     * Use this to cancel a transaction and hide the checkout iFrame.
     */
    cancelTransaction(
      /**
       * ID or transaction to cancel
       */
      transaction: string | PopupTransaction
    ): void

    /**
     * This method loads a transaction on the checkout form without opening it.
     * It returns a function that can be used to open the checkout form at a later time.
     *
     * @param options
     */
    preloadTransaction(options: NewTransactionOptions): () => void

    /**
     * This method loads a transaction on the checkout form but shows a pre
     * checkout modal before loading the form if a wallet payment e.g Apple Pay is supported.
     */
    checkout(options: NewTransactionOptions): Promise<PopupTransaction>

    /**
     * This method mounts a wallet payment button e.g Apple pay on a provided div
     * and also provides the option to allow a provided button open the checkout form.
     */
    paymentRequest(
      options: NewTransactionOptions & {
        /**
         * ID of div to mount the payment request button
         */
        container: string | HTMLElement
        /**
         * ID of button to open checkout form
         */
        loadPaystackCheckoutButton?: string
        styles?: {
          theme: { [key: string]: string }
          applePay: { [key: string]: string }
        }
        /**
         * Called when the payment request button has been mounted
         *
         * @returns
         */
        onElementsMount?: ((options?: { applePay: boolean } | null | undefined) => void) | undefined
      }
    ): Promise<PopupTransaction>

    /**
     * Autogenerated id for the Popup instance
     */
    id: string

    parameters: {
      key: string
      email: string
      amount: number
    }

    urlParameters: {
      key: string
      email: string
      amount: number
      metadata: string
      mode: 'popup'
    }

    status: string | null

    authorizationUrl: string

    errors: Array<{
      type: 'setup'
      message: string
    }>

    response: null

    isActive: boolean

    /**
     * A placeholder div that shows a loading indicator when the main checkout iFrame is loading
     */
    backgroundDiv: HTMLDivElement

    /**
     * The iframe where the payment happens
     */
    checkoutIframe: HTMLIFrameElement

    /**
     * A div for an wallet payments i.e Apple pay pre checkout experience
     */
    preCheckoutModal: HTMLDivElement

    /**
     * The div container for wallet payment buttons i.e Apple Pay
     */
    paymentRequestContainer: HTMLDivElement
  }
}
