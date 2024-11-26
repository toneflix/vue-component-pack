<template>
  <div class="input-field">
    <label :for="id" v-if="label">
      {{ label }}
    </label>
    <textarea
      rows="3"
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

defineOptions({ name: 'InputTextarea' })
defineEmits<InputEvents>()

const props = defineProps<
  FormField & {
    type?: 'textarea'
  }
>()

const modelValue = defineModel<string>('modelValue', {
  required: true
})

const id = 'vf-' + props.name + useId()

onMounted(() => {
  if (props.autofocus) {
    ;(<HTMLInputElement>document.querySelector('#' + id))?.focus()
  }
})
</script>
