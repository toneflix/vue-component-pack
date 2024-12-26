# Vue OTP Input

[![npm](https://img.shields.io/npm/v/@toneflix/vue-trix.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/vue-trix)
[![npm](https://img.shields.io/npm/dt/@toneflix/vue-trix.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/vue-trix)

Simple and lightweight Trix rich-text editor for Vue.js. - See a live demo [here](https://toneflix.github.io/vue-component-pack/vue-trix/demo.html).

<p align="center">
    <img width="200" src="https://toneflix.github.io/vue-component-pack/vue-trix/images/banner.png" alt="Vue Trix">
    <!--<img width="200" src="https://vuejs.org/images/logo.png" alt="Vue.js">-->
</p>

## Documentation

Read the full documentation [here](https://toneflix.github.io/vue-component-pack/vue-trix/)

## Installation

```bash
npm install @toneflix/vue-trix
#or
yarn add @toneflix/vue-trix
#or
pnpm add @toneflix/vue-trix
```

## Usage

### Global Registration

You can make OTP Input available throughout your Vue project.

**main.js or main.ts**

```js
import 'trix/dist/trix.css'
import { createApp } from 'vue'
import App from './app.vue'
import VueTrix from '@toneflix/vue-trix'

const app = createApp(App)
app.use(VueTrix)
app.mount('#app')
```

### Local Registration

You can also import the component in your Vue component.

**SomeComponent.vue**

```vue
<script setup>
import 'trix/dist/trix.css'
import { VueTrix } from '@toneflix/vue-trix'
</script>
```

### Use the Registered Component in Your Vue Template

**SomeComponent.vue**

```vue
<script setup lang="ts">
import 'trix/dist/trix.css'
import { VueTrix } from '@toneflix/vue-trix'
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <vue-trix v-model="value" />
  </div>
</template>
```
