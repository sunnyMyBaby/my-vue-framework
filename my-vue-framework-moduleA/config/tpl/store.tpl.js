const storeTpl = 
`const {{camelModuleName}} = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  getters: {}
 }
 export default {{camelModuleName}}
`
module.exports = storeTpl