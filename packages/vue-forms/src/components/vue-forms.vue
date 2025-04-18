<template>
  <div class="vue-forms-controller">
    <div
      class="vue-forms"
      :class="{ 'form-row': !useGrid, 'form-grid': useGrid, bordered, rounded }"
      v-if="!isGrouped"
    >
      <slot
        name="prepend"
        :props="{ formFields, isGrouped, useGrid, bordered, rounded, hideSubmit, separator }"
      />

      <FormGroup
        v-for="field in formFields"
        :key="field.name"
        :field="field"
        :use-grid="!!useGrid"
        v-model="formValues[field.name]"
      >
        <template
          :key="slot"
          v-for="slot in slotNames.filter((e) => !!$slots[e])"
          v-slot:[slot]="props"
        >
          <slot :name="slot" v-bind="props" />
        </template>
      </FormGroup>

      <slot :props="{ formFields, isGrouped, useGrid, bordered, rounded, hideSubmit, separator }" />

      <hr class="group-separator" v-if="separator && (!hideSubmit || !hideSubmit)" />

      <slot name="actions" :loading="!!loading" :submit="submit" :cancel="() => $emit('cancel')">
        <FormActions
          :loading="loading"
          :hide-submit="hideSubmit"
          :hide-cancel="hideCancel"
          :submit-label="submitLabel"
          :cancel-label="cancelLabel"
          @submit="submit"
          @cancel="$emit('cancel')"
        />
      </slot>
    </div>
    <div v-else class="form-groups">
      <slot
        name="prepend"
        :props="{ formFields, isGrouped, useGrid, bordered, rounded, hideSubmit, separator }"
      />

      <template v-for="(fields, group) in groups">
        <hr class="group-separator" :key="group + 'separator'" v-if="group && separator" />

        <div class="group-header" :key="group + 'header'" v-if="groupMeta?.[group]">
          <h3 class="group-title">{{ groupMeta[group].title }}</h3>
          <p class="group-subtitle" v-if="!!groupMeta[group].subtitle">
            {{ groupMeta[group].subtitle }}
          </p>
        </div>

        <div
          class="group"
          :class="{
            bordered: (!groupMeta?.[group] && bordered) || !!groupMeta?.[group]?.bordered,
            rounded: (!groupMeta?.[group] && rounded) || !!groupMeta?.[group]?.rounded
          }"
          :key="group + 'group'"
          v-if="group"
        >
          <label
            class="group-label"
            v-if="group !== 'ungrouped' && showGroupLabels && !groupMeta?.[group]"
          >
            {{ titleCase(String(group)) }}
          </label>
          <div class="vue-forms" :class="{ 'form-row': !useGrid, 'form-grid': useGrid }">
            <FormGroup
              v-for="field in fields"
              :key="field.name"
              :field="field"
              :use-grid="!!useGrid"
              v-model="formValues[field.name]"
            >
              <template
                :key="slot"
                v-for="slot in slotNames.filter((e) => !!$slots[e])"
                v-slot:[slot]="props"
              >
                <slot :name="slot" v-bind="props" />
              </template>
            </FormGroup>
          </div>
        </div>
      </template>

      <slot :props="{ formFields, isGrouped, useGrid, bordered, rounded, hideSubmit, separator }" />

      <hr class="group-separator" v-if="separator && (!hideSubmit || !hideSubmit)" />

      <slot name="actions" :loading="!!loading" :submit="submit" :cancel="() => $emit('cancel')">
        <FormActions
          :loading="!!loading"
          :hide-submit="hideSubmit"
          :hide-cancel="hideCancel"
          :submit-label="submitLabel"
          :cancel-label="cancelLabel"
          @submit="submit"
          @cancel="$emit('cancel')"
        />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../styles/main.scss'
import { BaseProps, FormField as FieldType, VueFormProps, VueFormSlots } from '../types'
import FormGroup from './form-group.vue'
import { computed } from 'vue'
import { slotNames, titleCase } from '../utils/providers'
import FormActions from './form-actions.vue'

defineProps<BaseProps>()
defineSlots<VueFormSlots>()

const emit = defineEmits(['cancel', 'submit'])

const formFields = defineModel<VueFormProps['fields']>('fields', {
  default: () => []
})

const formValues = defineModel<VueFormProps['modelValue']>('modelValue', {
  required: true
})

const isGrouped = computed(() => formFields.value.some((e) => !!e.group))
const groups = computed<{ [key: string]: FieldType[] }>(() => groupFormFields(formFields.value))

/**
 * Parse the form fields and assign them to groups
 */
const groupFormFields = (
  fields: FieldType[]
): {
  ungrouped: FieldType[]
  [key: string]: FieldType[]
} => {
  const grouped: { [K: string]: FieldType[] } = {} // Object to hold grouped items by group name
  const ungrouped: FieldType[] = [] // Array to hold items without a group

  if (!isGrouped.value) {
    return { ungrouped: [] }
  }

  fields.forEach((field) => {
    if (field.group) {
      if (!grouped[field.group]) {
        grouped[field.group] = [] // Initialize group if it doesn't exist
      }
      grouped[field.group]?.push(field) // Add item to its group
    } else {
      ungrouped.push(<FieldType>field) // Add item to ungrouped array
    }
  })

  return {
    ...grouped, // Spread grouped items by group name
    ungrouped // Add ungrouped items as a separate group
  }
}

const submit = () => {
  emit('submit')
}
</script>
