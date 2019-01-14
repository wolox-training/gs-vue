<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~wolox-equalizer/equalizer';

@import './scss/variables/colors';

@import './scss/commons/button';
@import './scss/commons/typography';
@import './scss/commons/input';
@import './scss/commons/layout';

.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
  background-color: $white;
}
</style>
