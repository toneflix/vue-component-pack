<template>{{ loading ? 'Loading...' : null }}</template>
<script setup lang="ts">
defineOptions({
  name: 'TInnerLoading'
})
const loading = defineModel<boolean>('loading')
</script>
