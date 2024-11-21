import type { PublicProps, VNode } from 'vue'

export interface DataViewerProps {
  /**
   * Class definitions to be attributed to the list wrapper
   */
  listClass?: unknown
  /**
   * When in view mode, the keys in this list will not be loaded into the viewer
   *
   * @default ```["id"]```
   */
  exclusions?: string[] | undefined
  /**
   * When in edit mode, the keys in this list will not be loaded into the form
   *
   * @default ```["id", "imageUrl"]```
   */
  formExclusions?: string[] | undefined
  /**
   * Map boolean data labels to data options
   */
  booleanLabels?:
    | {
        [key: string]: [string, string]
      }
    | undefined
  /**
   * Used along side with "bordered" to create a rounded border
   */
  rounded?: boolean | undefined
  /**
   * Adds a border to the base card
   */
  bordered?: boolean | undefined
  /**
   * Puts a line separator after every data set
   */
  separator?: boolean | undefined
  /**
   * Adds a shadow to the base card
   */
  shadow?: boolean | undefined
  /**
   * An array of props that should be considered as dates, when we encounter
   * any of these props we will render it using your provided date format.
   */
  dateProps?: string[] | undefined
  /**
   * An array of props that should be considered as images, when we encounter
   * any of these props we will render it as an image.
   *
   * @default ```["imageUrl"]```
   */
  imageProps?: string[] | undefined
  /**
   * date-fns string date format will be used to format encountered dates
   *
   * @see https://date-fns.org/docs/format
   * @default "do MMM, yyyy h:mm a"
   */
  dateFormat?: string | undefined
  /**
   * Overide property labels
   */
  labelsMap?: {
    [key: string]: string
  }
  /**
   * Overide property values
   */
  valuesMap?: {
    [key: string]: any // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

export interface MainContentProps extends DataViewerProps {
  /**
   * If this is active a close button is displayed on the card title
   */
  dialogMode?: boolean
}

export interface MainProps {
  /**
   * Set the titles for all the different modes
   */
  titles?: { view?: string; edit?: string; doc?: string }
  /**
   * The data that will be mapped for previewing
   */
  data: {
    imageUrl?: string | undefined
    [key: string]: any // eslint-disable-line @typescript-eslint/no-explicit-any
  }
  /**
   * The reactive model data to be used in edit mode
   */
  form?: { [key: string]: any } | undefined // eslint-disable-line @typescript-eslint/no-explicit-any
  /**
   * The current viewing mode
   */
  mode?: 'edit' | 'view' | 'doc' | undefined
  /**
   * Errors will me shown under thier respective fields in edit mode
   */
  errors?: { [key: string]: string } | undefined
  /**
   * Put the component in loading state when saving in edit mode
   */
  saving?: boolean | undefined
  /**
   * Put the component in loading state
   */
  loading?: boolean | undefined
}

export type SlotName =
  | 'list-item'
  | 'img-list-item'
  | 'form-prepend'
  | 'form-append'
  | 'list-prepend'
  | 'list-append'
  | 'list-after'
  | 'image-viewer'
  | 'loader'

export interface ComponentSlots {
  /**
   * This is where default content goes
   */
  default: () => VNode[]
  /**
   * Slot for overiding the dialog header
   */
  header: () => VNode[]
  /**
   * Slot for overiding list items
   */
  'list-item': (scope: { label: string; value: string; field: string }) => VNode[]
  /**
   * Slot for overiding image list items
   */
  'img-list-item': (scope: {
    label: string
    value: string
    field: string
    toggle: () => void
  }) => VNode[]
  /**
   * Slot for adding content after the form
   */
  'form-prepend': (scope: {
    form?: MainProps['form']
    errors?: MainProps['errors']
    data?: MainProps['data']
  }) => VNode[]
  /**
   * Slot for adding content before the form
   */
  'form-append': (scope: {
    form?: MainProps['form']
    errors?: MainProps['errors']
    data?: MainProps['data']
  }) => VNode[]
  /**
   * Slot for adding content before the list
   */
  'list-prepend': (scope: { data: MainProps['data'] }) => VNode[]
  /**
   * Slot for adding content after the list
   */
  'list-append': (scope: { data: MainProps['data'] }) => VNode[]
  /**
   * Slot for adding content after the list (outside)
   */
  'list-after': (scope: { data: MainProps['data'] }) => VNode[]
  /**
   * Slot for overiding images (not the viewer)
   */
  image: (scope: { src?: string }) => VNode[]
  /**
   * Slot for overiding the image viewer
   */
  'image-viewer': (scope: { close: () => void; src?: string | undefined }) => VNode[]
  /**
   * Slot for overiding the loading indicator
   */
  loader: (scope: { loading: boolean }) => VNode[]
}

/* eslint-disable @typescript-eslint/no-empty-object-type */
export type GlobalComponentConstructor<Props = {}, Slots = {}> = new () => {
  $props: PublicProps & Props & DataViewerProps
  $slots: Slots & ComponentSlots
}
