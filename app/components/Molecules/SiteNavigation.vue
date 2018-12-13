<template>
  <ul class="site-navi nav">
    <li class="nav-item">
      <LinkDoctor class="nav-link active"/>
    </li>
    <li class="nav-item">
      <LinkHelp class="nav-link"/>
    </li>
    <li class="nav-item">
      <LinkTermSevice class="nav-link"/>
    </li>
    <li class="nav-item">
      <LinkGuidePersonalData class="nav-link"/>
    </li>
    <li class="nav-item">
      <LinkGuideSpecifiedCommercial class="nav-link"/>
    </li>
    <li class="nav-item">
      <LinkThisCompany class="nav-link"/>
    </li>
    <li class="nav-item">
      <LinkSiteMap class="nav-link"/>
    </li>
  </ul>
</template>

<style scoped>
/* .site-navi {
} */
</style>


<script>
import LinkDoctor from '~/components/atoms/LinkDoctor.vue'
import LinkHelp from '~/components/atoms/LinkHelp.vue'
import LinkTermSevice from '~/components/atoms/LinkTermSevice.vue'
import LinkGuidePersonalData from '~/components/atoms/LinkGuidePersonalData.vue'
import LinkGuideSpecifiedCommercial from '~/components/atoms/LinkGuideSpecifiedCommercial.vue'
import LinkThisCompany from '~/components/atoms/LinkThisCompany.vue'
import LinkSiteMap from '~/components/atoms/LinkSiteMap.vue'

export default {
  components: {
    LinkDoctor,
    LinkHelp,
    LinkTermSevice,
    LinkGuidePersonalData,
    LinkGuideSpecifiedCommercial,
    LinkThisCompany,
    LinkSiteMap
  }
}
</script>
