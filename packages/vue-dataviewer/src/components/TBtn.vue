<template>
  <button type="button" class="t-btn">
    <i :class="icon" v-if="icon"></i>
    <slot>
      {{ label }}
    </slot>
    <i :class="iconRight" v-if="iconRight"></i>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TBtn'
})
defineProps<{
  label?: string
  color?: string
  loading?: boolean
  icon?: string
  iconRight?: string
}>()
</script>

<style lang="scss" scoped>
button.t-btn {
  display: inline-flex;
  align-items: center;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  border-width: 1px;
  border-color: transparent;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  border-radius: 0.25rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);
  color: #fff;
  background-color: rgb(79 70 229 / 1);
}

button.t-btn:hover {
  background-color: rgb(67 56 202 / 1);
}

button.t-btn:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 0px #fff, 0 0 0 2px rgb(99 102 241 / 1), 0 0 #0000;
}
</style>
