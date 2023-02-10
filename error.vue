<template>
    <div class="text-center w-full">
      <h1 clas="text-3xl text-slate-600 font-medium">Oops</h1>
      <p class="text-slate-400">Something go wrong</p>
      <button @click="handleError">Clear errors</button>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>