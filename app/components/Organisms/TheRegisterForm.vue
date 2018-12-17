<template>
  <div class="signUp-panel">
    <!-- <LoginFromTitle class="title"/> -->
    <div class="">
      <LoginIdImput class="id"/>
      <PasswordImput class="password"/>
    </div>
    <div>
      <SignUpButton class="signUp-btn"/>
    </div>
  </div>
</template>

<script>
import LoginIdImput from '../Molecules/LoginIdImput.vue'
import PasswordImput from '../Molecules/PasswordImput.vue'
import SignUpButton from '../Atoms/SignUpButton.vue'

export default {
  components: {
    LoginIdImput,
    PasswordImput,
    SignUpButton
  }
}
</script>

<style scoped>
.signUp-panel {
  display: inline-block;
  width: 100%;
  padding: 16px;
  margin: 0;
}
.title {
  padding: 0;
  margin: 40px 0 0 0;
  text-align: center;
}
.id {
  margin: 8px 0 0 0;
}
.password {
  margin: 8px 0 0 0;
}
.signUp-btn {
  margin: 50px 0 40px 0;
  text-align: center;
}
</style>
