<template>
  <v-row justify="center" class="pa-10 mt-12">
    <LoginForm />
  </v-row>
</template>

<script>
import LoginForm from '~/components/LoginForm.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginForm
  },
  layout: 'AuthLayout'
}
</script>
