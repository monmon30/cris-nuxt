<template>
  <v-row justify="center" tag="section">
    <v-col cols="12">
      <HeroBanner />
    </v-col>
    <v-col>
      <v-row class="mx-md-16 mt-md-16">
        <v-col>
          <ProductList :products="products" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import HeroBanner from '~/components/HeroBanner.vue'
import ProductList from '~/components/ProductList.vue'

export default {
  name: 'IndexPage',
  components: {
    HeroBanner,
    ProductList
  },
  computed: {
    products() {
      return this.$store.getters['product/getProducts']
    }
  }
}
</script>
