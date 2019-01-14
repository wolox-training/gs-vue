<template lang="pug">
  .dashboard-container
    wolox-navbar
</template>

<script>
import WoloxNavbar from '@/components/WoloxNavbar.vue'

export default {
  name: 'Dashboard',
  components: {
    WoloxNavbar
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables/colors';

.dashboard-container {
  background-color: $wild-sand;
  min-height: 100vh;
}
</style>
