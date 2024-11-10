<template>
  <div class="t-dialog">
    <div class="t-dialog-backdrop"></div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'TDialog'
})
</script>
