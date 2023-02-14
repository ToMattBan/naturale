<template>
  <div>
    <section class="content">
      <div>Produto Detalhes</div>
      <article>
        <h2 class="product-info-title">Informações do Produto</h2>
        <div style="white-space: pre-line">
          {{ productDetails?.description }}
        </div>
      </article>
    </section>
    <div>Outros Produtos</div>
  </div>
</template>

<script setup lang="ts">
interface IProductDetails {
  name: string;
  originalPrice: number;
  actualPrice: number;
  availableQtd: number;
  description: string;
}

const {
  data: productDetails,
  pending,
  error,
} = await useFetch<IProductDetails>('/mocks/productDetails.json');
</script>

<style>
.product-info {
  background-color: var(--grayLight);
  border: solid 4px var(--green);
  border-radius: 16px;
  padding: 0 var(--largeS) var(--largeS);
}

.product-info-title {
  text-align: center;
  color: var(--green);
  font-weight: 700;
}
</style>
