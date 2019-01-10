<template>
  <div id="app">
    <header id="header">
      <img id="logo" alt="wolox books" src="./assets/wolox_logo.svg">
      <span id="title">BOOKS</span>
    </header>
    <div id="nav" hidden>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/register">Register</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './scss/variables/colors';

@import './scss/commons/button';
@import './scss/commons/typography';
@import './scss/commons/input';

body {
  background-color: $white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  min-height: 100vh;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
  background-color: $wild-sand;
  padding: 40px 20px 20px;
  border-top: 4px solid $picton-blue;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  box-shadow: 4px 4px 0 $black-alpha-15;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
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
