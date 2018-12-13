<template>
  <div class="theheader">
    <AskDoctor/>
    <SearchComponent/>
    <LoginMenuButton/>
    <MainMenuButton/>
  </div>
</template>

<script>
import AskDoctor from '../Atoms/AskDoctorLogo.vue'
import LoginMenuButton from '../Atoms/LoginMenuButton.vue'
import MainMenuButton from '../Atoms/MainMenuButton.vue'
import SearchComponent from '../Molecules/SearchComponent.vue'

export default {
  components: {
    AskDoctor,
    SearchComponent,
    LoginMenuButton,
    MainMenuButton
  }
}
</script>

<style>
.theheader {
  height: 80px;
  min-width: 930px;
  display: flex;
  align-items: flex-end;
  padding-left: 5px;
  padding-bottom: 18px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: #dce1e1;
  justify-content: center;
}
</style>
