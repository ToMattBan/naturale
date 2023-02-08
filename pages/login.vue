<template>
   <div>
    <NuxtLayout :name="layout"/>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>
<script setup>
const layout = ref('default');

function enableCustomLayout () {
 layout.value = 'login'
}
definePageMeta({
  layout: 'false',
});
</script>