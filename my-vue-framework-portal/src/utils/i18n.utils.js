import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementZH from 'element-ui/lib/locale/lang/zh-CN';
import ElementEN from 'element-ui/lib/locale/lang/en';
import EN_US from '../i18n/en-US.js';
import ZH_CN from '../i18n/zh-CN.js';
Vue.use(VueI18n)
const messages = {
  us:{
    ...EN_US,
    ...ElementEN
  },
  cn:{
    ...ZH_CN,
    ...ElementZH
  }
}
// 动态切换语言
const i18n = new VueI18n({
  locale: 'cn',
  messages
})
export {
  i18n
}