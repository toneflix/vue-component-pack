<template>
  <div
    :class="
      inlineMode
        ? [{ unsloted: !hasSlots && !$slots.default }]
        : [`form-group col-${useGrid ? 'span-' : ''}${field.col}`, { unsloted: !hasSlots }]
    "
  >
    <!-- Default Slots -->
    <slot v-bind="field" :modelValue="modelValue" v-if="$slots.default"></slot>
    <template v-else>
      <slot name="input" v-bind="field" :modelValue="modelValue" v-if="useInput">
        <InputField
          v-model="modelValue"
          v-bind="field"
          @blur="$emit('blur', $event)"
          @focus="$emit('focus', $event)"
        />
      </slot>
      <slot name="select" v-bind="field" :modelValue="modelValue" v-if="field.type === 'select'">
        <InputSelect
          v-model="modelValue"
          v-bind="field"
          type="select"
          @blur="$emit('blur', $event)"
          @focus="$emit('focus', $event)"
        />
      </slot>
      <slot
        name="checkbox"
        v-bind="field"
        :modelValue="modelValue"
        v-if="field.type === 'checkbox'"
      >
        <InputCheckbox v-model="modelValue" v-bind="field" type="checkbox" />
      </slot>
      <slot name="radio" v-bind="field" :modelValue="modelValue" v-if="field.type === 'radio'">
        <InputRadio v-model="modelValue" v-bind="field" type="radio" />
      </slot>
      <slot name="switch" v-bind="field" :modelValue="modelValue" v-if="field.type === 'switch'">
        <InputSwitch v-model="modelValue" v-bind="field" type="switch" />
      </slot>
      <slot
        name="textarea"
        v-bind="field"
        :modelValue="modelValue"
        v-if="field.type === 'textarea'"
      >
        <InputTextarea
          v-model="modelValue"
          v-bind="field"
          type="textarea"
          @blur="$emit('blur', $event)"
          @focus="$emit('focus', $event)"
        />
      </slot>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { FormField, InputEvents } from '../types'
import InputCheckbox from './input-checkbox.vue'
import InputField from './input-field.vue'
import InputSelect from './input-select.vue'
import InputRadio from './input-radio.vue'
import InputSwitch from './input-switch.vue'
import InputTextarea from './input-textarea.vue'

defineEmits<InputEvents>()

// Props
const props = defineProps<{
  field: FormField
  useGrid?: boolean
  inlineMode?: boolean
}>()

// v-model for two-way binding
const modelValue = defineModel<FormField['value']>('modelValue', {
  required: true
})

// Compute whether to use input types
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

// Use the Composition API to get available slots
const slots = useSlots()

// Array of all named slots
const slotsNames = ['input', 'select', 'checkbox', 'radio', 'switch', 'textarea']

// Helper function to check if a slot is truly populated
function isSlotPopulated(slotName: string): boolean {
  const slot = slots[slotName]
  if (!slot) return false

  const slotContent = slot()
  // Check if any of the returned nodes are actual elements (not comments)
  const check = slotContent.some((node) => node.type !== Comment && node.children?.length)

  return check && (props.field.type === slotName || (slotName === 'input' && useInput.value))
}

// Compute if any slot is populated
const hasSlots = computed(() => slotsNames.some(isSlotPopulated))
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 0.5rem;
}
</style>
