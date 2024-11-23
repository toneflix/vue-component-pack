<template>
  <div class="vue-forms-controller inline-form">
    <slot
      name="label"
      :label="modelValue"
      :value="modelValue"
      v-if="expanded || viewing === 'label'"
    >
      <Label />
    </slot>
    <FormGroup
      inline-mode
      :field="field"
      :class="[`form-group inline-controller`]"
      v-if="expanded || viewing === 'input'"
      v-model="modelValue"
    >
      <template #default="props" v-if="$slots.default">
        <slot name="default" v-bind="props" :edit="() => (viewing = 'input')" />
      </template>
    </FormGroup>
    <button
      class="inline-button"
      @click="viewing = 'input'"
      v-if="!expanded && viewing !== 'input'"
    >
      <IconEdit v-bind="iconProps" />
    </button>
    <button class="inline-button" @click="save" v-else-if="viewing === 'input'">
      <IconSave v-bind="iconProps" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import FormGroup from './form-group.vue'
import { FormField, InlineFormProps } from '../types'
import { ref } from 'vue'
import IconEdit from './icon-edit.vue'
import IconSave from './icon-save.vue'

defineOptions({ name: 'InlineForm' })
const emit = defineEmits<{
  (e: 'save', value?: FormField['value']): void
}>()

const props = withDefaults(defineProps<InlineFormProps>(), {
  name: '',
  type: 'text',
  labelTag: 'span'
})

const field = computed<FormField>(() => ({
  type: props.type,
  name: props.name,
  autofocus: !props.expanded
}))

const modelValue = defineModel<FormField['value']>('modelValue', {
  required: true
})

const viewing = ref<'label' | 'input'>('label')

const Label = () => {
  return h(props.labelTag, {
    innerText: modelValue.value,
    class: [props.labelClass, 'inline-form-label']
  })
}

const save = () => {
  viewing.value = 'label'
  emit('save', modelValue.value)
}
</script>
