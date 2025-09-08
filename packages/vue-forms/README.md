# Vue Forms

[![npm](https://img.shields.io/npm/v/@toneflix/vue-forms.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/vue-forms)
[![npm](https://img.shields.io/npm/dt/@toneflix/vue-forms.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/vue-forms)

A dynamic form generator for Vue 3. - See a live demo [here (coming soon)](http://greysoft.toneflix.net/vue-forms/demo.html).

<!-- <p align="center">
    <img width="200" src="http://greysoft.toneflix.net/vue-forms/images/banner.png" alt="Vue Forms">
    <img width="200" src="https://vuejs.org/images/logo.png" alt="Vue.js">
</p> -->

## Documentation

Read the full documentation [here (coming soon)](http://greysoft.toneflix.net/vue-forms/)

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
import { computed } from 'vue'

const formFields = ref([
  {
    type: 'text',
    name: 'name',
    label: 'Name',
    col: 6,
    hint: 'Enter your name',
    group: 'main'
  },
  {
    type: 'select',
    name: 'country',
    label: 'Country',
    col: 6,
    hint: 'Select your country',
    choices: ['Nigeria', 'USA', 'UK', 'Canada'],
    group: 'main'
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email Address',
    placeholder: 'Email Address',
    col: 12,
    hint: 'Enter your Email Address',
    group: 'alt'
  },
  {
    type: 'radio',
    name: 'category',
    label: 'Category',
    col: 12,
    hint: 'Choose a category',
    choices: ['home', 'away', 'middle_ground'],
    group: 'alt'
  },
  {
    type: 'switch',
    name: 'safe_mode',
    label: 'Safe Mode',
    col: 12,
    hint: 'Activate Safe Mode',
    trueValue: 1,
    falseValue: 0
  },
  {
    type: 'checkbox',
    name: 'accept',
    label: 'Do you accept',
    placeholder: 'Accept',
    col: 12,
    hint: 'Accept out terms',
    trueValue: 1,
    falseValue: 0
  }
])

const formValues = reactive({
  name: 'John Doe',
  email: 'john.doe@email.com',
  accept: 0,
  category: 'home',
  safe_mode: 0,
  country: 'Nigeria',
  address: ''
})
</script>

<template>
  <div style="width: 24rem; margin: 0 auto;">
    <vue-forms
      rounded
      separator
      show-group-labels
      style="margin: 0 auto; padding: 1rem;"
      :fields="formFields"
      :groupMeta="{
        main: {
          title: 'Main Form',
          subtitle: 'These are the main options',
          rounded: true
        },
        alt: {
          title: 'Alternative Form',
          subtitle: 'These are the alternative options',
          rounded: true
        }
      }"
      v-model="formValues"
      @cancel="console.log('cancel')"
      @submit="console.log('submit')"
      v-model="formValues"
    />
  </div>
</template>
```
