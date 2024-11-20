<template>
  <Teleport to="body">
    <div class="t-dialog" :class="{ 't-dialog-fade': !model }" v-if="model">
      <div class="t-dialog-backdrop" @click="model = !model"></div>
      <slot></slot>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { watch, onMounted } from 'vue'

defineOptions({
  name: 'TDialog'
})

const model = defineModel<boolean>('modelValue', {
  default: false
})

onMounted(() => {
  document.onkeyup = (e) => {
    if (e.key === 'Escape' && model.value) {
      model.value = false
    }
  }
})

watch(model, (model) => {
  document.body.classList[model ? 'add' : 'remove']('t-dialog-active')
})
</script>
