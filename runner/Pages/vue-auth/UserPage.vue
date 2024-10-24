<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { AuthUser, useAuth } from '@toneflix/vue-auth'
import { createAuthStore } from '@toneflix/vue-auth/src/stores/auth'
import { useRouter } from 'vue-router'

const useAuthStore = createAuthStore<AuthUser & { name: string }>()
const { logout } = useAuth()
const { user } = storeToRefs(useAuthStore())
const router = useRouter()

const handleLogout = async () => {
  await logout()
  router.replace('/auth/login')
}
</script>

<template>
  <div class="column-container">
    <div>Name: {{ user.name }}</div>
    <div>Email: {{ user.email }}</div>
    <button @click="handleLogout">Logout</button>
  </div>
</template>
