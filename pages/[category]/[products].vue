<template>
  <div class="container">
    <section class="content">
      <div class="product-details">
        <Carousel
          :pagination="true"
          :startAutoPlay="true"
          :timeout="10000"
          :stopAutoplayUserInteraction="true"
          class="product-details-photos"
          :carouselSlides="productDetails?.images"
        />

        <div class="product-details-cta">
          <h1>
            <span>{{ productDetails?.name }} - </span>
            <span class="product-brand-natuale"
              >&nbsp;{{ productDetails?.brand }}</span
            >
          </h1>
          <div class="product-original-price">
            {{ formatPriceToBRL(productDetails?.originalPrice) }}
          </div>
          <div class="product-actual-price">
            {{ formatPriceToBRL(productDetails?.actualPrice) }}
          </div>
          <p>Quantidade disponível: {{ productDetails?.availableQtd }}</p>
          <div class="product-cep">
            <input placeholder="Consultar o frete... (CEP)" />
            <Button>Buscar</Button>
          </div>
          <div class="product-cart">
            <div class="product-qtd">
              <Button class="product-remove-qtd" @click="changeQtd('remove')">
                -
              </Button>
              <span class="product-qtd-selected">{{ quantitySelected }}</span>
              <Button class="product-add-qtd" @click="changeQtd('add')">
                +
              </Button>
            </div>
            <Button>Adicionar ao carrinho</Button>
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

    <section class="more-products">
      <div>Outros Produtos</div>
      <Button class="load-more">Carregar mais...</Button>
    </section>
  </div>
</template>

<script setup lang="ts">
import IProductDetails from '~~/interfaces/Product';

const productDetails = useProductDetails().productDetails;

const { data, pending, error } = await useFetch<IProductDetails>(
  '/api/productDetails'
);
if (data.value) useProductDetails().setproductDetails(data.value);

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
  position: relative;
  border-radius: var(--borderRadius);
  overflow: hidden;
  margin-right: 32px;
}

.product-details .product-details-photos img {
  width: 100%;
  position: absolute;
}

.product-details .product-details-cta {
  background-color: #e6e6e6;
  border-radius: var(--borderRadius);
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
  border-radius: var(--borderRadius) 0 0 var(--borderRadius);
  padding: var(--smallS) var(--small);
}

.product-details .product-details-cta .product-cep button {
  background-color: var(--green);
  border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
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

.product-details .product-details-cta .product-cart .product-qtd-selected {
  background-color: var(--green);
  color: white;
  border: none;
  padding: var(--smallS);
}

.product-details .product-details-cta .product-cart .product-remove-qtd {
  border-radius: var(--borderRadius) 0 0 var(--borderRadius);
}

.product-details .product-details-cta .product-cart .product-add-qtd {
  border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
  margin-right: var(--small);
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
  border-radius: var(--borderRadius);
  padding: 0 var(--largeS) var(--largeS);
}

.product-info .product-info-title {
  text-align: center;
  color: var(--green);
  font-weight: 700;
}

.more-products {
  text-align: center;
  margin: var(--normal) 0;
}

.more-products .load-more {
  padding: var(--smallS) var(--small);
}
</style>
