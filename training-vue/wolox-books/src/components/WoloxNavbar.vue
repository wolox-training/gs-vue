<template lang="pug">
  .navbar-container
    header.navbar
      .logo
        img(src='../assets/wolox_logo.svg' alt="logo")
        span.title
          | BOOKS
      .links
        button.btn-link(@click='logout')
          | {{ $t('woloxNavbar.logout') }}
</template>

<script>
import { localStorageService } from '@/services/localStorage'
import { removeAuthHeader } from '@/config/api'

export default {
  name: 'WoloxNavbar',
  methods: {
    logout () {
      localStorageService.removeToken()
      removeAuthHeader()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/variables/colors";

.navbar-container {
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

.navbar {
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
}
</style>
