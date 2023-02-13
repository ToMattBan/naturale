<template>
  <article>
    <form class="form-newsletter">
      <input type="text" placeholder="*Digite seu nome..." required />
      <input type="email" placeholder="*Digite seu e-mail..." required />
      <input type="phone" placeholder="Digite seu telefone..." required />
      <p>Campos com * são obrigatórios</p>
      <Button text="Cadastrar" variation="inverted" />
    </form>
  </article>
</template>

<style scoped>
.form-newsletter input {
  border-radius: 4px;
  border: var(--grayDark) 1px solid;
  padding: 2px 8px;
  margin: 4px 0;
  outline: none;
}

.form-newsletter input:not(:last-of-type) {
  width: 100%;
  box-sizing: border-box;
}

.form-newsletter button.button {
  width: 100%;
  margin-top: 16px;
  font-weight: 900;
}

.form-newsletter p {
  margin: 0;
  line-height: 0.7rem;
  font-size: 0.7rem;
}
</style>