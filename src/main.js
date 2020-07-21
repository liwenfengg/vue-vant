import Vue from 'vue'

// 用于控制浏览器前进后退 使用keep-alive
import Navigation from 'vue-navigation'

// 300ms
import FastClick from 'fastclick'

// a modern alternative to CSS resets
import 'normalize.css/normalize.css'

// global css
import '@/style/index.less'

// rem h5 适配
import 'amfe-flexible/index.js'

import App from './App.vue'
import store from './store'
import router from './router'

// 自动化svg
import './icons'

// 安装基础组件 与自定义组件
import BaseComponent from './base'
import CustomComponent from './components'

// global filters
import * as filters from './filter'

Vue.use(BaseComponent, {})
Vue.use(CustomComponent, {})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

// 处理点击事件延迟300ms问题
FastClick.attach(document.body)

// 用于控制浏览器前进后退缓存
Vue.use(Navigation, {
  router,
  store
})

// 开发环境下面使用vConsole进行调试
if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole')
  new VConsole()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
