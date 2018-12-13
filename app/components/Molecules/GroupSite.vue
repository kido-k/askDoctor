<template>
  <div class="group-site">
    <GroupSiteTitle/>
    <ul class="site-navi nav">
      <li class="nav-item">
        <GroupSiteLink class="nav-link"/>
      </li>
      <li class="nav-item">
        <GroupSiteLink class="nav-link"/>
      </li>
      <li class="nav-item">
        <GroupSiteLink class="nav-link"/>
      </li>
      <li class="nav-item">
        <GroupSiteLink class="nav-link"/>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.site-navi {
  text-align: center;
  margin: 5px 0 0 0;
}
</style>


<script>
import GroupSiteTitle from '~/components/atoms/GroupSiteTitle.vue'
import GroupSiteLink from '~/components/atoms/GroupSiteLink.vue'

export default {
  components: {
    GroupSiteTitle,
    GroupSiteLink
  }
}
</script>
