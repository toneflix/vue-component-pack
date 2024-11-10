<template>
  <button type="button" class="t-btn">
    <i :class="icon" v-if="icon"></i>
    <slot>
      {{ label }}
    </slot>
    <i :class="iconRight" v-if="iconRight"></i>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TBtn'
})
defineProps<{
  label?: string
  color?: string
  loading?: boolean
  icon?: string
  iconRight?: string
}>()
</script>
