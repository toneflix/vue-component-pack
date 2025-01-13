<script setup lang="ts">
import { reactive, ref } from 'vue'
import { AuthUser, BaseError, useAuth, useInlineAuth } from '@toneflix/vue-auth'
import { useRouter } from 'vue-router'

interface CustomUser extends AuthUser {
  name: string
  role: string
}

const router = useRouter()

const { login: inlineLogin } = useInlineAuth()
const { login } = useAuth()

const form = reactive({ email: 'test@example.com', password: 'password' })
const data = ref(
  {} as {
    user: CustomUser
    token?: string | undefined
    error?: BaseError | undefined
  }
)

const handleLogin = async () => {
  data.value = await login<CustomUser>(form)

  if (!data.value.error) router.replace('/auth/profile')
}

const { error, send, onSuccess } = inlineLogin(form)
onSuccess(() => {
  router.replace('/auth/profile')
})
</script>

<template>
  <div class="column-container">
    <input v-model="form.email" placeholder="Email Address" />
    <p class="error" v-if="data.error?.errors?.email">
      {{ data.error.errors.email }}
    </p>
    <input v-model="form.password" placeholder="Password" type="password" />
    <p class="error" v-if="data.error?.errors?.password">
      {{ data.error.errors.password }}
    </p>
    <button @click="handleLogin">Login</button>
    <router-link to="/auth/register">Register</router-link>
    <router-link to="/auth/forgot">Forgot</router-link>
  </div>
  <hr />
  <div class="column-container">
    <input v-model="form.email" placeholder="Email Address" />
    <p class="error" v-if="error?.errors?.email">
      {{ error.errors.email }}
    </p>
    <input v-model="form.password" placeholder="Password" type="password" />
    <p class="error" v-if="error?.errors?.password">
      {{ error.errors.password }}
    </p>
    <button @click="send">Login</button>
    <router-link to="/auth/register">Register</router-link>
    <router-link to="/auth/forgot">Forgot</router-link>
  </div>
</template>
