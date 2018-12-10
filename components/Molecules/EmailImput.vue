<template>
  <section>
    <div class="email-input form-group">
      <LoginEmailLabel class="label"/>
      <LoginEmailInputBox class="input"/>
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
import LoginEmailLabel from '~/components/atoms/LoginEmailLabel.vue'
import LoginEmailInputBox from '~/components/atoms/LoginEmailInputBox.vue'

export default {
  components: {
    LoginEmailLabel,
    LoginEmailInputBox
  }
}
</script>
