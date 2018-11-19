const getters = {
  getMenu(state){
    return state.menu
  },
  getNavsByParent(state){
    return state.currentParentRoute
  }
}
export default getters