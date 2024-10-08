# Events

This page demonstrates usage of the events emitted by Paystack Inline.

## ready

Emitted when the component is ready

```vue:line-numbers
<script setup lang="ts">
function onReady() {
  console.log('ready')
}
</script>

<template>
  <paystack-inline
    :amount="5000"
    :redirect-route="{ name: 'SuccessPage' }"
    :verify-callback="verifyTransaction"
    :customer="{ email: 'customer@example.com' }"
    @ready="onReady"
  />
</template>
```

## initialized

Emitted when the payment initialization is successfull

```vue:line-numbers
<script setup lang="ts">
function onInitialized(data) {
  console.log(data)
}
</script>

<template>
  <paystack-inline
    :amount="5000"
    :redirect-route="{ name: 'SuccessPage' }"
    :verify-callback="verifyTransaction"
    :customer="{ email: 'customer@example.com' }"
    @initialized="onInitialized"
  />
</template>
```

## success

Emitted when the payment was successfull

```vue:line-numbers
<script setup lang="ts">
function onSuccess(response) {
  console.log(response)
}
</script>

<template>
  <paystack-inline
    :amount="5000"
    :redirect-route="{ name: 'SuccessPage' }"
    :verify-callback="verifyTransaction"
    :customer="{ email: 'customer@example.com' }"
    @success="onSuccess"
  />
</template>
```

## verified

Emitted when the payment has been verified successfully

```vue:line-numbers
<script setup lang="ts">
function onVerified(response) {
  console.log(response)
}
</script>

<template>
  <paystack-inline
    :amount="5000"
    :redirect-route="{ name: 'SuccessPage' }"
    :verify-callback="verifyTransaction"
    :customer="{ email: 'customer@example.com' }"
    @verified="onVerified"
  />
</template>
```

## canceled

Emitted when the payment is canceled

```vue:line-numbers
<script setup lang="ts">
function onCanceled(response) {
  console.log(response)
}
</script>

<template>
  <paystack-inline
    :amount="5000"
    :redirect-route="{ name: 'SuccessPage' }"
    :verify-callback="verifyTransaction"
    :customer="{ email: 'customer@example.com' }"
    @canceled="onCanceled"
  />
</template>
```

## error

Emitted when there is an error with the payment

```vue:line-numbers
<script setup lang="ts">
function onError(error, reference) {
  console.log(error, reference)
}
</script>

<template>
  <paystack-inline
    :amount="5000"
    :redirect-route="{ name: 'SuccessPage' }"
    :verify-callback="verifyTransaction"
    :customer="{ email: 'customer@example.com' }"
    @error="onError"
  />
</template>
```

## destroyed

Emitted when the component is unmounted

```vue:line-numbers
<script setup lang="ts">
function onDestroyed(response) {
  console.log('destroyed')
}
</script>

<template>
  <paystack-inline
    :amount="5000"
    :redirect-route="{ name: 'SuccessPage' }"
    :verify-callback="verifyTransaction"
    :customer="{ email: 'customer@example.com' }"
    @destroyed="onDestroyed"
  />
</template>
```
