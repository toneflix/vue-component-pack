<template>
  <div class="input-field">
    <label :for="'vf-' + name" v-if="label">
      {{ label }}
    </label>
    <select :id="'vf-' + name" :name="name" v-model="modelValue">
      <option v-for="(choice, i) in parsedChoices" :key="i" :value="choice.value">
        {{ choice.label }}
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { FormField } from '../types'

defineOptions({ name: 'InputField' })

const props = withDefaults(
  defineProps<
    FormField & {
      type?: 'select'
    }
  >(),
  {
    choices: () => []
  }
)

// Compute parsed choices to handle both formats
const parsedChoices = computed(() => {
  return (
    props.choices?.map((choice) => {
      if (typeof choice === 'object' && choice !== null && 'label' in choice && 'value' in choice) {
        return choice // If it's already an object with label/value, return as is
      } else {
        return { label: String(choice), value: choice } // Convert primitives to { label, value }
      }
    }) ?? []
  )
})

const modelValue = defineModel<FormField['value']>('modelValue', {
  required: true
})
</script>
