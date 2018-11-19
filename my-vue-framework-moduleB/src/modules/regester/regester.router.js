export default [{
  path: '/regester',
  name: 'regester',
  // component: () => import('./regester')
  component: () => import(/* webpackChunkName: "alarmRealtime" */ './regester')
}]
