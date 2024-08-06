<template>
  <div>
    <OtpInput v-model="otp" rounded />
  </div>
</template>

<script setup lang="ts">
import '@toneflix/otp-input/dist/lib/style.css'
import { OtpInput } from '@toneflix/otp-input'
import { ref } from 'vue'

const otp = ref('')
</script>
