<template>
  <DataViewer
    bordered
    shadow
    rounded
    separator
    :dateProps="['createdAt']"
    :data="data"
    :form="data"
    :labels-map="{ createdAt: 'Date Created' }"
    :values-map="{ friend: 'David' }"
    :boolean-labels="{
      accept: ['Accepted', 'Rejected']
    }"
  >
    <template #default="{ toggleDialog }">
      <TBtn label="View Datas" @click="toggleDialog(data, 'view')" />
    </template>
  </DataViewer>

  <MainContent
    bordered
    shadow
    rounded
    separator
    :labels-map="{ createdAt: 'Date Created' }"
    :values-map="{ friend: () => 'David' }"
    :dateProps="['createdAt']"
    :image-props="['imageUrl', 'imageUrl2']"
    :data="data"
    :form="data"
    class="mmx"
  >
  </MainContent>
</template>

<script setup lang="ts">
import '@toneflix/vue-dataviewer/src/styles/main.scss'
import { DataViewer, MainContent } from '@toneflix/vue-dataviewer'
import { reactive } from 'vue'
import { TBtn } from '@toneflix/vue-dataviewer'

const data = reactive({
  id: 1,
  name: 'John Obi Doe',
  email: 'john.doe@email.com',
  accept: false,
  category: 'home',
  safe_mode: true,
  country: 'Nigeria',
  address: '',
  status: 'pending',
  friend: { name: 'David' },
  message: 'Hello my people',
  imageUrl: 'https://www.tailwind-kit.com/images/person/6.jpg',
  imageUrl2: 'https://www.tailwind-kit.com/images/person/5.jpg',
  createdAt: '2023-06-06 21:22:00',
  nothing: () => 'Hello Nohting'
})
</script>

<style lang="scss" scoped>
.mmx {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
