<template>
  <div class="demo-container">
    <div>
      <VuePlaceSelector
        option-value="name"
        type="country"
        v-model="form.country"
        @error="console.log"
      />
    </div>
    <div>
      <VuePlaceSelector
        type="state"
        option-value="name"
        v-model="form.state"
        :params="{ countries: form.country }"
        @error="console.log"
      />
    </div>
    <div>
      <VuePlaceSelector
        type="city"
        option-value="name"
        v-model="form.city"
        :params="{ countries: form.country, states: form.state }"
        @error="console.log"
      />
    </div>
    <div>
      <VuePlaceSelector
        type="ngcity"
        option-value="name"
        v-model="form.city"
        :params="{ states: form.state }"
        @error="console.log"
      />
    </div>
    <br />
    {{ form }}
  </div>
</template>

<script setup lang="ts">
import 'trix/dist/trix.css'
import { VuePlaceSelector } from '../../../packages/vue-place-selector'
import { ref } from 'vue'

const form = ref({
  country: 'Nigeria',
  state: 'Lagos',
  city: ''
})
</script>
