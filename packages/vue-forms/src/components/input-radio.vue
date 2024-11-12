<template>
  <div class="input-radio">
    <label v-if="label">{{ label }}</label>
    <fieldset>
      <legend class="sr-only" v-if="label">{{ label }}</legend>
      <div class="radio-container">
        <div class="radio-item" v-for="(choice, i) in parsedChoices" :key="i">
          <input
            type="radio"
            :id="'vf-' + choice.value + name"
            :name="name"
            :value="choice.value"
            :checked="modelValue === choice.value"
            @change="setValue"
          />
          <label :for="'vf-' + choice.value + name">
            {{ titleCase(choice.label) }}
          </label>
        </div>
      </div>
    </fieldset>
    <div class="field-anotations">
      <p class="field-hint" v-if="hint">{{ hint }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { FormField } from '../types'
import { titleCase } from '../utils/providers'

// Options and props setup
defineOptions({ name: 'InputField' })
const props = withDefaults(
  defineProps<
    FormField & {
      type?: 'radio'
    }
  >(),
  {
    choices: () => []
  }
)

// Handle `modelValue` for v-model
const modelValue = defineModel<FormField['value']>('modelValue', {
  required: true
})

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

// Event handler for setting the value
const setValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  modelValue.value = target.value
}
</script>
