<template>
  <section class="container">
    <div class="header">
      <Header/>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Organisms/TheHeader.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
.container {
  margin: 0px;
  padding: 0px;
  text-align: center;
}
.header {
  width: 100%;
}
</style>
