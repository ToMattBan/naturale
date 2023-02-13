<template>
  <article>
    <form class="form-newsletter">
      <input type="text" required/>
      <input type="email" required/>
      <input type="phone" required/>
      <p>Campos com * são obrigatórios</p>
      <button>Cadastrar</button>
    </form>
  </article>
</template>

<style scoped>
.form-newsletter input:not(:last-of-type) {
  width: 100%;
}
</style>