<template>
  <DataViewer mode="edit" :data="data" :form="data" />
</template>

<script setup lang="ts">
import '@toneflix/vue-dataviewer/src/styles/main.scss'
import { DataViewer } from '@toneflix/vue-dataviewer'
import { reactive } from 'vue'

const data = reactive({
  name: 'John Obi Doe',
  email: 'john.doe@email.com',
  accept: false,
  category: 'home',
  safe_mode: true,
  country: 'Nigeria',
  address: '',
  message: 'Hello my people',
  imageUrl: 'https://www.tailwind-kit.com/images/person/6.jpg'
})
</script>
