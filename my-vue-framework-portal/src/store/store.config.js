// 自动注册各个模块的store

const storeConfig = {
  modules: {}
}
try {
  const storeModules = require.context('@/store/modules', false, /\.js$/)
  storeModules.keys().forEach((filnePath)=>{
    const module = storeModules(filnePath)
    storeConfig.modules[filnePath.match(/([a-z]|[A-Z])+/)[0]] = module.default || module
  })
} catch (e){
  console.log(e);
}
export default storeConfig