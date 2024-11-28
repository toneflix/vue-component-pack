<template>
  <DataViewer
    bordered
    shadow
    rounded
    separator
    mode="edit"
    ref="dataViewer"
    content-class="content-viewer"
    dialog-class="appointment-viewer"
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
      <TBtn label="View Data" @click="toggleDialog(data, 'view')" />
      <TBtn label="Edit" @click="toggleDialog(data, 'edit')" />
    </template>
  </DataViewer>

  <MainContent
    bordered
    shadow
    rounded
    separator
    mode="edit"
    slugifyFormKeys
    content-class="content-viewer"
    :labels-map="{ createdAt: 'Date Created' }"
    :values-map="{ friend: () => 'David' }"
    :dateProps="['createdAt']"
    :image-props="['imageUrl', 'imageUrl2']"
    :data="data"
    :form="form"
    class="mmx"
  >
  </MainContent>

  <TBtn label="Toggle Dialog" @click="dataViewer?.dialogToggler" />
</template>

<script setup lang="ts">
import '@toneflix/vue-dataviewer/src/styles/main.scss'
import { DataViewer, MainContent } from '@toneflix/vue-dataviewer'
import { reactive } from 'vue'
import { TBtn } from '@toneflix/vue-dataviewer'
import { ref } from 'vue'

const data = reactive({
  id: 1,
  name: 'John Obi Doe',
  email: 'john.doe@email.com',
  accept: false,
  category: 'home',
  safeMode: true,
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

const form = reactive({
  name: 'John Obi Doe',
  email: 'john.doe@email.com',
  accept: false,
  category: 'home',
  safe_mode: true,
  message: 'Hello my people'
})
const dataViewer = ref()
</script>

<style lang="scss" scoped>
.mmx {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
