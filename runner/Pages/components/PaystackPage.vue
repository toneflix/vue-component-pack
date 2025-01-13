<template>
  <div class="container">
    <PaystackInline
      dont-verify
      :amount="1000"
      :customer="{
        email: 'john@example.com'
      }"
      :public-key="pKey"
      @ready="state.ready = true"
      @success="
        (e) => {
          state.success = e
          reference = e.reference
        }
      "
      @verified="state.verified = $event"
      @canceled="state.canceled = $event"
      @destroyed="state.destroyed = true"
      @error="state.error = $event"
      @initialized="state.initialized = $event"
    >
      <template #default="{ initialize, loading }">
        <button class="pay-button" :disabled="loading" @click="initialize()">
          {{ !loading ? 'Pay Now' : '' }}
          <div class="spinner" v-if="loading"></div>
        </button>
      </template>
    </PaystackInline>
    <PaystackInline
      hidden
      :customer="{
        email: 'john@example.com'
      }"
      :amount="1000"
      :public-key="pKey"
      :reference="reference"
      @success="state.success = $event"
      @verified="state.verified = $event"
      @canceled="state.canceled = $event"
      @error="state.error = $event"
    />

    <pre class="state">
      <code>
        {{ state }}
      </code>
    </pre>

    <input v-model="pKey" placeholder="Public Key" />
  </div>
</template>
<script setup lang="ts">
import { PaystackInline } from '@toneflix/paystack-inline'
import '@toneflix/paystack-inline/dist/lib/style.css'
import { ref, watch } from 'vue'

const pKey = ref(localStorage.getItem('pKey') || 'pk_test_TYooMQauvdEDq54NiTphI7jx')
const reference = ref<string>()

const state = ref<{
  ready: boolean
  success: { message: string; reference: string }
  verified: { message?: string | undefined; status: boolean }
  canceled: { reference: string }
  destroyed: boolean
  error: { message: string; reference?: string | undefined }
  initialized: {
    reference: string
    authorization_url?: string | undefined
    message?: string | undefined
  }
}>({
  ready: false,
  success: { message: '', reference: '' },
  verified: { message: '', status: false },
  canceled: { reference: '' },
  destroyed: false,
  error: { message: '' },
  initialized: { reference: '', authorization_url: '', message: '' }
})

watch(pKey, (pKey) => {
  localStorage.setItem('pKey', pKey)
})
</script>

<style lang="scss" scoped>
input {
  margin-top: 10px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.state {
  padding: 10px;
  width: 500px;
  max-width: 500px;
  code {
    text-wrap: pretty;
  }
}
</style>
