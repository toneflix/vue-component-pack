<template>
  <slot :viewData="viewData" :viewMode="viewMode" :toggleDialog="toggleDialog"></slot>
  <TDialog v-model="editDialogToggle" v-bind="$attrs">
    <TCard>
      <div class="q-pa-md">
        <div class="text-h6 text-weight-bold q-mb-sm">
          {{ { view: 'View Data', edit: 'Edit Data', doc: 'View Document' }[viewMode] }}
        </div>
        <q-form v-if="viewMode === 'edit'" class="q-gutter-md">
          <slot name="form-prepend" :form="form" :errors="errors" :viewData="viewData"> </slot>
          <div class="input_wrap" :key="field[0]" v-for="field in viewDataMap">
            <label class="block q-mb-xs">
              {{ titleCase(slug(field[0], ' ')) }}
            </label>
            <div
              class="items-center justify-start row q-pr-sm active-grey input-box"
              v-if="typeof field[1] === 'boolean'"
            >
              <q-radio
                v-model="form[slug(field[0], '_')]"
                :key="x"
                :val="x"
                :label="['Pending', 'Approved'][x]"
                v-for="x in [0, 1]"
              />
            </div>
            <InputField
              v-else
              type="text"
              v-model="form[slug(field[0], '_')]"
              :error="!!errors[slug(field[0], '_')]"
              :name="slug(field[0], '_')"
              :error-message="errors[slug(field[0], '_')]"
            />
            <slot
              name="form-field-append"
              :form="form"
              :value="form[slug(field[0], '_')]"
              :error="!!errors[slug(field[0], '_')]"
              :viewData="viewData"
              :error-message="errors[slug(field[0], '_')]"
            >
            </slot>
          </div>
          <slot name="form-append" :form="form" :errors="errors" :viewData="viewData"> </slot>
          <TBtn
            dense
            color="primary"
            label="Save"
            icon-right="fas fa-check"
            :loading="saving"
            @click="emit('click:save', viewData)"
          />
        </q-form>
        <div class="q-pa-sm" v-else-if="viewMode === 'view'">
          <q-list separator>
            <q-item class="q-my-sm" clickable v-ripple @click="toggleDialog(viewData, 'doc')">
              <q-item-section avatar>
                <q-avatar square color="primary" text-color="white">
                  <img :src="viewData.imageUrl" alt="Document" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>Click to expand</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :key="field[0]" v-for="field in viewDataMap">
              <q-item-section>
                <q-item-label caption>
                  {{ titleCase(slug(field[0])) }}
                </q-item-label>
                <q-item-label v-if="typeof field[1] === 'boolean'">
                  <q-chip square text-color="white" :color="field[1] ? 'green' : 'red '">
                    {{ field[1] ? 'Approved' : 'Pending ' }}
                  </q-chip>
                </q-item-label>
                <q-item-label v-else>
                  {{ parser(field[1], field[0]) }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <slot name="list-append" :viewData="viewData"> </slot>
          </q-list>
          <slot name="list-after" :viewData="viewData"> </slot>
        </div>
        <div class="flex flex-col justify-center q-pa-sm q-gutter-sm" v-else>
          <TBtn
            dense
            color="primary"
            label="Return"
            icon="fas fa-arrow-left"
            @click="toggleDialog(viewData, 'view')"
          />
          <img
            v-if="viewData.imageUrl"
            style="width: 100%"
            :src="viewData.imageUrl"
            alt="Document"
          />
        </div>
      </div>
      <TinnerLoading :showing="loading" />
    </TCard>
  </TDialog>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { computed, ref, watch } from 'vue'
import { slug, titleCase } from '../utils/providers'
import TBtn from './TBtn.vue'
import TCard from './dialog/TCard.vue'
import TDialog from './dialog/TDialog.vue'
import TinnerLoading from './TinnerLoading.vue'
import InputField from '@toneflix/vue-forms'

defineOptions({
  name: 'DataViewer'
})

/* eslint-disable @typescript-eslint/no-explicit-any */
const emit = defineEmits<{
  (e: 'toggleDialog', data: any, mode: 'edit' | 'view' | 'doc'): void
  (e: 'dataUpdated', data: any): void
  (e: 'click:save', data: any): void
}>()
/* eslint-enable @typescript-eslint/no-explicit-any */

const props = withDefaults(
  defineProps<{
    exclusions?: string[]
    formExclusions?: string[]
  }>(),
  {
    exclusions: () => ['id', 'user', 'imageUrl', 'createdAt', 'updatedAt'],
    formExclusions: () => ['id', 'user', 'imageUrl', 'createdAt', 'updatedAt']
  }
)

const viewMode = ref<'edit' | 'view' | 'doc'>('view')
const viewData = ref<Record<string, never>>({})
const editDialogToggle = ref(false)

const loading = defineModel<boolean>('loading', {
  default: false
})

const saving = defineModel<boolean>('saving', {
  default: false
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const form = defineModel<{ [key: string]: any }>('form', {
  default: {}
})

const errors = defineModel<{ [key: string]: string }>('errors', {
  default: {}
})

const viewDataMap = computed(
  () =>
    Object.entries(viewData.value).filter((e) => {
      if (viewMode.value === 'edit') {
        return ![...props.exclusions, ...props.formExclusions].includes(e[0])
      } else {
        return !props.exclusions.includes(e[0])
      }
    }) as Array<[string, string]>
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toggleDialog = (data: any, mode: 'edit' | 'view' | 'doc' = 'view') => {
  viewData.value = data
  viewMode.value = mode
  editDialogToggle.value = true

  const nData = Object.fromEntries(
    Object.entries(data).map(([key, val]) => [slug(key), parser(val)])
  )

  emit('toggleDialog', nData, mode)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parser = (data: string | boolean | any, field?: string) => {
  if (field && field.includes('edAt', field.length - 4)) {
    return dayjs(String(data)).format('Do MMM, YYYY h:MM A')
  }

  if (typeof data === 'boolean') {
    return Number(data)
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

watch(
  viewData,
  (viewData) => {
    if (viewData) {
      emit('dataUpdated', viewData)
    }
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.input-box.active-grey {
  border: 1px solid #d5d5d5;
  background-color: #f5f6fa;
  border-radius: 4px;
  padding: 5px;
}
</style>
