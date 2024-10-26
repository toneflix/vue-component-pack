# Vue Authenticator

Advanced authentication plugin for Vue 3

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

### Registration

To get started with Vue Authenticator, you’ll first need to register the library with your Vue app. This step ensures that authentication methods are available across your application. Here’s how to initialize the library:

**main.js or main.ts**

```js
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

### Usage

Once registered, vue-auth is now ready for use.

**SomeComponent.vue**

```vue
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

### Inline Mode Usage

For full usage and implementation details [visit the documentation page](https://toneflix.github.io/vue-component-pack/vue-auth/)
