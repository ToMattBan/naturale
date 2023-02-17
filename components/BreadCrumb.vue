<template>
  <div class="breadcrumb">
    <span v-for="(breadRoute, index) in breadRoutes">
      <NuxtLink :to="breadRoute.path">{{ breadRoute.name }} </NuxtLink>
      <span class="separator" v-if="index != breadRoutes.length - 1">{{
        '>'
      }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
interface IRoutes {
  name: string;
  path: string;
}

const breadRoutes: IRoutes[] = [
  {
    name: 'Início',
    path: '/',
  },
];

createBreadcrumb();

function createBreadcrumb() {
  let actualRoute = '';
  const route = useRoute();

  for (var key in route.params) {
    if (route.params.hasOwnProperty(key)) {
      actualRoute += `/${route.params[key]}`;

      breadRoutes.push({
        name:
          typeof route.params[key] == 'string'
            ? formatName(route.params[key])
            : formatName(route.params[key][0]),
        path: actualRoute,
      });
    }
  }
}

function formatName(name: string | string[]) {
  return name;
}
</script>

<style scoped>
.breadcrumb {
  display: flex;
  font-weight: 500;
}

.breadcrumb .separator {
  margin: 0 var(--small);
}
</style>
