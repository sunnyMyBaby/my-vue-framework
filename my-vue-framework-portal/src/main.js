// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import router from '@/utils/router.utils.js'
import './assets/css/reset.css';
import store from '@/store/index'
import '@/utils/startUp.utils.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {i18n} from '@/utils/i18n.utils'
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
