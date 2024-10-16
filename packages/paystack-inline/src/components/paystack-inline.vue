<template>
  <slot :initialize="() => initializeNewPayment()" :loading="loading">
    <button
      class="pay-button"
      v-bind="$attrs"
      :disabled="loading"
      @click="initializeNewPayment()"
      v-show="!hidden"
    >
      <slot :loading="loading" name="button">
        {{ !loading ? btnLabel : '' }}
        <div class="spinner" v-if="loading"></div>
      </slot>
    </button>
  </slot>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PaystackPop from '@paystack/inline-js'
import { PaystackInlineProps } from '../../types/types'
import '../styles/main.scss'

const emit = defineEmits<{
  (event: 'ready'): void
  (event: 'success', response: { message: string; reference: string }): void
  (event: 'verified', response: { message?: string; status: boolean }): void
  (event: 'canceled', response: { reference: string }): void
  (event: 'destroyed'): void
  (event: 'error', error: { message: string }, reference?: string): void
  (
    event: 'initialized',
    data: { reference: string; authorization_url?: string; message?: string }
  ): void
}>()

const reference = defineModel<string>('reference')

const props = withDefaults(defineProps<PaystackInlineProps>(), {
  btnLabel: 'Pay Now',
  initializeCallback() {
    return new Promise<{ reference: string; authorization_url?: string; message: string }>(
      (resolve) =>
        resolve({
          message: '',
          reference: '',
          authorization_url: ''
        })
    )
  },
  verifyCallback() {
    return new Promise<{ status: boolean; message?: string }>((resolve) =>
      resolve({
        status: true,
        message: ''
      })
    )
  }
})

const route = useRoute()
const router = useRouter()
const loading = ref(false)

const verifyPayment = (ref: string) => {
  loading.value = true
  try {
    props.verifyCallback(ref).then(({ status, message }) => {
      loading.value = false
      emit('verified', { status, message })
      reference.value = undefined
      if (props.redirectRoute) {
        router.push(props.redirectRoute)
      }
    })
  } catch (error) {
    emit('error', error as { message: string }, ref)
  }
}

const initializeNewPayment = () => {
  loading.value = true
  try {
    props.initializeCallback().then(({ reference, authorization_url, message }) => {
      emit('initialized', { reference, authorization_url, message })
      if (props.inline || !authorization_url) {
        paystackInline(reference)
      } else if (authorization_url) {
        setTimeout(() => {
          globalThis.location.href = authorization_url
        }, 3000)
      }
    })
  } catch (error) {
    emit('error', error as { message: string })
  }
}

const paystackInline = (reference: string = '') => {
  return new PaystackPop().newTransaction({
    key: props.publicKey,
    email: props.customer.email,
    amount: props.amount * 100,
    reference: reference,
    firstName: (props.customer.name || props.customer.email).split(' ')[0],
    lastName: (props.customer.name || props.customer.email).split(' ')[1] || '',
    metadata: {
      custom_fields: [
        {
          display_name: 'Name',
          variable_name: 'Name',
          value: props.customer.name
        },
        {
          display_name: 'Phone Number',
          variable_name: 'Phone Number',
          value: props.customer.phone
        }
      ]
    },
    onSuccess(response) {
      loading.value = false
      emit('success', response)
      if (!props.dontVerify) {
        verifyPayment(response.reference)
      }
    },
    onCancel() {
      loading.value = false
      emit('canceled', { reference })
    },
    onError: (error) => {
      loading.value = false
      emit('error', error, reference)
    }
  })
}

watch(
  [reference, () => <string | undefined>route?.query?.reference],
  ([ref, reference]) => {
    reference ||= ref
    if (reference && !props.dontVerify) {
      verifyPayment(reference)
    }
  },
  { immediate: true }
)

onMounted(() => {
  emit('ready')
})

onBeforeUnmount(() => {
  emit('destroyed')
})

defineExpose({
  loading
})
</script>
