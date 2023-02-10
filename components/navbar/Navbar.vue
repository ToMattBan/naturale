<template>
   Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
</template>
<script setup>
const counter = useCounter()
</script>