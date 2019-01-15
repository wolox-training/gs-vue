<template lang="pug">
  .container-column
    wolox-navbar.m-bottom-2
    .books
      router-link(v-for="book in books" :key="book.id" :to="`/books/${book.id}`")
        book(:book="book")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import WoloxNavbar from '@/components/WoloxNavbar.vue'
import Book from '@/components/Book.vue'

export default {
  name: 'Dashboard',
  components: {
    WoloxNavbar,
    Book
  },
  mounted () {
    this.loadBooks()
  },
  methods: {
    ...mapActions({
      loadBooks: 'books/load'
    })
  },
  computed: {
    ...mapGetters({
      books: 'books/list'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables/colors';

.books {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 200px);
}
</style>
