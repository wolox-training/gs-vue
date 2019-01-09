<template>
  <button :class="variant" name="name" :type="type">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'WoloxButton',
  props: {
    name: String,
    type: String,
    variant: {
      default: 'button',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  border: solid 2px rgb(182, 207, 93);
  background-color: rgb(182, 207, 93);
  color: #fff;
  border-radius: 10px;
  padding: 15px;
  line-height: 14px;
  font-size: 14px;
  box-sizing: border-box;
  font-weight: 600;
  margin-bottom: 20px;
  width: 100%;
}
.outline {
  @extend .button;
  background-color: transparent;
  color: rgb(182, 207, 93);
}
</style>
