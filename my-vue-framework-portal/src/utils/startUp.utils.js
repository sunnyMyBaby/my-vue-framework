import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import './integrate.js';
import systemMenu from './menu.mock.js'
import router from '@/utils/router.utils'
import Layout from '../layout/layout.vue'
import store from '../store'
// 我们在做异步模块加载的时候其实我们用的是vue动态组件添加的
// setTimeout( function(){ while(true){} } , 100);
// setTimeout( function(){ alert('你好!'); } , 200);
// setInterval( callbackFunction , 200);
NProgress.start();
setTimeout(()=>{
  NProgress.done()
}, 1000)
const routes = []
// 这个路径其实需要跟开发和生产环境相关的
const modulePublicPath =  'http://localhost:8080'
// 加载异步模块方法 这个工作其实主要是把我们的异步模块通过js引入的方式添加到body下面
const loadAsyncModuleFactory = (path)=>{
  return new Promise((resolve, reject)=>{
    const script = document.createElement('script')
    script.src = path;
    script.async = true;
    script.onload = function(){
      resolve()
    }
    script.onerror = function(err){
      reject()
    }
    document.body.appendChild(script)
  })
}
// 加载异步组件
// asyncModuleFactory('alarm', 'results', resolve)
const asyncModuleFactory = (parentNav, navName, resolve) => {
  console.log('------------')
  console.log(parentNav, navName, resolve);
  const moduleName = `${navName}AsyncModule`
  const modulePath = `${modulePublicPath}/${parentNav}/static/js/${moduleName}.js`

  const loadScript = loadAsyncModuleFactory(modulePath)
  // 在module配置打包的时候到处是以export.default方式进行的
  // 而且在配置打包的时候会有一个模块变量名，加载完成之后这个变量名就会挂载到window下面
  // export.default的内容其实包括了
  // console.log(parentNav, navName);
  loadScript.then(()=>{
    // 注册自路由模块
    // console.log(window);// 这里包含了模块导出配置的export.js里的内容store，router等
    const asyncModule = window[moduleName].default
    window.insightApp.methods.registerAsyncRouter(asyncModule.routes,parentNav,navName)
    window.insightApp.methods.registerStore(asyncModule.store, navName);
    window.insightApp.methods.registerLocale(asyncModule.i18n);
    console.log(asyncModule.i18n);
    resolve(asyncModule.module);
  })
}
// 根据菜单构建routes
const buildRoutesByMenus = (systemMenu)=>{

  const rootRoute = {
    path: '/',
    redirect: `/${systemMenu[0].alias}`
  }
  routes.push(rootRoute)
  systemMenu.forEach((pNav)=>{
    const parentNav = pNav.alias;
    let moduleName= '';
    // 一级路由
    const parentsRout = {
      path: `/${parentNav}`,
      component: Layout,
      meta: {
        parent: parentNav
      },
      children: [],
    }

    // 二级路由
    const subNav = pNav.childPermissions
    subNav.forEach((sNav)=>{
      console.log(sNav)
      const defaultNavName = subNav[0].alias;
      const subName = sNav.alias;
      const secondRoute = {
        path: subName,
        name: `${subName}`,
        component: resolve => asyncModuleFactory(parentNav, subName, resolve),
        meta: {
          parent: parentNav
        },
      }
      parentsRout.children.push(secondRoute)
      parentsRout.redirect = `/${parentNav}/${defaultNavName}`;
    })
    routes.push(parentsRout);
  })
  router.addRoutes(routes)
}
buildRoutesByMenus(systemMenu)
router.beforeEach(async(to, from ,next)=>{
  console.log(to)
  console.log(from)
  console.log(store.getters.getMenu);
  console.log(store.getters.getNavsByParent)
  await store.dispatch('setMenuAsync', systemMenu)
  next()
})
router.onReady((to) => {
  router.push({ ...to, replace: true });
});