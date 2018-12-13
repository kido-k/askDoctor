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
      <div class="pdca">
        <PDCAList/>
      </div>
      <div class="feature-word">
        <FeatureWord/>
      </div>
      <div class="feature-consult">
        <FeatureConsult/>
      </div>
      <div class="ask-category">
        <AskCategory/>
      </div>
      <div class="">
        <Footer/>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Organisms/TheHeader.vue'
import CatchCopy from '~/components/Atoms/CatchCopy.vue'
import GuideSignUp from '~/components/Molecules/GuideSignUp.vue'
import MiddleTitle from '~/components/Organisms/TheMiddleTitle.vue'
import PDCAList from '~/components/Organisms/ThePDCAList.vue'
import FeatureWord from '~/components/Organisms/TheFeatureWord.vue'
import FeatureConsult from '~/components/Organisms/TheFeatureConsult.vue'
import AskCategory from '~/components/Organisms/TheAskCategory.vue'
import Footer from '~/components/Organisms/TheFooter.vue'

export default {
  components: {
    Header,
    CatchCopy,
    GuideSignUp,
    MiddleTitle,
    PDCAList,
    FeatureWord,
    FeatureConsult,
    AskCategory,
    Footer
  }
}
</script>

<style>
.container {
  margin: 0px;
  padding: 0px;
  text-align: center;
}
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
