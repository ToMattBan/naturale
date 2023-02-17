<template>
  <div class="container">
    <div class="breadcrumb">
      <span v-for="(breadRoute, index) in breadRoutes">
        <NuxtLink
          :class="
            index == breadRoutes.length - 1 ? 'last-route routes' : 'routes'
          "
          :to="breadRoute.path"
          >{{ breadRoute.name }}
        </NuxtLink>
        <span class="separator" v-if="index != breadRoutes.length - 1">{{
          '>'
        }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IRoutes {
  name: string;
  path: string;
}

const originalRoute = useRoute();

const breadRoutes = ref<IRoutes[]>([]);

createBreadcrumb(originalRoute);

function createBreadcrumb(route: any) {
  let actualRoute = '';
  breadRoutes.value = [{ name: 'Home', path: '/' }];

  for (var key in route.params) {
    if (route.params.hasOwnProperty(key)) {
      actualRoute += `/${route.params[key]}`;

      let name = '';
      if (typeof route.params[key] == 'string') name = route.params[key];
      else name = route.params[key][0];

      breadRoutes.value.push({
        name: formatName(name, key),
        path: actualRoute,
      });
    }
  }
}

function formatName(name: string, param: string) {
  if (param != 'products') return name.replace('-', ' ');
  else return useProductDetails().productDetails.value.name
}

watch(originalRoute, (newRoute) => {
  createBreadcrumb(newRoute);
});
</script>

<style scoped>
.breadcrumb {
  display: flex;
  font-weight: 500;
  text-transform: capitalize;
}

.breadcrumb .routes,
.breadcrumb .separator {
  text-decoration: none;
  color: inherit;
}

.breadcrumb .routes:hover,
.breadcrumb .routes.last-route {
  color: var(--green);
}

.breadcrumb .separator {
  margin: 0 var(--small);
}
</style>
