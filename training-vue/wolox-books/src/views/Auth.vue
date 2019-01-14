<template lang="pug">
  .auth-container
    wolox-navbar
</template>

<script>
import WoloxNavbar from '@/components/WoloxNavbar.vue'

export default {
  name: 'Auth',
  components: {
    WoloxNavbar
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables/colors';

.auth-container {
  background-color: $wild-sand;
  min-height: 100vh;
}
</style>
