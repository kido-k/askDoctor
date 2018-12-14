<template>
  <div>
    <div class="feature-search">
      <FeatureConsultTitle class="title"/>
      <FeatureConsultExample class="example"/>
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
  margin: 0;
}
.title {
  margin: 40px 0 0 0;
}
.example {
  width: 98%;
  margin: 24px 0 0 0;
}
</style>
