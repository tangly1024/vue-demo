// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

// css文件需手动引入
import 'element-ui/lib/theme-chalk/index.css'
// 引入vuex配置文件
import store from './store'
// 引入ajax框架axios配置
import axios from './axios'
Vue.config.productionTip = false

// 代表使用ElementUI组件
Vue.use(ElementUI)
// 将axios挂载到Vue原型上方便调用
Vue.prototype.$ajxj = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
