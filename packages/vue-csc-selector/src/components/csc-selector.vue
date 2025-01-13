<template>
  <div>{{ value }}</div>
</template>

<script setup lang="ts">
import '../styles/main.scss'

defineOptions({
  name: 'CscSelector'
})

const value = defineModel('modelValue', {
  required: true
})
</script>
