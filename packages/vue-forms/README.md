# Vue OTP Input

[![npm](https://img.shields.io/npm/v/@toneflix/vue-forms.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/vue-forms)
[![npm](https://img.shields.io/npm/dt/@toneflix/vue-forms.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/vue-forms)

Dynamic form generator for Vue 3. - See a live demo [here](https://toneflix.github.io/vue-component-pack/vue-forms/demo.html).

<p align="center">
    <img width="200" src="https://toneflix.github.io/vue-component-pack/vue-forms/images/banner.png" alt="Flickity">
    <!--<img width="200" src="https://vuejs.org/images/logo.png" alt="Vue.js">-->
</p>

## Documentation

Read the full documentation [here](https://toneflix.github.io/vue-component-pack/vue-forms/)

## Installation

```bash
npm install @toneflix/vue-forms
#or
yarn add @toneflix/vue-forms
#or
pnpm add @toneflix/vue-forms
```

## Usage

### Global Registration

You can make `@toneflix/vue-forms` available throughout your Vue project.

**main.js or main.ts**

```js
import '@toneflix/vue-forms/dist/lib/style.css'
import { createApp } from 'vue'
import App from './app.vue'
import VueForms from '@toneflix/vue-forms'

const app = createApp(App)
app.use(VueForms)
app.mount('#app')
```

### Local Registration

You can also import the component in your Vue component.

**SomeComponent.vue**

```vue
<script setup>
import '@toneflix/vue-forms/dist/lib/style.css'
import { VueForms } from '@toneflix/vue-forms'
</script>
```

### Use the Registered Component in Your Vue Template

**SomeComponent.vue**

```vue
<script setup lang="ts">
import '@toneflix/vue-forms/dist/lib/style.css'
import { VueForms } from '@toneflix/vue-forms'
import { ref } from 'vue'

const otp = ref<string>('')
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <vue-forms v-model="otp" />
  </div>
</template>
```
