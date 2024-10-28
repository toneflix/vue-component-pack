<template>
  <div class="container">
    <div>
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

    <div>
      <label>Public Key</label>
      <input v-model="pKey" placeholder="Public Key" />
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { PaystackInline } from '@toneflix/paystack-inline'
import '@toneflix/paystack-inline/dist/lib/style.css'

const pKey = ref(localStorage.getItem('pKey') || 'pk_test_TYooMQauvdEDq54NiTphI7jx')
const reference = ref<string>()

const state = ref<{
  ready: boolean
  success: { message: string; reference: string }
  verified: { message?: string; status: boolean }
  canceled: { reference: string }
  destroyed: boolean
  error: { message: string; reference?: string }
  initialized: { reference: string; authorization_url?: string; message?: string }
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
  padding: 5px;
  margin-top: 10px;
  border-radius: 4px;
  border: solid 1px rgb(113, 113, 113);
}
label {
  margin-right: 3px;
}

.pay-button {
  margin-left: auto;
  margin-right: auto;
}

.container {
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  border-radius: 14px;
  background-color: rgb(247, 247, 247);
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
