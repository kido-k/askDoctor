<template>
  <section>
    <div class="searchComponent">
      <SearchInputBox/>
      <SearchButton/>
    </div>
  </section>
</template>

<style>
.searchComponent {
  display: flex;
}
</style>


<script>
import SearchButton from '~/components/Atoms/SearchButton.vue'
import SearchInputBox from '~/components/Atoms/SearchInputBox.vue'

export default {
  components: {
    SearchButton,
    SearchInputBox
  }
}
</script>
