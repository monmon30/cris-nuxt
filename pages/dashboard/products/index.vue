<template>
  <v-row>
    <v-col v-if="product" cols="12">
      <v-btn class="mb-2" color="green" dark @click="handleAddNewProduct"
        >Add new product</v-btn
      >
    </v-col>
    <v-col v-if="!product" cols="12">
      <ProductAddForm />
    </v-col>
    <v-col v-if="product" cols="12">
      <ProductImageAddForm :product="product" />
    </v-col>

    <v-col v-if="productImage" cols="12">
      <ProductImageList :images="images" />
    </v-col>
  </v-row>
</template>

<script>
import ProductAddForm from '~/components/ProductAddForm.vue'
import ProductImageAddForm from '~/components/ProductImageAddForm.vue'
import ProductImageList from '~/components/ProductImageList.vue'

export default {
  name: 'ProductIndex',
  components: {
    ProductAddForm,
    ProductImageAddForm,
    ProductImageList
  },
  layout: 'DashboardLayout',
  computed: {
    product() {
      return this.$store.getters['product/getProduct'] || ''
    },
    productImage() {
      return this.$store.getters['productImage/getProductImage']
    },
    images() {
      return (
        this.$store.getters['productImage/getProductImage']?.data?.attributes
          ?.images || []
      )
    }
  },
  methods: {
    handleAddNewProduct() {
      this.$store.commit('product/SET_DATA', null)
      this.$store.commit('productImage/SET_DATA', null)
    }
  }
}
</script>
