<template>
  <section>
    <div class="email-input form-group">
      <LoginIdLabel class="label"/>
      <LoginIdInputBox class="input"/>
    </div>
  </section>
</template>

<style scoped>
.input {
  margin: 10px 15px;
}
</style>

<script>
import LoginIdLabel from '~/components/atoms/LoginIdLabel.vue'
import LoginIdInputBox from '~/components/atoms/LoginIdInputBox.vue'

export default {
  components: {
    LoginIdLabel,
    LoginIdInputBox
  }
}
</script>
