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

### Registration

To initialize the library, you need to install it on your base vue instance.

**main.js or main.ts**

```js
import { createApp } from 'vue'
import App from './app.vue'
import { authPlugin } from '@toneflix/vue-auth'

const app = createApp(App)
const pinia = createPinia()

const auth = authPlugin({
  baseUrl: 'http://example.com/api/v1',
  storageKey: 'my_auth_token',
  endpoints: {
    login: '/login',
    register: '/register',
    logout: '/logout'
  }
})

app.use(pinia)
app.use(auth)

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

For full usage and implementation details [visit the documentation page](https://toneflix.github.io/vue-component-pack/vue-auth/)
