import layout from '@/modules/layout/layout'
export default [{
  path: '/searchLog',
  component: layout,
  children:[{
    path: '',
    name: 'searchLog',
    component: ()=> import('./searchLog.vue'),
  }]
}]
