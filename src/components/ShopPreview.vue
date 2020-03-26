<template>

  <div class="col-12 col-sm-6 col-md-4 col-xl-3 p-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ shop.name }}</h5>
        <p v-html="shop.address"></p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ShopPreview',
  props: {
    shop: null,
  },
}
  
</script>
