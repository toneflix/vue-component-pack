<script setup lang="ts">
import { AuthUser, useAuth } from '@toneflix/vue-auth'
import { useRouter } from 'vue-router'

const { logout, user } = useAuth<AuthUser & { name: string }>()
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
