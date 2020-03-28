<template>
  <div id="app container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <router-link class="navbar-brand" to="/">Supermarkt</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
          <router-link class="nav-link" to="/shops">Märkte</router-link>
        </div>
      </div>
    </nav>

    <main class="container">
      <router-view />
    </main>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
