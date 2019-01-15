<template lang="pug">
  .dashboard-container
    wolox-navbar.m-bottom-2
    h1
      | {{`Showing book ${id}`}}
    div
      | {{JSON.stringify(book)}}
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
  },
  mounted () {
    this.$store.dispatch('books/loadDetail', this.id)
  },
  beforeDestroy () {
    this.$store.dispatch('books/resetDetail')
  },
  computed: {
    book () {
      return this.$store.getters['books/detail']
    }
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
