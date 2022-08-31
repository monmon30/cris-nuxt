<template>
  <v-card class="ma-2" :width="$vuetify.breakpoint.mdAndUp ? '300px' : '500px'">
    <v-card-title> {{ product.name }} </v-card-title>
    <div>
      <img
        class="product-item-image"
        :src="require(`~/assets/images/products/${mainImage.url}.jpg`)"
      />
    </div>
    <v-card-actions>
      <v-btn> BUY </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    mainImage() {
      return this.product?.images.find(image => image.is_main === true)
    }
  }
}
</script>

<style scoped>
.product-item-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
