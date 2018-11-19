export default [{
  path: '/',
  name: 'layout',
  redirect:'/faceSearch',
  component: ()=> import(/* webpackChunkName: "appview" */'@/modules/layout/layout')
}]