export default[{
  path: '/search',
  name: 'search',
  component: () => import(/* webpackChunkName: "search" */ './search'),
  children: [
    {
      path: 'searchItem',
      name: 'searchItem',
      component: () => import(/* webpackChunkName: "searchItem" */ '@/components/searchItem')
    }
  ]
}]
