<template>
  <section>
    <div class="icon-component">
      <TalkIconImage class="imgage"/>
      <TalkIconTitle class="title"/>
      <TalkIconLabel class="label"/>
    </div>
  </section>
</template>

<style scoped>
.icon-component {
  display: inline-block;
  background-repeat: no-repeat;
}
.imgage {
  padding: 27px 0 0 0;
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
import TalkIconImage from '~/components/Atoms/TalkIconImage.vue'
import TalkIconTitle from '~/components/Atoms/TalkIconTitle.vue'
import TalkIconLabel from '~/components/Atoms/TalkIconLabel.vue'

export default {
  components: {
    TalkIconImage,
    TalkIconTitle,
    TalkIconLabel
  }
}
</script>
