<template>
  <TCard :class="{ 't-card-border': bordered, 't-card-shadow': shadow, 't-card-rounded': rounded }">
    <template #header>
      <slot name="header">
        <div class="flex items-center justify-between">
          <div class="card-title">
            {{ { view: titles?.view, edit: titles?.edit, doc: titles?.doc }[viewMode || 'view'] }}
          </div>
          <button class="close-btn" @click="$emit('toggleDialog', false)" v-if="dialogMode">
            &times;
          </button>
        </div>
      </slot>
    </template>
    <div>
      <VueForms
        rounded
        show-group-labels
        class="p-4 m-4 mx-auto"
        :fields="formdata"
        :loading="saving"
        v-model="form"
        v-if="viewMode === 'edit' && form"
        @cancel="viewMode = 'view'"
        @submit="emit('click:save', viewData)"
      >
        <template #prepend v-if="$slots['form-prepend']">
          <slot name="form-prepend" :form="form" :errors="errors" :viewData="viewData"> </slot>
        </template>
        <template #default v-if="$slots['form-append']">
          <slot name="form-append" :form="form" :errors="errors" :viewData="viewData"> </slot>
        </template>
      </VueForms>
      <div v-else-if="(viewMode === 'view' || !form) && viewData">
        <div class="t-list" separator>
          <div
            class="q-my-sm t-item clickable"
            :class="{ 't-item-separator': separator }"
            v-if="viewData.imageUrl"
            @click="setData(viewData, 'doc')"
          >
            <div class="t-item-section avatar">
              <div class="t-avatar">
                <img :src="viewData.imageUrl" alt="Document" />
              </div>
            </div>

            <div class="t-item-section">
              <div class="t-item-label">Click to expand</div>
            </div>
          </div>
          <div
            class="q-my-sm t-item"
            :class="{ 't-item-separator': separator }"
            :key="field[0]"
            v-for="field in viewDataMap"
          >
            <div class="t-item-section">
              <div class="t-item-label caption">
                {{ titleCase(slug(field[0])) }}
              </div>
              <div class="t-item-label" v-if="typeof field[1] === 'boolean'">
                <div class="t-chip t-chip-square" :class="field[1] ? 't-chip-green' : 't-chip-red'">
                  {{ boolLabel(slug(field[0]), field[1]) }}
                </div>
              </div>
              <div class="t-item-label" v-else>
                {{ parser(field[1], field[0]) }}
              </div>
            </div>
          </div>
          <slot name="list-append" :viewData="viewData"> </slot>
        </div>
        <slot name="list-after" :viewData="viewData"> </slot>
      </div>
      <div class="img-preview" v-else-if="viewData">
        <TBtn
          dense
          color="primary"
          label="Return"
          icon="fas fa-arrow-left"
          @click="setData(viewData, 'view')"
        />
        <img v-if="viewData.imageUrl" style="width: 100%" :src="viewData.imageUrl" alt="Document" />
      </div>
    </div>
    <TinnerLoading :showing="loading" />
  </TCard>
</template>

<script setup lang="ts">
import '../styles/main.scss'
import { computed, ref } from 'vue'
import { slug, titleCase } from '../utils/providers'
import TBtn from './TBtn.vue'
import TCard from './dialog/TCard.vue'
import TinnerLoading from './TInnerLoading.vue'
import { FormField } from '@toneflix/vue-forms/src/types'
import { VueForms } from '@toneflix/vue-forms'
import { MainContentProps, MainProps } from '../types'
import { formatDate } from 'date-fns'

defineOptions({
  name: 'MainContent'
})

/* eslint-disable @typescript-eslint/no-explicit-any */
const emit = defineEmits<{
  (e: 'updateData', data: any, mode: 'edit' | 'view' | 'doc'): void
  (e: 'click:save', data: any): void
  (e: 'toggleDialog', state: boolean): void
}>()

/**
 * The data that will be mapped for previewing
 */
const viewData = defineModel<MainProps['data']>('data')

/**
 * The reactive model data to be used in edit mode
 */
const form = defineModel<MainProps['form']>('form', {
  required: false
})
/* eslint-enable @typescript-eslint/no-explicit-any */

const props = withDefaults(defineProps<MainContentProps>(), {
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

const viewDataMap = computed(() =>
  viewData.value
    ? (Object.entries(viewData.value).filter((e) => {
        if (viewMode.value === 'edit') {
          return ![...props.exclusions, ...props.formExclusions].includes(e[0])
        } else {
          return !props.exclusions.includes(e[0])
        }
      }) as Array<[string, string]>)
    : []
)

const formdata = computed<FormField[]>(() => {
  return viewDataMap.value.map(([key, value]) => ({
    col: 12,
    name: key,
    type: typeof value === 'boolean' ? 'radio' : 'text',
    label: titleCase(slug(key, ' ')),
    choices: [
      { label: 'Accept', value: true },
      { label: 'Reject', value: true }
    ]
  }))
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setData = (data: any, mode: 'edit' | 'view' | 'doc' = 'view') => {
  viewData.value = data
  viewMode.value = mode
  dialogToggle.value = true

  const nData = Object.fromEntries(
    Object.entries(data).map(([key, val]) => [slug(key), parser(val)])
  )

  emit('updateData', nData, mode)
}

const boolLabel = (key: string, bool: boolean) => {
  if (props.booleanLabels?.[key]) {
    return bool ? props.booleanLabels?.[key][0] : props.booleanLabels?.[key][1]
  }

  return bool ? 'Active' : 'Inactive'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parser = (data: string | boolean | any, field?: string) => {
  if (field && props.dateProps?.includes(field)) {
    return formatDate(data, props.dateFormat)
  }

  if (typeof data === 'boolean') {
    return Number(data)
  }

  if (typeof data === 'function') {
    return data(viewData.value)
  }

  if (
    Array.isArray(data) &&
    data.every((e) => typeof e === 'string') &&
    viewMode.value === 'view'
  ) {
    return titleCase(data.join(', '))
  }

  return data
}
</script>
