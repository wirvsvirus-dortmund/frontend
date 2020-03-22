<template>

<div class="container">
  <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="shop" class="shop">
      <h2>{{ shop.name }}</h2>

      <table class="table">
        <tbody>
          <tr>
            <th scope="row">Adresse</th>
            <td v-html="shop.address"></td>
          </tr>
          <tr>
            <th scope="row">Max. Kundenanzahl</th>
            <td>{{ shop.capacity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  
</div>

</template>


<script>
import JQuery from 'jquery'

export default {
  name: 'Shop',
  data () {
    return {
      loading: false,
      shop: null,
      error: null,
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.shop = null
      this.loading = true

      JQuery.ajax("/api/shops/" + this.$route.params.id, {
        dataType: "json",
        success: (data) => {
          data.address = data.address.replace("\n", "<br>")
          this.shop = data
          this.loading = false
        },
        error: (error) => {
          console.log(error)
          this.shop = null
          this.loading = false
          this.error = "Failed to load shop with id " + this.$route.params.id + " "
        }
      })
    }
  }

}
</script>

