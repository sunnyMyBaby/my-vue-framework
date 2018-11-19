export default [{
  path: '/',
  name: 'layout',
  redirect:'/alarmRealtime',
  component: ()=> import(/* webpackChunkName: "layout" */'@/modules/layout/layout')
}]