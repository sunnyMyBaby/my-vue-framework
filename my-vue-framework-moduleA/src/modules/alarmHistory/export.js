import module from '@/modules/alarmHistory/alarmHistory'
import routes from '@/modules/alarmHistory/alarmHistory.router.js'
import store from '@/store/modules/alarmHistory.js'
import enUS from '@/i18n/en-US'
import zhCN from '@/i18n/zh-CN'
export default {
  module,
  routes,
  store,
  i18n:{
    enUS,
    zhCN
  }
}