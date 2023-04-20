<template>
  <main class="container">
    <Carousel
      :pagination="true"
      :startAutoPlay="true"
      :timeout="2000"
      :haveProductInfo="true"
      :stopAutoplayUserInteraction="false"
      :navigation="false"
      class="carousel"
      :carouselSlides="carouselSlides"
    />

    <section class="section-default">
      <h1 class="section-title">Categorias em destaque</h1>
      <CategoriesList />
    </section>
  </main>
</template>
<script setup lang="ts">
const carouselSlides = [
  '/carousel/bg-1.jpg',
  '/carousel/bg-2.jpg',
  '/carousel/bg-3.jpg',
];
</script>
