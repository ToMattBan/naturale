<template>
  <nav class="container">
    <ul class="menu">
      <li v-for="(menuItem, index) in menuList">
        <NuxtLink :to="menuItem.path">
          <button
            :class="`menu-btn ${menuActive(menuItem.path) ? 'active' : ''}`"
          >
            {{ menuItem.name }}
          </button>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();

const menuList = ref([
  {
    id: 0,
    name: 'Todas as categorias',
    path: '/',
  },
  {
    id: 1,
    name: 'Tratamento facial',
    path: '/tratamento-facial',
  },
  {
    id: 2,
    name: 'Tratamento capilar',
    path: '/tratamento-capilar',
  },
  {
    id: 3,
    name: 'Alimentação',
    path: '/alimentacao',
  },
  {
    id: 4,
    name: 'Suplementos naturais',
    path: '/suplementos-naturais',
  },
]);

function menuActive(path: string) {
  if (path == '/') return route.path == '/';
  else return route.path.includes(path);
}
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

.menu li {
  flex: 1;
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
  color: #fff;
  cursor: pointer;
}

.menu-btn.active {
  background-color: var(--green);
  color: #fff;
}
</style>
