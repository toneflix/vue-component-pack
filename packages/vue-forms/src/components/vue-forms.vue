<template>
  <div
    class="vue-forms"
    :class="{ 'form-row': !useGrid, 'form-grid': useGrid, bordered, rounded }"
    v-if="!isGrouped"
  >
    <FormField
      v-for="field in formFields"
      :key="field.name"
      :field="field"
      :use-grid="useGrid"
      v-model="formValues[field.name]"
    >
      <template v-for="slot in slotNames" :key="slot" v-slot:[slot]="props">
        <slot :name="slot" v-bind="props" />
      </template>
    </FormField>

    <hr class="group-separator" v-if="separator && (!hideSubmit || !hideSubmit)" />

    <slot name="actions">
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
          <FormField
            v-for="field in fields"
            :key="field.name"
            :field="field"
            :use-grid="useGrid"
            v-model="formValues[field.name]"
          >
            <template v-for="slot in slotNames" :key="slot" v-slot:[slot]="props">
              <slot :name="slot" v-bind="props" />
            </template>
          </FormField>
        </div>
      </div>
    </template>

    <hr class="group-separator" v-if="separator && (!hideSubmit || !hideSubmit)" />

    <slot name="actions">
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
</template>

<script setup lang="ts">
import { FormField as FieldType, GroupMeta } from '../types'
import FormField from './form-group.vue'
import '../styles/main.scss'
import { computed } from 'vue'
import { titleCase } from '../utils/providers'
import FormActions from './form-actions.vue'

defineProps<{
  loading?: boolean
  useGrid?: boolean
  rounded?: boolean
  bordered?: boolean
  separator?: boolean
  groupMeta?: GroupMeta
  hideSubmit?: boolean
  hideCancel?: boolean
  cancelLabel?: string
  submitLabel?: string
  showGroupLabels?: boolean
}>()

const emit = defineEmits(['cancel', 'submit'])

const formFields = defineModel<FieldType[]>('fields', {
  default: () => []
})

const formValues = defineModel<{ [key: FieldType['name']]: FieldType['value'] }>('modelValue', {
  required: true
})

const slotNames = ['input', 'select', 'checkbox', 'radio', 'switch']
const isGrouped = computed(() => formFields.value.some((e) => !!e.group))
const groups = computed<{ [key: string]: FieldType[] }>(() => groupFormFields(formFields.value))

const groupFormFields = (fields: FieldType[]) => {
  const grouped = {} // Object to hold grouped items by group name
  const ungrouped = [] // Array to hold items without a group

  if (!isGrouped.value) {
    return { ungrouped: [] }
  }

  fields.forEach((field) => {
    if (field.group) {
      if (!grouped[field.group]) {
        grouped[field.group] = [] // Initialize group if it doesn't exist
      }
      grouped[field.group].push(field) // Add item to its group
    } else {
      ungrouped.push(<never>field) // Add item to ungrouped array
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

<style scoped>
.form-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
