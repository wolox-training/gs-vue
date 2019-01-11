<template>
  <div class="header-container">
    <header class="header">
      <div class="logo">
      <img src="../assets/wolox_logo.svg" /><span class="title">BOOKS</span>
    </div>
    <div class="links">
      <router-link class="btn-link" to="/login">Logout</router-link>
    </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
@import "../scss/variables/colors";

.header-container {
  width: 100%;
  background-color: $white;
  height: 60px;
  box-shadow: 0 4px 0 $black-alpha-15;
  border-top: 4px solid $picton-blue;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;
}
.logo {
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.title {
  margin: 0;
  font-size: 10px;
  letter-spacing: 2px;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
}
</style>
