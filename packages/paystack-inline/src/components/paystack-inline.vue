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
/* eslint-disable @typescript-eslint/no-explicit-any */
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PaystackPop from '@paystack/inline-js'
import { PaystackInlineProps } from '../../types/types'
import '../styles/main.scss'

const emit = defineEmits<{
  (event: 'ready'): void
  (event: 'success', response: { message: string; reference: string; [k: string]: any }): void
  (
    event: 'verified',
    response: { message?: string | undefined; status: boolean; [k: string]: any }
  ): void
  (event: 'canceled', response: { reference: string }): void
  (event: 'destroyed'): void
  (event: 'error', error: { message: string }, reference?: string | undefined): void
  (
    event: 'initialized',
    data: {
      reference: string
      authorization_url?: string | undefined
      message?: string | undefined
    }
  ): void
}>()

const paystack = new PaystackPop()
const reference = defineModel<string | undefined>('reference')

const props = withDefaults(defineProps<PaystackInlineProps>(), {
  btnLabel: 'Pay Now',
  initializeCallback() {
    return new Promise<{
      reference: string
      authorization_url?: string | undefined
      message: string
    }>((resolve) =>
      resolve({
        message: '',
        reference: '-',
        authorization_url: ''
      })
    )
  },
  verifyCallback() {
    return new Promise<{ status: boolean; message?: string | undefined }>((resolve) =>
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

const verifyPayment = async (ref: string) => {
  loading.value = true
  try {
    const data = await props.verifyCallback(ref)
    if (data && data.status === true) {
      emit('verified', data)
      reference.value = undefined
      if (props.redirectRoute) {
        router.push(props.redirectRoute)
      }
    }
    loading.value = false
  } catch (error) {
    loading.value = false
    emit('error', error as { message: string }, ref)
  }
}

const initializeNewPayment = async () => {
  loading.value = true
  try {
    const data = await props.initializeCallback()
    if (data && (data.authorization_url || data.reference)) {
      emit('initialized', {
        reference: data.reference,
        authorization_url: data.authorization_url,
        message: data.message
      })

      if (props.inline || !data.authorization_url) {
        return paystackInline(data.reference)
      } else if (data.authorization_url) {
        setTimeout(() => {
          globalThis.location.href = String(data.authorization_url)
        }, 3000)
      }
    } else {
      loading.value = false
    }
  } catch (error) {
    loading.value = false
    emit('error', error as { message: string })
  }
}

const paystackInline = (reference: string = '') => {
  return paystack.newTransaction({
    key: props.publicKey,
    email: props.customer.email,
    amount: props.amount * 100,
    reference: reference,
    firstName: (props.customer.name || props.customer.email).split(' ').at(0) || '',
    lastName: (props.customer.name || props.customer.email).split(' ').at(-1) || '',
    metadata: {
      custom_fields: [
        {
          display_name: 'Name',
          variable_name: 'Name',
          value: props.customer.name ?? props.customer.email?.split('@').at(0)
        },
        {
          display_name: 'Phone Number',
          variable_name: 'Phone Number',
          value: props.customer.phone ?? ''
        }
      ]
    },
    onSuccess(data) {
      loading.value = false
      emit('success', data)
      if (!props.dontVerify) {
        verifyPayment(data.reference)
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
  loading,
  paystack,
  initializeNewPayment
})
</script>
