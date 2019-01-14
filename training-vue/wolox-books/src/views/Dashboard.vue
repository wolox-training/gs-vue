<template lang="pug">
  .dashboard-container
    wolox-navbar.m-bottom-2
    .books
      book(v-for="book in books" :title="book.title" :author="book.author" :image="book.image_url" :key="book.id")
</template>

<script>
import WoloxNavbar from '@/components/WoloxNavbar.vue'
import Book from '@/components/Book.vue'
import { bookService } from '@/services/book'

export default {
  name: 'Dashboard',
  components: {
    WoloxNavbar,
    Book
  },
  data () {
    return {
      books: []
    }
  },
  mounted () {
    bookService.list().then(response => {
      this.books = response.data
    })
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
