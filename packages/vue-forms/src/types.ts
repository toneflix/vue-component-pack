import { PublicProps, VNode } from 'vue'

interface SlotScope extends FormField {
  modelValue: FormField['value']
}

export interface FormField {
  type:
  | 'url'
  | 'tel'
  | 'text'
  | 'file'
  | 'date'
  | 'time'
  | 'week'
  | 'email'
  | 'month'
  | 'color'
  | 'hidden'
  | 'number'
  | 'search'
  | 'password'
  | 'datetime'
  | 'datetime-local'
  // =============
  | 'select' // [x]
  | 'checkbox' // [x]
  | 'radio' // [x]
  | 'range'
  | 'switch' // [x]
  | 'textarea' // [x]

  /**
   * Unique identifier for the field
   */
  name: string
  /**
   * Label for the field
   */
  label?: string
  /**
   * Current value of the field
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any
  /**
   * Placeholder text
   */
  placeholder?: string
  /**
   * Number of allowed instances (e.g., for arrays of inputs)
   */
  count?: number
  /**
   * Max length/value where applicable
   */
  max?: number | null
  /**
   * Min length/value where applicable
   */
  min?: number | null
  /**
   * Column span for grid layout
   */
  col?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  /**
   * Auto-expand for textareas
   */
  autogrow?: boolean
  /**
   * Tooltip or helper text
   */
  hint?: string
  /**
   * Mask input, e.g., passwords
   */
  secret?: boolean
  /**
   * Grouping identifier for complex forms
   */
  group?: string
  /**
   * Options for select, radio, etc.
   */
  choices?: (string | number | { label: string; value: string | number | boolean })[]
  /**
   * Whether the field is mandatory
   */
  required?: boolean
  /**
   * Whether the field is read-only
   */
  readonly?: boolean
  /**
   * Whether the field is disabled
   */
  disabled?: boolean
  /**
   * Regex pattern for validation
   */
  pattern?: string
  /**
   * Allow multiple files for file input
   */
  multiple?: boolean
  /**
   * Step size for number/range inputs
   */
  step?: number
  /**
   * Max length for text inputs
   */
  maxLength?: number
  /**
   * Min length for text inputs
   */
  minLength?: number
  /**
   * Function for custom validation, returns `true` or an error message
   * @param value
   * @returns
   */
  customValidation?: (value: unknown) => boolean | string
  /**
   * Message to display on validation failure
   */
  validationMessage?: string
  /**
   * Icon for visual cues
   */
  icon?: string
  /**
   * Additional tooltip information
   */
  tooltip?: string
  /**
   * Formatting (e.g., date format)
   */
  format?: string
  /**
   * Custom CSS classes for the field
   */
  styleClass?: string
  /**
   * Prefix text for input fields
   */
  prefix?: string
  /**
   * Suffix text for input fields
   */
  suffix?: string
  /**
   * Default value for resetting the form
   */
  default?: unknown
  /**
   * Value to use as "true" on checkboxes and switches
   */
  trueValue?: boolean | number | string
  /**
   * Value to use as "false" on checkboxes and switches
   */
  falseValue?: boolean | number | string
}

type MainSlotProps = {
  formFields: FormField[]
  isGrouped: boolean
  useGrid: boolean
  bordered: boolean
  rounded: boolean
  hideSubmit: boolean
  separator: boolean
}

export type SlotName = keyof Omit<VueFormSlots, 'default' | 'prepend' | 'actions'>

export interface VueFormSlots {
  /**
   * This is where default content goes
   */
  default: (props: MainSlotProps) => VNode[]
  /**
   * Slot for overiding input components
   */
  input: (scope: SlotScope) => VNode[]
  /**
   * Slot for overiding select component
   */
  select: (scope: SlotScope) => VNode[]
  /**
   * Slot for overiding checkbox component
   */
  checkbox: (scope: SlotScope) => VNode[]
  /**
   * Slot for overiding radio component
   */
  radio: (scope: SlotScope) => VNode[]
  /**
   * Slot for overiding switch component
   */
  switch: (scope: SlotScope) => VNode[]
  /**
   * Slot for overiding textarea component
   */
  textarea: (scope: SlotScope) => VNode[]
  /**
   * Slot for prepending content
   */
  prepend: (props: MainSlotProps) => VNode[]
  /**
   * Slot for adding content under actions
   */
  actions: () => VNode[]
}

export interface BaseProps {
  /**
   * Put the component in loading state
   */
  loading?: boolean
  /**
   * If you prefer a grid layout over the default flexbox layout, set to true
   */
  useGrid?: boolean
  /**
   * Used along side with "bordered" to create a rounded border
   */
  rounded?: boolean
  /**
   * Adds a border to the form
   */
  bordered?: boolean
  /**
   * Puts a line separator after every form group
   */
  separator?: boolean
  /**
   * Used for customizing group header information
   */
  groupMeta?: GroupMeta
  /**
   * Hides the submit button
   */
  hideSubmit?: boolean
  /**
   * Hides the cancel button
   */
  hideCancel?: boolean
  /**
   * Set the label on the cancel button
   */
  cancelLabel?: string
  /**
   * Set the label on the submit button
   */
  submitLabel?: string
  /**
   * When group meta is not provided, this will determine if group labels
   * should be created from a title cased version the group name
   */
  showGroupLabels?: boolean
}

export interface VueFormProps<X = { [key: FormField['name']]: FormField['value'] }>
  extends BaseProps {
  /**
   * The available form fields
   */
  fields: FormField[]
  /**
   * An object representing the form values
   */
  modelValue: X
}

export type GroupMeta<T extends FormField = FormField> = {
  [key in T['group']as string]: {
    title: string
    rounded?: boolean
    subtitle?: string
    bordered?: boolean
  }
}

export interface FormValues {
  [key: FormField['name']]: FormField['value']
}

export type ComponentConstructor<Props = object, Slots = object> = {
  new(): {
    $props: PublicProps & Props
    $slots: Slots
  }
}
