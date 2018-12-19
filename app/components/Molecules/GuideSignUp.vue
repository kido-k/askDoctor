<template>
  <section>
    <div class="guide">
      <AskDoctorLabel1 class="label"/>
      <SignUpButton class="button"/>
    </div>
  </section>
</template>

<style scoped>
.guide {
  text-align: center;
  margin: 40px 0 0 0;
}
.button {
  margin: 25px 0 0 0;
}
</style>


<script>
import AskDoctorLabel1 from '~/components/Atoms/AskDoctorLabel1.vue'
import SignUpButton from '~/components/Atoms/SignUpButton.vue'

export default {
  components: {
    AskDoctorLabel1,
    SignUpButton
  }
}
</script>
