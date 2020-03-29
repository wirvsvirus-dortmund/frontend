<template>

<div class="container">
  <h2>Nutzer-Registrierung</h2>

  <form class="wb-3"  v-on:submit.prevent="addUser">
    <div class="form-row mb-3">
      <label class="col-sm-2 col-form-label" for="name">Name</label>
      <div class="col-sm-10">
        <input v-model.trim="newUser.name" placeholder="Name" id="name"
          type="text" required autofocus autocomplete="name"
          class="form-control"
        >
      </div>
    </div>

    <div class="form-row mb-3">
      <label class="col-sm-2 col-form-label" for="email">Email</label>
      <div class="col-sm-10">
        <input  v-model.trim="newUser.email" placeholder="email" id="email"
          type="email" required autocomplete="email"
          class="form-control"
          title="foo"
          >
      </div>
    </div>

    <div class="form-row mb-3">
      <label class="col-sm-2 col-form-label" for="password">Passwort</label>
      <div class="col-sm-10">
        <input v-model="newUser.password" required type="password" id="password" class="form-control">
      </div>
    </div>

    <div class="form-row mb-3">
      <label class="col-sm-2 col-form-label" for="confirm">Passwort bestätigen</label>
      <div class="col-sm-10">
        <input @input="verifyPassword" required type="password" id="confirm" class="form-control" v-model="confirmation">
      </div>
    </div>

    <input type="submit" class="btn btn-primary" value="Registrieren">
  </form>
</div>
</template>

<script>
import JQuery from 'jquery'
import eventBus from '@/eventBus'

export default {
  name: 'UserRegistration',
  data (){
    return {
      newUser: {},
      confirmation: undefined
    }
  },
  methods: {
    verifyPassword () {
      let elem = document.getElementById('confirm')
      if (this.newUser.password === this.confirmation) {
        elem.setCustomValidity('')
      } else {
        elem.setCustomValidity('Passwords do not match')
      }
    },
    addUser() {
      JQuery.ajax('/api/users', {
        method: 'POST',
        dataType: 'json',
        data: this.newUser,
        success: () => {
          this.newUser = {}
          this.$router.push({ 'name': 'Landing' })
          eventBus.$emit('flash', {
            message: 'Neuer Nutzer registriert, bitte bestätigen Sie ihre Email-Adresse',
            category: 'success',
          })
        },
        error: (response) => {
          console.log(response)
          let message
          if (response.status == 401) {
            message = 'Ihnen fehlt die notwendige Berechtigung'
          } else if (response.status == 400) {
            message = 'Daten fehlerhaft'
          } else if (response.status == 422) {
            message = 'Ein Nutzer mit dieser Email Adresse ist bereits registriert. Passwort vergessen?'
          } else {
            message = 'Unbekannter Fehler, versuchen Sie es später erneut.'
          }
          eventBus.$emit('flash', { message: message, category: 'danger'})
        },
      })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
label {
  text-align: left;
}
</style>
