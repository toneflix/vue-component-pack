# Props

This page demonstrates usage of some of the props exposed by Paystack Inline.

## customer | `{email:string, phone?: string, name?: string}`

The customer details to be sent to Paystack.

```vue:line-numbers
<template>
  <paystack-inline
    :amount="5000"
    :customer="{
      email: 'customer@example.com',
      phone: '1234567890',
      name: 'John Doe'
  }" />
</template>
```

## amount | {`number`}

The amount to charge the customer.

```vue:line-numbers
<script setup lang="ts">
import { ref } from 'vue';
const amount = ref<number>(5000);
</script>

<template>
  <paystack-inline
    :amount="amount"
    :customer="{ email: 'customer@example.com' }"
  />
</template>
```

## inline | {~~`boolean`~~}

Whether the transaction should be handled by Paystack’s inline-js or the payment page.

```vue:line-numbers
<template>
  <paystack-inline
    :inline="true"
    :amount="amount"
    :customer="{ email: 'customer@example.com' }"
  />
</template>
```

## hidden | {~~`boolean`~~}

The component will not be visible. Useful for inline verification.

```vue:line-numbers
<template>
  <paystack-inline
    :hidden="true"
    :amount="amount"
    :customer="{ email: 'customer@example.com' }"
  />
</template>
```

## btnLabel | {~~`string`~~} | [_default: Pay Now_]

The label on the payment button.

```vue:line-numbers
<template>
  <paystack-inline
    :amount="5000"
    :customer="{ email: 'customer@example.com' }"
    btn-lable="Make Payment"
  />
</template>
```

## publicKey | {`string`}

Your Paystack public key.

```vue:line-numbers
<template>
  <paystack-inline
    public-key="your-paystack-public-key"
    :amount="5000"
    :customer="{ email: 'customer@example.com' }"
  />
</template>
```

## initializeCallback | {~~`function`~~}

A function that will be called before the transaction is initialized. This is useful if you need to initialize the transaction from a server.

The function takes no parameters and must return a promise that resolves to an object of `{authorization_url?: string, message: string, reference: string}`

```vue:line-numbers
<script setup lang="ts">
function initializeTransaction() {
  return new Promise((resolve) => {
    resolve({ reference: 'txn_ref_Iow1...', authorization_url: 'https://paystack.com/p...' });
  });
}
</script>

<template>
  <paystack-inline
    :amount="5000"
    :customer="{ email: 'customer@example.com' }"
    :initialize-callback="initializeTransaction"
  />
</template>
```

## verifyCallback | {~~`function`~~}

A function that will be called to verify the transaction. It receives the reference as a parameter and should return a Promise that resolves to an object of that resolves to an object of `{status: boolean, message: string}`

```vue:line-numbers
<script setup lang="ts">
function verifyTransaction(reference: string) {
  return new Promise((resolve) => {
    // Verify the transaction here
    resolve({ status: true, message: 'Verified' });
  });
}
</script>

<template>
  <paystack-inline
    :amount="5000"
    :customer="{ email: 'customer@example.com' }"
    :verify-callback="verifyTransaction"
  />
</template>
```

## dontVerify | {~~`boolean`~~}

Component will not attempt to verify the transaction, even when a reference is available on the URL.

```vue:line-numbers
<template>
  <paystack-inline
    :amount="5000"
    :dont-verify="true"
    :customer="{ email: 'customer@example.com' }"
  />
</template>
```

## redirectRoute | {~~`string`|`RouteLocationRaw`~~}

User will be redirected to this route after the payment has been verified. This is ignored when verifyCallback is not provided.

```vue:line-numbers
<script setup lang="ts">
function verifyTransaction(reference: string) {
  return new Promise((resolve) => {
    // Verify the transaction here
    resolve({ status: true, message: 'Verified' });
  });
}
</script>

<template>
  <paystack-inline
    :amount="5000"
    :redirect-route="{ name: 'SuccessPage' }"
    :verify-callback="verifyTransaction"
    :customer="{ email: 'customer@example.com' }"
  />
</template>
```
