<template>
  <TCard :class="{ 't-card-border': bordered, 't-card-shadow': shadow, 't-card-rounded': rounded }">
    <template #header>
      <slot name="header">
        <div class="flex items-center justify-between">
          <div class="card-title">
            {{ viewTitle }}
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
        v-bind="formProps"
        v-model="form"
        :fields="formdata"
        :loading="saving"
        v-if="viewMode === 'edit' && form"
        @cancel="viewMode = 'view'"
        @submit="emit('click:save', viewData)"
      >
        <template #prepend v-if="$slots['form-prepend']">
          <slot name="form-prepend" :form="form" :errors="errors" :data="viewData"> </slot>
        </template>
        <template #default v-if="$slots['form-append']">
          <slot name="form-append" :form="form" :errors="errors" :data="viewData"> </slot>
        </template>
        <template v-for="slot in formSlotNames" :key="slot" v-slot:[slot]="props">
          <slot :name="slot" v-bind="props" />
        </template>
      </VueForms>
      <div v-else-if="(viewMode === 'view' || !form) && viewData">
        <div class="t-list" :class="listClass" separator>
          <slot
            name="img-list-item"
            :toggle="() => setData(viewData, 'doc', prop)"
            :field="prop"
            :label="titleCase(prop)"
            :value="String(viewData[prop])"
            :key="prop"
            v-for="prop in imageProps"
          >
            <div
              class="t-item clickable"
              :class="{ 't-item-separator': separator }"
              v-if="viewData[prop]"
              @click="setData(viewData, 'doc', prop)"
            >
              <div class="t-item-section t-item-section-avatar">
                <slot name="image" :src="viewData[prop]">
                  <div class="t-avatar">
                    <img :src="viewData[prop]" :alt="titleCase(prop)" />
                  </div>
                </slot>
              </div>

              <div class="t-item-section">
                <div class="t-item-label">Click to expand</div>
              </div>
            </div>
          </slot>
          <slot
            name="list-prepend"
            :data="viewData"
            :toggle="(mode: MainProps['mode']) => setData(viewData, mode)"
          >
          </slot>
          <template v-for="field in viewDataMap" :key="field[0]">
            <slot
              name="list-item"
              :field="field[0]"
              :label="labelsMap?.[field[0]] ?? titleCase(field[0])"
              :value="
                typeof field[1] === 'boolean'
                  ? boolLabel(slug(field[0]), field[1])
                  : parser(field[1], field[0])
              "
            >
              <div class="t-item" :class="{ 't-item-separator': separator }">
                <div class="t-item-section">
                  <div class="t-item-label caption">
                    {{ labelsMap?.[field[0]] ?? titleCase(field[0]) }}
                  </div>
                  <div class="t-item-label" v-if="typeof field[1] === 'boolean'">
                    <div
                      class="t-chip t-chip-square"
                      :class="field[1] ? 't-chip-green' : 't-chip-red'"
                    >
                      {{ boolLabel(slug(field[0]), field[1]) }}
                    </div>
                  </div>
                  <div class="t-item-label" v-else>
                    {{ parser(field[1], field[0]) }}
                  </div>
                </div>
              </div>
            </slot>
          </template>
          <slot
            name="list-append"
            :data="viewData"
            :toggle="(mode: MainProps['mode']) => setData(viewData, mode)"
          >
          </slot>
        </div>
        <slot
          name="list-after"
          :data="viewData"
          :toggle="(mode: MainProps['mode']) => setData(viewData, mode)"
        >
        </slot>
      </div>
      <div class="image-viewer" v-else-if="viewData">
        <slot name="image-viewer" :close="() => setData(viewData, 'view')" :src="viewData.imageUrl">
          <TBtn
            dense
            color="primary"
            label="Return"
            icon="fas fa-arrow-left"
            @click="setData(viewData, 'view')"
          />
          <img
            v-if="activeDoc?.src || viewData[imageProps?.[0] ?? 0]"
            style="width: 100%"
            :src="String(activeDoc?.src || viewData[imageProps?.[0] ?? 0])"
            :alt="titleCase(activeDoc?.alt || 'Document')"
          />
        </slot>
      </div>
    </div>
    <slot name="loader" :loading="loading">
      <TinnerLoading :showing="loading" />
    </slot>
  </TCard>
</template>

<script setup lang="ts">
import '../styles/main.scss'
import { computed, ref, watch } from 'vue'
import { formSlotNames, slug, titleCase } from '../utils/providers'
import TBtn from './TBtn.vue'
import TCard from './dialog/TCard.vue'
import TinnerLoading from './TInnerLoading.vue'
import { FormField } from '@toneflix/vue-forms/src/types'
import { VueForms } from '@toneflix/vue-forms'
import { ComponentSlots, FormSlots, MainContentProps, MainProps } from '../types'
import { formatDate } from 'date-fns'

defineSlots<ComponentSlots & FormSlots>()

defineOptions({
  name: 'MainContent'
})

/* eslint-disable @typescript-eslint/no-explicit-any */
const emit = defineEmits<{
  (e: 'updateData', data: any, mode: 'edit' | 'view' | 'doc'): void
  (e: 'click:save', data: any): void
  (e: 'toggleDialog', state: boolean): void
}>()
/* eslint-enable @typescript-eslint/no-explicit-any */

const props = withDefaults(defineProps<MainContentProps & MainProps>(), {
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

const activeDoc = ref<{ alt: string; src: string }>()
const dialogToggle = ref(false)
const viewTitle = computed(() => {
  const map = {
    view: props.titles?.view || 'view Data',
    edit: props.titles?.edit || 'Edit Data',
    doc: props.titles?.doc || 'View Docs'
  }

  return { view: map?.view, edit: map?.edit, doc: map?.doc }[viewMode.value || 'view']
})

const viewDataMap = computed(() =>
  viewData.value
    ? (Object.entries(viewData.value).filter((e) => {
        if (props.imageProps.includes(e[0])) {
          return false
        } else if (viewMode.value === 'edit') {
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
const setData = (data: any, mode: 'edit' | 'view' | 'doc' = 'view', doc?: string) => {
  dialogToggle.value = true

  if (doc) {
    viewMode.value = 'doc'
    activeDoc.value = { alt: doc, src: viewData.value[doc] }
  } else {
    viewData.value = data
    viewMode.value = mode

    const nData = Object.fromEntries(
      Object.entries(data).map(([key, val]) => [slug(key), parser(val)])
    )

    emit('updateData', nData, mode)
  }
}

const boolLabel = (key: string, bool: boolean) => {
  if (props.booleanLabels?.[key]) {
    return bool ? props.booleanLabels?.[key][0] : props.booleanLabels?.[key][1]
  }

  return bool ? 'Active' : 'Inactive'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parser = (data: string | boolean | any, field?: string) => {
  if (field && props.valuesMap?.[field]) {
    data = props.valuesMap?.[field]
  }

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

watch(viewMode, (viewMode) => {
  if (viewMode !== 'doc') {
    activeDoc.value = undefined
  }
})
</script>
