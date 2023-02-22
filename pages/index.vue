<template>
  <main class="container">
    <Carousel
      :pagination="true"
      :startAutoPlay="false"
      :timeout="5000"
      class="carousel"
      :carouselSlides="carouselSlides"
    />
  </main>
</template>
<script setup lang="ts">
const carouselSlides = ['bg-1', 'bg-2', 'bg-3'];
</script>
