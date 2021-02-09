import Vue from 'vue'
// element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import Elsa from 'main'
import DemoTemplate from './components/DemoTemplate'
import './style/index.css'
import './style/hightlight.css'
import moment from 'moment'
import request from './utils/request'
import { Message } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(Elsa)
Vue.use({
  install(Vue) {
    Vue.prototype.$moment = moment
  }
})
Vue.use({
  install(Vue) {
    Vue.prototype.$http = request
  }
})
Vue.component(DemoTemplate.name, DemoTemplate)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
