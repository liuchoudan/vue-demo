// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './config/router'
import i18n from './config/i18n'
import store from './config/vuex'

import ElementUI from 'element-ui'
import '../theme/index.css'
import './assets/font/font.less'  //引入第三方字体库
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  template: '<App/>',
  components: { App }
})


