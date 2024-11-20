<template>
  <slot
    :viewData="viewData"
    :viewMode="viewMode"
    :saving="saving"
    :toggleDialog="toggleDialog"
  ></slot>
  <TDialog v-model="dialogToggle" v-bind="$attrs">
    <MainContent
      dialog-mode
      class="constrained"
      v-bind="$props"
      v-model:form="form"
      v-model:data="viewData"
      v-model:errors="errors"
      v-model:loading="loading"
      v-model:mode="viewMode"
      v-model:saving="saving"
      @update-data="(d, m) => $emit('toggleDialog', d, m)"
      @click:save="$emit('click:save', $event)"
      @toggleDialog="dialogToggle = $event"
    />
  </TDialog>
</template>

<script setup lang="ts">
import '../styles/main.scss'
import { ref } from 'vue'
import TDialog from './dialog/TDialog.vue'
import MainContent from './main-content.vue'
import { DataViewerProps, MainProps } from '../types'

defineOptions({
  name: 'DataViewer'
})

/* eslint-disable @typescript-eslint/no-explicit-any */
defineEmits<{
  (e: 'toggleDialog', data: any, mode: 'edit' | 'view' | 'doc'): void
  (e: 'click:save', data: any): void
}>()

/**
 * The data that will be mapped for previewing
 */
const viewData = defineModel<MainProps['data']>('data', {
  required: true
})

/**
 * The reactive model data to be used in edit mode
 */
const form = defineModel<MainProps['form']>('form', {
  required: false
})
/* eslint-enable @typescript-eslint/no-explicit-any */

withDefaults(defineProps<DataViewerProps>(), {
  titles: () => ({ view: 'view Data', edit: 'Edit Data', doc: 'View Docs' }),
  dateFormat: 'do MMM, yyyy h:mm a',
  exclusions: () => ['imageUrl'],
  formExclusions: () => ['imageUrl']
})

const viewMode = defineModel<MainProps['mode']>('mode', {
  default: 'view'
})

const loading = defineModel<boolean>('loading', {
  default: false
})

const saving = defineModel<boolean>('saving', {
  default: false
})

const errors = defineModel<MainProps['errors']>('errors', {
  default: {}
})

const dialogToggle = ref(false)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toggleDialog = (data: any, mode: 'edit' | 'view' | 'doc' = 'view') => {
  viewData.value = data
  viewMode.value = mode
  dialogToggle.value = true
}
</script>
