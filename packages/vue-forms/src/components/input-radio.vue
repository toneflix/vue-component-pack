<template>
  <div class="input-radio">
    <label v-if="label">{{ label }}</label>
    <fieldset>
      <legend class="sr-only" v-if="label">{{ label }}</legend>
      <div class="radio-container">
        <div class="radio-item" v-for="(choice, i) in parsedChoices" :key="i">
          <input
            type="radio"
            :id="'vf-' + choice + name"
            :name="name"
            :value="choice"
            :checked="modelValue === choice"
            @change="setValue"
          />
          <label :for="'vf-' + choice + name">
            {{ titleCase(choice) }}
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
const props = defineProps<
  FormField & {
    type?: 'radio'
  }
>()

// Handle `modelValue` for v-model
const modelValue = defineModel<FormField['value']>('modelValue', {
  required: true
})

// Compute parsed choices to handle both formats
const parsedChoices = computed(() => {
  if (Array.isArray(props.choices) && typeof props.choices[0] === 'string') {
    return props.choices as string[]
  } else if (Array.isArray(props.choices) && typeof props.choices[0] === 'object') {
    return (props.choices as unknown as { [key: string]: boolean }[]).map(
      (choiceObj) => Object.keys(choiceObj)[0] // Extract the key as the choice
    )
  } else {
    return []
  }
})

// Event handler for setting the value
const setValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  modelValue.value = target.value
}
</script>
