<template>
  <div class = "loginBtn">
    <button
      class="btn btn-outline-secondary non-border"
      type="button"
    >
      <ion-icon
        size="large"
        name="lock"
      /><br>
      <p class="text">ログイン</p>
    </button>
  </div>
</template>

<style>
.loginBtn {
  display: inline-block;
  padding: 0;
  margin: 0;
}
.non-border {
  border-style: none;
}
.text {
  font-size: 10px;
  font-weight: bold;
  padding: 0;
  margin: 0;
}
</style>
