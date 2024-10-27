<script setup lang="ts">
import { AuthUser, useAuth, useInlineAuth } from '@toneflix/vue-auth'
import { useRouter } from 'vue-router'

const { logout, user } = useAuth<AuthUser & { name: string }>()
const { logout: inlineLogout } = useInlineAuth()
const router = useRouter()

const handleLogout = async () => {
  await logout()
  router.replace('/auth/login')
}

const { send, onSuccess } = inlineLogout()
onSuccess(() => {
  router.replace('/auth/login')
})
</script>

<template>
  <div class="column-container">
    <div>Name: {{ user.name }}</div>
    <div>Email: {{ user.email }}</div>
    <router-link :to="{ name: 'profile' }">Profile</router-link>
    <button @click="handleLogout">Logout</button>
  </div>
  <hr />
  <div class="column-container">
    <div>Name: {{ user.name }}</div>
    <div>Email: {{ user.email }}</div>
    <router-link :to="{ name: 'admin' }">Admin</router-link>
    <button @click="send">Logout</button>
  </div>
</template>
