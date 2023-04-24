<template>
  <div class="carousel">
    <Slide v-for="(slide, index) in carouselSlides" :key="index">
      <div v-show="currentSlide === index + 1" class="slide-info">
        <img :src="slide" alt="" />
      </div>
    </Slide>

    <article class="product-info" v-if="haveProductInfo">
      <h1 class="product-status">Novidade!</h1>
      <div class="product">
        <h2 class="title">Creme Facil</h2>
        <p class="brand">Naturale</p>
      </div>
      <Button class="button default" to="/"> Confira já </Button>
    </article>

    <!-- Navigation -->
    <div v-if="navEnabled" class="navigate">
      <div class="toggle-page left">
        <div @click="prevSlide(true)" class="arrow">
          <i class="arrow-left"></i>
        </div>
      </div>
      <div class="toggle-page right">
        <div @click="nextSlide(true)" class="arrow">
          <i class="arrow-right"></i>
        </div>
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
  stopAutoplayUserInteraction: {
    type: Boolean,
    default: true,
  },
  pagination: {
    type: Boolean,
    default: true,
  },
  navigation: {
    type: Boolean,
    default: true,
  },
  haveProductInfo: {
    type: Boolean,
    default: false,
  },
  /* productInfo: {
    type: Object
  } */
});

const currentSlide = ref(1);
const getSlideCount = ref<null | number>(null);
const autoPlay = ref();

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
const nextSlide = (userInteraction: boolean) => {
  if (userInteraction) stopAutoPlay();

  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value += 1;
};

// prev slide
const prevSlide = (userInteraction: boolean) => {
  if (userInteraction) stopAutoPlay();

  if (currentSlide.value === 1) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value -= 1;
};

const goToSlide = (index: number) => {
  stopAutoPlay();
  currentSlide.value = index + 1;
};

// autoplay
const startAutoPlay = () => {
  return setInterval(() => {
    nextSlide(false);
  }, timeoutDuration.value);
};

const stopAutoPlay = () => {
  clearInterval(autoPlay.value);
};

if (autoPlayEnabled.value) {
  autoPlay.value = startAutoPlay();
}

onMounted(
  () => (getSlideCount.value = document.querySelectorAll('.slide').length)
);
</script>

<style scoped>
.carousel {
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
  width: 100%;
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

.navigate .arrow {
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid var(--green);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 50px;
  width: 50px;
}

.navigate .arrow .arrow-left,
.navigate .arrow .arrow-right {
  border: solid var(--green);
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(135deg) translate(-1px, -1px);
}

.navigate .arrow .arrow-right {
  transform: rotate(-45deg) translate(-1px, -1px);;
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
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid var(--green);
  border-radius: 50%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  filter: blur(1px);
  -webkit-filter: blur(1px);
  cursor: pointer;
  height: 20px;
  width: 20px;
}

.pagination .active {
  background-color: var(--green);
  filter: blur(0);
  -webkit-filter: blur(0);
}

.product-info {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: var(--small);
  box-shadow: 0 1px 1px var(--gray);
  height: max-content;
  inset-block: 0;
  margin-block: auto;
  margin-left: var(--largeS);
  padding: var(--small) var(--largeS);
  position: absolute;
  text-align: center;
}

.product-status {
  background-color: var(--green);
  border-radius: var(--small);
  color: var(--grayLight);
  font-size: var(--smallM);
  font-weight: 600;
  padding: var(--small) var(--smallM);
}

.product {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-block: var(--smallM);
}

.product-status,
.product .title,
.product .brand {
  font-size: var(--smallM);
  margin: 0;
}

.product .brand {
  color: var(--greenLogo);
  font-weight: 800;
}

.button {
  padding: 0.5rem var(--largeS);
}
</style>
