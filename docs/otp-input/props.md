# Props

This page demonstrates usage of some of the props exposed by OTP Input.

## modelValue | {`string`}

Must be a string; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive.

  <otp-input v-model="otp" />
  <div style="text-align:center; margin-top: 10px;">
    Value: {{otp}}
  </div>

```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const otp = ref<string>('123456');
</script>

<template>
  <otp-input v-model="otp" />
</template>
```

## label | {~~`string`~~}

Title/Label on the input.

<otp-input model-value="" label="OTP Input" />

```vue:line-numbers
<template>
  <otp-input model-value="" label="OTP Input" />
</template>
```

## labelClass | {~~`string`~~}

Class definitions to be applied to the label.

<otp-input model-value="" label="OTP Input" :label-class="$style['bold-text']" />

```vue:line-numbers
<template>
  <otp-input model-value="" label="OTP Input" label-class="bold-text" />
</template>

<style>
.bold-text {
  font-weight: bold;
}
</style>
```

## position | {`left` `right` `center` `justify`} | [_default: center_]

The position of the component.

<otp-input model-value="" position="left" />

```vue:line-numbers
<template>
  <otp-input model-value="" position="left" />
</template>
```

## primaryColor | {~~`string`~~} | [_default: #3880ff_]

The primary color for the input boxes.

<otp-input model-value="" primary-color="#663399" />

```vue:line-numbers
<template>
  <otp-input model-value="" primary-color="#663399" />
</template>
```

## secondaryColor | {~~`string`~~} | [_default: #3dc2ff_]

The secondary color for the input boxes, used when a box is focused.

<otp-input model-value="" secondary-color="#3dc2ff" />

```vue:line-numbers
<template>
  <otp-input model-value="" secondary-color="#3dc2ff" />
</template>
```

## textColor | {~~`string`~~} | [_default: #3880ff_]

The text color for the input boxes.

<otp-input model-value="" text-color="#663399" />

```vue:line-numbers
<template>
  <otp-input model-value="" text-color="#663399" />
</template>
```

## textColorActive | {~~`string`~~} | [_default: #3dc2ff_]

The text color for the focused input boxe.

<otp-input model-value="" text-color-active="#3dc2ff" />

```vue:line-numbers
<template>
  <otp-input model-value="" text-color-active="#3dc2ff" />
</template>
```

## fontSize | {~~`string`~~} | [_default: 30px_]

Font size in CSS units, including unit name.

<otp-input model-value="" font-size="10px" />

```vue:line-numbers
<template>
  <otp-input model-value="" font-size="10px" />
</template>
```

## inputsCount | {~~`number`~~} | [_default: 6_]

Number of input boxes to show.

<otp-input model-value="" inputs-count="4" />

```vue:line-numbers
<template>
  <otp-input model-value="" inputs-count="4" />
</template>
```

## borders | {~~`string`~~} | `b` `t` `l` `r` [_default: btlr_]

Borders that should be visible.

<div
  style="padding-top: 10px; display:flex; gap: 15px; justify-content:center;"
>
  <otp-input model-value="" inputs-count="2" borders="bt" />
  <otp-input model-value="" inputs-count="2" borders="lr" />
  <otp-input model-value="" inputs-count="2" borders="tr" />
  <otp-input model-value="" inputs-count="2" borders="bl" />
</div>

```vue:line-numbers
<template>
  <div
    style="padding-top: 10px; display:flex; gap: 15px; justify-content:center;"
  >
    <otp-input model-value="" inputs-count="2" borders="bt" />
    <otp-input model-value="" inputs-count="2" borders="lr" />
    <otp-input model-value="" inputs-count="2" borders="tr" />
    <otp-input model-value="" inputs-count="2" borders="bl" />
  </div>
</template>
```

## fontFamily | {~~`string`~~} | [_default: "Anton", sans-serif;_]

Font Family that will be used by the component.

<otp-input model-value="" font-family="monospace" />

```vue:line-numbers
<template>
  <otp-input model-value="" font-family="monospace" />
</template>
```

## borderSize | {~~`string`~~} | [_default: 2px_]

Size of the input borders in CSS units, including unit name.

<otp-input model-value="" border-size="4px" />

```vue:line-numbers
<template>
  <otp-input model-value="" border-size="4px" />
</template>
```

## borderRadius | {~~`string`~~} | [_default: 5px_]

Size of the border radius in CSS units, including unit name (will overide `rounded`)

<otp-input model-value="" border-radius="10px" />

```vue:line-numbers
<template>
  <otp-input model-value="" border-radius="10px" />
</template>
```

## fieldWidth | {~~`number`~~} | [_default: 56_]

Width of the input boxes.

<otp-input model-value="" field-width="40" />

```vue:line-numbers
<template>
  <otp-input model-value="" field-width="40" />
</template>
```

## fieldHeight | {~~`number`~~} | [_default: 56_]

Height of the input boxes.

<otp-input model-value="" field-height="40" />
<br />
<otp-input model-value="" field-width="40" field-height="40" />

```vue:line-numbers
<template>
  <otp-input model-value="" field-height="40" />
  <otp-input model-value="" field-width="40" field-height="40" />
</template>
```

## disabled | {~~`boolean`~~} | [_default: false_]

Whether the component should be put in disabled state.

<otp-input model-value="" disabled />

```vue:line-numbers
<template>
  <otp-input model-value="" disabled />
</template>
```

## required | {~~`boolean`~~} | [_default: false_]

Whether the component should require completion.

<otp-input model-value="" required />

```vue:line-numbers
<template>
  <otp-input model-value="" required />
</template>
```

## rounded | {~~`boolean`~~} | [_default: false_]

Adds rounded borders to the component input boxes.

<otp-input model-value="" rounded />

```vue:line-numbers
<template>
  <otp-input model-value="" rounded />
</template>
```

## hasError | {~~`boolean`~~} | [_default: false_]

Indicates if the component should be put in error state.

<otp-input model-value="" has-error />

```vue:line-numbers
<template>
  <otp-input model-value="" has-error />
</template>
```

## errorMessage | {~~`string`~~}

Validation error message (gets displayed only if `hasError` is set to `true`).

<otp-input
    has-error
    model-value=""
    error-message="This component has an error"
  />

```vue:line-numbers
<template>
  <otp-input
    has-error
    model-value=""
    error-message="This component has an error"
  />
</template>
```

<script setup lang="ts">
import { ref } from 'vue';
const otp = ref<string>('123456');
</script>

<style module>
.bold-text {
  font-weight: bold;
}
</style>
