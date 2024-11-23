<template>
  <svg
    :width="size + 'px'"
    :height="size + 'px'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z"
      :stroke="String(color)"
      :stroke-width="Number(strokWidth)"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 21H12"
      :stroke="String(color)"
      :stroke-width="Number(strokWidth)"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script setup lang="ts">
import { InlineFormProps } from '../types'

defineOptions({
  name: 'IconEdit'
})

type Concrete = InlineFormProps['iconProps'] & {}

withDefaults(defineProps<Concrete>(), {
  size: 15,
  color: 'currentColor',
  strokWidth: 2
})
</script>
