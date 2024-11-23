<template>
  <div class="input-field">
    <label :for="'vf-' + name" v-if="label">
      {{ label }}
    </label>
    <input
      :type="type"
      :id="'vf-' + name"
      :name="name"
      :placeholder="String(placeholder)"
      v-model="modelValue"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    />
    <div class="field-anotations" v-if="label || hint">
      <p class="field-hint" v-if="hint">
        {{ hint }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FormField, InputEvents } from '../types'

defineOptions({ name: 'InputField' })
defineEmits<InputEvents>()

defineProps<
  FormField & {
    type?: string
  }
>()

const modelValue = defineModel<FormField['value']>('modelValue', {
  required: true
})
</script>
