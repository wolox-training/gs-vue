<template lang="pug">
  .container-column
    wolox-navbar.m-bottom-2
    .card(v-if="book")
      img.image(:src="book.image_url")
      .head
        h1.title.bold.m-right-1
          | {{book.title}}
        span
          | ({{book.genre}})
      .more-info
        span.m-bottom-2
          span.bold.p-right-1
            | Book author:
          | {{book.author}}
        span.m-bottom-2
          span.bold.p-right-1
            | Publisher:
          | {{book.publisher}}
        span
          span.bold.p-right-1
            | Year of publication:
          | {{book.year}}
    span(v-else)
      | Loading book...
</template>

<script>
import WoloxNavbar from '@/components/WoloxNavbar'

export default {
  name: 'BookDetail',
  components: {
    WoloxNavbar
  },
  props: {
    id: String
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

.card {
  background-color: $white;
  box-shadow: 2px 2px 0 $black-alpha-15;
  display: grid;
  grid-template-areas: 'image title'
    'image details';
  grid-template-rows: min-content 1fr;
  grid-template-columns: 250px 750px;
  gap: 20px;
  padding: 20px;
}

.image {
  grid-area: image;
  width: 250px;
  height: 250px;
  object-fit:scale-down;
  background-color: $wild-sand;
}

.head {
  border-bottom: 2px solid $celery;
  padding: 10px;
}

.title {
  font-size: 24px;
}

.more-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
