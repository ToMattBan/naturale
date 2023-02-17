<template>
  <main class="container">
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="false"
      :timeout="5000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="`/carousel/${slide}.jpg`" alt="" />
        </div>
      </Slide>
    </Carousel>
  </main>
</template>
<script setup lang="ts">
const carouselSlides = ["bg-1", "bg-2", "bg-3"];
</script>