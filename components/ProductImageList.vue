<template>
  <v-row class="mt-10" justify="center">
    <v-col
      v-for="image in images"
      :key="image.data.product_image_id"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img :src="image.data.attributes.image_url" aspect-ratio="1" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ProductImageList',
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>
