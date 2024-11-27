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
          bordered: false
        }
      }"
      v-model="formValues"
      @cancel="console.log('cancel')"
      @submit="console.log('submit')"
    >
      <!-- <template #select>
        <select>
          <option value="option1">Option 1</option>
        </select>
      </template> -->
    </VueForms>
  </div>
  <div class="demo-container">
    <InlineForm
      v-model="formValues.name"
      type="text"
      label-tag="div"
      label-class=""
      @save="console.log"
    >
      <input ref="tg" v-model="formValues.name" />
    </InlineForm>
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
import { VueForms, InlineForm } from '@toneflix/vue-forms'
import { FormField } from '@toneflix/vue-forms/src/types'
import { reactive, ref, watch } from 'vue'
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
    type: 'select',
    name: 'town',
    label: 'Town',
    col: 12,
    hint: 'Select your town',
    choices: [
      { label: 'Lagos', value: 1 },
      { label: 'Kaduna', value: 2 },
      { label: 'Port Harcourt', value: 3 }
    ],
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
    type: 'radio',
    name: 'status',
    label: 'Status',
    col: 12,
    hint: 'Set status',
    choices: [
      { label: 'Inactive', value: 0 },
      { label: 'Active', value: 1 }
    ],
    group: 'alt'
  },
  {
    type: 'radio',
    name: 'available',
    label: 'Availability',
    col: 12,
    hint: 'Set Availability',
    choices: [
      { label: 'Available', value: true },
      { label: 'unavailable', value: false }
    ],
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
  town: 1,
  email: 'john.doe@email.com',
  status: 0,
  accept: 0,
  category: 'home',
  safe_mode: 0,
  country: 'Nigeria',
  address: '',
  message: 'Hello my people',
  available: false
})

const tg = ref()

watch(tg, (tg) => {
  if (tg) {
    tg.focus()
  }
})
</script>
