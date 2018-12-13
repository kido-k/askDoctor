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
  min-width: 1040px;
  max-width: 1040px;
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
