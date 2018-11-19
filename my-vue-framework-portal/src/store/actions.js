const actions = {
  setParentMenuAsync(state, data) {
    state.commit('setParentMenu', data)
  },
  setMenuAsync(state, data) {
    state.commit('setMenu', data)
  },
  setNavsByParentAsync(state, data){
    state.commit('setNavsByParent', data)
  }
}
export default actions