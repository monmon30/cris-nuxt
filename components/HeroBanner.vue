<template>
  <v-sheet
    tag="section"
    class="d-flex flex-column flex-md-row mx-md-16 mt-md-16"
  >
    <v-card flat>
      <v-card-title
        class="hero-title text-left text-h2 text-md-h1 font-weight-bold"
      >
        <p>Christian Religious Item Shop</p>
      </v-card-title>

      <v-card-text class="text-h6 word-break">
        Customer satisfaction is our top priority, which is why we make every
        effort to deliver prompt and accurate service, and provide products of
        exceptional value and quality. We hope that our commitment to customer
        service will make your shopping experience a pleasurable one.
      </v-card-text>

      <v-card-text>
        <v-btn rounded color="primary">CHECK OUR PRODUCTS</v-btn>
      </v-card-text>
    </v-card>
    <div>
      <v-img
        src="/images/banner/hero-banner.jpg"
        :max-height="$vuetify.breakpoint.smOnly ? '500px' : '1000px'"
        :max-width="$vuetify.breakpoint.smOnly ? '100vw' : '800px'"
        contain
      />
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'HeroBanner'
}
</script>

<style scoped>
.hero-title {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#33ccff),
    to(#ff99cc)
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  word-break: break-word;
}

.word-break {
  word-break: break-word;
}
</style>
