<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './scss/variables/colors';

@import './scss/commons/button';
@import './scss/commons/typography';
@import './scss/commons/input';

body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
  background-color: $white;
  padding: 0;
  margin: 0;
}
</style>
