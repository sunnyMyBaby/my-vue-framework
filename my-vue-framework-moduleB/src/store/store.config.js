// 自动化注册所有store
const storeConfig = {
  modules: {}
}
// require.context 可动态引入文件,他会创建自己的模块上下文
// 通过正则匹配到可能的文件，全部引入，如果我们想自定义正则规则的花可以自己写一个
// 其中第一个参数表示相对的文件目录，第二个参数是表示是否包括子目录中的文件，第三个参数表示引入的文件匹配的正则表达式
// require.context模块导出（返回）一个（require）函数，这个函数可以接收一个参数
// resolve 是一个函数，它返回请求被解析后得到的模块 id。
// keys 也是一个函数，它返回一个数组，由所有可能被上下文模块处理的请求组成。
// id 是上下文模块里面所包含的模块 id. 它可能在你使用 module.hot.accept 的时候被用到
const requireStore = require.context('@/store/modules', false, /\.js$/)
requireStore.keys().forEach((fileName) => {
  const module = requireStore(fileName)
  storeConfig.modules[fileName.match(/([A-Z]|[a-z])+/)[0]] = module.default
})

export default storeConfig
