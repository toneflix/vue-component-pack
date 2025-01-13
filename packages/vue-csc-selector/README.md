# Vue CSC Selector

[![npm](https://img.shields.io/npm/v/@toneflix/vue-csc-selector.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/vue-csc-selector)
[![npm](https://img.shields.io/npm/dt/@toneflix/vue-csc-selector.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/vue-csc-selector)

Country State City Selector component for Vue3. - See a live demo [here](https://toneflix.github.io/vue-component-pack/vue-csc-selector/demo.html).

<p align="center">
    <img width="200" src="https://toneflix.github.io/vue-component-pack/vue-csc-selector/images/banner.png" alt="CSC Selector">
    <!--<img width="200" src="https://vuejs.org/images/logo.png" alt="Vue.js">-->
</p>

## Documentation

Read the full documentation [here](https://toneflix.github.io/vue-component-pack/vue-csc-selector/)

## Installation

```bash
npm install @toneflix/vue-csc-selector
#or
yarn add @toneflix/vue-csc-selector
#or
pnpm add @toneflix/vue-csc-selector
```

## Usage

### Global Registration

You can make OTP Input available throughout your Vue project.

**main.js or main.ts**

```js
import '@toneflix/vue-csc-selector/dist/lib/style.css'
import { createApp } from 'vue'
import App from './app.vue'
import CscSelector from '@toneflix/vue-csc-selector'

const app = createApp(App)
app.use(CscSelector)
app.mount('#app')
```

### Local Registration

You can also import the component in your Vue component.

**SomeComponent.vue**

```vue
<script setup>
import '@toneflix/vue-csc-selector/dist/lib/style.css'
import { CscSelector } from '@toneflix/vue-csc-selector'
</script>
```

### Use the Registered Component in Your Vue Template

**SomeComponent.vue**

```vue
<script setup lang="ts">
import '@toneflix/vue-csc-selector/dist/lib/style.css'
import { CscSelector } from '@toneflix/vue-csc-selector'
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <vue-csc-selector v-model="value" />
  </div>
</template>
```
