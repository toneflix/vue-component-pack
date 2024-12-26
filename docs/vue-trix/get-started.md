---
outline: deep
---

# Get Started

Setting up Vue Trix is pretty simple and straightforward.

## Installation

Install using your preferred package manager.

::: code-group

```bash [npm]
npm install @toneflix/vue-trix
```

```bash [yarn]
yarn add @toneflix/vue-trix
```

```bash [pnpm]
pnpm add @toneflix/vue-trix
```

:::

## Usage

### Global Registration

You can make Vue Trix available throughout your Vue project.

**main.js or main.ts**

```js:line-numbers{1,4}
import 'trix/dist/trix.css'
import { createApp } from 'vue';
import App from './app.vue';
import VueTrix from '@toneflix/vue-trix';

const app = createApp(App);
app.use(VueTrix);
app.mount('#app');
```

### Local Registration

You can also import the component in your Vue component.

**SomeComponent.vue**

```vue:line-numbers{2,3}
<script setup>
import 'trix/dist/trix.css'
import { VueTrix } from '@toneflix/vue-trix';
</script>
```

### Use the Registered Component in Your Vue Template

**SomeComponent.vue**

```vue:line-numbers{2,3}
<script setup lang="ts">
import 'trix/dist/trix.css'
import { VueTrix } from '@toneflix/vue-trix';
import { ref } from 'vue';

const content = ref<string>('<p>Hello World</p>');
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <vue-trix v-model="content" />
  </div>
</template>
```
