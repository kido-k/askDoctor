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
.group-site {
  text-align: center;
}
.site-navi {
  margin: 5px 0 0 0;
}
</style>


<script>
import GroupSiteTitle from '~/components/Atoms/GroupSiteTitle.vue'
import GroupSiteLink from '~/components/Atoms/GroupSiteLink.vue'

export default {
  components: {
    GroupSiteTitle,
    GroupSiteLink
  }
}
</script>
