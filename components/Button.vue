<template>
  <button :class="`button ${variation}`" :type="type">
    <slot />
  </button>
</template>

<script setup lang="ts">
type TButtonType = "button" | "submit" | "reset" | undefined;
type TButtonVariation = "default" | "inverted";

defineProps({
  type: {
    type: String as PropType<TButtonType>,
    default: 'submit'
  },
  variation: {
    type: String as PropType<TButtonVariation>,
    default: 'default',
  }
})
</script>

<style scoped>
button.button {
  border-radius: 16px;
  border: 0;
  text-align: center;
  font-size: 1.1rem;
  cursor: pointer;
}

button.button.default {
  color: white;
  background-color: var(--green);
}

button.button.inverted {
  color: var(--green);
  background-color: white;
}
</style>