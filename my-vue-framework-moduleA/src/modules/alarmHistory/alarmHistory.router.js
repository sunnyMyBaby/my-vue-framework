import layout from '@/modules/layout/layout'
import alarmHistoryChiern from './aaa/alarmHistoryChiern'
export default [{
  path: '/alarmHistory',
  component: layout,
  children:[
    {
      path: '',
      name: 'alarmHistory',
      component: ()=> import(/* webpackChunkName: "alarmHistory" */ './alarmHistory.vue')
    },
    {
      path: 'alarmHistoryChiern',
      name: 'alarmHistoryChiern',
      component: alarmHistoryChiern
    },
    {
      path: 'alarmHistoryChiernTwo',
      name: 'alarmHistoryChiernTwo',
      component: ()=> import(/* webpackChunkName: "alarmHistoryChiernTwo" */ './aaa/alarmHistoryChiernTwo.vue')
    }
  ]
}]