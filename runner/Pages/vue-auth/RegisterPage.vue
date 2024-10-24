<script setup lang="ts">
import { reactive, ref } from 'vue'
import { AuthUser, useAuth } from '@toneflix/vue-auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { register } = useAuth()

const form = reactive({ email: 'test@example.com', password: 'password', name: 'John Doe' })
const data = ref(
  {} as {
    user: AuthUser
    token?: string
    error?: { errors: { [key: string]: string } }
  }
)

const handleLogin = async () => {
  data.value = await register(form)
  if (!data.value.error) router.replace('/auth/profile')
}
</script>

<template>
  <div class="column-container">
    <input v-model="form.name" placeholder="Name" />
    <p class="error" v-if="data.error?.errors?.name">
      {{ data.error?.errors?.name }}
    </p>
    <input v-model="form.email" placeholder="Email Address" />
    <p class="error" v-if="data.error?.errors?.email">
      {{ data.error?.errors?.email }}
    </p>
    <input v-model="form.password" placeholder="Password" />
    <p class="error" v-if="data.error?.errors?.password">
      {{ data.error.errors.password }}
    </p>
    <button @click="handleLogin">Register</button>
    <router-link to="/auth/login">Login</router-link>
  </div>
</template>
