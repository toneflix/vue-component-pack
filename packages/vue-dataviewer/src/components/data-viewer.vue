<template>
  <slot
    :viewData="viewData"
    :viewMode="viewMode"
    :saving="saving"
    :toggleDialog="toggleDialog"
  ></slot>
  <TDialog v-model="dialogToggle" v-bind="$attrs" :z-index="dialogZIndex">
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
    >
      <template v-for="slot in slotNames" :key="slot" v-slot:[slot]="props">
        <slot
          :name="slot"
          v-bind="casts.form(props)"
          v-if="slot === 'form-append' || slot === 'form-prepend'"
        />
        <slot
          :name="slot"
          v-bind="casts.list(props)"
          v-else-if="slot === 'list-prepend' || slot === 'list-append' || slot === 'list-after'"
        />
        <slot :name="slot" v-bind="casts.listItem(props)" v-else-if="slot === 'list-item'" />
        <slot :name="slot" v-bind="casts.imgListItem(props)" v-else-if="slot === 'img-list-item'" />
        <slot :name="slot" v-bind="casts.imageViewer(props)" v-else-if="slot === 'image-viewer'" />
        <slot :name="slot" v-bind="casts.loader(props)" v-else-if="slot === 'loader'" />
        <slot :name="slot" v-bind="casts.image(props)" v-else-if="slot === 'image'" />
      </template>
      <template v-for="slot in formSlotNames" :key="slot" v-slot:[slot]="props">
        <slot :name="slot" v-bind="props" />
      </template>
      <template #form-prepend="props">
        <slot name="form-prepend" v-bind="props" />
      </template>
      <template #form-append="props">
        <slot name="form-append" v-bind="props" />
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
import { casts, formSlotNames, slotNames } from '../utils/providers'

defineOptions({
  name: 'DataViewer'
})

/* eslint-disable @typescript-eslint/no-explicit-any */
defineSlots<
  ComponentSlots & FormSlots & {
    /**
     * Default slot can be used as label, unless 'label' prop is specified; Suggestion: string
     */
    default: (scope: { toggleDialog: (data?: any, mode?: 'edit' | 'view' | 'doc') => void }) => VNode[]
  }
>()

defineEmits<{
  (e: 'toggleDialog', data: any, mode: 'edit' | 'view' | 'doc'): void
  (e: 'click:save', data: any): void
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


const toggleDialog = (data?: any, mode: 'edit' | 'view' | 'doc' = 'view') => {
  if (data) {
    viewData.value = data
  }
  viewMode.value = mode
  dialogToggle.value = true
}
</script>
