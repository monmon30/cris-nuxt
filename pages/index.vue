<template>
  <v-row justify="center" tag="section">
    <v-col cols="12">
      <HeroBanner />
    </v-col>
  </v-row>
</template>

<script>
import HeroBanner from '~/components/HeroBanner.vue'

export default {
  name: 'IndexPage',
  components: {
    HeroBanner
  }
}
</script>
