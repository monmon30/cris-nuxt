<template>
  <div>
    <v-card>
      <v-card-title> Add Product </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleSubmit">
          <v-text-field
            v-model="form.name"
            outlined
            dense
            placeholder="Product Name"
          />
          <v-textarea
            v-model="form.description"
            outlined
            dense
            placeholder="Product Description"
          />
          <v-btn class="mb-3" type="submit" block color="primary">
            CREATE PRODUCT
          </v-btn>
          <v-btn type="reset" block color="secondary"> RESET </v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <v-snackbar v-model="snackbar" top>
      {{ $store.getters['product/getProduct'] }}
    </v-snackbar>
  </div>
</template>
<script>
export default {
  name: 'ProductAddForm',
  data: () => ({
    form: {
      name: null,
      description: null
    },
    snackbar: false
  }),
  methods: {
    async handleSubmit() {
      try {
        await this.$store.dispatch('product/createProduct', this.form)
        this.snackbar = true
      } catch (error) {
        alert('Failed to add product.')
      }
    }
  }
}
</script>
