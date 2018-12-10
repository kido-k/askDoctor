<template>
  <div class="footer">
    <SiteNavigation class="site-navi"/>
    <GroupSite class="group-site"/>
    <CopyRight class="copy-right"/>
  </div>
</template>

<script>
import SiteNavigation from '../Molecules/SiteNavigation.vue'
import GroupSite from '../Molecules/GroupSite.vue'
import CopyRight from '../Atoms/CopyRight.vue'

export default {
  components: {
    SiteNavigation,
    GroupSite,
    CopyRight
  }
}
</script>

<style>
.footer {
  padding: 0 0 20px 0;
  border-top: 5px solid #28c8a0;
  background: #ebf5f5;
  text-align: center;
}
.site-navi {
  margin: 40px 0 0 0;
}
.group-site {
  margin: 40px 0 0 0;
}
.copy-right {
  margin: 20px 0 0 0;
}
</style>
