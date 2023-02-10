<template>
  <div>
    <main class="container mx-auto">
      {{ appConfig.title }}
    </main>
    <Header />
    <Navbar />
  
    <NuxtLink to="/login">LOGINNNNN</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig();
console.log(appConfig);

appConfig.title = 'Cleyton';
console.log(appConfig);
</script>