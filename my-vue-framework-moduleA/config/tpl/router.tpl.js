const routerTpl = 
`import layout from '@/modules/layout/layout'
  export default [
    {
      path: '/{{moduleName}}',
      component: layout,
      children:[{
        path: '',
        name: '{{moduleName}}',
        component: ()=> import(/* webpackChunkName: "{{moduleName}}" */ './{{moduleName}}')
      }]
    }
  ]
`
// 因为这里这个模版是需要在node环境使用的，所以需要module.exports
module.exports = routerTpl;