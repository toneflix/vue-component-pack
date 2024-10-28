---
outline: deep
---

# Getting Started with Vue Authenticator

Vue Authenticator makes integrating authentication into your Vue.js applications simple and flexible. With its highly customizable setup, you can easily connect to your own authentication API while maintaining full control over request handling, token management, and error responses. Whether you’re working with bearer tokens or any custom authentication method, Vue Authenticator is designed to adapt seamlessly to your specific needs—no extra code required. This guide will walk you through the basic setup and show you how to leverage the plugin’s flexibility to streamline your authentication processes. Let’s get started!

## Installation

Install using your preferred package manager.

::: code-group

```bash [npm]
npm install @toneflix/vue-auth
```

```bash [yarn]
yarn add @toneflix/vue-auth
```

```bash [pnpm]
pnpm add @toneflix/vue-auth
```

:::

## Usage

### Registration

To get started with Vue Authenticator, you’ll first need to register the library with your Vue app. This step ensures that authentication methods are available across your application. Here’s how to initialize the library:

```js:line-numbers{4,13-22,24}
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { authPlugin } from '@toneflix/vue-auth'

// Create your app instance
const app = createApp(App)

// Initialize Pinia for state management
app.use(createPinia())

// Register Vue Authenticator with custom configuration
const authenticator = authPlugin({
  baseUrl: 'https://your-api.com',
  endpoints: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout'
  },
  storageKey: 'auth_token', // The key used to store the token in localStorage
  transformResponse: (data) => ({ user: data.data, token: data.token }) // Customize the response handling
})

app.use(authenticator)

// Mount the app
app.mount('#app')
```

In this example:

- The baseUrl is your API base URL.
- The endpoints are the routes where your API handles authentication (login, register, logout, profile).
- The storageKey is where the token will be saved in localStorage.
- The transformResponse function lets you control how the response from the API is handled, offering flexibility in the structure of the API response.

Once registered, Vue Authenticator will automatically handle token storage, user data, and authentication checks throughout your app.

Now you’re ready to use Vue Authenticator’s features such as login, register, and logout in your components!

### Login Example

Inside a vue component you can attempt login in the following way

```vue:line-numbers{3,6,13}
<script setup>
import { reactive, ref } from 'vue'
import { useAuth } from '@toneflix/vue-auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { login } = useAuth()

const form = reactive({ email: 'test@example.com', password: 'password' })
const data = ref({ user: {}, token: null, error: null })

const handleLogin = async () => {
  data.value = await login(form)
  if (!data.value.error) router.replace('/auth/profile')
}
</script>

<template>
  <div class="column-container">
    <input v-model="form.email" placeholder="Email Address" />

    <p class="error" v-if="data.error?.email">
      {{ data.error.errors.email }}
    </p>

    <input v-model="form.password" placeholder="Password" type="password" />

    <p class="error" v-if="data.error?.password">
      {{ data.error.errors.password }}
    </p>

    <button @click="handleLogin">Login</button>
  </div>
</template>
```
