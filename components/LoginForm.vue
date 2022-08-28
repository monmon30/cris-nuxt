<template>
  <v-card width="70%">
    <v-card-title> Login Form </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="handleSubmit">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field v-model="form.email" outlined dense label="Email" />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="form.password"
              type="password"
              outlined
              dense
              label="Password"
            />
          </v-col>
          <v-btn type="submit" block elevation="2" color="primary">
            SUBMIT
          </v-btn>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    form: {
      email: 'streich.imogene@example.org',
      password: 'password'
    }
  }),

  methods: {
    async handleSubmit() {
      await this.$auth.loginWith('local', {
        data: this.form
      })

      console.log(this.$auth.user.attributes.email)
    }
  }
}
</script>
