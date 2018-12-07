<template>
  <section class="container">
    <div class="header">
      <Header/>
    </div>
    <div class="main">
      <div class="content1">
        <CatchCopy/>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Organisms/TheHeader.vue'
import CatchCopy from '~/components/Atoms/CatchCopy.vue'
export default {
  components: {
    Header,
    CatchCopy
  }
}
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  text-align: center;
}
.header {
  width: 100%;
}
</style>
