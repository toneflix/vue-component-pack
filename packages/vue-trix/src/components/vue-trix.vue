<template>
  <div :class="[$style.trix_container]">
    <trix-editor
      ref="editor"
      :class="['trix-content']"
      :input="computedId"
      :contenteditable="!disabled"
      :placeholder="placeholder"
      @trix-blur="(e: any) => emit('blur', e, editor.editor)"
      @trix-focus="(e: any) => emit('focus', e, editor.editor)"
      @trix-change="handleContentChange"
      @trix-initialize="handleInitialize"
      @trix-file-accept="(e: File) => emit('file-accept', e)"
      @trix-attachment-add="(e: any) => emit('attachment-add', e.attachment)"
      @trix-attachment-remove="(e: any) => emit('attachment-remove', e.attachment)"
      @trix-selection-change="(e: any) => emit('selection-change', e, editor.editor)"
      @trix-before-initialize="(e: any) => emit('before-initialize', e, editor.editor)"
    />
    <input type="hidden" :name="inputName" :id="computedId" :value="modelValue" />
  </div>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import Trix from 'trix'
import { computed, onMounted, ref, watch } from 'vue'
import { Events, TrixEvent, MainProps } from '../types'

const {
  config = {},
  inputId = '',
  disabled,
  autofocus = false,
  inputName = 'content',
  placeholder = ''
} = defineProps<MainProps>()

const emit = defineEmits<Events>()

const editor = ref()
const modelValue = defineModel<string>('modelValue')
const initialized = ref(false)
const isActivated = ref(false)

/**
 * Compute a random id of hidden input
 * when it haven't been specified.
 */
const generateId = computed(() => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
})

const computedId = computed(() => {
  return inputId || generateId.value
})

const isDisabled = computed(() => {
  return disabled
})

onMounted(() => {
  /** Override editor configuration */
  overrideConfig(config)
  /** Check if editor read-only mode is required */
  const t = setTimeout(() => {
    disableEditor(disabled)
    /**
     *  If localStorage is enabled,
     *  then load editor's content from the beginning.
     */
    if (localStorage) {
      const savedValue = localStorage.getItem(storageId('VueTrix'))
      if (savedValue && !modelValue.value) {
        editor.value.editor.loadJSON(JSON.parse(savedValue))
      }
    }
    clearTimeout(t)
  }, 5)
})

const handleContentChange = (event: TrixEvent) => {
  modelValue.value = event.target.value
  emit('input', modelValue.value)
}

const handleInitialize = (e: TrixEvent) => {
  /**
   * If autofocus is true, manually set focus to
   * beginning of content (consistent with Trix behavior)
   */
  if (autofocus) {
    editor.value.editor.setSelectedRange(0)
  }

  initialized.value = true

  emit('initialize', e, editor.value.editor)
}

const handleInitialContentChange = (newContent: any) => {
  newContent = newContent === undefined ? '' : newContent

  if (editor.value.editor && editor.value.editor.innerHTML !== newContent) {
    /* Update editor's content when initial content changed */
    // modelValue.value = newContent

    /**
     *  If user are typing, then don't reload the editor,
     *  hence keep cursor's position after typing.
     */
    if (!isActivated.value) {
      reloadmodelValue(modelValue.value)
    }
  }
}

const emitEditorState = () => {
  /**
   * If localStorage is enabled,
   * then save editor's content into storage
   */
  if (localStorage) {
    localStorage.setItem(storageId('VueTrix'), JSON.stringify(editor.value.editor))
  }
  emit('update', modelValue.value)
}

const storageId = (component: any) => {
  if (inputId) {
    return `${component}.${inputId}.content`
  } else {
    return `${component}.content`
  }
}

const reloadmodelValue = (newContent: any) => {
  // Reload HTML content
  editor.value.editor.loadHTML(newContent)

  // Move cursor to end of new content updated
  editor.value.editor.setSelectedRange(getContentEndPosition())
}

const getContentEndPosition = () => {
  return editor.value.editor.getDocument().toString().length - 1
}

const disableEditor = (isDisabled: boolean) => {
  /** Disable toolbar and editor by pointer events styling */
  editor.value.disabled = !!isDisabled
  if (editor.value.toolbarElement) {
    editor.value.toolbarElement.style['pointer-events'] = isDisabled ? 'none' : 'unset'
  }
  if (isDisabled) {
    editor.value.contentEditable = false
    editor.value.style['background'] = '#e9ecef'
  } else {
    editor.value.style['pointer-events'] = 'unset'
    editor.value.style['background'] = 'transparent'
  }
}

const overrideConfig = (config: any) => {
  Trix.config = deepMerge(Trix.config, config)
}

const deepMerge = (target: Record<string, any>, override: Record<string, any>) => {
  // deep merge the object into the target object
  for (const prop in override) {
    if (Object.prototype.hasOwnProperty.call(override, prop)) {
      if (Object.prototype.toString.call(override[prop]) === '[object Object]') {
        // if the property is a nested object
        target[prop] = deepMerge(target[prop] || {}, override[prop])
      } else {
        // for regular property
        target[prop] = override[prop]
      }
    }
  }

  return target
}

watch(
  () => modelValue.value,
  (val) => {
    emitEditorState()
    handleInitialContentChange(val)
  }
)
watch(() => isDisabled.value, disableEditor)
watch(() => config, overrideConfig)
defineExpose({
  initialized: () => initialized.value
})
</script>

<style lang="css" module>
.trix_container {
  max-width: 100%;
  height: auto;
}
.trix_container .trix-button-group {
  background-color: white;
}
.trix_container .trix-content {
  background-color: white;
}
</style>
