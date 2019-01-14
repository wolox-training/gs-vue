<template lang="pug">
  .header-container
    header.header
      .logo
        img(src='../assets/wolox_logo.svg')
        span.title
          | BOOKS
      .links
        button.btn-link(@click='logout')
          | Logout
</template>

<script>
import { localStorageService } from '@/services/localStorage'

export default {
  name: 'WoloxNavbar',
  methods: {
    logout () {
      localStorageService.removeToken()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/variables/colors";

.header-container {
  background-color: $white;
  border-top: 4px solid $picton-blue;
  box-shadow: 0 4px 0 $black-alpha-15;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: center;
  padding: 0 20px;
  width: 100%;
}

.logo {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 150px;
  text-align: center;
}

.title {
  font-size: 10px;
  margin: 0;
}

.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
}
</style>
