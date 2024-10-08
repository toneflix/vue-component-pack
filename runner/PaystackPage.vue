<template>
  <div>
    <PaystackInline
      :amount="1000"
      :customer="{
        email: 'john@example.com'
      }"
      class="pay-button"
      public-key="pk_test_TYooMQauvdEDq54NiTphI7jx"
      @error="console.log"
    >
      <template #default="{ initialize, loading }">
        <button :disabled="loading" @click="initialize()">
          {{ loading ? 'Loading...' : 'Pay Now' }}
        </button>
      </template>
    </PaystackInline>
  </div>
</template>
<script setup lang="ts">
import { PaystackInline } from '@toneflix/paystack-inline'
import '@toneflix/paystack-inline/dist/lib/style.css'
</script>
