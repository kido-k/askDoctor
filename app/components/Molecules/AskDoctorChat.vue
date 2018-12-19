<template>
  <section>
    <div class="middle-title">
      <MidleTitle/>
      <MidleLabel class="label"/>
      <MidlePicture/>
    </div>
  </section>
</template>

<style scoped>
.middle-title {
  display: inline-block;
  background-repeat: no-repeat;
}
.label {
  margin: 20px 0 0 0;
}
</style>


<script>
import MidleTitle from '~/components/Atoms/AskDoctorMiddleTitle1.vue'
import MidleLabel from '~/components/Atoms/AskDoctorMiddleLabel1.vue'
import MidlePicture from '~/components/Atoms/AskDoctorMiddlePicture1.vue'

export default {
  components: {
    MidleTitle,
    MidleLabel,
    MidlePicture
  }
}
</script>
