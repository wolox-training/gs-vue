<template>
  <div class="input-container">
    <label for="name">{{label}}</label>
    <input v-model="inputValue" name="name" :type="type">
  </div>
</template>

<script>
export default {
  name: 'WoloxInput',
  data () {
    return {
      inputValue: this.value
    }
  },
  props: {
    type: String,
    label: String,
    value: String,
    name: String
  },
  watch: {
    inputValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  label {
    font-weight: 700;
    font-size: 14px;
  }
  input {
    border: 0;
    border-radius: 10px;
    padding: 10px;
    font-size: 16px;
    box-sizing: border-box;
    margin-bottom: 20px;
    width: 100%;
  }
}
</style>
