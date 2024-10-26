<script setup lang="ts">
import { reactive, ref } from 'vue'
import { AuthUser, BaseError, useAuth, useInlineAuth } from '@toneflix/vue-auth'

const { reset } = useAuth()
const { reset: inlineReset } = useInlineAuth()

const done = ref(false)
const form = reactive({ token: '0000', password: 'password', password_confirmation: 'password' })
const data = ref(
  {} as {
    user: AuthUser
    message?: string
    error?: BaseError
  }
)

const handleLogin = async () => {
  data.value = await reset(form)
  if (!data.value.error) done.value = true
}

const { send, error, message, onSuccess } = inlineReset(form)
onSuccess(() => {
  done.value = true
})
</script>

<template>
  <div class="column-container">
    <input v-model="form.token" placeholder="Token" />
    <p class="error" v-if="data.error?.errors?.token">
      {{ data.error.errors.token }}
    </p>
    <input v-model="form.password" placeholder="Password" type="password" />
    <p class="error" v-if="data.error?.errors?.password">
      {{ data.error.errors.password }}
    </p>
    <input v-model="form.password_confirmation" placeholder="Repeat Password" type="password" />
    <p class="error" v-if="data.error?.errors?.password_confirmation">
      {{ data.error.errors.password_confirmation }}
    </p>
    <div v-if="data.message">{{ data.message }}</div>
    <button @click="handleLogin" :disabled="done">Reset Password</button>
    <router-link to="/auth/login">Login</router-link>
    <router-link to="/auth/forgot" v-if="!done">Request New Token</router-link>
  </div>
  <hr />
  <div class="column-container">
    <input v-model="form.token" placeholder="Token" />
    <p class="error" v-if="error?.errors?.token">
      {{ error.errors.token }}
    </p>
    <input v-model="form.password" placeholder="Password" type="password" />
    <p class="error" v-if="error?.errors?.password">
      {{ error.errors.password }}
    </p>
    <input v-model="form.password_confirmation" placeholder="Repeat Password" type="password" />
    <p class="error" v-if="error?.errors?.password_confirmation">
      {{ error.errors.password_confirmation }}
    </p>
    <div v-if="message">{{ message }}</div>
    <button @click="send" :disabled="done">Reset Password</button>
    <router-link to="/auth/login">Login</router-link>
    <router-link to="/auth/forgot" v-if="!done">Request New Token</router-link>
  </div>
</template>
