import type { GlobalComponentConstructor, OtpInputType } from './types';

declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        OtpInput: GlobalComponentConstructor<OtpInputType & {
            /**
             * Emitted when the component needs to change the model; Is also used by v-model
             * @param value New model value
             */
            "onUpdate:modelValue"?: (value: any) => void;
            /**
             * Emitted when the input value changes
             * @param value New model value
             */
            "onChange"?: (value: any) => void;
            /**
             * Emitted when the all the input value have been filled
             * @param value New model value
             */
            "onComplete"?: (value: any) => void;
        }, {
            /**
             * Default slot can be used as label, unless 'label' prop is specified; Suggestion: string
             */
            default: () => VNode[];
        }>;
    }
}
export { };
