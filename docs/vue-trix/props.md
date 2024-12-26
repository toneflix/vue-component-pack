# Props

This page demonstrates usage of some of the props exposed by OTP Input.

## modelValue | {`string`}

Must be a string; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive.

  <vue-trix v-model="content" />
  <div style="text-align:center; margin-top: 10px;">
    Value: {{content}}
  </div>

```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>('123456');
</script>

<template>
  <vue-trix v-model="content" />
</template>
```
