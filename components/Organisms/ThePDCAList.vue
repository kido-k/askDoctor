<template>
  <div>
    <div class="pdca d-flex bd-highlight">
      <ClockIcon class="clock p-2 flex-fill bd-highlight"/>
      <TalkIcon class="talk p-2 flex-fill bd-highlight"/>
      <DoctorIcon class="doctor p-2 flex-fill bd-highlight"/>
    </div>
    <div>
      <SignUpButton class="signup-btn"/>
    </div>
  </div>
</template>

<script>
import ClockIcon from '../Molecules/ClockIcon.vue'
import TalkIcon from '../Molecules/TalkIcon.vue'
import DoctorIcon from '../Molecules/DoctorIcon.vue'
import SignUpButton from '../Atoms/SignUpButton.vue'

export default {
  components: {
    ClockIcon,
    TalkIcon,
    DoctorIcon,
    SignUpButton
  }
}
</script>

<style scoped>
.pdca {
  min-width: 1040px;
  max-width: 1040px;
  margin: 0 auto;
  box-sizing: inherit;
  background-repeat: no-repeat;
}
.signup-btn {
  margin: 40px 0 0 0;
}
/* .left-component {
  text-align: center;
  width: 49%;
  margin: 0 2% 0 0;
}
.right-component {
  text-align: center;
  width: 49%;
  margin: 0;
} */
</style>
