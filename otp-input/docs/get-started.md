---
outline: deep
---

# Get Started

Setting up OTP Input is pretty simple and straightforward.

## Installation

Install using your preferred package manager.

::: code-group

```npm
npm install @toneflix/otp-input
```

```yarn
yarn add @toneflix/otp-input
```

```pnpm
pnpm add @toneflix/otp-input
```

:::

## Usage

### Global Registration

You can make OTP Input available throughout your Vue project.

**main.js or main.ts**

```js:line-numbers{1,4}
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

```vue:line-numbers{2,3}
<script setup>
import '@toneflix/otp-input/dist/lib/style.css';
import { OtpInput } from '@toneflix/otp-input';
</script>
```

### Use the Registered Component in Your Vue Template

**SomeComponent.vue**

```vue:line-numbers{2,3}
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
