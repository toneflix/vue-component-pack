<template>
  <div class="t-card">
    <div class="t-card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="t-card-body">
      <slot></slot>
    </div>
    <div class="t-card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'TCard'
})
</script>
