<template>
	<h1 class="text-2xl text-orange-500">Olá {{ route.params.id }}</h1>
</template>

<script setup>
	const route = useRoute();
	console.log(route.params.id);
</script>

