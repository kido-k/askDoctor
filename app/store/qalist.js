export const state = () => ({
  examples: []
})

export const getters = {
  getExamples: state => state.examples
}

export const mutations = {
  addQA(state, { example }) {
    state.examples.push(example)
  },
  updateQA(state, { example }) {
    state.examples = state.examples.map(
      p => (p.id === example.id ? example : p)
    )
  },
  clearQA(state) {
    state.examples = []
  }
}

export const actions = {
  async fetchQAList({ commit }) {
    const examples = await this.$axios.$get(`/qalist.json`)
    commit('clearQA')
    Object.entries(examples).forEach(([id, content]) =>
      commit('addQA', {
        example: {
          id,
          ...content
        }
      })
    )
  }
}
