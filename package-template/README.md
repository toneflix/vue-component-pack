# Vue OTP Input

[![npm](https://img.shields.io/npm/v/@toneflix/dummy-comp.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/dummy-comp)
[![npm](https://img.shields.io/npm/dt/@toneflix/dummy-comp.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/dummy-comp)

Dummy Component setup for Vue 3. - See a live demo [here](https://toneflix.github.io/vue-component-pack/dummy-comp/demo.html).

<p align="center">
    <img width="200" src="https://toneflix.github.io/vue-component-pack/dummy-comp/images/banner.png" alt="Dummy Comp">
    <!--<img width="200" src="https://vuejs.org/images/logo.png" alt="Vue.js">-->
</p>

## Documentation

Read the full documentation [here](https://toneflix.github.io/vue-component-pack/dummy-comp/)

## Installation

```bash
npm install @toneflix/dummy-comp
#or
yarn add @toneflix/dummy-comp
#or
pnpm add @toneflix/dummy-comp
```

## Usage

### Global Registration

You can make OTP Input available throughout your Vue project.

**main.js or main.ts**

```js
import '@toneflix/dummy-comp/dist/lib/style.css'
import { createApp } from 'vue'
import App from './app.vue'
import DummyComp from '@toneflix/dummy-comp'

const app = createApp(App)
app.use(DummyComp)
app.mount('#app')
```

### Local Registration

You can also import the component in your Vue component.

**SomeComponent.vue**

```vue
<script setup>
import '@toneflix/dummy-comp/dist/lib/style.css'
import { DummyComp } from '@toneflix/dummy-comp'
</script>
```

### Use the Registered Component in Your Vue Template

**SomeComponent.vue**

```vue
<script setup lang="ts">
import '@toneflix/dummy-comp/dist/lib/style.css'
import { DummyComp } from '@toneflix/dummy-comp'
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <dummy-comp v-model="value" />
  </div>
</template>
```
