<template lang="pug">
  .dashboard-container
      wolox-navbar.m-bottom-2
      .h1
        | {{`Showing book ${id}`}}
</template>

<script>
import WoloxNavbar from '@/components/WoloxNavbar'

export default {
  name: 'BookDetail',
  components: {
    WoloxNavbar
  },
  props: {
    id: Number
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables/colors';

.dashboard-container {
  background-color: $wild-sand;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
</style>
