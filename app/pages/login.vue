<template>
  <div class="main">
    <div class="header">
      <Header/>
    </div>
    <div class="login-form">
      <LoginForm/>
    </div>
    <div class="">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Organisms/TheHeader.vue'
import LoginForm from '~/components/Organisms/TheLoginForm.vue'
import Footer from '~/components/Organisms/TheFooter.vue'

export default {
  components: {
    Header,
    LoginForm,
    Footer
  }
}
</script>

<style scoped>
.main {
  margin: auto;
  justify-content: center;
}
.login-form {
  width: 50%;
  margin: 40px 0 0 25%;
  padding: 0px;
}
</style>
