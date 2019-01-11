<template lang="pug">
  .container
    Header
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'login',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables/colors';

.container {
  background-color: $wild-sand;
  min-height: 100vh;
}
</style>
