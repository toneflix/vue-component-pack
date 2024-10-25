<script setup lang="ts">
import { reactive, ref } from 'vue'
import { AuthUser, useAuth } from '@toneflix/vue-auth'
import { useRouter } from 'vue-router'

interface CustomUser extends AuthUser {
  name: string
  role: string
}

const router = useRouter()
const { login } = useAuth()

const form = reactive({ email: 'test@example.com', password: 'password' })
const data = ref(
  {} as {
    user: CustomUser
    token?: string
    error?: { errors: { [key: string]: string } }
  }
)

const handleLogin = async () => {
  data.value = await login<CustomUser>(form)

  if (!data.value.error) router.replace('/auth/profile')
}
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
</template>
