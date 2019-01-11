<template lang="pug">
  .container
    form.register-form(@submit.prevent='onSubmit')
      label.label First name
      input.input-wolox(name='first-name', v-model='firstName')
      label.label Last name
      input.input-wolox(name='last-name', v-model='lastName')
      label(:class="['label', { 'text-error': $v.email.$error }]") Email
      input(:class="['input-wolox',  { 'input-error': $v.email.$error }]", name='email', v-model='$v.email.$model')
      label(:class="['label', { 'text-error': $v.password.$error }]") Password
      input(:class="['input-wolox', { 'input-error': $v.password.$error }]", name='password', type='password', v-model='$v.password.$model')
      button.btn-wolox(type='submit') Sign up
    router-link.btn-wolox-outline(to='/login') Login

</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { hasNumber, hasUppercase } from '@/utils/validators'
import { userService } from '@/services/user'

export default {
  name: 'register',
  components: {
  },
  data () {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    }
  },
  computed: {
    user () {
      return {
        user: {
          email: this.email,
          password: this.password,
          password_confirmation: this.password,
          first_name: this.firstName,
          last_name: this.lastName,
          locale: 'en'
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
        userService.create(this.user)
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
.register-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 2px solid $wild-sand;
  margin-bottom: 20px;
  width: 100%;
}
</style>
