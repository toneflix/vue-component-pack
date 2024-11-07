import { PublicProps } from "vue";

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
    | 'textarea'
    | 'datetime'
    | 'datetime-local'
    // =============
    | 'select' // [x]
    | 'checkbox'
    | 'radio'
    | 'range'
    | 'switch';

    /**
     * Unique identifier for the field
     */
    name: string;
    /**
     * Label for the field
     */
    label?: string;
    /**
     * Current value of the field
     */
    value?: unknown;
    /**
     * Placeholder text
     */
    placeholder?: string;
    /**
     * Number of allowed instances (e.g., for arrays of inputs)
     */
    count?: number;
    /**
     * Max length/value where applicable
     */
    max?: number | null;
    /**
     * Min length/value where applicable
     */
    min?: number | null;
    /**
     * Column span for grid layout
     */
    col?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * Auto-expand for textareas
     */
    autogrow?: boolean;
    /**
     * Tooltip or helper text
     */
    hint?: string;
    /**
     * Mask input, e.g., passwords
     */
    secret?: boolean;
    /**
     * Grouping identifier for complex forms
     */
    group?: string;
    /**
     * Options for select, radio, etc.
     */
    choices?: string[] | { label: string; value: string | number }[];
    /**
     * Whether the field is mandatory
     */
    required?: boolean;
    /**
     * Whether the field is read-only
     */
    readonly?: boolean;
    /**
     * Whether the field is disabled
     */
    disabled?: boolean;
    /**
     * Regex pattern for validation
     */
    pattern?: string;
    /**
     * Allow multiple files for file input
     */
    multiple?: boolean;
    /**
     * Step size for number/range inputs
     */
    step?: number;
    /**
     * Max length for text inputs
     */
    maxLength?: number;
    /**
     * Min length for text inputs
     */
    minLength?: number;
    /**
     * Function for custom validation, returns `true` or an error message
     * @param value 
     * @returns 
     */
    customValidation?: (value: unknown) => boolean | string;
    /**
     * Message to display on validation failure
     */
    validationMessage?: string;
    /**
     * Icon for visual cues
     */
    icon?: string;
    /**
     * Additional tooltip information
     */
    tooltip?: string;
    /**
     * Formatting (e.g., date format)
     */
    format?: string;
    /**
     * Custom CSS classes for the field
     */
    styleClass?: string;
    /**
     * Prefix text for input fields
     */
    prefix?: string;
    /**
     * Suffix text for input fields
     */
    suffix?: string;
    /**
     * Default value for resetting the form
     */
    default?: unknown;
    /**
     * Value to use as "true" on checkboxes and switches
     */
    trueValue?: boolean | number | string
    /**
     * Value to use as "false" on checkboxes and switches
     */
    falseValue?: boolean | number | string
}

export type GroupMeta<T extends FormField = FormField> = {
    [key in T['group']as string]: {
        title: string;
        rounded?: boolean;
        subtitle?: string;
        bordered?: boolean;
    };
};

export interface FormValues {
    [key: FormField['name']]: FormField['value'];
}

export type ComponentConstructor<Props = object, Slots = object> = {
    new(): {
        $props: PublicProps & Props;
        $slots: Slots;
    };
};
// DefineComponen
