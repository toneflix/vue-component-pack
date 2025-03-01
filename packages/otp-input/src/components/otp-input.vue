<template>
  <div
    class="code-input-container"
    :class="[className, { disabled }, { 'has-error': hasError }]"
    :style="{
      '--ci-gap': gap,
      '--ci-font-size': fontSize,
      '--ci-text-color': textColor ?? primaryColor,
      '--ci-font-family': fontFamily,
      '--ci-border-width': borderSize,
      '--ci-border-radius': rounded || borderRadius ? borderRadius ?? '5px' : undefined,
      '--ci-color-primary': primaryColor,
      '--ci-color-secondary': secondaryColor,
      '--ci-text-color-active': textColorActive ?? secondaryColor,
      '--ci-background': backgroundColor,
      '--ci-background-active': backgroundColorActive
    }"
  >
    <slot>
      <p class="label" :class="labelClass" v-if="label">{{ label }}</p>
    </slot>
    <div class="code-input font-alatsi no-border" :class="[parseBorders(), 'position-' + position]">
      <template v-for="(v, index) in inputValues">
        <input
          class="
            text-center
            transition-all
            border-none
            rounded-lg
            outline-none
            w-14
            h-14
            focus:outline-none focus:ring-0
          "
          type="number"
          pattern="[0-9]"
          maxlength="1"
          :class="inputClass"
          :style="{
            width: `${fieldWidth}px`,
            height: `${fieldHeight}px`
          }"
          :autoFocus="autoFocus && index === autoFocusIndex && !disabled"
          :value="v"
          :key="index"
          :ref="
            (el) => {
              if (el) inputsRef[index + 1] = el as unknown as HtmlInput;
            }
          "
          :required="required === true"
          :readonly="index > 0 && inputValues[index - 1] === ''"
          :disabled="disabled === true"
          @input="(e) => onValueChange(e as unknown as CustomInputEvent, index)"
          @focus="(e) => onFocus(e as unknown as CustomFocusEvent, index)"
          @keydown="(e) => onKeyDown(e as unknown as CustomKeyboardEvent, index)"
          v-if="index > -1"
        />
      </template>
    </div>
    <!-- Show error message below here -->
    <div class="text-center error-message" v-if="hasError && errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  OtpInputType,
  HtmlInput,
  BorderLetter,
  CustomInputEvent,
  CustomFocusEvent,
  CustomKeyboardEvent
} from '../../types'
import '../styles/main.scss'
import { watch } from 'vue'
import { ref, onBeforeUpdate } from 'vue'

defineOptions({
  name: 'otp-input'
})

const emit = defineEmits(['change', 'complete', 'update:modelValue'])

const props = withDefaults(defineProps<OtpInputType>(), {
  position: 'center',
  borders: 'btlr',
  modelValue: '',
  inputsCount: 6,
  fieldWidth: 56,
  fieldHeight: 56,
  primaryColor: '#3880ff',
  secondaryColor: '#3dc2ff'
})

const KEY_CODE = {
  backspace: 'Backspace',
  delete: 'Delete',
  left: 'ArrowLeft',
  up: 'ArrowUp',
  right: 'ArrowRight',
  down: 'ArrowDown'
}

const iRefs = ref<number[]>([])
const inputValues = ref<string[]>([])
const inputsRef = ref<HtmlInput[]>([])
const autoFocusIndex = ref(0)
const autoFocus = true

const initVals = () => {
  let vals: string[]
  if (inputValues.value && inputValues.value.length) {
    vals = []
    for (let i = 0; i < props.inputsCount; i++) {
      vals.push(inputValues.value[i] || '')
    }
    autoFocusIndex.value =
      inputValues.value.length >= props.inputsCount ? 0 : inputValues.value.length
  } else {
    vals = Array(props.inputsCount).fill('')
  }
  iRefs.value = []
  for (let i = 0; i < props.inputsCount; i++) {
    iRefs.value.push(i + 1)
  }
  inputValues.value = vals
}

const onFocus = (e: CustomFocusEvent, prevIndex: number) => {
  const prev = inputsRef.value[prevIndex]
  if (prev && prev.value === '') {
    prev.focus()
  } else {
    e.target.select()
  }
}

const onValueChange = (e: CustomInputEvent, index: number) => {
  e.target.value = e.target.value.replace(/[^\d]/gi, '')
  if (e.target.value === '' || !e.target.validity.valid) {
    return
  }
  let next: number | undefined
  const value = e.target.value
  inputValues.value = Object.assign([], inputValues.value)
  if (value.length > 1) {
    let nextIndex = value.length + index - 1
    if (nextIndex >= props.inputsCount) {
      nextIndex = props.inputsCount - 1
    }

    next = iRefs.value[nextIndex]

    const split = value.split('')
    split.forEach((item, i) => {
      const cursor = index + i
      if (cursor < props.inputsCount) {
        inputValues.value[cursor] = item
      }
    })
  } else {
    next = iRefs.value[index + 1]
    inputValues.value[index] = value
  }
  if (next) {
    const element = inputsRef.value[next]
    element?.focus()
    element?.select()
  }
  triggerChange(inputValues.value)
}

const onKeyDown = (e: CustomKeyboardEvent, index: number) => {
  const prevIndex = index - 1
  const nextIndex = index + 1
  const prev = iRefs.value[prevIndex]
  const next = iRefs.value[nextIndex]

  const deleteKeyHandler = (e: CustomKeyboardEvent) => {
    e.preventDefault()
    const vals = [...inputValues.value]
    if (inputValues.value[index]) {
      vals[index] = ''
      inputValues.value = vals
      triggerChange(vals)
    } else if (next) {
      vals[nextIndex] = ''
      inputsRef.value[next]?.focus()
      inputValues.value = vals
      triggerChange(vals)
    }
  }

  switch (e.key) {
    case KEY_CODE.backspace: {
      e.preventDefault()
      const vals = [...inputValues.value]
      if (inputValues.value[index]) {
        vals[index] = ''
        inputValues.value = vals
        triggerChange(vals)
      } else if (prev) {
        vals[prevIndex] = ''
        inputsRef.value[prev]?.focus()
        inputValues.value = vals
        triggerChange(vals)
      }
      break
    }
    case KEY_CODE.delete: {
      deleteKeyHandler(e)
      break
    }
    case KEY_CODE.left:
      e.preventDefault()
      if (prev) {
        inputsRef.value[prev]?.focus()
      }
      break
    case KEY_CODE.right:
      e.preventDefault()
      if (next) {
        inputsRef.value[next]?.focus()
      }
      break
    case KEY_CODE.up:
    case KEY_CODE.down:
      e.preventDefault()
      break
    default:
      break
  }
}

const triggerChange = (values: string[]) => {
  const value = values.join('')

  emit('change', value)
  emit('update:modelValue', value)

  if (value.length >= props.inputsCount) {
    emit('complete', value)
    inputsRef.value[value.length]?.blur()
  }
}

const parseBorders = () => {
  const defaultBorders: Record<BorderLetter, string> = {
    b: 'border-b',
    t: 'border-t',
    l: 'border-l',
    r: 'border-r'
  }

  // Split each the letters in the string
  const letters: BorderLetter[] = props.borders.split('') as unknown as BorderLetter[]

  // Map the letters to the actual borders
  const mapped = letters.map((letter) => defaultBorders[letter])

  // Join the mapped borders with a space
  return mapped.join(' ')
}
watch(
  () => props.modelValue,
  (v) => {
    for (let i = 0; i < props.inputsCount; i++) {
      inputValues.value[i] = v?.[i] ?? ''
    }
  },
  {
    immediate: true
  }
)

initVals()

onBeforeUpdate(() => {
  inputsRef.value = []
})
</script>
