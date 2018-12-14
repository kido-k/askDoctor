export const state = () => ({
  examples: [
    // {
    //   title: 'コインランドリーの使用で病気感染',
    //   author: '20代/女性',
    //   posttime: '2017/08/03',
    //   body:
    //     'コインランドリーで洗濯乾燥した布団を一歳の子供がしゃぶっていました。 布団はほぼ乾いてはいたものの、一部分は若干湿っている状態でした。コインランドリーはいろんな方が利用していると思うので衛生面が心配なのですが、布団をしゃぶったことで病気が移ることはありますか？よろしくお願い致します。(20代/女性)',
    //   answer: '7名が回答',
    //   category: '赤ちゃん・子供'
    // },
    // {
    //   title: '何歳まで産めますか?',
    //   author: '40代/女性',
    //   posttime: '2018/01/03',
    //   body:
    //     '私の主人は今年で54歳になります。男性も精子が悪くなると聞いた事があります。私も高齢出産の歳になりますが何歳まで妊娠して産む事が出来ますか?教えて下さい。(40代/女性)',
    //   answer: '7名が回答',
    //   category: '妊娠・出産'
    // },
    {
      title: '胃炎からスキルス胃がんの可能性?',
      author: '30代/女性',
      posttime: '2016/08/08',
      body:
        'スキルス胃がんについて昨年夏に胃カメラにてピロリ菌陽性だったので、除去して成功しました。ピロリ菌がいたので、定期的に胃カメラを受けようと思っております。ピロリ菌除去後、3ヶ月位してから胃の調子が悪かったので胃カメラでまたみて貰った所、特に異常は見当たらないが、鳥肌胃炎のようになっている所があるので、スキルス胃がんになりやすいから小まめに検査するように言われました。先月、3度目の胃カメラを受けました。結果を聞いた所、胃がんは認められず、ピロリ菌による萎縮性胃炎は変わらずあります。鳥肌胃炎も、前回程ではないけど認められる為、やはり1年開けずに9ヶ月位でまた検査に来て下さいと言われました。スキルス胃がんは急に発症し、急速に進行すると聞きます。9ヶ月の間隔を空けても大丈夫なんでしょうか。また、鳥肌胃炎は前回よりもマシになっているとの話でしたが、鳥肌胃炎はなくなる事はありますか？鳥肌胃炎からスキルス胃がんを発生する確率は高いのでしょうか？都内でも内視鏡で有名な病院にかかっておりますが、スキルス胃がんと聞くとどうしても不安になってしまいます。(30代/女性)',
      answer: '6名が回答',
      category: '胃腸・消化器'
    }
  ]
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
