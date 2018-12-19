<template>
  <section>
    <div class="form-group form-check">
      <LoginCheckBox class="input"/>
    </div>
  </section>
</template>

<style scoped>
/* .auto-input {
} */
.input {
  cursor: pointer;
  width: 50%;
  background: #f0fafa;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  padding: 10px 15px 10px 35px;
}
</style>

<script>
import LoginCheckBox from '~/components/Atoms/LoginCheckBox.vue'

export default {
  components: {
    LoginCheckBox
  }
}
</script>
