# Vue Paystack Inline

Simple Paystack Inline component for Vue 3

## Documentation

Read the full documentation here: [https://toneflix.github.io/vue-component-pack/paystack-inline](https://toneflix.github.io/vue-component-pack/paystack-inline/)

## Installation

```bash
npm install @toneflix/paystack-inline
#or
yarn add @toneflix/paystack-inline
#or
pnpm add @toneflix/paystack-inline
```

## Usage

### Global Registration

You can make Paystack Inline available throughout your Vue project.

**main.js or main.ts**

```js
import '@toneflix/paystack-inline/dist/lib/style.css'
import { createApp } from 'vue'
import App from './app.vue'
import PaystackInline from '@toneflix/paystack-inline'

const app = createApp(App)
app.use(PaystackInline)
app.mount('#app')
```

### Local Registration

You can also import the component in your Vue component.

**SomeComponent.vue**

```vue
<script setup>
import '@toneflix/paystack-inline/dist/lib/style.css'
import { PaystackInline } from '@toneflix/paystack-inline'
</script>
```

### Use the Registered Component in Your Vue Template

**SomeComponent.vue**

```vue
<script setup lang="ts">
import '@toneflix/paystack-inline/dist/lib/style.css'
import { PaystackInline } from '@toneflix/paystack-inline'
import { ref } from 'vue'

const otp = ref<string>('')
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <paystack-inline v-model="otp" />
  </div>
</template>
```
