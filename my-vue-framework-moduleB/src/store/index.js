import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import storeConfig from './store.config'
Vue.use(Vuex)
const store = new Vuex.Store({
  actions,
  mutations,
  getters,
  ...storeConfig
})

export default store
