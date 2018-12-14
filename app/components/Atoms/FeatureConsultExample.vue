<template>
  <div class="FeatureConsultExample">
    <div class="list-group">
      <ul>
        <li
          v-for="qa in qalist"
          :key="qa.title">
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start qa-list">
            <div class="d-flex">
              <div class="panel-innersub">
                Q
              </div>
              <div class="panel-innermain">
                <h3>{{ qa.title }}</h3>
                <small class="sub-label">{{ qa.author }}</small>
                <small class="sub-label">{{ qa.posttime }}</small>
                <p class="panel-contents">{{ qa.body }}</p>
                <p class="qa-footer-l">{{ qa.answer }}</p>
                <a
                  class="qa-footer-r"
                  href="#">{{ qa.category }}</a>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.FeatureConsultExample {
  display: inline-block;
  padding: 0;
  margin: 0;
  width: 100%;
}
.qa-list {
  padding: 20px;
  margin: 24px 0 0 0;
}

.panel-innersub {
  float: left;
  margin-right: 10px;
  text-align: center;
  font-family: 'Roboto';
  font-size: 2.625rem;
  line-height: 1;
  color: #28c8a0;
}
.subTitle {
  display: block;
  padding: 0;
  margin: 0;
}
.panel-innermain {
  display: block;
  width: 100%;
  text-align: left;
  font-size: 0.875rem;
}
.sub-label {
  color: #b4b4b4;
  font-weight: bold;
  line-height: 1.3;
}
.panel-contents {
  height: 88px;
  margin: 10px 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
.qa-footer-l {
  margin: 10px 0 0 0;
  float: left;
  font-weight: bold;
  color: #28c8a0;
}
.qa-footer-r {
  margin: 10px 0 0 0;
  float: right;
  color: #b4b4b4;
  font-weight: bold;
  line-height: 1.3;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ store }) {
    await store.dispatch('qalist/fetchQAList')
  },
  computed: {
    ...mapGetters({ qalist: 'qalist/getExamples' })
  }
}
</script>
