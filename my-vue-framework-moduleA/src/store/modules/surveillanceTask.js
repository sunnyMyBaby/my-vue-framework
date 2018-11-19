const surveillanceTask = {
  namespaced: true,
  state: {
    title: '这里是布控模块'
  },
  getters: {
   getTitle(state){
    return state.title
   }
  },
  mutations:{
    surveillanceTaskMutationTitle(state, text){
      state.title = text
    }
  },
  actions:{
    surveillanceTaskActionsTitle(state, text){
      state.commit('surveillanceTaskMutationTitle', text);
    }
  }
}
export default surveillanceTask