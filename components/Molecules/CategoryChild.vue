<template>
  <section>
    <a
      class="card category-component"
      href="/">
      <CategoryChildImage class="card-img-top image"/>
      <div class="card-body subtitle">
        <CategoryChildTitle class="title"/>
        <CategoryChildLabel class="label"/>
      </div>
    </a>
  </section>
</template>

<style scoped>
.category-component {
  display: inline-block;
  background-repeat: no-repeat;
}
.image {
  padding: 0;
  margin: 0;
}
.title {
  padding: 0;
  margin: 0;
}
.label {
  padding: 0;
  margin: 4px 0 5px 0;
}
.subtitle {
  padding: 10px 20px;
  margin: 0;
}
</style>


<script>
import CategoryChildImage from '~/components/Atoms/CategoryChildImage.vue'
import CategoryChildTitle from '~/components/Atoms/CategoryChildTitle.vue'
import CategoryChildLabel from '~/components/Atoms/CategoryChildLabel.vue'

export default {
  components: {
    CategoryChildImage,
    CategoryChildTitle,
    CategoryChildLabel
  }
}
</script>
