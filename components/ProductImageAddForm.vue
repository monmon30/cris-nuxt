<template>
  <v-card>
    <v-card-title>
      {{ `Add Product Images to ${product.data.attributes?.name}` }}
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="handleSubmit">
        <v-file-input
          v-model="form.image_url"
          accept="image/*"
          chips
          outlined
          dense
          place
          label="Upload Files"
        />
        <v-btn type="submit" color="primary" block> SUBMIT </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ProductImageAddForm',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    form: {
      image_url: null
    }
  }),
  methods: {
    async handleSubmit() {
      try {
        await this.$store.dispatch('productImage/createProductImage', {
          productId: this.product.data.product_id,
          formImage: this.form.image_url
        })
        this.form.image_url = null
      } catch (error) {
        alert('Failed to upload image!', error)
      }
    }
  }
}
</script>
