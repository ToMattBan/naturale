<template>
  <article>
    <form class="form-newsletter">
      <input type="text" placeholder="*Digite seu nome..." required />
      <input type="email" placeholder="*Digite seu e-mail..." required />
      <input type="phone" placeholder="Digite seu telefone..." required />
      <p>Campos com * são obrigatórios</p>
      <Button variation="inverted">
        Cadastrar
      </Button>
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
  font-weight: 900;
  font-weight: 700;
  margin-top: var(--small);
  padding: 4px;
  width: 100%;
}

.form-newsletter p {
  margin: 0;
  line-height: 0.7rem;
  font-size: 0.7rem;
}
</style>