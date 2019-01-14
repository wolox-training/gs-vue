<template lang="pug">
  .book
    img.image.m-bottom-1(:src="image")
    span.title
      | {{title}}
    span.author
      | {{author}}
</template>

<script>
export default {
  name: 'WoloxNavbar',
  props: {
    image: String,
    title: String,
    author: String
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
}

.image {
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
