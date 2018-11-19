const faceSearch = {
  namespaced: true,
  state: {
    title: '这里是人脸检索模块'
  },
  getters: {
   getTitle(state){
    return state.title
   }
  },
  mutations:{
    faceSearchMutationTitle(state, text){
      state.title = text
    }
  },
  actions:{
    faceSearchActionsTitle(state, text){
      state.commit('faceSearchMutationTitle', text);
    }
  }
}
export default faceSearch