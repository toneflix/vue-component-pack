<script setup lang="ts">
import { reactive, ref } from 'vue'
import { AuthUser, useAuth } from '@toneflix/vue-auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { login } = useAuth()

const form = reactive({ email: 'test@example.com', password: 'password' })
const data = ref(
  {} as {
    user: AuthUser
    token?: string
    error?: { errors: { [key: string]: string } }
  }
)

const handleLogin = async () => {
  data.value = await login(form)
  if (!data.value.error) router.replace('/auth/profile')
}
</script>

<template>
  <div class="column-container">
    <input v-model="form.email" placeholder="Email Address" />
    <p class="error" v-if="data.error">
      {{ data.error.errors.email }}
    </p>
    <input v-model="form.password" placeholder="Password" />
    <p class="error" v-if="data.error">
      {{ data.error.errors.password }}
    </p>
    <button @click="handleLogin">Login</button>
    <router-link to="/auth/register">Register</router-link>
  </div>
</template>
