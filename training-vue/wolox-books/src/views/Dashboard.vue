<template lang="pug">
  .dashboard-container
    wolox-navbar.m-bottom-2
    .books
      book(v-for="book in books" :book="book" :key="book.id")
</template>

<script>
import WoloxNavbar from '@/components/WoloxNavbar.vue'
import Book from '@/components/Book.vue'

export default {
  name: 'Dashboard',
  components: {
    WoloxNavbar,
    Book
  },
  mounted () {
    console.log(this.$store)
    this.$store.dispatch('books/load')
  },
  computed: {
    books () {
      return this.$store.getters['books/list']
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

.books {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 200px);
}
</style>
