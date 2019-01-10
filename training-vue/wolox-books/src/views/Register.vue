<template>
  <div class="container">
    <form class="register-form" @submit.prevent="onSubmit">
      <label class="label">First name</label>
      <input class="input-wolox" type="text" name="first-name" v-model="firstName" />
      <label class="label">Last name</label>
      <input class="input-wolox" type="text" name="last-name" v-model="lastName" />
      <label class="label">Email</label>
      <input class="input-wolox" type="email" name="email" v-model="email" />
      <label class="label">Password</label>
      <input class="input-wolox" type="password" name="password" v-model="password" />
      <button class="btn-wolox" type="submit">Sign up</button>
    </form>
    <button class="btn-wolox-outline" type="button">Login</button>
  </div>
</template>

<script>
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
          first_name: this.firstName,
          last_name: this.lastName,
          locale: 'en'
        }
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.firstName && this.email && this.lastName && this.password) {
        console.log(JSON.stringify(this.user))
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables/colors';

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
