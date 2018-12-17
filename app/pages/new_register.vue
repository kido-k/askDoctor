<template>
  <div class="main">
    <div class="header">
      <Header/>
    </div>
    <div class="register-form">
      <RegisterForm/>
    </div>
    <div class="footer-form">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Organisms/TheHeader.vue'
import RegisterForm from '~/components/Organisms/TheRegisterForm.vue'
import Footer from '~/components/Organisms/TheFooter.vue'

export default {
  components: {
    Header,
    RegisterForm,
    Footer
  }
}
</script>

<style scoped>
.main {
  margin: auto;
  justify-content: center;
}
.register-form {
  width: 50%;
  margin: 40px 0 0 25%;
  padding: 0px;
}
.footer-form {
  margin: 0 0 40px 0;
  padding: 0px;
}
</style>
