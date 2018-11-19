// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/utils/utils.router.js'
import store from '@/store/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from '@/utils/utils.i18n'
Vue.config.productionTip = false

/* eslint-disable no-new */
// 注册elementui
Vue.use(ElementUI, {
  i18n: (key, value)=> i18n.t(key, value)
});

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
