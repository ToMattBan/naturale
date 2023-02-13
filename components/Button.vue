<template>
  <button :class="`button ${variation}`" :type="type">{{ text }}</button>
</template>

<script setup lang="ts">
type TButtonType = "button" | "submit" | "reset" | undefined;
type TButtonVariation = "default" | "inverted";

defineProps({
  text: { type: String, required: true },
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
  padding: 4px;
  font-weight: 700;
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