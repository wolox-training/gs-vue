<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/register">Register</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  background-color: rgb(244, 244, 244);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
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
input {
  border: 0;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
label {
  font-weight: 700;
  font-size: 14px;
}
button {
  border: solid 2px rgb(182, 207, 93);
  background-color: rgb(182, 207, 93);
  color: #fff;
  border-radius: 10px;
  padding: 15px;
  line-height: 14px;
  font-size: 14px;
  width: 400px;
  box-sizing: border-box;
  font-weight: 600;
  margin-bottom: 20px;
}
.btn-outline {
  background-color: transparent;
  color: rgb(182, 207, 93);
}
</style>
