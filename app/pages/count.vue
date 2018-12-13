<template>
  <div>
    <h2>カウンター</h2>
    <h3>Count: {{ count }}</h3>
    <button
      type="button"
      @click="increment">+</button>
    <button
      type="button"
      @click="decrement">-</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({ count: 'count/getCount' })
  },
  methods: {
    ...mapActions('count', ['increment', 'decrement'])
  }
}
</script>
