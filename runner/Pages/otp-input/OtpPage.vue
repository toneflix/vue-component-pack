<template>
  <div>
    <OtpInput v-model="otp" rounded />
    <br />
    <OtpInput v-model="otp" masked="square" rounded />
  </div>
</template>
<script setup lang="ts">
import '@toneflix/otp-input/dist/es/style.css'
import { OtpInput } from '@toneflix/otp-input'
import { ref } from 'vue'

const otp = ref('')
</script>
