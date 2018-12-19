<template>
  <section>
    <div class="email-input form-group">
      <LoginEmailLabel class="label"/>
      <LoginEmailInputBox class="input"/>
    </div>
  </section>
</template>

<style scoped>
.input {
  margin: 10px 15px;
}
</style>

<script>
import LoginEmailLabel from '~/components/Atoms/LoginEmailLabel.vue'
import LoginEmailInputBox from '~/components/Atoms/LoginEmailInputBox.vue'

export default {
  components: {
    LoginEmailLabel,
    LoginEmailInputBox
  }
}
</script>
