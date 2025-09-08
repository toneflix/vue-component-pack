# Vue OTP Input

[![npm](https://img.shields.io/npm/v/@toneflix/otp-input.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/otp-input)
[![npm](https://img.shields.io/npm/dt/@toneflix/otp-input.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/otp-input)

Simple customizable OTP input for Vue 3. - See a live demo [here](https://toneflix.github.io/vue-component-pack/otp-input/demo.html).

<p align="center">
    <img width="200" src="https://toneflix.github.io/vue-component-pack/otp-input/images/banner.png" alt="Flickity">
    <!--<img width="200" src="https://vuejs.org/images/logo.png" alt="Vue.js">-->
</p>

## Documentation

Read the full documentation [here](https://toneflix.github.io/vue-component-pack/otp-input/)

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
import '@toneflix/otp-input/dist/style.css'
import { createApp } from 'vue'
import App from './app.vue'
import OtpInput from '@toneflix/otp-input'

const app = createApp(App)
app.use(OtpInput)
app.mount('#app')
```

### Local Registration

You can also import the component in your Vue component.

**SomeComponent.vue**

```vue
<script setup>
import '@toneflix/otp-input/dist/style.css'
import { OtpInput } from '@toneflix/otp-input'
</script>
```

### Use the Registered Component in Your Vue Template

**SomeComponent.vue**

```vue
<script setup lang="ts">
import '@toneflix/otp-input/dist/style.css'
import { OtpInput } from '@toneflix/otp-input'
import { ref } from 'vue'

const otp = ref<string>('')
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <otp-input v-model="otp" />
  </div>
</template>
```
