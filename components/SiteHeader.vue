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
        
        <div class="action-buttons">
          <Button>
            <div class="register">
              <img class="register-icon" src="~assets/icons/user.svg" alt="My Happy SVG" />
              <span>Cadastro / Login</span>
            </div>
          </Button>
      
          <button class="cart">
            <img class="cart-icon" src="~assets/icons/cart.svg" alt="My Happy SVG" />
          </button>
        </div>
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

.action-buttons {
  display: flex;
  align-items: center;
}

.register {
  align-items: center;
  display: flex;
  gap: calc(var(--small) / 1.5);
  padding: 0.5rem 0.8rem;
}

.register-icon {
  height: var(--smallM);
  width: var(--smallM);
  filter: invert(1);
}

.cart {
  background-color: transparent;
  border: 0;
  outline: none;
  padding: 0 var(--smallM);
  display: flex;
  cursor: pointer;
}

.cart-icon {
  width: var(--normal);
  height: var(--normal);
}
</style>