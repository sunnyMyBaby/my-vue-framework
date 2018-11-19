import module from '@/modules/surveillanceTask/surveillanceTask'
import routes from '@/modules/surveillanceTask/surveillanceTask.router.js'
import store from '@/store/modules/surveillanceTask.js'
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