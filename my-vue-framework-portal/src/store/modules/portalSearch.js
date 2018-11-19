const search = {
  namespaced: true,
  state: {
    title: '我是search的title'
  },
  mutations: {
    mutationsSearch(state, text) {
      state.title = text
    }
  },
  actions: {
    actionsSearch(state, text) {
      console.log(state)
      state.commit('mutationsSearch', text)
    }
  },
  getters: {
    getSearchTitle(state){
      return state.title
    }
  }
}
export default search;