<template>
  <div :class="`form-group col-${useGrid ? 'span-' : ''}${field.col}`">
    <slot name="input" v-bind="field" :modelValue="modelValue" v-if="useInput">
      <InputField v-model="modelValue" v-bind="field" />
    </slot>
    <slot name="select" v-bind="field" :modelValue="modelValue" v-if="field.type === 'select'">
      <InputSelect v-model="modelValue" v-bind="field" />
    </slot>
    <slot name="checkbox" v-bind="field" :modelValue="modelValue" v-if="field.type === 'checkbox'">
      <InputCheckbox v-model="modelValue" v-bind="field" />
    </slot>
    <slot name="radio" v-bind="field" :modelValue="modelValue" v-if="field.type === 'radio'">
      <InputRadio v-model="modelValue" v-bind="field" />
    </slot>
    <slot name="switch" v-bind="field" :modelValue="modelValue" v-if="field.type === 'switch'">
      <InputSwitch v-model="modelValue" v-bind="field" />
    </slot>
    <slot name="textarea" v-bind="field" :modelValue="modelValue" v-if="field.type === 'textarea'">
      <InputTextarea v-model="modelValue" v-bind="field" />
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { FormField } from '../types'
import InputCheckbox from './input-checkbox.vue'
import InputField from './input-field.vue'
import InputSelect from './input-select.vue'
import InputRadio from './input-radio.vue'
import InputSwitch from './input-switch.vue'
import InputTextarea from './input-textarea.vue'

// Props
const props = defineProps<{
  field: FormField
  useGrid?: boolean
}>()

const modelValue = defineModel<FormField['value']>('modelValue', {
  required: true
})

const useInput = computed(() => {
  const types: FormField['type'][] = [
    'text',
    'email',
    'url',
    'password',
    'number',
    'date',
    'datetime-local',
    'month',
    'search',
    'tel',
    'time',
    'week',
    'file'
  ]

  return types.includes(props.field.type)
})
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 0.5rem;
}
</style>
