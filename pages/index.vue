<template>
  <section class="container">
    <div class="header">
      <Header/>
    </div>
    <div class="main">
      <div class="content1">
        <CatchCopy/>
        <GuideSignUp/>
      </div>
      <div class="middlecontent">
        <MiddleTitle/>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Organisms/TheHeader.vue'
import CatchCopy from '~/components/Atoms/CatchCopy.vue'
import GuideSignUp from '~/components/Molecules/GuideSignUp.vue'
import MiddleTitle from '~/components/Organisms/TheMiddleTitle.vue'
export default {
  components: {
    Header,
    CatchCopy,
    GuideSignUp,
    MiddleTitle
  }
}
</script>

<style>
.header {
  width: 100%;
}
.container {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  text-align: center;
}
.middlecontent {
  background-color: #f0fafa;
  margin: 40px 0 0 0;
  padding: 40px 0;
}
</style>
