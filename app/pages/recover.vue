<template>
  <section class="container">
    <div class="header">
      <Header/>
    </div>
    <div>
      <p/>
    </div>
    <div class="">
      <Footer/>
    </div>

  </section>
</template>

<script>
import Header from '~/components/Organisms/TheHeader.vue'

import Footer from '~/components/Organisms/TheFooter.vue'

export default {
  components: {
    Header,

    Footer
  }
}
</script>

<style>
.container {
  /* width: 100%; */
  margin: 0px;
  padding: 0px;
  text-align: center;
}
/* .header {
  width: 100%;
} */
.middlecontent {
  background-color: #f0fafa;
  margin: 40px 0 0 0;
  padding: 40px 0;
}
.pdca {
  margin: 40px 0 0 0;
}
.feature-word {
  padding: 30px 0 0 0;
  margin: 0 0 0 0;
}
.feature-consult {
  padding: 30px 0 0 0;
  margin: 0 0 0 0;
}
.ask-category {
  margin: 0px;
  padding: 0px;
}
</style>
