<template>
  <div class="form-actions" v-if="!hideSubmit || !hideCancel">
    <button
      type="button"
      class="action-cancel"
      :class="{ loading }"
      :disabled="!!loading"
      @click.prevent="$emit('cancel')"
      v-if="!hideCancel"
    >
      {{ cancelLabel ?? 'Cancel' }}
    </button>
    <button
      type="submit"
      class="action-confirm"
      :class="{ loading }"
      :disabled="!!loading"
      @click.prevent="$emit('submit')"
      v-if="!hideSubmit"
    >
      {{ submitLabel ?? 'Submit' }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'FormActions'
})

defineProps<{
  loading?: boolean | undefined
  hideSubmit?: boolean | undefined
  hideCancel?: boolean | undefined
  cancelLabel?: string | undefined
  submitLabel?: string | undefined
}>()

defineEmits(['cancel', 'submit'])
</script>
