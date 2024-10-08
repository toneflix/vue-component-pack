---
outline: deep
---

# Get Started

Setting up Vue Paystack Inline is pretty simple and straightforward.

## Installation

Install using your preferred package manager.

::: code-group

```bash [npm]
npm install @toneflix/paystack-inline
```

```bash [yarn]
yarn add @toneflix/paystack-inline
```

```bash [pnpm]
pnpm add @toneflix/paystack-inline
```

:::

## Usage

### Global Registration

You can make OTP Input available throughout your Vue project.

**main.js or main.ts**

```js:line-numbers{1,4}
import '@toneflix/paystack-inline/dist/lib/style.css';
import { createApp } from 'vue';
import App from './app.vue';
import PaystackInline from '@toneflix/paystack-inline';

const app = createApp(App);
app.use(PaystackInline);
app.mount('#app');
```

### Local Registration

You can also import the component in your Vue component.

**SomeComponent.vue**

```vue:line-numbers{2,3}
<script setup>
import '@toneflix/paystack-inline/dist/lib/style.css';
import { PaystackInline } from '@toneflix/paystack-inline';
</script>
```

### Use the Registered Component in Your Vue Template

**SomeComponent.vue**

```vue:line-numbers{2,3}
<script setup lang="ts">
import '@toneflix/paystack-inline/dist/lib/style.css'
import { PaystackInline } from '@toneflix/paystack-inline'
import { ref } from 'vue'

const pKey = ref('pk_test_TYooMQauvdEDq54NiTphI7jx')
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <PaystackInline
      dont-verify
      :amount="1000"
      :customer="{
        email: 'john@example.com'
      }"
      :public-key="pKey"
    />
  </div>
</template>
```

### Verify Payment

To verify a payment, simply set the value of the `reference` model attribute and provide the `verify-callback` attribute which is a function that returns a promise that resolves to an object of `{status: boolean, message: string}`. Also set the `hidden` attribute if you do not want to display the payment button.

**VerifyComponent.vue**

```vue:line-numbers{2,3}
<script setup lang="ts">
import '@toneflix/paystack-inline/dist/lib/style.css'
import { PaystackInline } from '@toneflix/paystack-inline'
import { ref } from 'vue'

const pKey = ref('pk_test_TYooMQauvdEDq54NiTphI7jx')
const reference = ref()

const verify = () => {
  reference = 'sdsdsdsd'
}
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <PaystackInline
      hidden
      :amount="1000"
      :customer="{
        email: 'john@example.com'
      }"
      v-model:reference="reference"
      :verify-callback="
        () => {
          return new Promise((resolve) =>
            resolve({
              status: true,
              message: 'Verified'
            })
          )
        }
      "
    />
  </div>
</template>
```

### Default Slot

**SlutComponent.vue**

```vue:line-numbers{2,3}
<script setup lang="ts">
import '@toneflix/paystack-inline/dist/lib/style.css'
import { PaystackInline } from '@toneflix/paystack-inline'
import { ref } from 'vue'

const pKey = ref('pk_test_TYooMQauvdEDq54NiTphI7jx')
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <PaystackInline
      dont-verify
      :amount="1000"
      :customer="{
        email: 'john@example.com'
      }"
      :public-key="pKey"
    >
      <template #default="{ initialize, loading }">
        <button class="pay-button" :disabled="loading" @click="initialize()">
          {{ !loading ? 'Pay Now' : '' }}
          <div class="spinner" v-if="loading"></div>
        </button>
      </template>
    </PaystackInline>
  </div>
</template>
```
