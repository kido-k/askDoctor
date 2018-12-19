<template>
  <section>
    <div class="email-input form-group">
      <LoginPasswordLabel class="label"/>
      <LoginPasswordInputBox class="input"/>
    </div>
  </section>
</template>

<style scoped>
/* .email-input {
}
.label {
} */
.input {
  margin: 10px 15px;
}
</style>


<script>
import LoginPasswordLabel from '~/components/Atoms/LoginPasswordLabel.vue'
import LoginPasswordInputBox from '~/components/Atoms/LoginPasswordInputBox.vue'

export default {
  components: {
    LoginPasswordLabel,
    LoginPasswordInputBox
  }
}
</script>
