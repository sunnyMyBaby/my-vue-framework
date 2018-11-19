import module from '@/modules/alarmRealtime/alarmRealtime'
import routes from '@/modules/alarmRealtime/alarmRealtime.router.js'
import store from '@/store/modules/alarmRealtime.js'
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