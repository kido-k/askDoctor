<template>
  <div class="category">
    <CategoryTitle class="title"/>
    <div class="d-flex align-items-center category-card">
      <CategoryChild class="left"/>
      <CategoryChild class="center"/>
      <CategoryChild class="right"/>
    </div>
    <div>
      <AllCategoryBtn class="all-category-btn"/>
    </div>
    <div>
      <SignUpButton class="signup-btn"/>
    </div>
  </div>
</template>

<script>
import CategoryTitle from '../Atoms/CategoryTitle.vue'
import CategoryChild from '../Molecules/CategoryChild.vue'
import AllCategoryBtn from '../Atoms/AllCategoryBtn.vue'
import SignUpButton from '../Atoms/SignUpButton.vue'

export default {
  components: {
    CategoryTitle,
    CategoryChild,
    AllCategoryBtn,
    SignUpButton
  }
}
</script>

<style scoped>
.category {
  display: block;
  min-width: 1040px;
  max-width: 1040px;
  padding: 0 0 80px 0;
  margin: 0;
  box-sizing: inherit;
  background-repeat: no-repeat;
}
.title {
  padding: 0;
  margin: 40px 0 0 0;
  text-align: center;
}
.category-card {
  margin: 10px 2% 0 0;
}
.left {
  min-height: 262px;
  margin: 0 2% 0 0;
}
.center {
  min-height: 262px;
  margin: 0 2% 0 0;
}
.right {
  min-height: 262px;
  margin: 0 2% 0 0;
}
.all-category-btn {
  min-width: 1040px;
  max-width: 1040px;
  margin: 40px 0 0 0;
}
.signup-btn {
  min-width: 1040px;
  max-width: 1040px;
  margin: 40px 0 0 0;
}
</style>
