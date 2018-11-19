const search = {
  namespaced: true,
  state: {
    title: '这里是检索页面',
    mOra: 'mutations或者actions修改'
  },
  mutations: {
    mSetmOra (state, text, rootState) {
      console.log(rootState)
      state.mOra = text
    }
  },
  actions: {
    // 这里是异步的
    aycnSetmOra ({state, commit, rootState}) {
      // actions是触发mutations的否则无效
      // console.log(state)
      // console.log(commit)
      // console.log(rootState.regester.title)
      // 修改其他模块的值
      commit('regester/regesterMution', '在search模块修改的regester模块的值', {root: true})
    }
  },
  getters: {
    getTitle (state, getters, rootState) {
      // console.log(getters)
      // console.log(rootState.regester.title) // 可以获取其他模块的值
      return state.title
    },
    getmSetmOra (state) {
      return state.mOra
    }
  }
}
export default search
