import type { PublicProps } from 'vue'

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TrixEvent = Event & {
  target: HTMLInputElement & {
    editor: any
  }
}

export interface Events {
  (name: 'input', value?: string | undefined): void
  (name: 'update', value?: string | undefined): void
  (name: 'blur', event: TrixEvent): void
  (name: 'focus', event: TrixEvent): void
  (name: 'initialize', event: TrixEvent, editor: any): void
  (name: 'file-accept', file: File): void
  (
    name: 'attachment-add',
    attachment: { attachment: any; attachmentManager: any; file: File }
  ): void
  (name: 'selection-change', event: TrixEvent): void
  (
    name: 'attachment-remove',
    attachment: { attachment: any; attachmentManager: any; file: File }
  ): void
  (name: 'before-initialize', event: TrixEvent): void
}

export interface EventsDef {
  /**
   * Emitted on input
   * @param value
   */
  onInput?: (value?: string | undefined) => void
  /**
   * Emitted when the content of the input is updated
   * @param value
   */
  onUpdate?: (value?: string | undefined) => void
  /**
   * Emitted when the input looses focus
   * @param event
   * @param editor
   */
  onBlur?: (event: TrixEvent) => void
  /**
   * Emitted when the input recieves focus
   * @param event
   * @param editor
   */
  onFocus?: (event: TrixEvent) => void
  /**
   * Emitted after trix is initialized
   * @param event
   * @param editor
   */
  onInitialize?: (event: TrixEvent, editor: any) => void
  /**
   * Emitted when an added file is accepted
   * @param file
   */
  onFileAccept?: (file: File) => void
  /**
   * Emitted when an attachement is added
   * @param attachment
   */
  onAttachmentAdd?: (attachment: { attachment: any; attachmentManager: any; file: File }) => void
  /**
   * Emitted when the text selection in the input changes
   * @param event
   * @param editor
   */
  onSelectionChange?: (event: TrixEvent, editor: any) => void
  /**
   * Emitted when an attachement is removed
   * @param attachment
   */
  onAttachmentRemove?: (attachment: { attachment: any; attachmentManager: any; file: File }) => void
  /**
   * Emitted before trix is initialized
   * @param event
   * @param editor
   */
  onBeforeInitialize?: (event: TrixEvent) => void
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export interface MainProps extends EventsDef {
  /**
   * Model of the component; Must be a string; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
   */
  modelValue: string
  /**
   * This prop will put the editor in read-only mode
   */
  disabled?: boolean | undefined
  /**
   * This is referenced `id` of the hidden input field defined.
   * It is optional and will be a random string by default.
   */
  inputId?: string | undefined
  /**
   * This is referenced `name` of the hidden input field defined,
   * default value is `content`.
   */
  inputName?: string | undefined
  /**
   * The placeholder attribute specifies a short hint
   * that describes the expected value of a editor.
   */
  placeholder?: string | undefined
  /**
   * The boolean attribute allows saving editor state into browser's localStorage
   * (optional, default is `false`).
   */
  localStorage?: boolean | undefined
  /**
   * Focuses cursor in the editor when attached to the DOM
   * (optional, default is `false`).
   */
  autofocus?: boolean | undefined
  /**
   * Object to override default editor configuration
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config?: Record<string, any> | undefined
}

/* eslint-disable @typescript-eslint/no-empty-object-type */
export type GlobalComponentConstructor<Props = {}, Slots = {}> = new () => {
  $props: PublicProps & Props
  $slots: Slots
}
