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
      @blur="viewing = 'label'"
    >
      <template #default="props" v-if="$slots.default">
        <slot
          name="default"
          v-bind="props"
          :toggleView="() => (viewing = viewing === 'input' ? 'label' : 'input')"
        />
      </template>
    </FormGroup>
    <button
      class="inline-button"
      @click="viewing = 'input'"
      v-if="!expanded && viewing !== 'input'"
    >
      <IconEdit />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import FormGroup from './form-group.vue'
import { FormField } from '../types'
import { ref } from 'vue'
import IconEdit from './icon-edit.vue'

defineOptions({ name: 'InlineForm' })

const props = withDefaults(
  defineProps<{
    /**
     * The name of the form field
     */
    name?: FormField['name']
    /**
     * The type of input (Ignored when using default slot)
     */
    type?: FormField['type']
    /**
     * If set to true, both the label and the input will be visible at the same time
     */
    expanded?: boolean
    /**
     * The tag to render the label with
     */
    labelTag?: string
    /**
     * Custom classes for the label
     */
    labelClass?: unknown
  }>(),
  {
    name: '',
    type: 'text',
    labelTag: 'span'
  }
)

const field = computed<FormField>(() => ({
  type: props.type,
  name: props.name,
  autofocus: true
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
</script>
