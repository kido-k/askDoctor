<template>
  <div class="login-panel">
    <LoginFromTitle class="title"/>
    <div class="">
      <EmailImput class="email"/>
      <PasswordImput class="password"/>
    </div>
    <div>
      <AutoLoginCheck class="chk-box"/>
    </div>
    <div>
      <LoginButton class="login-btn"/>
    </div>
    <div>
      <ForgetPasswordLink class="forget-btn"/>
    </div>
  </div>
</template>

<script>
import LoginFromTitle from '../Atoms/LoginFromTitle.vue'
import EmailImput from '../Molecules/EmailImput.vue'
import PasswordImput from '../Molecules/PasswordImput.vue'
import AutoLoginCheck from '../Molecules/AutoLoginCheck.vue'
import LoginButton from '../Atoms/LoginButton.vue'
import ForgetPasswordLink from '../Atoms/ForgetPasswordLink.vue'

export default {
  components: {
    LoginFromTitle,
    EmailImput,
    PasswordImput,
    AutoLoginCheck,
    LoginButton,
    ForgetPasswordLink
  }
}
</script>

<style scoped>
.login-panel {
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
.email {
  margin: 8px 0 0 0;
}
.password {
  margin: 8px 0 0 0;
}
.chk-box {
  margin: 24px 0 0 0;
}
.login-btn {
  width: 100%;
  margin: 24px 0 0 0;
}
.forget-btn {
  margin: 24px 0 0 0;
}
</style>
