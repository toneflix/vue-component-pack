<template>
  <div class="demo-container">
    <VueForms
      rounded
      loading
      show-group-labels
      class="p-4 m-4 mx-auto"
      :fields="formFields"
      :groupMeta="{
        main: {
          title: 'Main Form',
          subtitle: 'These are the main options',
          rounded: false,
          bordered: true
        },
        alt: {
          title: 'Alternative Form',
          subtitle: 'These are the alternative options',
          rounded: false,
          bordered: true
        }
      }"
      v-model="formValues"
      @cancel="console.log('cancel')"
      @submit="console.log('submit')"
    >
      <!-- <template #textarea="props">{{ props.modelValue }} </template> -->
    </VueForms>
  </div>
  <div class="demo-container">
    <pre>
        <code>
            {{ formValues }}
        </code>
    </pre>
  </div>
</template>

<script setup lang="ts">
import { VueForms } from '@toneflix/vue-forms'
import { FormField } from '@toneflix/vue-forms/src/types'
import { reactive, ref } from 'vue'
import '@toneflix/vue-forms/src/styles/main.scss'
import './style.scss'

// Sample form data
const formFields = ref<FormField[]>([
  {
    type: 'text',
    name: 'name',
    label: 'Name',
    col: 6,
    hint: 'Enter your name',
    group: 'main'
  },
  {
    type: 'select',
    name: 'country',
    label: 'Country',
    col: 6,
    hint: 'Select your country',
    choices: ['Nigeria', 'USA', 'UK', 'Canada'],
    group: 'main'
  },
  {
    type: 'text',
    name: 'address',
    label: 'Address',
    placeholder: 'Address',
    col: 12,
    hint: 'Enter your address',
    group: 'main'
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email Address',
    placeholder: 'Email Address',
    col: 12,
    hint: 'Enter your Email Address',
    group: 'alt'
  },
  {
    type: 'radio',
    name: 'category',
    label: 'Category',
    col: 12,
    hint: 'Choose a category',
    choices: ['home', 'away', 'middle_ground'],
    group: 'alt'
  },
  {
    type: 'switch',
    name: 'safe_mode',
    label: 'Safe Mode',
    col: 12,
    hint: 'Activate Safe Mode',
    trueValue: 1,
    falseValue: 0
  },
  {
    type: 'textarea',
    name: 'message',
    label: 'Message',
    col: 12,
    hint: 'Tell us what you think.'
  },
  {
    type: 'checkbox',
    name: 'accept',
    label: 'Do you accept',
    placeholder: 'Accept',
    col: 12,
    hint: 'Accept out terms',
    trueValue: 1,
    falseValue: 0
  }
])

const formValues = reactive({
  name: 'John Obi Doe',
  email: 'john.doe@email.com',
  accept: 0,
  category: 'home',
  safe_mode: 0,
  country: 'Nigeria',
  address: '',
  message: 'Hello my people'
})
</script>
