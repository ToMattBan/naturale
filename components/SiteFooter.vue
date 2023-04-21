<template>
  <footer>
    <div class="container">
      <article class="footer-coluna">
        <section>
          <ul>
            <li class="footer-title">
              <NuxtLink to="#">Institucional</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Quem somos</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Blog</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Atendimento ao cliente</NuxtLink>
            </li>
          </ul>
        </section>
  
        <section>
          <ul>
            <li class="footer-title">
              <NuxtLink to="#">Redes Sociais</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Instagram</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Facebook</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Twitter</NuxtLink>
            </li>
          </ul>
        </section>
  
        <section>
          <ul>
            <li class="footer-title">
              <NuxtLink to="#">Destaques</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Mais vendidos</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Novidades</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Ofertas</NuxtLink>
            </li>
          </ul>
        </section>
  
        <section>
          <ul>
            <li class="footer-title">Receba nossas ofertas</li>
            <li>
              <Newsletter />
            </li>
          </ul>
        </section>
      </article>
    </div>
    <div class="copyright">
      <p>Copyright @ 2023 @naturale</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>

footer {
  background-color: var(--green);
}
footer .footer-coluna {
  background-color: var(--green);
  color: white;
  display: flex;
  padding: var(--small) var(--normal);
}

footer .footer-coluna section {
  flex: 1
}

footer .footer-coluna ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

footer .footer-coluna ul li:first-child {
  padding-bottom: 4px;
}

footer .footer-coluna a {
  color: white;
  text-decoration: none;
}

footer .footer-coluna .footer-title {
  font-weight: 700;
  font-size: 1.1em;
}

footer p {
  font-size: 0.7rem;
  margin: 0 var(--normal);
}

.copyright {
  background-color: var(--background);
}

.copyright p {
  max-width: 1440px;
  margin: auto auto auto var(--small);
}
</style>