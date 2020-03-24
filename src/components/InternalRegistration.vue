<template>

<div class="container">

    <form class="wb-3">

        <h3 style="text-align: left">Anschrift</h3>
        <div class="form-row mb-3" style="text-align: left; margin: 0 auto;">
            <div class="col">
                <label for="marketName">Names des Supermarktes</label>
                <input id="marketName" class="form-control" v-model.trim="shop_name" type="text" placeholder="Name des Supermarkts">
            </div>
        </div>

        <div class="form-row mb-3" style="text-align: left; margin: 0 auto;">
            <div class="col-md-10">
                <label for="marketStreet">Straße</label>
                <input id="marketStreet" class="form-control" v-model.trim="street" type="text" placeholder="Straße">
            </div>
            <div class="col-md-2">
                <label for="marketHouseNumber">Nr.</label>
                <input id="marketHouseNumber" class="form-control" v-model.trim="house_number" type="text" placeholder="Nr.">
            </div>
        </div>

        <div class="form-row mb-3" style="text-align: left; margin: 0 auto;">
            <div class="col-md-3">
                <label for="marketZipCode">PLZ</label>
                <input id="marketZipCode" class="form-control" v-model.trim="post_code" type="text" placeholder="PLZ">
            </div>
            <div class="col-md-9">
                <label for="marketCity">Stadt</label>
                <input id="marketCity" class="form-control" v-model.trim="city" type="text" placeholder="Stadt">
            </div>
        </div>

        <h3 style="text-align: left">Marktinfo</h3>

        <div class="form-row mb-3" style="text-align: left; margin: 0 auto;">
            <div class="col-md-2">
                <label for="shopCapacity">Kapazität</label>
                <input id="shopCapacity" class="form-control" v-model.trim="capacity" type="text" placeholder="Kapazität">
            </div>
            <div class="col-md-5">
                <label for="contactName">Ansprechpartner</label>
                <input id="contactName" class="form-control" v-model.trim="contact_name" type="text" placeholder="Name">
            </div>
            <div class="col-md-5">
                <label for="contactPhone">Telefonnr.</label>
                <input id="contactPhone" class="form-control" v-model.trim="contact_phone" type="text" placeholder="Telefonnr.">
            </div>
        </div>

        <button type="button" class="btn btn-primary" v-on:click="counter += 1">
            Supermarkt hinzufügen
        </button>

    </form>

    <h3 class="mt-5">Gewählter Markt</h3>
    <ul class="list-group">
        <li class="list-group-item">
            {{shop_name}} – {{street}} {{house_number}}, {{post_code}} ({{city}})
        </li>
        <li class="list-group-item">
            Kapazität: {{capacity}}
        </li>
        <li class="list-group-item">
            Kontaktinfo: {{contact_name}} (Tel.: {{contact_phone}})
        </li>
    </ul>
</div>

</template>


<script>
export default {
  name: 'ShopRegistration',
  props: {
    shop_name: String,
    street: String,
    house_number: String,
    post_code: Number,
    city: String,
    capacity: Number,
    contact_name: String,
    contact_phone: String
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>
</style> -->
