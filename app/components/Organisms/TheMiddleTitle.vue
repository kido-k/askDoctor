<template>
  <div class="middle">
    <AskDoctorChat class="left-component"/>
    <AskExamplePatient class="right-component"/>
  </div>
</template>

<script>
import AskDoctorChat from '../Molecules/AskDoctorChat.vue'
import AskExamplePatient from '../Molecules/AskExamplePatient.vue'

export default {
  components: {
    AskDoctorChat,
    AskExamplePatient
  }
}
</script>

<style>
.middle {
  display: flex;
  margin: 0 auto;
  box-sizing: inherit;
  background-repeat: no-repeat;
}
.left-component {
  text-align: center;
  width: 49%;
  margin: 0 2% 0 0;
}
.right-component {
  text-align: center;
  width: 49%;
  margin: 0;
}
</style>
