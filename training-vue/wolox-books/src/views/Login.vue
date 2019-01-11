<template>
  <div class="container">
    <form class="login-form" @submit.prevent="onSubmit">
      <label :class="['label', { 'text-error': $v.email.$error }]">Email</label>
      <input
        :class="['input-wolox',  { 'input-error': $v.email.$error }]"
        name="email"
        v-model="$v.email.$model"
      >
      <label :class="['label', { 'text-error': $v.password.$error }]">Password</label>
      <input
        :class="['input-wolox', { 'input-error': $v.password.$error }]"
        name="password"
        type="password"
        v-model="$v.password.$model"
      >
      <button class="btn-wolox" type="submit">Login</button>
    </form>
    <button class="btn-wolox-outline" type="button">Sign up</button>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { hasNumber, hasUppercase } from '@/utils/validators'
import { userService } from '@/services/user'

export default {
  name: 'login',
  components: {
  },
  data () {
    return {
      email: null,
      password: null
    }
  },
  computed: {
    session () {
      return {
        session: {
          email: this.email,
          password: this.password
        }
      }
    }
  },
  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
      hasNumber,
      hasUppercase
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        userService.sessions.create(this.session)
          .then(response => console.log(response.data.access_token))
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../scss/variables/colors";

.container {
  max-width: 400px;
  width: 100%;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 2px solid $wild-sand;
  margin-bottom: 20px;
  width: 100%;
}
</style>
