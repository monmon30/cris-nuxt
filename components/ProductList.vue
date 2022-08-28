<template>
  <v-container>
    <v-row justify="center" align="center">
      <ProductItem v-for="i in 13" :key="i" />
    </v-row>
  </v-container>
</template>

<script>
import ProductItem from './ProductItem.vue'

export default {
  name: 'ProductList',
  components: {
    ProductItem
  }
}
</script>
