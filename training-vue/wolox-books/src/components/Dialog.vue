<template>
  <div class="dialog">
    <header id="header">
      <img id="logo" alt="wolox books" src="../assets/wolox_logo.svg">
      <span id="title">BOOKS</span>
    </header>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Dialog'
}
</script>

<style lang="scss" scoped>
@import "../scss/variables/colors";

.dialog {
  max-width: 400px;
  width: 100%;
  background-color: $wild-sand;
  padding: 40px 20px 20px;
  border-top: 4px solid $picton-blue;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 4px 4px 0 $black-alpha-15;
}
#header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  #logo {
    width: 80%;
    padding-bottom: 10px;
  }
  #title {
    font-size: 14px;
    font-weight: 700;
  }
}
</style>
