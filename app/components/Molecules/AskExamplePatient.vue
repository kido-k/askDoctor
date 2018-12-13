<template>
  <section>
    <div class="middle-title">
      <MidleTitle/>
      <MidleLabel class="label"/>
      <MidlePicture class="picture"/>
    </div>
  </section>
</template>

<style scoped>
.middle-title {
  display: inline-block;
  margin: 0;
  padding: 0;
}
.label {
  margin: 20px 0 0 0;
}
.picture {
  margin: 40px 0 0 0;
}
</style>


<script>
import MidleTitle from '~/components/atoms/AskDoctorMiddleTitle2.vue'
import MidleLabel from '~/components/atoms/AskDoctorMiddleLabel2.vue'
import MidlePicture from '~/components/atoms/AskDoctorMiddlePicture2.vue'

export default {
  components: {
    MidleTitle,
    MidleLabel,
    MidlePicture
  }
}
</script>
