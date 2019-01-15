<template lang="pug">
  .book
    img.image.m-bottom-1(:src="book.image_url" :alt="book.title")
    h3.title
      | {{book.title}}
    span.author
      | {{book.author}}
</template>

<script>
export default {
  name: 'WoloxNavbar',
  props: {
    book: {
      author: String,
      description: String,
      genre: String,
      id: Number,
      image_url: String,
      publisher: String,
      title: String,
      year: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/variables/colors";

.book {
  background-color: $white;
  box-shadow: 2px 2px 0 $black-alpha-15;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 8px;
  width: 200px;
  height: 100%;
}

.image {
  object-fit: cover;
  background-color: $wild-sand;
  width: 184px;
  height: 184px;
}

.title {
  color: $black;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
}

.author {
  color: $oslo-gray;
  font-size: 12px;
  text-align: left;
}
</style>
