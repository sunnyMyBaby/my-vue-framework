export default[{
  path: '/search',
  name: 'search',
  component: () => import(/* webpackChunkName: "alarmRealtime" */ './search'),
  children: [
    {
      path: 'searchItem',
      name: 'searchItem',
      component: () => import(/* webpackChunkName: "alarmRealtime" */ '@/components/searchItem')
    }
  ]
}]
