<template>
  <div class="input-switch">
    <button
      type="button"
      role="switch"
      aria-checked="false"
      class="switch-button"
      :class="{ toggled: modelValue === trueValue }"
      :aria-labelledby="`switch-label-${id}`"
      @click="setValue"
    >
      <span aria-hidden="true" class="switch-indicator"></span>
    </button>
    <span class="switch-label" :id="`switch-label-${id}`"> {{ label }} </span>
  </div>
</template>
<script setup lang="ts">
import { FormField } from '../types'
import { getCurrentInstance } from 'vue'

defineOptions({ name: 'InputField' })

const props = withDefaults(
  defineProps<
    FormField & {
      type?: 'switch'
    }
  >(),
  {
    trueValue: true,
    falseValue: false
  }
)

const modelValue = defineModel<FormField['value']>('modelValue', {
  required: true
})

const id = getCurrentInstance()?.uid

const setValue = () => {
  modelValue.value = modelValue.value === props.falseValue ? props.trueValue : props.falseValue
}
</script>
