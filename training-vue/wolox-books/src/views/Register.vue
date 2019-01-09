<template>
  <div class="container">
    <form class="register-form" @submit.prevent="onSubmit">
      <label>First name</label>
      <input v-model="firstName" name="first-name" type="text">
      <label>Last name</label>
      <input v-model="lastName" name="last-name" type="text">
      <label>Email</label>
      <input v-model="email" name="email" type="email">
      <label>Password</label>
      <input v-model="password" name="password" type="password">
      <button>Sign up</button>
    </form>
    <button class="btn-outline">Login</button>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    }
  },
  computed: {
    user() {
      return {
        user: {
          email: this.email,
          password: this.password,
          first_name: this.firstName,
          last_name: this.lastName,
          locale: "en"
        }
      }
    }
  },
  methods: {
    onSubmit() {
      if(this.firstName && this.email && this.lastName && this.password) {
        console.log(JSON.stringify(this.user))
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.register-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid rgb(223, 223, 223);
  margin-bottom: 20px;
}
input,
label {
  width: 400px;
  text-align: left;
}
</style>
