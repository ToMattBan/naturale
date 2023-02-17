<template>
  <div class="carousel">
    <Slide v-for="(slide, index) in carouselSlides" :key="index">
      <div v-show="currentSlide === index + 1" class="slide-info">
        <img :src="`/carousel/${slide}.jpg`" alt="" />
      </div>
    </Slide>

    <!-- Navigation -->
    <div v-if="navEnabled" class="navigate">
      <div class="toggle-page left">
        <i @click="prevSlide" class="icon fas fa-chevron-left"></i>
      </div>
      <div class="toggle-page right">
        <i @click="nextSlide" class="icon fas fa-chevron-right"></i>
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="pagintationEnabled" class="pagination">
      <span
        class="page"
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      >
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const props = defineProps({
  carouselSlides: {
    type: Object as PropType<string[]>,
    required: true,
  },
  startAutoPlay: {
    type: Boolean,
    default: false,
  },
  timeout: {
    type: Number,
    default: 5000,
  },
  navigation: {
    type: Boolean,
    default: true,
  },
  pagination: {
    type: Boolean,
    default: true,
  },
});

const currentSlide = ref(1);
const getSlideCount = ref<null | number>(null);

// anti undefined check
const autoPlayEnabled = ref(
  props.startAutoPlay === undefined ? true : props.startAutoPlay
);
const timeoutDuration = ref(props.timeout === undefined ? 5000 : props.timeout);
const pagintationEnabled = ref(
  props.pagination === undefined ? true : props.pagination
);
const navEnabled = ref(
  props.navigation === undefined ? true : props.navigation
);

// next slide
const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value += 1;
};

// prev slide
const prevSlide = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value -= 1;
};

const goToSlide = (index: number) => {
  currentSlide.value = index + 1;
};

// autoplay
const autoPlay = () => {
  setInterval(() => {
    nextSlide();
  }, timeoutDuration.value);
};

if (autoPlayEnabled.value) autoPlay();

onMounted(
  () => (getSlideCount.value = document.querySelectorAll('.slide').length)
);
</script>

<style>
.carousel {
  height: 60vh;
  position: relative;
  width: 100%;
}

.slide-info {
  height: 100%;
  left: 0;
  max-height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
}

.slide img {
  height: 100%;
  min-width: 100%;
  object-fit: cover;
}

.navigate {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
}

.navigate .toggle-page {
  display: flex;
  flex: 1;
  padding: 0 var(--small);
}

.navigate .right {
  justify-content: flex-end;
}

.navigate .icon {
  align-items: center;
  background-color: #6347c7;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 40px;
}

.pagination {
  align-items: center;
  bottom: var(--smallM);
  display: flex;
  gap: var(--small);
  justify-content: center;
  position: absolute;
  width: 100%;
}

.pagination .page {
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  height: 20px;
  width: 20px;
}

.pagination .active {
  background-color: #6347c7;
}
</style>
