<template>
  <div class="input-field">
    <label :for="'vf-' + name" v-if="label">
      {{ label }}
    </label>
    <textarea
      rows="3"
      :id="'vf-' + name"
      :name="name"
      :placeholder="String(placeholder)"
      v-model="modelValue"
    />
    <div class="field-anotations" v-if="label || hint">
      <p class="field-hint" v-if="hint">
        {{ hint }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FormField } from '../types'

defineOptions({ name: 'InputTextarea' })

defineProps<
  FormField & {
    type?: 'textarea'
  }
>()

const modelValue = defineModel<string>('modelValue', {
  required: true
})
</script>
