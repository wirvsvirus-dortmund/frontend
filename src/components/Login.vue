<template>

<form class="form form-inline" v-if="currentUser === null">
  <form class="form-inline my-2 my-lg-0" v-on:submit.prevent="login">
    <input v-model="username" type="text" required class="form-control mr-sm-2"
      placeholder="Nutzername/Email" aria-label="Nutzername/Email"
      >
    <input v-model="password" type="password" required class="form-control mr-sm-2"
      placeholder="Passwort" aria-label="Passwort"
      >
    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Login</button>
  </form>
</form>
<div v-else>
Logged in as {{ currentUser.username }}
  <button class="btn btn-outline-primary my-2 my-sm-0" @click="logout">Logout</button>
</div>

</template>


<script>
import JQuery from 'jquery'

export default {
  name: 'Login',
  data () {
    return {
      currentUser: null,
      username: null,
      password: null
    }
  },
  created () {
    this.fetchCurrentUser()
  },
  methods: {
    fetchCurrentUser () {
      JQuery.ajax("/api/current_user/", {
        dataType: "json",
        success: (data) => {
          this.currentUser = data
        },
        error: () => {
          this.currentUser = null
        }
      })
    },
    login () {
      // first we need to get an csrf token
      JQuery.ajax("/api/csrf_token/", {
        error: (error) => {console.log(error)},
        success: (data) => {
          console.log('CSRF TOKEN RECEIVED')
          this.loginRequest(data.token)
        }
      })
    },
    loginRequest (token) {
      JQuery.ajax("/api/login/", {
        method: "POST",
        data: {password: this.password, username: this.username, csrf_token: token},
        error: (error) => {
          console.log(error)
          let data = error.responseJSON
          if (data.message == "invalid_credentials") {
            this.$emit('error', {'message': "Falscher Nutzername / Passwort"})
          } else if (data.message == "unconfirmed_email") {
            this.$emit('error', {'message': "Unbestägtige Email-Adresse"})
          } else {
            this.$emit('error', {'message': "Unbekannter Fehler"})
          }
        },
        success: () => {
          console.log('SUCCESSFULLY LOGGED IN')
          this.fetchCurrentUser()
        }
      })
      this.password = null;
    },
    logout () {
      JQuery.ajax("/api/logout/", {
        method: "POST",
        success: this.fetchCurrentUser,
      })
    }
  }
}
</script>
