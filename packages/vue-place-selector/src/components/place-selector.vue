<template>
  <div>
    <slot
      :props="{
        loading,
        options,
        disable: loading || !valid,
        modelValue,
        'onUpdate:modelValue': onUpdateModelValue
      }"
      :selected="selected"
    >
      <select v-model="selectedValue" @change="onChange" :disabled="loading || !valid">
        <option disabled value="">
          {{ loading ? 'Loading...' : 'Choose an option' }}
        </option>
        <option :value="place[props.optionValue]" :key="place.id" v-for="place in options">
          {{ place.name }}
        </option>
      </select>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useEventBus } from '@vueuse/core'
import axios from 'axios'
import { BaseProps, Params, Place, Type } from '../types'
import { patterns, typeMaps, typePMaps } from '../utils/config'

defineOptions({
  name: 'VuePlaceSelector'
})

const emit = defineEmits<{
  (name: 'error', msg: string, error: unknown): void
  (name: 'change', value: string | number, data?: Place | undefined): void
}>()

// Props and defaults
const props = withDefaults(defineProps<BaseProps>(), {
  type: 'country',
  params: () => ({} as Params),
  busKey: 'locationSelector',
  baseUrl: '/v1',
  optionValue: 'id'
})

// Define model for two-way binding
const modelValue = defineModel<string | number | null>('modelValue', {
  required: true
})

// Reactive states
const options = ref<Place[]>([])
const loading = ref(false)
const initialized = ref(false)
const selectedValue = ref<string | number | null>(null)

// Local reactive copy of params to avoid mutating the prop directly
const localParams = ref({ ...props.params })

const selected = computed<Place | undefined>(() =>
  options.value.find((e) => e[props.optionValue] === selectedValue.value)
)

// Validity check for params
const valid = computed(() =>
  Object.values(localParams.value ?? {}).every((value) => value !== null && value !== undefined)
)

// Computed URL
const url = computed(() => {
  if (!patterns[props.type] || !valid.value) return null

  let path = patterns[props.type]
  for (const [key, value] of Object.entries(localParams.value || {})) {
    const i = typePMaps[<never>key]
    path = path.replace(`:${i}`, value?.toString() || '')
  }

  if (path.includes(':')) return null

  return path
})

// Event bus for communication
const bus = useEventBus<{ key: Type; value: number | string }>(props.busKey)

// New event bus for loading state management
const doneBus = useEventBus<{ key: Type; value: number | string }>(props.busKey + 'doneBus')

// Fetch places from API
const fetchPlaces = async () => {
  if (!url.value || url.value.includes('//')) return

  try {
    loading.value = true
    const { data } = await axios.get<{ data: Place[] }>(
      `https://naija-places.toneflix.com.ng/api${props.baseUrl + url.value}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Api-Key': props.apiKey ?? import.meta.env.VITE_VUE_PLACESELECTOR_API_KEY
        }
      }
    )

    options.value = data.data
    loading.value = false

    // Auto-select the first option if no value is provided
    if (!modelValue.value) {
      selectedValue.value = options.value[0]?.[props.optionValue] || null
      emitChange(selectedValue.value)
    } else {
      selectedValue.value = modelValue.value
      if (!initialized.value) {
        emitChange(selectedValue.value)
      }
    }

    doneBus.emit({ key: props.type, value: selected.value?.iso2 ?? selectedValue.value! }) // Indicate data is ready
  } catch (error) {
    emit('error', 'Error fetching places:', error)
    loading.value = false
  }
}

// Emit value changes to parent and event bus
const emitChange = (value: string | number | null) => {
  initialized.value = true
  if (value !== null) {
    modelValue.value = value
    bus.emit({ key: props.type, value: selected.value?.iso2 ?? value })
    emit('change', value, selected.value)
  }
}

// Handle select change
const onChange = () => {
  emitChange(selectedValue.value)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onUpdateModelValue = (value: any) => {
  selectedValue.value = value
  modelValue.value = value
  emitChange(value)
}

// Listen for updates on the event bus
bus.on(({ key, value }) => {
  const i = typeMaps[key]
  if (localParams.value[i] !== undefined) {
    localParams.value = { ...localParams.value, [i]: value } // Update localParams immutably
    fetchPlaces() // Trigger cascade fetch
  }
})

// Listen for loading state changes
doneBus.on(({ key, value }) => {
  if (key !== props.type && value) {
    //
  }
})

// Fetch data on mount
onMounted(async () => {
  if (Object.values(localParams.value).length <= 0) {
    await fetchPlaces()
  }
})
</script>
