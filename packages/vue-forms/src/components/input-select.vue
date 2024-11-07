<template>
  <div class="input-field">
    <label :for="name" v-if="label">
      {{ label }}
    </label>
    <select :id="name" :name="name" v-model="modelValue">
      <option v-for="(choice, i) in choices" :key="i" :value="choice">
        {{ choice }}
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
import { FormField } from '../types'

defineOptions({ name: 'InputField' })

defineProps<FormField>()

const modelValue = defineModel<FormField['value']>('modelValue', {
  required: true
})
</script>
