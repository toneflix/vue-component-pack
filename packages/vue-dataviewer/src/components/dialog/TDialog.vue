<template>
  <Teleport to="body">
    <div
      class="t-dialog"
      :class="[{ 't-dialog-fade': !model }, dialogClass]"
      :style="{ zIndex }"
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
    /**
     * Set a custom zIndex for the generated dialogs
     *
     * @default 5000
     */
    zIndex?: number | undefined
    /**
     * Class definitions to be attributed to the dialog
     */
    dialogClass?: unknown
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
