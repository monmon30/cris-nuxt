<template>
  <div>Logging out...</div>
</template>

<script>
export default {
  name: 'LogoutPage',
  layout: 'AuthLayout',
  async mounted() {
    await this.$auth.logout()
  }
}
</script>
