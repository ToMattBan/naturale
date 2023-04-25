<template>
  <div class="category-area">
    <NuxtLink
      to="/"
      v-for="category in categories"
      :key="category.id"
      class="category-link"
      :style="{ backgroundImage: `url(${category.bgUrl})` }"
    >
      <div class="info-area">
        <p class="product-name">{{ category.name }}</p>

        <div>
          <p class="price price-old">R$ {{ category.oldPrice }}</p>
          <p class="price price-new">R$ {{ category.newPrice }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const categories = reactive([
  {
    id: 1,
    name: 'Café Orgânico Especial (Kg)',
    oldPrice: 68.99,
    newPrice: 48.99,
    bgUrl: 'https://picsum.photos/700/700',
  },
  {
    id: 2,
    name: 'Kit Creme Neuathy',
    oldPrice: 58.99,
    newPrice: 38.99,
    bgUrl: 'https://picsum.photos/700/700',
  },
  {
    id: 3,
    name: 'Chá Relaxante Combo!',
    oldPrice: 17.99,
    newPrice: 10.99,
    bgUrl: 'https://picsum.photos/700/700',
  },
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
  width: 33.3%;
}

.info-area {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: var(--smallS);
  bottom: var(--small);
  inset-inline: var(--small);
  padding: 0.5rem;
  position: absolute;
}

.product-name {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 0.5rem;
}

.price {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.price-old {
  color: var(--grayDark);
  text-decoration: line-through;
}

.price-new {
  color: var(--green);
}
</style>
