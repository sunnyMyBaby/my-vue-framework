import Vue from 'vue'
import Router from 'vue-router'

const routes = []

// 注册所有路由
const requireComponent = require.context('@/modules', true, /\.router.js$/)
// console.log(requireComponent)// 一个函数里边有reuturn
// console.log(requireComponent.keys())// 一个数组["./login/login.router.js", "./regester/regester.router.js", "./search/search.router.js"]
requireComponent.keys().forEach((fileName) => {
  // console.log(fileName) ./search/search.router.js 里边有default
  const routerConfig = requireComponent(fileName)
  // console.log(routerConfig) 返回一个对象
  routes.push(...routerConfig.default)
})
Vue.use(Router)
const router = new Router({
  routes
})

export default router
