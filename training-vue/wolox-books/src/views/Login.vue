<template>
  <div class="container">
    <Dialog>
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
      <router-link class="btn-wolox-outline" to="/sign-up">Sign up</router-link>
    </Dialog>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import Dialog from '@/components/Dialog.vue'
import { hasNumber, hasUppercase } from '@/utils/validators'
import { userService } from '@/services/user'
import { localStorageService } from '@/services/localStorage'

export default {
  name: 'login',
  components: {
    Dialog
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
              this.$router.push({ name: 'auth' })
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 2px solid $black-alpha-15;
  margin-bottom: 20px;
  width: 100%;
}
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
