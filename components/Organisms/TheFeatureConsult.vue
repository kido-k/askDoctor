<template>
  <div>
    <div class="feature-search">
      <FeatureConsultTitle class="title"/>
      <FeatureConsultExample class="btn"/>
    </div>
  </div>
</template>

<script>
import FeatureConsultTitle from '../Atoms/FeatureConsultTitle.vue'
import FeatureConsultExample from '../Atoms/FeatureConsultExample.vue'

export default {
  components: {
    FeatureConsultTitle,
    FeatureConsultExample
  }
}
</script>

<style scoped>
.feature-search {
  min-width: 1040px;
  max-width: 1040px;
  margin: 0;
}
.title {
  margin: 40px 0 0 0;
}
.btn {
  margin: 24px 0 0 0;
}
</style>
