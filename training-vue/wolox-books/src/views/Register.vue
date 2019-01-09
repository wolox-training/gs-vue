<template>
  <div class="container">
    <form class="register-form">
      <label>First name</label>
      <input type="text">
      <label>Last name</label>
      <input type="text">
      <label>Email</label>
      <input type="email">
      <label>Password</label>
      <input type="password">
      <button>Sign up</button>
    </form>
    <button class="btn-outline">Login</button>
  </div>
</template>

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
