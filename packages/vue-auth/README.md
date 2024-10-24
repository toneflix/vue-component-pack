# Vue Auth

Vue 3 authentication plugin

## Documentation

Read the full documentation here: [https://toneflix.github.io/vue-component-pack/vue-auth](https://toneflix.github.io/vue-component-pack/vue-auth/)

## Installation

```bash
npm install @toneflix/vue-auth
#or
yarn add @toneflix/vue-auth
#or
pnpm add @toneflix/vue-auth
```

## Usage

### Global Registration

You can make Vue Auth available throughout your Vue project.

**main.js or main.ts**

```js
import { createApp } from 'vue'
import App from './app.vue'
import VueAuth from '@toneflix/vue-auth'

const app = createApp(App)

app.use(VueAuth, {
  baseUrl: 'https://example.com/api/v1'
  endpoints: {
    login: '/login',
    logout: '/logout'
    profile: '/profile',
    register: '/register',
    refreshToken: '/refresh-token'
  },
  storageKey: 'my_auth_token'
})

app.mount('#app')
```

### Local Registration

You can also import the plugin in your Vue component.

**SomeComponent.vue**

```vue
<script setup>
import { reactive } from 'vue'
import { useAuth } from '@toneflix/vue-auth'

const { login, logout, isAuthenticated } = useAuth()

const form = reactive({ email: '', password: '' })

const handleLogin = async () => {
  try {
    await login(
      { email: form.email, password: form.password },
      {
        baseUrl: 'https://example.com/api/v1'
        endpoints: {
          login: '/login',
        },
        storageKey: 'my_auth_token'
      }
    )
  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <template>
    <div
      style="
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-left: auto;
      margin-right: auto;
      max-width: 300px;
    "
    >
      <input v-model="form.email" placeholder="Email Address" />
      <input v-model="form.password" placeholder="Password" />
      <button @click="handleLogin">Login</button>
    </div>
  </template>
</template>
```

### Normal use of the registered plugin in your components

**SomeComponent.vue**

```vue
<script setup lang="ts">
import { reactive } from 'vue'
import { useAuth } from '@toneflix/vue-auth'

const { login, logout, isAuthenticated } = useAuth()

const form = reactive({ email: '', password: '' })

const handleLogin = async () => {
  try {
    await login({ email: form.email, password: form.password })
  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-left: auto;
      margin-right: auto;
      max-width: 300px;
    "
  >
    <input v-model="form.email" placeholder="Email Address" />
    <input v-model="form.password" placeholder="Password" />
    <button @click="handleLogin">Login</button>
  </div>
</template>
```
