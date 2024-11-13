<template>
  <Teleport to="body">
    <div class="t-dialog" :class="{ 't-dialog-fade': !model }" v-if="model">
      <div class="t-dialog-backdrop" @click="model = !model"></div>
      <slot></slot>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
defineOptions({
  name: 'TDialog'
})

const model = defineModel<boolean>('modelValue', {
  default: false
})
</script>
