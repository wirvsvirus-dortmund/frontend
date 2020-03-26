<template>

<div class="container">
  <div v-if="error" class="alert alert-danger">
    {{ error }}
  </div>
  
  <div class="row">
    <shop-preview
      v-for="shop in shops"
      :key="shop.id"
      v-bind:shop="shop"
    >
    </shop-preview>
  </div>
  
</div>

</template>


<script>
import JQuery from 'jquery'
import ShopPreview from './ShopPreview'

export default {
  name: 'Shop',
  components: {
    ShopPreview,
  },
  data () {
    return {
      loading: false,
      shops: [],
      error: null,
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.error = null
      this.shops = []
      this.loading = true

      JQuery.ajax("/api/shops", {
        dataType: "json",
        success: (data) => {
          this.shops = data["shops"].map(
            (s) => {
              s.address = s.address.replace("\n", "<br>")
              return s
            }
          )
          this.loading = false
        },
        error: (error) => {
          console.log(error)
          this.shops = []
          this.loading = false
          this.error = "Failed to load shops"
        }
      })
    }
  }
}
</script>
