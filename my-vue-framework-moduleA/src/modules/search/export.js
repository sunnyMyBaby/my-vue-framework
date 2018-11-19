import module from '@/modules/search/search'
import routes from '@/modules/search/search.router.js'
import store from '@/store/modules/search'
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
