<template>
  <div class="login">
    <div class="form">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      email: '',
      password: ''
    }
  }),
  methods: {
    async submitLogin() {
      let { email, password } = this.user
      if(!email || !password) return

      try {
        const { data: { user, token } } = await this.$axios.post('login', {
          email,
          password
        })
        this.$store.dispatch('setLogin', { user, token })
        this.$axios.defaults.headers['Authorization'] = `Bearer ${token}`
        this.$router.push({ name: 'Home' })
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>
.form {
  margin: 0 auto;
  border: 1px solid rgb(160, 160, 160);
  border-radius: 5px;
  padding: 20px 40px;
  background-color: #f1f1f1;
}

.login {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #e9e9e9;
}

.form-block {
  display: block;
  margin-bottom: 15px;
  text-align: center;
}

.form-block label {
  display: block;
  align-items: center;
}

.form-block input {
  padding: 7px 5px;
}

.form-block button {
  padding: 7px 15px;
  border: none;
  transition: 0.5s all;
  margin: 0 auto;
  text-align: center;
}

.form-block button:hover {
  transform: scale(1.1);
}

</style>