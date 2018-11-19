import layout from '@/modules/layout/layout'
export default [
  {
    // 这种写法其实就是把alarmRealtime定向到layout，然后alarmRealtime组件是layout
    path: '/faceSearch',
    component: layout,
    children:[{
      path: '',// 这里边也可以添加一个路径，添加之后在/alarmRealtime/...依然可以访问，但是这样就不能
      name: 'faceSearch',
      component: ()=> import('./faceSearch.vue')
    }]
  }
]