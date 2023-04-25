<template>
  <main class="container">
    <div class="carousel">
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
    </div>

    <section class="section-default">
      <article>
        <h1 class="section-title">Categorias em destaque</h1>
        <CategoriesList />
      </article>
      <article>
        <h1 class="section-title">Produtos</h1>
        <ProductsList />
      </article>
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

<style scoped>
.carousel {
  height: 60vh;
}
</style>
