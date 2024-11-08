<template>
  <div>{{ value }}</div>
</template>

<script setup lang="ts">
import '../styles/main.scss'

defineOptions({
  name: 'DummyComp'
})

const value = defineModel('modelValue', {
  required: true
})
</script>
