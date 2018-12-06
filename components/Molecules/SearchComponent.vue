<template>
  <section>
    <div class="container">
      <SearchInputBox/>
      <SearchButton/>
    </div>
  </section>
</template>

<style>
.container {
  display: flex;
}
</style>


<script>
import SearchButton from '~/components/atoms/SearchButton.vue'
import SearchInputBox from '~/components/atoms/SearchInputBox.vue'

export default {
  components: {
    SearchButton,
    SearchInputBox
  }
}
</script>
