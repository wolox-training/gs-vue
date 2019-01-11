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
}
</style>
