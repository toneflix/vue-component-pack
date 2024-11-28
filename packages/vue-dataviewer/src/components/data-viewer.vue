<template>
  <div
    class="t-dialog-controls"
    :style="{
      '--tf-primary-color': colors?.primary,
      '--tf-primary-color-faded': colors?.primaryFaded,
      '--tf-positive-color': colors?.positive,
      '--tf-positive-color-faded': colors?.positiveFaded,
      '--tf-negative-color': colors?.negative,
      '--tf-positive-negative-faded': colors?.negativeFaded
    }"
  >
    <slot
      :viewData="viewData"
      :viewMode="viewMode"
      :saving="saving"
      :toggleDialog="loadDialog"
    ></slot>
  </div>
  <TDialog v-model="dialogToggle" :z-index="dialogZIndex" :dialog-class="dialogClass">
    <MainContent
      dialog-mode
      ref="mainContent"
      class="constrained"
      v-bind="$props"
      v-model:form="form"
      v-model:data="viewData"
      v-model:errors="errors"
      v-model:loading="loading"
      v-model:mode="viewMode"
      v-model:saving="saving"
      @set-data="(d, m) => $emit('toggleDialog', d, m)"
      @click:save="(f, d) => $emit('click:save', f, d)"
      @toggleDialog="dialogToggle = $event"
    >
      <template v-for="slot in slotNames" :key="slot" v-slot:[slot]="props">
        <slot :name="slot" v-bind="<any>props" />
      </template>
      <template v-for="slot in formSlotNames" :key="slot" v-slot:[slot]="props">
        <slot :name="slot" v-bind="props" />
      </template>
    </MainContent>
  </TDialog>
</template>

<script setup lang="ts">
import '../styles/main.scss'
import { ref, type VNode } from 'vue'
import TDialog from './dialog/TDialog.vue'
import MainContent from './main-content.vue'
import { ComponentSlots, DataViewerProps, FormSlots, MainProps } from '../types'
import { formSlotNames, slotNames } from '../utils/providers'

defineOptions({
  name: 'DataViewer'
})

/* eslint-disable @typescript-eslint/no-explicit-any */
defineSlots<
  ComponentSlots & FormSlots & {
    /**
     * Default slot can be used as label, unless 'label' prop is specified; Suggestion: string
     */
    default: (scope: { toggleDialog: (data?: any, mode?: MainProps['mode']) => void }) => VNode[]
  }
>()

defineEmits<{
  (e: 'toggleDialog', data: any, mode: 'edit' | 'view' | 'doc' | 'close'): void
  (e: 'click:save', form: MainProps['form'], data: MainProps['data']): void
}>()
/* eslint-disable @typescript-eslint/no-explicit-any */

withDefaults(defineProps<DataViewerProps & MainProps>(), {
  dateFormat: 'do MMM, yyyy h:mm a',
  imageProps: () => ['imageUrl'],
  exclusions: () => ['id'],
  formExclusions: () => ['id', 'imageUrl']
})

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
const mainContent = ref()

const loadDialog = (data?: any, mode: 'edit' | 'view' | 'doc' | 'close' = 'view') => {
  if (data) {
    viewData.value = data
  }
  viewMode.value = mode
  dialogToggle.value = mode !== 'close'
}

defineExpose({
  submit: () => mainContent.value?.submit(),
  sanitizeForm: () => mainContent.value?.sanitizeForm()
})
</script>
