const alarmRealtime = {
  namespaced: true,
  state: {
    title: '这里是实时报警模块'
  },
  getters: {
   getTitle(state){
    return state.title
   }
  },
  mutations:{
    alarmRealtimeMutationTitle(state, text){
      state.title = text
    }
  },
  actions:{
    alarmRealtimeActionsTitle(state, text){
      state.commit('alarmRealtimeMutationTitle', text);
    }
  }
}
export default alarmRealtime