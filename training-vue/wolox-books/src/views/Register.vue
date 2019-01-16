<template lang="pug">
  .container
    dashboard
      form.register-form(@submit.prevent='onSubmit')
        label.label
          | {{ $t("signup.firstName") }}
        input.input-wolox(name='first-name', v-model='firstName')
        label.label
          | {{ $t("signup.lastName") }}
        input.input-wolox(name='last-name', v-model='lastName')
        label(:class="['label', { 'text-error': $v.email.$error }]")
          | {{ $t("signup.email") }}
        input(:class="['input-wolox',  { 'input-error': $v.email.$error }]", name='email', v-model='$v.email.$model')
        label(:class="['label', { 'text-error': $v.password.$error }]")
          | {{ $t("signup.password") }}
        input(:class="['input-wolox', { 'input-error': $v.password.$error }]", name='password', type='password', v-model='$v.password.$model')
        button.btn-wolox
          | {{ $t("signup.signup") }}
      router-link.btn-wolox-outline(to='/login')
        | {{ $t("signup.login") }}
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import Dashboard from '@/components/Dashboard.vue'
import { hasNumber, hasUppercase } from '@/utils/validators'
import { userService } from '@/services/user'

export default {
  name: 'Register',
  components: {
    Dashboard
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

.register-form {
  align-items: flex-start;
  border-bottom: 2px solid $black-alpha-15;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
}
</style>
