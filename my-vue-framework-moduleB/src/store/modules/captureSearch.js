const alarmHistory = {
  namespaced: true,
  state: {
    title: '这里是图片模块'
  },
  getters: {
   getTitle(state){
    return state.title
   }
  },
  mutations:{
    alarmHistoryMutationTitle(state, text){
      state.title = text
    }
  },
  actions:{
    alarmHistoryActionsTitle(state, text){
      state.commit('alarmHistoryActionsTitle', text);
    }
  }
}
export default alarmHistory