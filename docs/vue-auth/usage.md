# Usage

Once registered, Vue Authenticator is now ready to handle authentication across your application. We highly recommend using the [Inline Mode](./inline-usage) for a more streamlined experience. Here’s how you can use the core features such as login, register, logout, and user state management in your Vue components.

## Login

To authenticate a user, simply use the login method provided by the useAuth composable.

```vue:line-numbers{3,7,13}
<script setup>
import { reactive, ref } from 'vue'
import { useAuth } from '@toneflix/vue-auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { login } = useAuth()

const form = reactive({ email: '', password: '' })
const data = ref({ user: {}, token: null, error: null })

const handleLogin = async () => {
  data.value = await login(form)
  if (!data.value.error) {
    router.replace('/auth/profile')
  }
}
</script>

<template>
  <div class="login-container">
    <input v-model="form.email" placeholder="Email Address" />
    <p v-if="data.error?.email">{{ data.error.errors.email }}</p>

    <input v-model="form.password" placeholder="Password" type="password" />
    <p v-if="data.error?.password">{{ data.error.errors.password }}</p>

    <button @click="handleLogin">Login</button>
  </div>
</template>
```

## Register

Similarly, you can implement registration using the register method.

```vue:line-numbers{3,7,13}
<script setup>
import { reactive, ref } from 'vue';
import { useAuth } from '@toneflix/vue-auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const { register } = useAuth();

const form = reactive({ email: '', password: '', name: '' });
const data = ref({ user: {}, token: null, error: null });

const handleRegister = async () => {
  data.value = await register(form);
  if (!data.value.error) {
    router.replace('/auth/profile');
  }
};
</script>

<template>
  <div class="register-container">
    <input v-model="form.name" placeholder="Full Name" />
    <p v-if="data.error?.name">{{ data.error.errors.name }}</p>

    <input v-model="form.email" placeholder="Email Address" />
    <p v-if="data.error?.email">{{ data.error.errors.email }}</p>

    <input v-model="form.password" placeholder="Password" type="password" />
    <p v-if="data.error?.password">{{ data.error.errors.password }}</p>

    <button @click="handleRegister">Register</button>
  </div>
</template>
```

## Logout

You can log the user out with a button click and handle the redirection afterward.

```vue:line-numbers{2,5,9}
<script setup>
import { useAuth } from '@toneflix/vue-auth';
import { useRouter } from 'vue-router';

const { logout } = useAuth();
const router = useRouter();

const handleLogout = async () => {
  await logout();
  router.replace('/login');
};
</script>

<template>
  <button @click="handleLogout">Logout</button>
</template>
```

## Password Recovery

Requesting for password reset token can also be handled with a click.

```vue:line-numbers{3,5,12}
<script setup>
import { reactive, Ref, ref } from 'vue'
import { useAuth } from '@toneflix/vue-auth'

const { forgot } = useAuth()

const form = reactive({ email: '' })

const data = ref({ countdown: ref(0), timeout: 0, error: null })

const handleForgot = async () => {
  data.value = await forgot(form)
}
</script>

<template>
  <div class="column-container">
    <input v-model="form.email" placeholder="Email Address" />
    <p class="error" v-if="data.error?.email">{{ data.error.email }}</p>

    <div v-if="data.countdown">Countdown: {{ data.countdown / 1000 }}</div>
    <button @click="handleForgot" :disabled="data.countdown > 0">Request Code</button>
  </div>
</template>
```

## Password Reset

Once a user has requested a password recovery code, doing a password reset should also be a breeze.

```vue:line-numbers{3,5,12}
<script setup>
import { reactive, ref } from 'vue'
import { AuthUser, useAuth } from '@toneflix/vue-auth'

const { reset } = useAuth()

const done = ref(false)
const form = reactive({ token: '', password: '', password_confirmation: '' })
const data = ref(user: {}, message: null, error: null)

const handleLogin = async () => {
  data.value = await reset(form)
  done.value = !data.value.error
}
</script>

<template>
  <div class="column-container">
    <input v-model="form.token" placeholder="Token" />
    <p class="error" v-if="data.error?.token">{{ data.error.token }}</p>

    <input v-model="form.password" placeholder="Password" type="password" />
    <p class="error" v-if="data.error?.password">{{ data.error.password }}</p>

    <input v-model="form.password_confirmation" placeholder="Repeat Password" type="password" />
    <p class="error" v-if="data.error?.password_confirmation">{{ data.error.password_confirmation }}</p>

    <div v-if="data.message">{{ data.message }}</div>
    <button @click="handleLogin" :disabled="done">Reset Password</button>
  </div>
</template>
```

## Accessing the User Object

Once the authentication is set up, you can access the authenticated user object throughout your application. The user object is available after login and can be used to customize content or verify roles.

### Directly in Components

Import the `useAuth` composable to access the user object and authentication state directly in your components.

```vue:line-numbers{2,4}
<script setup lang="ts">
import { useAuth } from '@toneflix/vue-auth'

const { user, isAuthenticated } = useAuth()

if (isAuthenticated.value) {
  console.log('Authenticated user:', user.value)
}
</script>
```

### Using Middlewares

Within middlewares, the user object and other authentication state data are passed as part of the state parameter. This is helpful for route guards or custom redirection logic.

```ts:line-numbers{2,7}
middlewares: [
  (to, from, next, { user, isAuthenticated }) => {
    if (!isAuthenticated) {
      return next({ name: 'login' })
    }
    // Access user details, e.g., for role-based access control
    if (user?.role !== 'admin' && to.meta.requiresAdmin) {
      return next({ name: 'not-authorized' })
    }
    next()
  }
]
```

## Passing optional config to the store instance

The `useAuth()`, `useInlineAuth()` and `useAuthStore()` methods all accept and optional `storageOptions` parameter that allows you to pass extra options to the auth store instance when needed. This becomes extremely usefull if you use `pinia-plugin-persistedstate` or another pinia plugin that requires you to pass additional options to your store instances. E.g. `{ persist: true }`

```vue:line-numbers{4,6}
<script setup lang="ts">
import { useAuth,useAuthStore } from '@toneflix/vue-auth'

const { user } = useAuth({ persist: true })
// OR
const { user } = useInlineAuth({ persist: true })
// OR
const { user } = useAuthStore({ persist: true })

if (user.value) {
  console.log('user.value is persisted', user.value)
}
</script>
```
