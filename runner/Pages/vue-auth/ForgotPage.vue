<script setup lang="ts">
import { reactive, Ref, ref } from 'vue'
import { BaseError, useAuth, useInlineAuth } from '@toneflix/vue-auth'

const { forgot: inlineForgot } = useInlineAuth()
const { forgot } = useAuth()

const form = reactive({ email: 'test@example.com' })

const data = ref({ countdown: ref(0), timeout: 0 } as {
  countdown: Ref<number>
  timeout?: number | undefined
  error?: BaseError | undefined
})

const handleLogin = async () => {
  data.value = await forgot(form)
}

const { send, countdown, timeout, error } = inlineForgot(form)
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
  <hr />
  <div class="column-container">
    <input v-model="form.email" placeholder="Email Address" />
    <p class="error" v-if="error?.errors?.email">
      {{ error.errors.email }}
    </p>
    <div v-if="countdown">Countdown: {{ countdown / 1000 }}</div>
    <div v-if="timeout">Timeout: {{ timeout }}</div>
    <button @click="send" :disabled="countdown > 0">Request Code</button>
    <router-link to="/auth/register">Register</router-link>
    <router-link to="/auth/login">Login</router-link>
  </div>
</template>
