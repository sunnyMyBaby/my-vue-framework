const regester = {
  namespaced: true,
  state: {
    title: '这里是注册页面'
  },
  mutations: {
    regesterMution (state, text) {
      state.title = text
    }
  },
  actions: {
    regesterAxtions (state, text) {
      state.commit('regesterMution', text)
    }
  },
  getters: {
    getTitle (state) {
      return state.title
    }
  }
}
export default regester
