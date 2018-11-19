import Vue from 'vue'
import Router from 'vue-router'
const routerCompent = require.context('@/modules', true, /\.router.js$/);

const routes = [];
// 自动化注册路由
routerCompent.keys().forEach((filName) =>{
  // console.log(filName); 文件路径
  // console.log(routerCompent(filName)) // 能获取到没给router.js文件export的东西
 const routerConfig =  routerCompent(filName)
 routes.push(...routerConfig.default)
})
console.log(routes);
Vue.use(Router)
const router = new Router({
  routes
})

export default router