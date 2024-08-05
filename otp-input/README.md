# Vue OTP Input

Simple customizable OTP input for Vue 3.

## Documentation

Read the full documentation here: [https://toneflix.github.io/vue-component-pack/otp-input](https://toneflix.github.io/vue-component-pack/otp-input/)

## Installation

```bash
npm install @toneflix/otp-input
#or
yarn add @toneflix/otp-input
#or
pnpm add @toneflix/otp-input
```

## Usage

### Global Registration

You can make OTP Input available throughout your Vue project.

**main.js or main.ts**

```js
import '@toneflix/otp-input/dist/lib/style.css';
import { createApp } from 'vue';
import App from './app.vue';
import OtpInput from '@toneflix/otp-input';

const app = createApp(App);
app.use(OtpInput);
app.mount('#app');
```

### Local Registration

You can also import the component in your Vue component.

**SomeComponent.vue**

```vue
<script setup>
import '@toneflix/otp-input/dist/lib/style.css';
import { OtpInput } from '@toneflix/otp-input';
</script>
```

### Use the Registered Component in Your Vue Template

**SomeComponent.vue**

```vue
<script setup lang="ts">
import '@toneflix/otp-input/dist/lib/style.css';
import { OtpInput } from '@toneflix/otp-input';
import { ref } from 'vue';

const otp = ref<string>('');
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <otp-input v-model="otp" />
  </div>
</template>
```
