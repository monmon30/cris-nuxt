<template>
  <v-card class="ma-2" :width="$vuetify.breakpoint.mdAndUp ? '300px' : '500px'">
    <v-card-title> Sample Product name </v-card-title>
    <v-card-subtitle> sample subtitle </v-card-subtitle>
    <div>
      <v-img
        aspect-ratio="1"
        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
      />
    </div>
    <v-card-actions>
      <v-btn> BUY </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProductItem'
}
</script>
