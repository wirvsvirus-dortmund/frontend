<template>

<form class='form form-inline' v-if='currentUser === null'>
  <form class='form-inline my-2 my-lg-0' v-on:submit.prevent='login'>
    <input v-model='email' type='email' required class='form-control mr-sm-2'
      placeholder='Email' aria-label='Email'
      >
    <input v-model='password' type='password' required class='form-control mr-sm-2'
      placeholder='Passwort' aria-label='Passwort'
      >

    <div class="form-check mr-2">
      <input type="checkbox" class="form-check-input" v-model="rememberMe" id="rememberMe">
      <label class="form-check-label" for="rememberMe">Eingeloggt bleiben</label>
    </div>
    <button class='btn btn-outline-primary my-2 my-sm-0' type='submit'>Login</button>
  </form>
</form>
<div v-else>
Logged in as {{ currentUser.name }}
  <button class='btn btn-outline-primary my-2 my-sm-0' @click='logout'>Logout</button>
</div>

</template>


<script>
import JQuery from 'jquery'

export default {
  name: 'Login',
  data () {
    return {
      currentUser: null,
      email: null,
      password: null,
      rememberMe: false
    }
  },
  created () {
    this.fetchCurrentUser()
  },
  methods: {
    fetchCurrentUser () {
      JQuery.ajax('/api/current_user/', {
        dataType: 'json',
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
      JQuery.ajax('/api/csrf_token/', {
        error: (error) => {
          console.log('Error getting CSRF token')
          console.log(error)
        },
        success: (data) => {
          console.log('CSRF token received')
          this.loginRequest(data.token)
        }
      })
    },
    loginRequest (token) {
      JQuery.ajax('/api/login/', {
        method: 'POST',
        data: {
          password: this.password,
          email: this.email,
          csrf_token: token,
          remember_me: this.rememberMe
        },
        error: (error) => {
          let data = error.responseJSON
          if (data.message == 'invalid_credentials') {
            this.$emit('error', {'message': 'Falscher Nutzername / Passwort'})
          } else if (data.message == 'unconfirmed_email') {
            this.$emit('error', {'message': 'Unbestägtige Email-Adresse'})
          } else {
            this.$emit('error', {'message': 'Unbekannter Fehler'})
            console.log('Unknown error when trying to login')
            console.log(error)
          }
        },
        success: () => {
          console.log('Successfully logged in')
          this.fetchCurrentUser()
        }
      })
      this.password = null
      this.rememberMe = false
    },
    logout () {
      JQuery.ajax('/api/logout/', {
        method: 'POST',
        success: () => {
          console.log('User logged out')
          this.currentUser = null
        }
      })
    }
  }
}
</script>
