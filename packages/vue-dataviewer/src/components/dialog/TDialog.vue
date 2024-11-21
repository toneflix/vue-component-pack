<template>
  <Teleport to="body">
    <div
      class="t-dialog"
      :class="{ 't-dialog-fade': !model }"
      :style="{ zIndex }"
      v-bind="$attrs"
      v-if="model"
    >
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

withDefaults(
  defineProps<{
    zIndex?: number | undefined
  }>(),
  {
    zIndex: 5000
  }
)

const model = defineModel<boolean>('modelValue', {
  default: false
})

onMounted(() => {
  window.onkeyup = (e) => {
    if (e.code === 'Escape' && model.value) {
      model.value = false
    }
  }
})

watch(model, (model) => {
  document.body.classList[model ? 'add' : 'remove']('t-dialog-active')
})
</script>
