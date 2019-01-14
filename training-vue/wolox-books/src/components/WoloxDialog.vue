<template lang="pug">
  .dialog
    header.header
      img.logo(alt='wolox books', src='../assets/wolox_logo.svg')
      span.title
        | BOOKS
    slot
</template>

<style lang="scss" scoped>
@import "../scss/variables/colors";

.dialog {
  align-self: center;
  background-color: $wild-sand;
  border-top: 4px solid $picton-blue;
  box-shadow: 4px 4px 0 $black-alpha-15;
  box-sizing: border-box;
  max-width: 400px;
  padding: 40px 20px 20px;
  width: 100%;
}

.header {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  width: 100%;
}

.logo {
  padding-bottom: 10px;
  width: 300px;
}

.title {
  font-size: 14px;
  font-weight: 700;
}
</style>
