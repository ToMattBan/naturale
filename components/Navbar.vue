<template>
  <nav class="container">
    <ul class="menu">
      <li>
        <button class="menu-btn active">
          Todas as categorias
        </button>
      </li>
      <li v-for="(menuItem, index) in menuList">
        <button class="menu-btn">
          {{  menuItem.name }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const menuList = ref([
  {
    id: 1,
    name: 'Tratamento facial'
  },
  {
    id: 2,
    name: 'Tratamento capilar'
  },
  {
    id: 3,
    name: 'Alimentação'
  },
  {
    id: 4,
    name: 'Suplementos naturais'
  },
])
</script>

<style scoped>
.menu {
  background-color: var(--grayLight);
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.menu-btn {
  background-color: transparent;
  border: 0;
  height: 100%;
  outline: none;
  padding: var(--small);
  width: 100%;
}

.menu-btn:hover {
  background-color: var(--green);
  color: #FFF;
  cursor: pointer;
}

.menu-btn.active {
  background-color: var(--green);
  color: #FFF;
}
</style>