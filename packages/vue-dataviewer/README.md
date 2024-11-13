# Vue Dataviewer

[![npm](https://img.shields.io/npm/v/@toneflix/vue-dataviewer.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/vue-dataviewer)
[![npm](https://img.shields.io/npm/dt/@toneflix/vue-dataviewer.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/vue-dataviewer)

Quickly view data from an object with little to no tinkering on vue 3. - See a live demo [here](https://toneflix.github.io/vue-component-pack/vue-dataviewer/demo.html).

<!-- <p align="center">
    <img width="200" src="https://toneflix.github.io/vue-component-pack/vue-dataviewer/images/banner.png" alt="Vue Dataviewer">
    <img width="200" src="https://vuejs.org/images/logo.png" alt="Vue.js">
</p> -->

## Documentation

Read the full documentation [here](https://toneflix.github.io/vue-component-pack/vue-dataviewer/)

## Installation

```bash
npm install @toneflix/vue-dataviewer
#or
yarn add @toneflix/vue-dataviewer
#or
pnpm add @toneflix/vue-dataviewer
```

## Usage

### Global Registration

You can make Vue Dataviewer available throughout your Vue project.

**main.js or main.ts**

```js
import '@toneflix/vue-dataviewer/dist/lib/style.css'
import { createApp } from 'vue'
import App from './app.vue'
import DataViewer from '@toneflix/vue-dataviewer'

const app = createApp(App)
app.use(DataViewer)
app.mount('#app')
```

### Local Registration

You can also import the component in your Vue component.

**SomeComponent.vue**

```vue
<script setup>
import '@toneflix/vue-dataviewer/dist/lib/style.css'
import { DataViewer } from '@toneflix/vue-dataviewer'
</script>
```

### Use the Registered Component in Your Vue Template (Dialog Mode)

**SomeComponent.vue**

```vue
<script setup lang="ts">
import '@toneflix/vue-dataviewer/dist/lib/style.css'
import { DataViewer } from '@toneflix/vue-dataviewer'
import { reactive } from 'vue'

const data = reactive({
  name: 'John Doe',
  email: 'john.doe@email.com',
  accept: false,
  category: 'home',
  safe_mode: true,
  country: 'Nigeria',
  address: '',
  message: 'Hello my people',
  imageUrl: 'https://www.tailwind-kit.com/images/person/6.jpg'
})
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <DataViewer
      shadow
      rounded
      bordered
      separator
      :data="data"
      v-slot="{ toggleDialog }"
      :boolean-labels="{
        accept: ['Accepted', 'Rejected']
      }"
    >
      <TBtn label="View Data" @click="toggleDialog(data, 'view')" />
    </DataViewer>
  </div>
</template>
```

### Use the Registered Component in Your Vue Template (Flat Mode)

**SomeComponent.vue**

```vue
<script setup lang="ts">
import '@toneflix/vue-dataviewer/dist/lib/style.css'
import { MainContent } from '@toneflix/vue-dataviewer'
import { reactive } from 'vue'

const data = reactive({
  name: 'John Doe',
  email: 'john.doe@email.com',
  accept: false,
  category: 'home',
  safe_mode: true,
  country: 'Nigeria',
  address: '',
  message: 'Hello my people',
  imageUrl: 'https://www.tailwind-kit.com/images/person/6.jpg'
})
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <MainContent
      shadow
      rounded
      bordered
      separator
      :data="data"
      :boolean-labels="{
        accept: ['Accepted', 'Rejected'],
        safe_mode: ['Enabled', 'Disabled']
      }"
    />
  </div>
</template>
```
