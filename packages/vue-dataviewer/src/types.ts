import type { PublicProps } from 'vue'

export interface DataViewerProps {
  /**
   * When in view mode, the keys in this list will not be loaded into the viewer
   */
  exclusions?: string[] | undefined
  /**
   * When in edit mode, the keys in this list will not be loaded into the form
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
   * date-fns string date format will be used to format encountered dates
   * 
   * @see https://date-fns.org/docs/format
   * @default "do MMM, yyyy h:mm a"
   */
  dateFormat?: string | undefined
}

export interface MainContentProps extends DataViewerProps {
  /**
   * Set the titles for all the different modes
   */
  titles?: { view: string; edit: string; doc: string }
  /**
   * If this is active a close button is displayed on the card title
   */
  dialogMode?: boolean
}

export interface MainProps {
  /**
   * The data that will be mapped for previewing
   */
  data: {
    imageUrl?: string | undefined
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
  /**
   * The reactive model data to be used in edit mode
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: { [key: string]: any } | undefined
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

/* eslint-disable @typescript-eslint/no-empty-object-type */
export type GlobalComponentConstructor<Props = {}, Slots = {}> = new () => {
  $props: PublicProps & Props & DataViewerProps
  $slots: Slots
}
