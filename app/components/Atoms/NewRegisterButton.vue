<template>
  <div class = "signUpBtn">
    <button
      type="submit"
      class="abtn btn btn-lg active"
      @click="newRegister">登録する</button>
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

<script>
export default {
  asyncData({ redirect, store }) {
    if (!store.getters['user']) {
      redirect('/')
    }
    return {
      formData: {
        title: '',
        body: ''
      }
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    async publish() {
      const payload = {
        user: this.user,
        ...this.formData
      }
      await this.publishPost({ payload })
      this.$router.push('/posts')
    },
    ...mapActions('users', ['updateUser']),
    ...mapActions('posts', ['publishPost'])
  }
}
</script>
