<script setup lang="ts">
import { reactive, Ref, ref } from 'vue'
import { useAuth } from '@toneflix/vue-auth'

const { forgot } = useAuth()

const form = reactive({ email: 'test@example.com' })

const data = ref({ countdown: ref(0), timeout: 0 } as {
  countdown: Ref<number>
  timeout?: number
  error?: { errors: { [key: string]: string } }
})

const handleLogin = async () => {
  data.value = await forgot(form)
}
</script>

<template>
  <div class="column-container">
    <input v-model="form.email" placeholder="Email Address" />
    <p class="error" v-if="data.error?.errors?.email">
      {{ data.error.errors.email }}
    </p>
    <div v-if="data.countdown">Countdown: {{ data.countdown / 1000 }}</div>
    <div v-if="data.timeout">Timeout: {{ data.timeout }}</div>
    <button @click="handleLogin" :disabled="data.countdown > 0">Request Code</button>
    <router-link to="/auth/register">Register</router-link>
    <router-link to="/auth/login">Login</router-link>
  </div>
</template>
