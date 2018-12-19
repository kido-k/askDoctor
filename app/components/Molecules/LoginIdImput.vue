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
import LoginIdLabel from '~/components/Atoms/LoginIdLabel.vue'
import LoginIdInputBox from '~/components/Atoms/LoginIdInputBox.vue'

export default {
  components: {
    LoginIdLabel,
    LoginIdInputBox
  }
}
</script>
