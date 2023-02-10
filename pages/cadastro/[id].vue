<template>
	<div>
		<h1 class="text-2xl text-orange-500">Olá {{ appConfig.title }}</h1>
		<NuxtLink to="/login">LOGIN PAGE</NuxtLink>
	</div>
</template>

<script setup>
	const route = useRoute();
	console.log("route", route.query);
	const appConfig = useAppConfig();
	definePageMeta({
		// validate: async (route) => {
		// 	// Check if the id is made up of digits
		// 	const isValid = /^\d+$/.test(route.params.id);
		// 	if(isValid) return navigateTo('/');

		// 	return navigateTo('/login');
  	// }
	})
</script>