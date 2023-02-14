<template>
  <div class="container">
    <header class="header">
        <NuxtLink to ="/">
          <img class="logo" src="/logo.png" alt="Logo da Empresa (Naturale)">
        </NuxtLink>
    
        <label for="search" class="search-label">
          <img class="search-icon" src="~assets/icons/search-icon.svg" alt="My Happy SVG" />
          <input id="search" class="search" type="text" placeholder="Buscar produtos...">
        </label> 
    
        <Button class="register" text="Cadastro / Login">
          <img class="register-icon" src="~assets/icons/user.svg" alt="My Happy SVG" />
        </Button>
    
        <button class="cart">
          <img class="cart-icon" src="~assets/icons/cart.svg" alt="My Happy SVG" />
        </button>
    </header>
  </div>
</template>

<style scoped>
.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.logo {
  max-width: 14rem;
}

.search-label {
  position: relative;
  width: 40%;
}

.search-icon {
  height: var(--small);
  inset-block: 0;
  margin-block: auto;
  position: absolute;
  right: 0;
  width: var(--small);
}

.search {
  border: 2px solid var(--green);
  border-radius: var(--small);
  font-size: var(--small);
  outline: none;
  padding: 0.5rem;
  width: 100%;
}

.search:focus {
  border-color: var(--grayDark);
}

.register {
  align-items: center;
  display: flex;
  gap: calc(var(--small) / 1.5);
  padding: 0.5rem 0.8rem;
}

.register-icon {
  height: var(--smallM);
  widows: var(--smallM);
}

.cart {
  background-color: transparent;
  border: 0;
  outline: none;
}

.cart-icon {
  width: var(--normal);
  height: var(--normal);
}
</style>