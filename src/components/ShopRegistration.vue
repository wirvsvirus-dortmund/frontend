<template>

<div class="container">
  <h2>Einen neuen Markt / ein neues Geschäft hinzufügen</h2>

  <div v-if="loading" class="loading">
    Loading...
  </div>

  <div v-if="success" class="alert alert-success">
    Markt erfolgreich eingetragen
  </div>

  <div v-if="error" class="alert alert-danger">
    {{ error }}
  </div>

  <form class="wb-3"  v-on:submit.prevent="addShop">
    <h3>Anschrift</h3>

    <div class="form-row mb-3">
      <label class="col-sm-2 col-form-label" for="marketName">Name</label>
      <div class="col-sm-10">
        <input id="marketName" class="form-control" v-model.trim="newShop.name" placeholder="Ihr Supermarkt" type="text">
      </div>
    </div>

    <div class="form-row mb-3">
      <label class="col-sm-2 col-form-label" for="marketAddress">Adresse</label>
      <div class="col-sm-10">
        <input type="text" id="marketAddress" class="form-control" v-model.trim="newShop.address" placeholder="Straße Nr., PLZ Ort">
      </div>
    </div>

    <h3>Marktinfo</h3>

    <div class="form-row mb-3">
      <label class="col-sm-2 col-form-label" for="shopCapacity">Kunden-Kapazität</label>
      <div class="col-sm-2">
        <input id="shopCapacity" class="form-control" v-model.trim="newShop.capacity" type="number">
      </div>
      <label class="col-sm-2 col-form-label" for="contactInfo">Kontaktinformation</label>
      <div class="col-sm-6">
        <input id="contactInfo" class="form-control" v-model.trim="newShop.contact_info" type="text">
      </div>
    </div>

    <input type="submit" class="btn btn-primary" value="Geschäft eintragen">
  </form>
</div>
</template>

<script>
import JQuery from 'jquery'

export default {
    name: 'ShopRegistration',
    data (){
        return {
            newShop: {},
            sending: false,
            error: null,
            success: false,
        }
    },
    watch: {
    '$route': 'addShop'
    },
    methods: {
        addShop() {
            this.error = null
            this.loading = true

            JQuery.ajax("/api/shops", {
                method: "POST",
                dataType: "json",
                data: this.newShop,
                success: (response) => {
                    console.log(response)
                    this.newShop = {}
                    this.loading = false
                    this.success = "Markt erfolgreich eingetragen"
                },
                error: (response) => {
                    console.log(response)
                    this.loading = false
                    this.success = true
                    if (response.statusCode == 401) {
                      this.error = "Ihnen fehlt die notwendige Berechtigung"
                    } else if (response.statusCode == 400) {
                      this.error = ""
                    }
                },
            })
            return false; // prevent browser from reloading page
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  text-align: left;
}
</style>
