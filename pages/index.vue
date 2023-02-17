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
          <!-- <img :src="`~assets/carousel/${slide}.jpg`" alt="" /> -->
          <img v-if="slide.includes('1')" src="~assets/carousel/bg-1.jpg" alt="" />
          <img v-if="slide.includes('2')" src="~assets/carousel/bg-2.jpg" alt="" />
          <img v-if="slide.includes('3')" src="~assets/carousel/bg-3.jpg" alt="" />
        </div>
      </Slide>
    </Carousel>
  </main>
</template>
<script setup lang="ts">
const carouselSlides = ["bg-1", "bg-2", "bg-3"];
</script>