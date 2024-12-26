<template>
  <div class="demo-container">
    <VueTrix
      :disabled="disabled"
      v-model="model"
      @update="console.log"
      @attachment-remove="console.log"
    />
    <input type="checkbox" v-model="disabled" />
    {{ model }}
  </div>
</template>

<script setup lang="ts">
import 'trix/dist/trix.css'
import { VueTrix } from '@toneflix/vue-trix'
import { ref } from 'vue'

const model = ref('')
const disabled = ref(false)
</script>
