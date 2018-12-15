<template>
  <div class = "signUpBtn">
    <button
      type="submit"
      class="abtn btn btn-lg active"
      @click="handleClickSubmit">登録する</button>
  </div>
</template>

<style scoped>
.signUpBtn {
  display: block;
}
.abtn {
  background: #fa7864;
  color: #fff;
  font-size: 1.25rem;
  height: 64px;
  width: 210px;
  padding: 15px 35px;
  margin: 0;
}
</style>
