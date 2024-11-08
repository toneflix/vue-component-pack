<template>
  <div class="input-checkbox">
    <div class="field-check">
      <input
        :id="'vf-' + name"
        :name="name"
        :checked="modelValue === trueValue"
        type="checkbox"
        @change="setValue"
      />
    </div>
    <div class="field-anotations" v-if="label || hint">
      <label :for="'vf-' + name" v-if="label">
        {{ label }}
      </label>
      <p class="field-hint" v-if="hint">{{ hint }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FormField } from '../types'

defineOptions({ name: 'InputField' })

const props = withDefaults(defineProps<FormField>(), {
  trueValue: true,
  falseValue: false
})

const modelValue = defineModel<FormField['value']>('modelValue', {
  required: true
})

const setValue = (e: Event) => {
  const target = e.target as HTMLInputElement
  modelValue.value = target.checked ? props.trueValue : props.falseValue
}
</script>
