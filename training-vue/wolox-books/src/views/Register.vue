<template>
  <div class="container">
    <form class="register-form" @submit.prevent="onSubmit">
      <WoloxInput name="first-name" label="First name" type="text" v-model="firstName"/>
      <WoloxInput name="last-name" label="Last name" type="text" v-model="lastName"/>
      <WoloxInput name="email" label="Email" type="email" v-model="email"/>
      <WoloxInput name="password" label="Password" type="password" v-model="password"/>
      <WoloxButton type="submit">Sign up</WoloxButton>
    </form>
    <WoloxButton type="button" variant="outline">Login</WoloxButton>
  </div>
</template>

<script>
import WoloxInput from '@/components/WoloxInput.vue'
import WoloxButton from '@/components/WoloxButton.vue'

export default {
  name: 'register',
  components: {
    WoloxInput,
    WoloxButton
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
.container {
  max-width: 400px;
  width: 100%;
}
.register-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid rgb(223, 223, 223);
  margin-bottom: 20px;
  width: 100%;
}
</style>
