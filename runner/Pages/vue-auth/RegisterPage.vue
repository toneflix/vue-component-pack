<script setup lang="ts">
import { reactive, ref } from 'vue'
import { AuthUser, BaseError, useAuth, useInlineAuth } from '@toneflix/vue-auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { register } = useAuth()
const { register: inlineRegister } = useInlineAuth()

const form = reactive({ email: 'test@example.com', password: 'password', name: 'John Doe' })
const data = ref(
  {} as {
    user: AuthUser
    token?: string
    error?: BaseError
  }
)

const handleLogin = async () => {
  data.value = await register(form)
  if (!data.value.error) router.replace('/auth/profile')
}

const { send, error, onSuccess } = inlineRegister(form)
onSuccess(() => {
  router.replace('/auth/profile')
})
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
    <input v-model="form.password" placeholder="Password" type="password" />
    <p class="error" v-if="data.error?.errors?.password">
      {{ data.error.errors.password }}
    </p>
    <button @click="handleLogin">Register</button>
    <router-link to="/auth/login">Login</router-link>
  </div>
  <hr />
  <div class="column-container">
    <input v-model="form.name" placeholder="Name" />
    <p class="error" v-if="error?.errors?.name">
      {{ error?.errors?.name }}
    </p>
    <input v-model="form.email" placeholder="Email Address" />
    <p class="error" v-if="error?.errors?.email">
      {{ error?.errors?.email }}
    </p>
    <input v-model="form.password" placeholder="Password" type="password" />
    <p class="error" v-if="error?.errors?.password">
      {{ error.errors.password }}
    </p>
    <button @click="send">Register</button>
  </div>
</template>
