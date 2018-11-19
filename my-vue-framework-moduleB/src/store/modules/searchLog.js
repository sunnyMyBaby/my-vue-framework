const searchLog = {
  namespaced: true,
  state: {
    title: '这里是检索日志模块'
  },
  getters: {
   getTitle(state){
    return state.title
   }
  },
  mutations:{
    searchLogMutationTitle(state, text){
      state.title = text
    }
  },
  actions:{
    searchLogActionsTitle(state, text){
      state.commit('searchLogMutationTitle', text);
    }
  }
}
export default searchLog