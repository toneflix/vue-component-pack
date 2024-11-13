import type { PublicProps } from 'vue'

export interface DataViewerProps {
  /**
   * When in view mode, the keys in this list will not be loaded into the viewer
   */
  exclusions?: string[];
  /**
   * When in edit mode, the keys in this list will not be loaded into the form
   */
  formExclusions?: string[];
  /**
   * Map boolean data labels to data options
   */
  booleanLabels?: {
    [key: string]: [string, string];
  };
  /**
   * Used along side with "bordered" to create a rounded border
   */
  rounded?: boolean;
  /**
   * Adds a border to the base card
   */
  bordered?: boolean;
  /**
   * Puts a line separator after every data set
   */
  separator?: boolean;
  /**
   * Adds a shadow to the base card
   */
  shadow?: boolean;
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
    imageUrl?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }
  /**
   * The reactive model data to be used in edit mode
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: { [key: string]: any };
  /**
   * The current viewing mode
   */
  mode?: 'edit' | 'view' | 'doc';
  /**
   * Errors will me shown under thier respective fields in edit mode
   */
  errors?: { [key: string]: string };
  /**
   * Put the component in loading state when saving in edit mode
   */
  saving?: boolean;
  /**
   * Put the component in loading state
   */
  loading?: boolean;
}

/* eslint-disable @typescript-eslint/no-empty-object-type */
export type GlobalComponentConstructor<Props = {}, Slots = {}> = new () => {
  $props: PublicProps & Props & DataViewerProps
  $slots: Slots
}
