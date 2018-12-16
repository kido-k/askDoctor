<template>
  <div class = "loginBtn">
    <a
      href="/login"
      class="btn login btn-outline-secondary"
      role="button"
      aria-pressed="true">
      <ion-icon
        size="large"
        name="lock"
      /><br>
      ログイン
    </a>
  </div>
</template>

<style scoped>
.loginBtn {
  text-align: center;
  display: block;
  width: 80px;
  margin: 0;
}
.login {
  border-style: none;
  padding: 0 5px;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
}
</style>
