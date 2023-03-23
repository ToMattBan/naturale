<template>
  <div class="category-area">
    <NuxtLink to="/" v-for="(category) in categories" :key="category.id" class="category-link"
      :style="{ backgroundImage: `url(${category.bgUrl})` }">
      <p class="category-name">{{ category.name }}</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const categories = reactive([
  {
    id: 1,
    name: 'Grãos',
    bgUrl: 'https://picsum.photos/200/200'
  },
  {
    id: 2,
    name: 'Frutas',
    bgUrl: 'https://picsum.photos/200/200'
  },
  {
    id: 3,
    name: 'Cremes',
    bgUrl: 'https://picsum.photos/200/200'
  },
  {
    id: 4,
    name: 'Shampoos',
    bgUrl: 'https://picsum.photos/200/200'
  },
  {
    id: 5,
    name: 'Chás',
    bgUrl: 'https://picsum.photos/200/200'
  }
]);
</script>

<style scoped>
.category-area {
  align-items: center;
  display: flex;
  gap: var(--normal);
  justify-content: space-between;
}

.category-link {
  aspect-ratio: 1/1;
  background-size: cover;
  border-radius: var(--small);
  position: relative;
  max-width: 500px;
  width: 20%;
}

.category-name {
  background-color: var(--green);
  border-radius: var(--smallS);
  bottom: var(--smallS);
  color: white;
  font-size: 14px;
  left: var(--smallS);
  margin: 0;
  padding: 0 1rem;
  position: absolute;
}
</style>
