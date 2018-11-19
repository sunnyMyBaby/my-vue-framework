// 集成资源
import Vue from 'vue'
import router from '@/utils/router.utils'
import store from '@/store'
import './integrate'
import layout from '../layout/layout'
import * as localI18n from '@/utils/i18n.utils'
const setRouteParent = (route, metas) => {
  route.forEach((routes)=>{
    routes.meta = {
      parent: metas.parent,
      moduleName: metas.moduleName
    }
  })
}
// 注册异步路由方法
// asyncRoutes [{component:...,meta: {...},path:...,children:{...}}]
// parentNav 父级导航比如说倒出来的moduleA了里边包含了search，regester...等模块那么这写子模块都是moduleA的子模块
// moduleName
const registerAsyncRouter = (asyncRoutes, parentNav, moduleName)=>{
  let parentName = parentNav;
  asyncRoutes.forEach((route) => {
    // 给每个组件添加meta便于SEO？
    route.component = layout
    route.meta = {
      parent: parentName,
      moduleName
    }
    route.path = `/${parentName}${route.path}`
    if (route.children && route.children.length>0) {
      setRouteParent(route.children, route.meta)
    }
  });
  console.log(asyncRoutes);
  router.addRoutes(asyncRoutes)
}
// 注册异步storeModule
const registerStore = (storeModule, navName)=>{
  store.registerModule(navName, storeModule)
}
// 注册异步语言包
const registerLocale = (lang)=>{
  if(lang){
    localI18n.i18n.mergeLocaleMessage('cn', lang.zhCN)
    localI18n.i18n.mergeLocaleMessage('us', lang.enUS)
  }
}
window.insightApp = {
  Vue,
  methods: {
    registerAsyncRouter,
    registerStore,
    registerLocale
  },
  locale: {
    elementUI: {},
    megviiUI: {}
  }
}