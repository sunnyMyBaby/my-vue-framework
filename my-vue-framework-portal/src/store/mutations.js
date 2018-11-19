const mutations = {
  setMenu(state, data){
    state.menu = data
  },
  setParentMenu(state, data){
    state.parentMenu = data
  },
  setNavsByParent(state, data){
    state.currentParentRoute = data
  }
}
export default mutations