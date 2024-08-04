import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from 'vue';

type PublicProps = VNodeProps &
    AllowedComponentProps &
    ComponentCustomProps;

export type GlobalComponentConstructor<Props = {}, Slots = {}> = {
    new(): {
        $props: PublicProps & Props;
        $slots: Slots;
    };
}

type VueClassObjectProp = {
    [value: string]: any;
};

type VueClassProp = string | Array<VueClassProp> | VueClassObjectProp;

export type OtpInputType = {
    /**
     * Title/Label on the input
     */
    label?: string | undefined,
    /**
     * Class definitions to be applied to the label
     */
    labelClass?: string | undefined,
    /**
     * You can add extra class for the component root
     */
    className?: VueClassProp | undefined,
    /**
     * Class definitions to be attributed to the underlying inputs
     */
    inputClass?: VueClassProp | undefined,
    /**
     * The primary color for the input boxes
     * 
     * @default #3880ff
     */
    primaryColor?: string | undefined,
    /**
     * The secondary color for the input boxes, used when a box is focused
     * 
     * @default #3dc2ff
     */
    secondaryColor?: string | undefined,
    /**
     * The position of the component
     * [
     * left,
     * right,
     * center,
     * justify
     * ]
     * 
     * @default center
     */
    position?: 'center' | 'justify' | 'left' | 'right' | undefined,
    /**
     * Font size in CSS units, including unit name
     * 
     * @example 2px
     */
    fontSize?: string | undefined,
    /**
     * Visible component borders definition
     * [Top: t,
     * Bottom: b,
     * Left: l,
     * Right: r]
     * 
     * @example bt
     * @default btlr
     */
    borders?: 'b' | 't' | 'l' | 'r' | 'bt' | 'lr' | 'bl' | 'br' | 'tl' | 'tr' | 'btlr' | undefined,
    /**
     * Font Family that will be used by the component
     */
    fontFamily?: string | undefined,
    /**
     * Gap between the boxes in CSS units, including unit name
     * 
     * @example 10px
     */
    gap?: string | undefined,
    /**
     * Number of input boxes to show
     * 
     * @example 6
     */
    inputsCount?: number | undefined,
    /**
     * Width of the input borders in CSS units, including unit name
     * 
     * @example 2px
     */
    borderSize?: string | undefined,
    /**
     * Width of the input boxes
     * 
     * @example 56
     */
    fieldWidth?: number | undefined,
    /**
     * Height of the input boxes
     * 
     * @example 56
     */
    fieldHeight?: number | undefined,
    /**
     * Wether the component should be put in disabled state
     */
    disabled?: boolean | null | undefined,
    /**
     * Wether the component should require completion
     */
    required?: boolean | null | undefined,
    /**
     * Adds rounded borders to the component input boxes
     */
    rounded?: boolean | null | undefined,
    /**
     * Indicates if the component should be put in error state
     */
    hasError?: boolean | null | undefined,
    /**
     * Validation error message (gets displayed only if 'hasError' is set to 'true')
     */
    errorMessage?: string | undefined;
    /**
     * Model of the component; Must be a string; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue: string;
};
