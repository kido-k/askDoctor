<template>
  <div class="FeatureConsultExample">
    <div class="list-group">
      <a
        href="#"
        class="list-group-item list-group-item-action flex-column align-items-start qa-list">
        <div class="d-flex">
          <div class="panel-innersub">
            <div class="subTitle">
              Q
            </div>
          </div>
          <div class="panel-innermain">
            <div>
              <h3>コインランドリーの使用で病気感染</h3>
            </div>
            <div class="sub-label">
              <small>20代/女性</small>
              <small>yyyy/mm/dd</small>
            </div>
            <div class="panel-contents">
              <p>コインランドリーで洗濯乾燥した布団を一歳の子供がしゃぶっていました。布団はほぼ乾いてはいたものの、一部分は若干湿っている状態でした。コインランドリーはいろんな方が利用していると思うので衛生面が心配なのですが、布団をしゃぶったことで病気が移ることはありますか？よろしくお願い致します。
              </p>
            </div>
            <div class="qa-footer">
              <p>7名が回答</p>
              <a href="#">赤ちゃん・子供</a>
            </div>
          </div>
        </div>
      </a>
      <a
        href="#"
        class="list-group-item list-group-item-action flex-column align-items-start qa-list">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
      <a
        href="#"
        class="list-group-item list-group-item-action flex-column align-items-start qa-list">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
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
}
.subTitle {
  display: block;
  padding: 0;
  margin: 0;
  font-family: 'Roboto';
  font-size: 2.625rem;
  line-height: 1;
  color: #28c8a0;
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
  height: 89.6px;
  margin: 10px 0 0 0;
}
.qa-footer {
  margin: 10px 0 0 0;
}
.qa-footer > p {
  float: left;
  font-weight: bold;
  color: #28c8a0;
}
.qa-footer > a {
  float: right;
  color: #b4b4b4;
  font-weight: bold;
  line-height: 1.3;
}
</style>
