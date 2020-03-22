<template>

<div class="container">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>
    <form method="POST" action="/api/shops" class="wb-3">
        <h3 style="text-align: left">Anschrift</h3>
        <div class="form-row mb-3" style="text-align: left; margin: 0 auto;">
            <div class="col">
                <label for="marketName">Names des Supermarktes</label>
                <input id="marketName" class="form-control" v-model.trim="newShop.name" type="text" placeholder="Name des Supermarkts">
            </div>
        </div>

        <div class="form-row mb-3" style="text-align: left; margin: 0 auto;">
            <div class="col">
                <label for="marketAddress">Adresse des Supermarktes</label>
                <textarea id="marketAddress" class="form-control" v-model.trim="newShop.address" type="text" placeholder="Adresse des Supermarkts">
                </textarea>
            </div>
        </div>

        <h3 style="text-align: left">Marktinfo</h3>

        <div class="form-row mb-3" style="text-align: left; margin: 0 auto;">
            <div class="col-md-2">
                <label for="shopCapacity">Kapazität</label>
                <input id="shopCapacity" class="form-control" v-model.trim="newShop.capacity" type="number" placeholder="Kapazität">
            </div>
            <div class="col-md-10">
                <label for="contactInfo">Kontaktinformation</label>
                <input id="contactInfo" class="form-control" v-model.trim="newShop.contact_info" type="text" placeholder="Name">
            </div>
        </div>

        <button method="POST" type="submit" class="btn btn-primary" v-on:submit="addShop">
            Supermarkt hinzufügen
        </button>

    </form>

    <h3 class="mt-5">Gewählter Markt</h3>
    <ul class="list-group">
        <li class="list-group-item">
            {{newShop.name}} – {{newShop.address}}
        </li>
        <li class="list-group-item">
            Kapazität: {{newShop.capacity}}
        </li>
        <li class="list-group-item">
            Kontaktinfo: {{newShop.contact_info}}
        </li>
    </ul>
</div>
</template>

<script>
import JQuery from 'jquery'

export default {
    name: 'ShopRegistration',
    data (){
        return {
            newShop: {
                name: null,
                adress: null,
                capacity: null,
                contact_info: null,
            },
            loading: false,
            error: null,
        }
    },
    watch: {
    '$route': 'addShop'
    },
    methods: {
        addShop(data) {
            this.error = null
            this.loading = true

            JQuery.ajax("/api/shops", {
                method: "POST",
                dataType: "json",
                data: data.newShop,
                success: (data) => {
                    data.address = data.address.replace("\n", "<br>")
                    this.newShop = data
                    this.loading = false
                },
                error: (error) => {
                    console.log(error)
                    this.newShop = null
                    this.loading = false
                    this.error = "Failed to create shop. Fields require different input."
                },

            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>
</style> -->
