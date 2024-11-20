<template>
  <DataViewer
    bordered
    shadow
    rounded
    separator
    :dateProps="['createdAt']"
    :data="data"
    :form="data"
    v-slot="{ toggleDialog }"
    :boolean-labels="{
      accept: ['Accepted', 'Rejected']
    }"
  >
    <TBtn label="View Data" @click="toggleDialog(data, 'view')" />
  </DataViewer>

  <MainContent
    bordered
    shadow
    rounded
    separator
    :dateProps="['createdAt']"
    :data="data"
    :form="data"
    class="mmx"
  />
</template>

<script setup lang="ts">
import '@toneflix/vue-dataviewer/src/styles/main.scss'
import { DataViewer, MainContent } from '@toneflix/vue-dataviewer'
import { reactive } from 'vue'
import { TBtn } from '@toneflix/vue-dataviewer'

const data = reactive({
  name: 'John Obi Doe',
  email: 'john.doe@email.com',
  accept: false,
  category: 'home',
  safe_mode: true,
  country: 'Nigeria',
  address: '',
  message: 'Hello my people',
  imageUrl: 'https://www.tailwind-kit.com/images/person/6.jpg',
  createdAt: '2023-06-06 21:22:00',
  nothing: (props: unknown) => {
    console.log(props)
    return 'Hello Nohting'
  }
})
</script>

<style lang="scss" scoped>
.mmx {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
