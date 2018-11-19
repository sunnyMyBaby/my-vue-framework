import layout from '@/modules/layout/layout'
export default [{
  path: '/surveillanceTask',
  component: layout,
  children:[{
    path: '',
    name: 'surveillanceTask',
    // 要有webpackChunkName: "surveillanceTask"否则会集成访问会出问题
    component: ()=> import(/* webpackChunkName: "surveillanceTask" */ './surveillanceTask.vue'),
  }]
}]
