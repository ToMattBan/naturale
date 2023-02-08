<template>
  <header class="py-4 flex justify-between items-center gap-5">
    <NuxtLink to="/">
      <img src="https://picsum.photos/200/50" :alt="$t('company_logo_go_to_home')">
    </NuxtLink>

    <form class="w-6/12">
      <div class="relative">
        <input 
          class="w-full py-2 pl-2 text-sm pr-6 rounded-md ring-2 ring-emerald-500 border-0 placeholder:text-neutral-400 tracking-wide"
          type="text" 
          :placeholder="$t('search_products')"
        >
        <Icon 
          name="heroicons:magnifying-glass-20-solid" 
          size="20"
          class="absolute right-2 inset-y-0 my-auto text-neutral-600"
        />
      </div>
    </form>

    <div class="flex gap-5">
      <button class="px-2 text-sm rounded-md bg-emerald-500 hover:bg-emerald-600 shadow shadow-emerald-300 hover:shadow-none text-white flex items-center gap-1">
        <Icon name="heroicons:user" size="20" />
        <span class="">{{ $t('register_login') }}</span>
      </button>

      <button class="relative text-neutral-700 hover:text-neutral-800 hover:bg-neutral-200 rounded-full w-10 h-10">
        <Icon name="heroicons:shopping-cart" size="22" />
        <span class="sr-only">{{ $t("shopping_cart") }}</span>
      </button>
    </div>
  </header>
</template>