<template>
 <div class="wrapper">
  <div class="main mx-auto">
    <h1>{{ msg }}</h1>
    <p>
      Wartezeiten und Auslastung von Supermärkten in der Nachbarschaft.
    </p>

    <h3>Supermäkte im Umkreis</h3>
    Supermäkte in der Nähe finden oder neue registrieren.

    <ul>
      <li>
        <router-link :to="{name: 'Shops'}">
          <button type="button" class="btn btn-primary">
            Finden
          </button>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'UserRegistration'}">
          <button type="button" class="btn btn-outline-primary">
            Registrieren
          </button>
        </router-link>
      </li>
    </ul>

    <h3>Motivation</h3>
    Um langes Schlangestehen und große Menschenansammlungen zu vermeiden trackt diese App die Auslastung von Supermärkten.

    <h3>Alles Open-Source:</h3>
    <ul>
      <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener">API Docs</a></li>
      <li><a href="https://github.com/wirvsvirus-dortmund" target="_blank" rel="noopener">Quellcode auf GitHub</a></li>
      <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener">Über uns</a></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.wrapper {
  background-image: url(/bg.jpg);
  height: 100%;
}

div.main {
  position: relative;
  max-width: 90%;
  width: 50rem;
  padding: 4.5em 3em 3em 3em ;
  background: #ffffff;
  border-radius: 4px;
  text-align: center;
  opacity: 0.85;
}

h3 {
  margin: 60px 30px 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px 10px;
}
</style>
