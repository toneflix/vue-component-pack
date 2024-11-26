<template>
  <div class="input-field">
    <label :for="id" v-if="label">
      {{ label }}
    </label>
    <input
      :type="type"
      :id="id"
      :name="name"
      :placeholder="<string>placeholder"
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
import { onMounted, useId } from 'vue'
import { FormField, InputEvents } from '../types'

defineOptions({ name: 'InputField' })
defineEmits<InputEvents>()

const props = defineProps<
  FormField & {
    type?: string
  }
>()

const modelValue = defineModel<FormField['value']>('modelValue', {
  required: true
})

const id = 'vf-' + props.name + useId()

onMounted(() => {
  if (props.autofocus) {
    ;(<HTMLInputElement>document.querySelector('#' + id))?.focus()
  }
})
</script>
