import layout from '@/modules/layout/layout'
export default [{
  path: '/captureSearch',
  component: layout,
  children:[
    {
      path: '',
      name: 'captureSearch',
      component: ()=> import('./captureSearch.vue')
    }
  ]
}]