<template>
  <section>
    <div class="midle-title">
      <DoctorIconImage class="imgage"/>
      <DoctorIconTitle class="title"/>
      <DoctorIconLabel class="label"/>
    </div>
  </section>
</template>

<style scoped>
.midle-title {
  display: inline-block;
  background-repeat: no-repeat;
}
.imgage {
  padding: 0;
  margin: 0;
}
.title {
  padding: 0;
  margin: 15px 0 0 0;
}
.label {
  padding: 0;
  margin: 15px 0 0 0;
}
</style>


<script>
import DoctorIconImage from '~/components/Atoms/DoctorIconImage.vue'
import DoctorIconTitle from '~/components/Atoms/DoctorIconTitle.vue'
import DoctorIconLabel from '~/components/Atoms/DoctorIconLabel.vue'

export default {
  components: {
    DoctorIconImage,
    DoctorIconTitle,
    DoctorIconLabel
  }
}
</script>
