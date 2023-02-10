<template>
   <div>
    <NuxtLayout :name="layout"/>
    <button @click="enableCustomLayout">Update layout</button>

    <button class="bg-amber-500 p-2 rounded-md block" @click="changeTitle">MUDAR TITULO</button>

    <NuxtLink to="/">HOMEPAGE</NuxtLink>

    <div>
      <h1 class="text-2xl font-bold text-slate-600"> {{ response?.first_name }}</h1>

      <button @click="refresh" class="block my-5 text-white bg-emerald-500 p-2 rounded-md">Refresh</button>

    </div>

    <div>
      <Header />
      <Navbar />
    </div>
  </div>
</template>
<script setup>
const layout = ref('default');

function enableCustomLayout () {
 layout.value = 'login'
}
definePageMeta({
  layout: 'false',
  // middleware: 'auth'
});

const title = ref('Cleyton')
useHead({
  title: `Teste 1 #${title.value}`,
  titleTemplate: '%s - Site Title',
});

const log = (value) => console.log(value)

const { data: response, refresh } = await useFetch('https://random-data-api.com/api/v2/users');
</script>