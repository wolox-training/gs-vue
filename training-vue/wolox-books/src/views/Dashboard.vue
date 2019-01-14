<template lang="pug">
  .dashboard-container
    wolox-navbar
</template>

<script>
import WoloxNavbar from '@/components/WoloxNavbar.vue'
import { bookService } from '@/services/book'

export default {
  name: 'Dashboard',
  components: {
    WoloxNavbar
  },
  data () {
    return {
      books: bookService.list()
    }
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
