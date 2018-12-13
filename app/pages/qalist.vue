<template>
  <div>
    <h2>QA-List</h2>
    <h3>Count: {{ qalist }}</h3>
    <button
      type="button"
      @click="increment">+</button>
    <button
      type="button"
      @click="clearQA">-</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ store }) {
    await store.dispatch('qalist/fetchQAList')
  },
  computed: {
    ...mapGetters({ qalist: 'qalist/getExamples' })
  },
  methods: {
    ...mapActions('qalist', ['increment', 'clearQA'])
  }
}
</script>
