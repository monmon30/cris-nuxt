<template>
  <v-container tag="main">
    <v-row tag="section">
      <v-col sm="" class="bg-green">
        <v-row justify="center">
          <v-col sm="12" class="d-flex justify-center" style="height: 30%">
            <v-card
              flat
              width="100%"
              height="100%"
              class="d-flex justify-center"
            >
              <img
                :width="$vuetify.breakpoint.mdAndUp ? '80%' : '500px'"
                :height="$vuetify.breakpoint.mdAndUp ? '80%' : '500px'"
                class="product-main-image"
                :src="imageFormatter(mainImage.url)"
                alt="product main display"
              />
            </v-card>
          </v-col>

          <v-col v-if="!$vuetify.breakpoint.smAndDown" sm="12">
            <v-container class="mt-3">
              <v-row justify="center">
                <v-card
                  v-for="img in images"
                  :key="img.url"
                  width="200"
                  height="200"
                  class="mx-2"
                >
                  <img
                    class="product-image"
                    :src="imageFormatter(img.url)"
                    alt="product image"
                  />
                </v-card>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="d-flex align-center">
        <v-row>
          <v-col cols="12" class="text-h4 text-md-h4">
            {{ product.name }}
          </v-col>
          <v-col cols="12" class="text-body-1">
            {{ product.description }}
          </v-col>
          <v-col>
            <div class="mb-2">PURCHASED AT:</div>
            <v-row>
              <v-col>
                <v-btn class="mr-2" color="indigo darken-4" dark>
                  LAZADA
                </v-btn>
                <v-btn dark color="deep-orange"> SHOPEE </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProductIndex',

  data: () => ({
    product: {}
  }),

  fetch() {
    const product = this.products.find(
      product =>
        product.id === parseInt(this.$router.history.current.params.productId)
    )
    this.product = product
  },
  head() {
    return {
      title: this.product.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.description
        }
      ]
    }
  },
  computed: {
    products() {
      return this.$store.getters['product/getProducts']
    },
    mainImage() {
      return this.product?.images.find(img => img.is_main === true)
    },
    images() {
      return this.product?.images.filter(img => img.is_main === false)
    }
  },

  methods: {
    imageFormatter: imageUrl =>
      require(`~/assets/images/products/${imageUrl}.jpg`)
  }
}
</script>

<style scoped>
.product-main-image {
  object-fit: contain;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
