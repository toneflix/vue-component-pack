# Inline Mode

The Inline Mode of Vue Authenticator extends all methods available from the [`useAuth`](./usage) composable, allowing you to manage authentication in a concise and efficient manner while providing a streamlined approach to authentication within your Vue components. By utilizing the `useInlineAuth` composable, you can easily access all authentication methods from the `useAuth` composable while maintaining a concise and efficient code structure. With Inline Mode, integrating authentication into your application becomes a seamless and straightforward process, enabling you to focus more on building your app’s features and user experience.

## Login

To authenticate a user, simply use the detructured login method provided by the useInlineAuth composable.

```vue:line-numbers{3,7,11}
<script setup lang="ts">
import { reactive } from 'vue'
import { useInlineAuth } from '@toneflix/vue-auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { login } = useInlineAuth()

const form = reactive({ email: '', password: '' })

const { error, send, onSuccess, onError } = login(form)

onSuccess(() => {
  router.replace('/auth/profile')
})

onError((error) => {
  console.log(error)
})
</script>

<template>
  <div class="login-container">
    <input v-model="form.email" placeholder="Email Address" />
    <p class="error" v-if="error?.errors?.email">{{ error.errors.email }}</p>

    <input v-model="form.password" placeholder="Password" type="password" />
    <p class="error" v-if="error?.errors?.password">{{ error.errors.password }}</p>

    <button @click="send">Login</button>
  </div>
</template>
```

## Register

Similarly, you can implement registration using the register method.

```vue:line-numbers{3,7,11}
<script setup lang="ts">
import { reactive } from 'vue'
import { useInlineAuth } from '@toneflix/vue-auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { register } = useInlineAuth()

const form = reactive({ email: '', password: '', name: '' })

const { error, send, onSuccess, onError } = register(form)

onSuccess(() => {
  router.replace('/auth/profile')
})

onError((error) => {
  console.log(error)
})
</script>

<template>
  <div class="register-container">
    <input v-model="form.name" placeholder="Full Name" />
    <p class="error" v-if="error?.errors?.name">{{ error.errors.name }}</p>

    <input v-model="form.email" placeholder="Email Address" />
    <p class="error" v-if="error?.errors?.email">{{ error.errors.email }}</p>

    <input v-model="form.password" placeholder="Password" type="password" />
    <p class="error" v-if="error?.errors?.password">{{ error.errors.password }}</p>

    <button @click="send">Register</button>
  </div>
</template>
```

## Logout

You can log the user out with a button click and handle the redirection afterward.

```vue:line-numbers{2,6,8}
<script setup lang="ts">
import { useInlineAuth } from '@toneflix/vue-auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { logout } = useInlineAuth()

const { send: handleLogout, onSuccess: loggedOut } = logout(form)

loggedOut(() => {
  router.replace('/login')
})
</script>

<template>
  <button @click="handleLogout">Logout</button>
</template>
```

## Password Recovery

Requesting for password reset token can also be handled with a click.

```vue:line-numbers{3,5,9}
<script setup>
import { reactive, Ref, ref } from 'vue'
import { useInlineAuth } from '@toneflix/vue-auth'

const { forgot } = useInlineAuth()

const form = reactive({ email: '' })

const { send, countdown, timeout, error, onError, onSuccess } = forgot(form)

onSuccess((data) => {
  console.log(data)
})

onError((error) => {
  console.log(error)
})
</script>

<template>
  <div class="column-container">
    <input v-model="form.email" placeholder="Email Address" />
    <p class="error" v-if="error?.email">{{ error.email }}</p>

    <div v-if="countdown">Countdown: {{ countdown / 1000 }}</div>
    <button @click="send" :disabled="countdown > 0">Request Code</button>
  </div>
</template>
```

## Password Reset

Once a user has requested a password recovery code, doing a password reset should also be a breeze.

```vue:line-numbers{3,5,10}
<script setup>
import { reactive, ref } from 'vue'
import { useInlineAuth } from '@toneflix/vue-auth'

const { reset } = useInlineAuth()

const done = ref(false)
const form = reactive({ token: '', password: '', password_confirmation: '' })

const { send, error, message, onSuccess, onError } = reset(form)

onSuccess(() => {
  done.value = true
})

onError((error) => {
  console.log(error)
})
</script>

<template>
  <div class="column-container">
    <input v-model="form.token" placeholder="Token" />
    <p class="error" v-if="error?.token">{{ error.token }}</p>

    <input v-model="form.password" placeholder="Password" type="password" />
    <p class="error" v-if="error?.password">{{ error.password }}</p>

    <input v-model="form.password_confirmation" placeholder="Repeat Password" type="password" />
    <p class="error" v-if="error?.password_confirmation">{{ error.password_confirmation }}</p>

    <div v-if="message">{{ message }}</div>
    <button @click="send" :disabled="done">Reset Password</button>
  </div>
</template>
```
