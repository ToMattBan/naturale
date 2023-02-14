<template>
  <div>
    <section class="content">
      <div class="product-details">
        <div class="product-details-photos">
          <!-- <img src="https://images.unsplash.com/photo-1559881230-1af605ca3f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" /> -->
        </div>
        <div class="product-details-cta">
          <h1>
            <span>{{ productDetails?.name }}</span>
            <span :class="{ 'product-brand-natuale': ehNaturale }"
              >&nbsp;{{ productDetails?.brand }}</span
            >
          </h1>
          <div class="product-original-price">
            {{ formatPrice(productDetails?.originalPrice) }}
          </div>
          <div class="product-actual-price">
            {{ formatPrice(productDetails?.actualPrice) }}
          </div>
          <p>Quantidade disponível: {{ productDetails?.availableQtd }}</p>
          <div class="product-cep">
            <input placeholder="Consultar o frete... (CEP)" />
            <button>Buscar</button>
          </div>
          <div class="product-cart">
            <div class="product-qtd">
              <button class="product-remove-qtd" @click="changeQtd('remove')">
                -
              </button>
              <span class="product-qtd-selected">{{ quantitySelected }}</span>
              <button class="product-add-qtd" @click="changeQtd('add')">
                +
              </button>
            </div>
            <Button text="Adicionar ao carrinho" />
          </div>
        </div>
      </div>
      <article class="product-info">
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
  brand: string;
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

const quantitySelected = ref(1);
const ehNaturale = productDetails.value?.brand == 'Naturale';

function changeQtd(type: 'add' | 'remove') {
  if (
    type == 'add' &&
    productDetails.value &&
    quantitySelected.value < productDetails.value.availableQtd
  ) {
    return quantitySelected.value++;
  }

  if (type == 'remove' && productDetails.value && quantitySelected.value > 1) {
    return quantitySelected.value--;
  }
}

function formatPrice(price?: number) {
  if (!price) return '';

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
}
</script>

<style>
.content {
  padding: 0 64px;
}

.product-details {
  display: flex;
  margin: var(--normal) 0;
}

.product-details .product-details-photos {
  flex: 6;
}

.product-details .product-details-cta {
  background-color: #e6e6e6;
  border-radius: 16px;
  flex: 4;
  padding: var(--small);
}

.product-details .product-details-cta h1 {
  margin: 0;
}

.product-details .product-details-cta .product-brand-natuale {
  color: var(--greenLogo);
  font-weight: 900;
}

.product-details .product-details-cta .product-original-price,
.product-details .product-details-cta .product-actual-price {
  font-weight: 700;
  line-height: initial;
  margin: var(--small) 0;
  font-style: italic;
}

.product-details .product-details-cta .product-original-price {
  color: var(--grayDark);
  font-size: var(--smallM);
  text-decoration: line-through;
}

.product-details .product-details-cta .product-actual-price {
  color: var(--green);
  font-size: var(--normal);
}

.product-details .product-details-cta .product-cep {
  display: flex;
  margin-bottom: var(--small);
}

.product-details .product-details-cta .product-cep input {
  width: 100%;
  border: solid 2px var(--green);
  border-radius: 16px 0 0 16px;
  padding: var(--smallS) var(--small);
}

.product-details .product-details-cta .product-cep button {
  background-color: var(--green);
  border-radius: 0 16px 16px 0;
  color: white;
  border: none;
  padding: var(--smallS) var(--small);
  font-weight: 600;
}

.product-details .product-details-cta .product-cart,
.product-details .product-details-cta .product-cart .product-qtd {
  display: flex;
  justify-content: center;
  align-content: center;
}

.product-details .product-details-cta .product-cart .product-remove-qtd,
.product-details .product-details-cta .product-cart .product-qtd-selected,
.product-details .product-details-cta .product-cart .product-add-qtd {
  background-color: var(--green);
  color: white;
  border: none;
  padding: var(--smallS);
}

.product-details .product-details-cta .product-cart .product-remove-qtd,
.product-details .product-details-cta .product-cart .product-add-qtd {
  font-size: var(--small);
  cursor: pointer;
}

.product-details .product-details-cta .product-cart .product-remove-qtd {
  border-radius: 16px 0 0 16px;
}

.product-details .product-details-cta .product-cart .product-add-qtd {
  border-radius: 0 16px 16px 0;
  margin-right: 16px;
}

.product-details .product-details-cta .product-cart .product-qtd-selected {
  width: 2ch;
  text-align: center;
}

.product-details .product-details-cta .product-cart button {
  width: 100%;
}

.product-info {
  background-color: var(--grayLight);
  border: solid 4px var(--green);
  border-radius: 16px;
  padding: 0 var(--largeS) var(--largeS);
}

.product-info .product-info-title {
  text-align: center;
  color: var(--green);
  font-weight: 700;
}
</style>
