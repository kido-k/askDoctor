<template>
  <section>
    <div class="icon-component">
      <ClockIconImage class="image"/>
      <ClockIconTitle class="title"/>
      <ClockIconLabel class="label"/>
    </div>
  </section>
</template>

<style scoped>
.icon-component {
  display: inline-block;
  background-repeat: no-repeat;
}
.image {
  padding: 21px 0 0 0;
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
import ClockIconImage from '~/components/Atoms/ClockIconImage.vue'
import ClockIconTitle from '~/components/Atoms/ClockIconTitle.vue'
import ClockIconLabel from '~/components/Atoms/ClockIconLabel.vue'

export default {
  components: {
    ClockIconImage,
    ClockIconTitle,
    ClockIconLabel
  }
}
</script>
