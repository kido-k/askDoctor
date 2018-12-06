<template>
  <section class="container">
    <div>
      <AskDoctor/>
      <SearchComponent/>
      <p class="oi oi-magnifying-glass"/>
    </div>
  </section>
</template>

<script>
import AskDoctor from '~/components/atoms/AskDoctorLogo.vue'
import SearchComponent from '~/components/Molecules/SearchComponent.vue'

export default {
  components: {
    AskDoctor,
    SearchComponent
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
