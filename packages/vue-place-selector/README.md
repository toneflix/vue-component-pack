# Vue Place Selector

[![npm](https://img.shields.io/npm/v/@toneflix/vue-place-selector.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/vue-place-selector)
[![npm](https://img.shields.io/npm/dt/@toneflix/vue-place-selector.svg?style=flat-square)](https://www.npmjs.com/package/@toneflix/vue-place-selector)

Country State City Selector component for Vue3. - See a live demo [here](https://toneflix.github.io/vue-component-pack/vue-place-selector/demo.html).

<p align="center">
    <img width="200" src="https://toneflix.github.io/vue-component-pack/vue-place-selector/images/banner.png" alt="Place Selector">
    <!--<img width="200" src="https://vuejs.org/images/logo.png" alt="Vue.js">-->
</p>

## Documentation

Read the full documentation [here](https://toneflix.github.io/vue-component-pack/vue-place-selector/)

## Installation

```bash
npm install @toneflix/vue-place-selector
#or
yarn add @toneflix/vue-place-selector
#or
pnpm add @toneflix/vue-place-selector
```

## Usage

## Get API Key

This package depends on the [Toneflix Places API](https://naija-places.toneflix.com.ng) for it's data set, the `Toneflix Places API` requires an API key for use on production, to get your own api keys, head to https://naija-places.toneflix.com.ng:

1. Click on `Portal`.
2. Login if required.
3. Click on `API Keys`
4. Click on `Create new API Key`
5. Provide a name to identify your API key and click on `Create`

### Global Registration

You can make `Vue Place Selector` available throughout your Vue project.

**main.js or main.ts**

```js
import { createApp } from 'vue'
import App from './app.vue'
import VuePlaceSelector from '@toneflix/vue-place-selector'

const app = createApp(App)
app.use(VuePlaceSelector)
app.mount('#app')
```

### Local Registration

You can also import the component in your Vue component.

**SomeComponent.vue**

```vue
<script setup>
import { VuePlaceSelector } from '@toneflix/vue-place-selector'
</script>
```

### Use the Registered Component in Your Vue Template

**SomeComponent.vue**

```vue
<script setup lang="ts">
import { VuePlaceSelector } from '@toneflix/vue-place-selector'
import { ref } from 'vue'

const form = ref({
  country: '',
  state: '',
  city: ''
})
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <div>
      <VuePlaceSelector type="country" v-model="form.country" @error="console.log" />
    </div>
    <div>
      <VuePlaceSelector
        type="state"
        v-model="form.state"
        :params="{ countries: form.country }"
        @error="console.log"
      />
    </div>
    <div>
      <VuePlaceSelector
        type="city"
        v-model="form.city"
        :params="{ countries: form.country, states: form.state }"
        @error="console.log"
      />
    </div>
  </div>
</template>
```

### Setup API Key (For Production)

If you have an `env` file, that would be the best place to provide your API key, add `VITE_VUE_PLACESELECTOR_API_KEY` to your env file with your API Key as the value

```env
VITE_VUE_PLACESELECTOR_API_KEY=ExampleApiKeyHere
```

If you do not have an `env` file, you can pass the `api-key` prop to each component instance.

```vue
<template>
  <VuePlaceSelector
    api-key="ExampleApiKeyHere"
    v-model="form.city"
    :params="{ countries: form.country, states: form.state }"
    @error="console.log"
  />
</template>
```

### Styling

`Vue Place Selector` is simply an unstyled html `select` element, you can style with css as usual or pass an custom component to the default slot which exposes the following interface:

```ts
{
  props: {
    loading: boolean;
    options: Place[];
    disable: boolean;
    modelValue: string | number | null;
    'onUpdate:modelValue': (value: any) => void;
  },
  selected: string | number | null;
}
```
