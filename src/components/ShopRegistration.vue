<template>
    <div>
        <p>
            <input v-model.trim="name" placeholder="Name des Supermarkts">
        </p>
        <p>
            <input v-model.trim="street" placeholder="Straße">
        </p>
        <p>
            <input v-model.trim="house_number" placeholder="Hausnummer">
        </p>
        <p>
            <input v-model.number="post_code" type="number" placeholder="PLZ">
        </p>
        <p>
            <input v-model.trim="city" placeholder="Stadt">
        </p>
        <p>
            <input v-model.number="capacity" type="number" placeholder="Kapazität">
        </p>
        <p>
            <input v-model.trim="contact" placeholder="Kontaktinformation">
        </p>
        <button v-on:click="counter += 1">Supermarkt hinzufügen</button>

        <h1>{{name}}</h1>
        <ul>
            <li>{{street}} {{house_number}}</li>
            <li>{{post_code}} {{city}}</li>
            <li>Kapazität: {{capacity}}</li>
            <li>Kontaktinfo: {{contact}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'ShopRegistration',
  props: {
    name: String,
    street: String,
    house_number: String,
    post_code: Number,
    city: String,
    capacity: Number,
    contact: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
