export const state = () => ({
  users: []
})

export const getters = {
  getExamples: state => state.users
}

export const mutations = {
  addUser(state, { user }) {
    state.users.push(user)
  }
}

export const actions = {
  async users({ commit }, { loginInfo }) {
    await this.$axios.$put(`/users/${user.id}/posts.json`, [
      ...(user.posts || []),
      putData
    ])
  }
}
