<template lang="pug">
  .container
    dashboard
      form.login-form(@submit.prevent='onSubmit')
        label(:class="['label', { 'text-error': $v.email.$error }]")
          | {{ $t('login.email') }}
        input(:class="['input-wolox',  { 'input-error': $v.email.$error }]", name='email', v-model='$v.email.$model')
        label(:class="['label', { 'text-error': $v.password.$error }]")
          | {{ $t('login.password') }}
        input(:class="['input-wolox', { 'input-error': $v.password.$error }]", name='password', type='password', v-model='$v.password.$model')
        button.btn-wolox
          | {{ $t('login.login') }}
      router-link.btn-wolox-outline(to='/sign-up')
        | {{ $t('login.signup') }}
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import Dashboard from '@/components/Dashboard.vue'
import { hasNumber, hasUppercase } from '@/utils/validators'
import { userService } from '@/services/user'
import { localStorageService } from '@/services/localStorage'
import { setAuthHeader } from '@/config/api'

export default {
  name: 'Login',
  components: {
    Dashboard
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
          .then(response => {
            if (response.ok) {
              localStorageService.setToken(response.data.access_token)
              setAuthHeader(response.data.access_token)
              this.$router.push({ name: 'dashboard' })
            } else {
              // TODO: show error to user
            }
          })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../scss/variables/colors";

.login-form {
  align-items: flex-start;
  border-bottom: 2px solid $black-alpha-15;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
}
</style>
