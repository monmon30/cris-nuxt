<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="$config.appName" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>
