<template>
  <v-container>
    <v-row justify="center" align="center">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </v-row>
  </v-container>
</template>

<script>
import ProductItem from './ProductItem.vue'

export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>
