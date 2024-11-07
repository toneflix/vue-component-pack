<template>
  <div class="input-radio">
    <label v-if="label">{{ label }}</label>
    <fieldset>
      <legend class="sr-only" v-if="label">{{ label }}</legend>
      <div class="radio-container">
        <div class="radio-item" :key="i" v-for="(choice, i) in <string[]>choices">
          <input
            type="radio"
            :id="choice + name"
            :name="name"
            :value="choice"
            :checked="modelValue === choice"
            @change="setValue"
          />
          <label :for="choice + name">
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
import { FormField } from '../types'
import { titleCase } from '../utils/providers'

defineOptions({ name: 'InputField' })

defineProps<FormField>()

const modelValue = defineModel<FormField['value']>('modelValue', {
  required: true
})

const setValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  modelValue.value = target.value
}
</script>
