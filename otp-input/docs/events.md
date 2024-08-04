# Events

This page demonstrates usage of the events emitted by OTP Input.

### update:modelValue

Emitted when the component needs to update the model.

<otp-input v-model="otp" @update:model-value="onUpdate" />

```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const otp = ref<string>('');

const onUpdate = (v) => {
  alert(`New value is ${v}`);
};
</script>

<template>
  <otp-input v-model="otp" @update:model-value="onUpdate" />
</template>
```

### change

Emitted when the OTP value changes.

<otp-input v-model="otp2" @change="onChanged" />

```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const otp = ref<string>('');

const onChanged = (v) => {
  alert(`The value has changed to ${v}`);
};
</script>

<template>
  <otp-input v-model="otp" @update:change="onChanged" />
</template>
```

### complete

Emitted after all the inputs have been filled.

<otp-input v-model="otp3" @complete="onComplete" />

```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue'
const otp = ref<string>('')

const onComplete = (v) => {
    alert(`OTP input completed with value: ${v}`)
}
</script>

<template>
  <otp-input v-model="otp" @update:complete="onComplete" />
</template>
```

<script setup lang="ts">
import { ref } from 'vue';
const otp = ref<string>('');
const otp2 = ref<string>('');
const otp3 = ref<string>('');

const onChanged = (v) => {
  alert(`The value has changed to ${v}`);
};

const onComplete = (v) => {
    alert(`OTP input completed with value: ${v}`)
}

const onUpdate = (v) => {
  alert(`New value is ${v}`);
};
</script>
