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
import SearchButton from '~/components/atoms/SearchButton.vue'
import SearchInputBox from '~/components/atoms/SearchInputBox.vue'

export default {
  components: {
    SearchButton,
    SearchInputBox
  }
}
</script>
